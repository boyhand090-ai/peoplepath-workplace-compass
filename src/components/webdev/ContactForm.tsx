import React, { useState, useEffect, useRef, useMemo } from "react";
import { siteData } from "@/data/webdev/siteData";
import {
  Star,
  CheckCircle,
  ChevronDown,
  Check,
  X,
  Search,
  Sparkles,
  Plus,
  Phone,
} from "lucide-react";
import { toast } from "sonner";
import { saveInquiry } from "@/lib/inbox";
import { cn } from "@/lib/utils";
import { SERVICE_CATEGORIES, ALL_MENU_SERVICES, normalizeServiceName } from "@/data/servicesList";
import { allCountries, type CountryCode } from "@/data/countries";

interface ContactFormProps {
  defaultService?: string;
}

export const ContactForm: React.FC<ContactFormProps> = ({ defaultService }) => {
  const { contact } = siteData;
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  // Form states matching user's design
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [selectedServices, setSelectedServices] = useState<string[]>(() => [
    normalizeServiceName(defaultService),
  ]);
  const [budget, setBudget] = useState("$1k to 10k");
  const [message, setMessage] = useState("");
  const [helpDropdownOpen, setHelpDropdownOpen] = useState(false);
  const [serviceSearch, setServiceSearch] = useState("");
  const [customServiceInput, setCustomServiceInput] = useState("");
  const [showCustomInput, setShowCustomInput] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Phone number state with all 197 country codes
  const [selectedCountry, setSelectedCountry] = useState<CountryCode>(() => {
    return allCountries.find((c) => c.code === "US") || allCountries[0]!;
  });
  const [phoneNumber, setPhoneNumber] = useState("");
  const [countryDropdownOpen, setCountryDropdownOpen] = useState(false);
  const [countrySearch, setCountrySearch] = useState("");

  const dropdownRef = useRef<HTMLDivElement>(null);
  const countryDropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setHelpDropdownOpen(false);
      }
      if (countryDropdownRef.current && !countryDropdownRef.current.contains(e.target as Node)) {
        setCountryDropdownOpen(false);
      }
    };
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setHelpDropdownOpen(false);
        setCountryDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useEffect(() => {
    if (defaultService) {
      const normalized = normalizeServiceName(defaultService);
      setSelectedServices((prev) => (prev.includes(normalized) ? prev : [normalized, ...prev]));
    }
  }, [defaultService]);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % contact.testimonials.length);
    }, 5500);
    return () => clearInterval(timer);
  }, [contact.testimonials.length]);

  const currentT = contact.testimonials[activeTestimonial]!;
  const budgetOptions = ["$1k to 10k", "$10k to 20k", "$20k to 50k", "$50k+"];

  const toggleService = (srv: string) => {
    if (selectedServices.includes(srv)) {
      setSelectedServices(selectedServices.filter((s) => s !== srv));
    } else {
      setSelectedServices([...selectedServices, srv]);
    }
  };

  const handleAddCustomService = () => {
    const trimmed = customServiceInput.trim();
    if (!trimmed) return;
    if (!selectedServices.includes(trimmed)) {
      setSelectedServices([...selectedServices, trimmed]);
    }
    setCustomServiceInput("");
    setShowCustomInput(false);
    toast.success(`Added "${trimmed}" to selected services`);
  };

  const filteredCountries = useMemo(() => {
    if (!countrySearch.trim()) return allCountries;
    const q = countrySearch.toLowerCase().trim();
    return allCountries.filter(
      (c) =>
        c.name.toLowerCase().includes(q) ||
        c.dialCode.includes(q) ||
        c.code.toLowerCase().includes(q),
    );
  }, [countrySearch]);

  const filteredCategories = useMemo(() => {
    if (!serviceSearch.trim()) return SERVICE_CATEGORIES;
    const q = serviceSearch.toLowerCase().trim();
    return SERVICE_CATEGORIES.map((cat) => ({
      ...cat,
      items: cat.items.filter(
        (item) =>
          item.title.toLowerCase().includes(q) ||
          item.shortTitle.toLowerCase().includes(q) ||
          item.subtitle.toLowerCase().includes(q),
      ),
    })).filter((cat) => cat.items.length > 0);
  }, [serviceSearch]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !email) return;

    const currentPath = typeof window !== "undefined" ? window.location.pathname : "";
    const resolvedSource =
      currentPath || (defaultService ? `/services/${defaultService}` : "/services/web-development");

    const fullPhone = phoneNumber.trim()
      ? `${selectedCountry.dialCode} ${phoneNumber.trim()}`
      : undefined;

    try {
      saveInquiry({
        fullName: fullName.trim(),
        email: email.trim(),
        phone: fullPhone,
        services:
          selectedServices.length > 0 ? selectedServices : [normalizeServiceName(defaultService)],
        budget,
        message: message.trim() || undefined,
        source: resolvedSource,
      });
      toast.success("Inquiry received! Connected directly to our admin team.");
    } catch (err) {
      console.error(err);
      toast.error("Failed to submit inquiry. Please try again.");
    }

    setIsSubmitted(true);
  };

  return (
    <section
      id="contact-us-form"
      className="contact-forms relative z-10 px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 bg-[#111113] overflow-visible"
    >
      <div className="container relative z-10 mx-auto max-w-6xl">
        <div className="bg-white rounded-[28px] sm:rounded-[36px] shadow-[0_24px_70px_rgba(0,0,0,0.45)] border border-neutral-200/90 overflow-visible grid grid-cols-1 lg:grid-cols-2">
          {/* Left Column: Testimonial Showcase */}
          <div className="p-8 sm:p-10 xl:p-12 flex flex-col justify-between min-h-[560px] lg:min-h-[640px] text-neutral-900 border-b lg:border-b-0 lg:border-r border-neutral-200/80">
            {/* Top Company Badge */}
            <div className="flex items-center gap-2.5">
              <div
                className="size-7 rounded-full bg-neutral-100 border border-neutral-200/80 flex items-center justify-center text-xs font-semibold"
                style={{ color: currentT.color }}
              >
                {currentT.letter.toLowerCase()}
              </div>
              <span className="text-xs sm:text-sm font-semibold text-neutral-800">
                {currentT.company}
              </span>
            </div>

            {/* Testimonial Quote */}
            <div className="my-auto py-8">
              <h3 className="text-2xl sm:text-3xl lg:text-[32px] leading-[1.25] font-bold text-neutral-950 tracking-tight">
                {currentT.quote}
              </h3>
              <p className="text-sm text-neutral-500 leading-relaxed mt-4 max-w-md">
                {currentT.subquote}
              </p>

              {/* Author & Avatar */}
              <div className="flex items-center gap-3.5 mt-8">
                <div className="w-12 h-12 rounded-full overflow-hidden border border-neutral-200/80 p-1 shrink-0 bg-white shadow-sm flex items-center justify-center">
                  <img
                    src={currentT.avatar}
                    alt={currentT.company}
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="text-base sm:text-lg font-bold text-neutral-900">
                  {currentT.company}
                </span>
              </div>
            </div>

            {/* Bottom Rating & Progress Indicator */}
            <div className="pt-6">
              <div className="flex items-center gap-1 mb-2">
                {[...Array(5)].map((_, idx) => (
                  <Star key={idx} className="size-3.5 fill-black text-black" />
                ))}
              </div>
              <p className="text-xs text-neutral-600 font-medium">
                200+ happy Customers based on complement and customer reviews
              </p>

              {/* Progress bars */}
              <div className="flex items-center gap-1.5 mt-4">
                {contact.testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActiveTestimonial(idx)}
                    className="h-1 flex-1 rounded-full bg-neutral-200 overflow-hidden cursor-pointer"
                    aria-label={`Go to slide ${idx + 1}`}
                  >
                    {activeTestimonial === idx ? (
                      <div
                        className="h-full bg-[#87E00C] animate-[contactProgressGrow_linear_forwards]"
                        style={{ animationDuration: "5.5s" }}
                      />
                    ) : (
                      <div className="h-full bg-transparent" />
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="p-8 sm:p-10 xl:p-12 flex flex-col justify-between min-h-[560px] lg:min-h-[640px] text-neutral-900 relative">
            {isSubmitted ? (
              <div className="my-auto text-center py-12 px-4 animate-fadeIn">
                <div className="w-16 h-16 bg-[#9AFD0D]/30 text-black rounded-full flex items-center justify-center mx-auto mb-5 border border-[#9AFD0D]">
                  <CheckCircle className="w-9 h-9 text-neutral-900" />
                </div>
                <h3 className="text-2xl font-bold text-neutral-950 mb-2">Thank You, {fullName}!</h3>
                <p className="text-neutral-500 text-sm max-w-sm mx-auto mb-6">
                  Your project details have been received. We'll be in touch within 24 hours.
                </p>
                <button
                  type="button"
                  onClick={() => setIsSubmitted(false)}
                  className="px-6 py-2.5 rounded-full bg-black text-white text-xs font-semibold hover:bg-neutral-800 transition-colors cursor-pointer"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-4.5 h-full justify-between"
              >
                <div>
                  {/* Top Badge */}
                  <div className="inline-flex items-center gap-2 rounded-full bg-[#111111] text-white px-3.5 py-1.5 text-xs font-semibold w-fit mb-2.5">
                    <span className="size-2 rounded-full bg-[#9AFD0D]" />
                    <span>Get in Touch</span>
                  </div>

                  {/* Title & Subtitle */}
                  <h2 className="text-2xl sm:text-3xl lg:text-[30px] font-bold text-neutral-950 tracking-tight leading-tight">
                    Let's Talk About Your Project
                  </h2>
                  <p className="text-xs sm:text-sm text-neutral-500 mt-1.5 mb-5 leading-relaxed">
                    Tell us what you're building. We design and build high-converting digital
                    platforms globally.
                  </p>

                  <div className="space-y-3.5">
                    {/* Row 1: Name and Services Multi-select Dropdown */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      <div>
                        <label className="block text-xs font-medium text-neutral-700 mb-1">
                          Hi, I'm
                        </label>
                        <input
                          type="text"
                          required
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          placeholder="Your full name"
                          className="w-full h-10 px-3.5 rounded-xl bg-[#F4F4F5] border border-neutral-200/60 text-neutral-900 placeholder:text-neutral-400 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900 transition-all"
                        />
                      </div>

                      {/* Services Dropdown (All 12 from menubar + Custom) */}
                      <div className="relative" ref={dropdownRef}>
                        <div className="flex items-center justify-between mb-1">
                          <label className="block text-xs font-medium text-neutral-700">
                            I need help with
                          </label>
                          <span className="text-[10px] text-neutral-400 font-mono">
                            {ALL_MENU_SERVICES.length} Services
                          </span>
                        </div>
                        <div
                          tabIndex={0}
                          role="button"
                          aria-expanded={helpDropdownOpen}
                          aria-haspopup="listbox"
                          onClick={() => setHelpDropdownOpen(!helpDropdownOpen)}
                          onKeyDown={(e) => {
                            if (e.key === "Enter" || e.key === " ") {
                              e.preventDefault();
                              setHelpDropdownOpen(!helpDropdownOpen);
                            }
                          }}
                          className={cn(
                            "w-full min-h-[40px] px-2.5 py-1 rounded-xl border text-neutral-900 text-xs flex items-center justify-between cursor-pointer transition-all select-none",
                            helpDropdownOpen
                              ? "bg-white border-neutral-900 ring-2 ring-neutral-900/10 shadow-xs"
                              : "bg-[#F4F4F5] border-neutral-200 hover:border-neutral-300 hover:bg-[#eceef0]",
                          )}
                        >
                          <div className="flex items-center gap-1.5 overflow-hidden max-w-[calc(100%-22px)] flex-wrap py-0.5">
                            {selectedServices.slice(0, 2).map((srv) => (
                              <span
                                key={srv}
                                className="inline-flex items-center gap-1 bg-white border border-neutral-200/90 rounded-lg px-2 py-0.5 text-[11px] font-semibold text-neutral-800 shadow-2xs shrink-0"
                              >
                                <span className="truncate max-w-[90px]">{srv}</span>
                                <button
                                  type="button"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    toggleService(srv);
                                  }}
                                  className="size-3 rounded-full hover:bg-neutral-100 flex items-center justify-center text-neutral-400 hover:text-black cursor-pointer transition-colors"
                                  title={`Remove ${srv}`}
                                >
                                  ×
                                </button>
                              </span>
                            ))}
                            {selectedServices.length > 2 && (
                              <span className="text-[10px] font-bold text-neutral-700 bg-neutral-200/80 px-2 py-0.5 rounded-full shrink-0">
                                +{selectedServices.length - 2} more
                              </span>
                            )}
                            {selectedServices.length === 0 && (
                              <span className="text-neutral-400 text-xs px-1">
                                Select services needed...
                              </span>
                            )}
                          </div>
                          <ChevronDown
                            className={cn(
                              "size-4 text-neutral-500 shrink-0 transition-transform duration-200",
                              helpDropdownOpen && "rotate-180 text-neutral-950",
                            )}
                          />
                        </div>

                        {/* All 12 Services Dropdown Menu Modal */}
                        {helpDropdownOpen && (
                          <div className="absolute left-0 right-0 top-full mt-2 bg-white/98 backdrop-blur-xl border border-neutral-200/90 rounded-2xl shadow-[0_24px_50px_rgba(0,0,0,0.18),0_0_0_1px_rgba(0,0,0,0.06)] p-2.5 z-50 max-h-[340px] overflow-hidden flex flex-col animate-in fade-in-0 zoom-in-95 duration-150">
                            {/* Search and Quick Actions */}
                            <div className="pb-2 border-b border-neutral-100 flex flex-col gap-2">
                              <div className="relative">
                                <Search className="size-3 text-neutral-400 absolute left-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                                <input
                                  type="text"
                                  value={serviceSearch}
                                  onChange={(e) => setServiceSearch(e.target.value)}
                                  placeholder="Search all 12 services..."
                                  className="w-full rounded-lg bg-neutral-100/80 pl-8 pr-7 py-1.5 text-xs text-neutral-900 placeholder:text-neutral-400 outline-none border border-neutral-200/60 focus:border-neutral-900 focus:bg-white transition-all"
                                  autoFocus
                                />
                                {serviceSearch && (
                                  <button
                                    type="button"
                                    onClick={() => setServiceSearch("")}
                                    className="absolute right-2 top-1/2 -translate-y-1/2 size-3.5 text-neutral-400 hover:text-neutral-700"
                                  >
                                    <X className="size-3" />
                                  </button>
                                )}
                              </div>
                              <div className="flex items-center justify-between text-[11px] font-medium text-neutral-500 px-0.5">
                                <span>{selectedServices.length} selected</span>
                                {selectedServices.length > 0 && (
                                  <button
                                    type="button"
                                    onClick={() => setSelectedServices([])}
                                    className="text-neutral-700 hover:text-black font-semibold cursor-pointer transition-colors"
                                  >
                                    Clear all
                                  </button>
                                )}
                              </div>
                            </div>

                            {/* Categorized Services List */}
                            <div className="overflow-y-auto p-1 space-y-3 custom-scrollbar max-h-[220px]">
                              {filteredCategories.map((group) => (
                                <div key={group.category} className="space-y-1">
                                  <div className="px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-neutral-400">
                                    {group.category}
                                  </div>
                                  {group.items.map((item) => {
                                    const isChecked = selectedServices.includes(item.title);
                                    return (
                                      <div
                                        key={item.id}
                                        onClick={() => toggleService(item.title)}
                                        className={cn(
                                          "flex items-center justify-between px-2.5 py-2 rounded-xl cursor-pointer text-xs transition-all select-none group",
                                          isChecked
                                            ? "bg-[#9AFD0D]/20 text-neutral-950 font-semibold shadow-2xs"
                                            : "bg-white text-neutral-700 hover:bg-neutral-100/80 font-medium",
                                        )}
                                      >
                                        <div className="flex items-center gap-2.5 min-w-0">
                                          <div
                                            className={cn(
                                              "size-4 rounded-md flex items-center justify-center shrink-0 border transition-all",
                                              isChecked
                                                ? "bg-neutral-950 border-neutral-950 text-white"
                                                : "border-neutral-300 bg-white group-hover:border-neutral-400",
                                            )}
                                          >
                                            {isChecked && <Check className="size-2.5 stroke-[3]" />}
                                          </div>
                                          <div className="w-5 h-5 rounded-md bg-neutral-100/90 border border-neutral-200/60 p-0.5 shrink-0 flex items-center justify-center">
                                            <img
                                              src={item.icon}
                                              alt=""
                                              className="w-full h-full object-contain"
                                            />
                                          </div>
                                          <div className="truncate">
                                            <div className="truncate text-xs font-semibold text-neutral-900">
                                              {item.title}
                                            </div>
                                            <div className="truncate text-[10px] text-neutral-400">
                                              {item.subtitle}
                                            </div>
                                          </div>
                                        </div>
                                        {isChecked && (
                                          <span className="text-[10px] font-mono font-bold text-neutral-600 shrink-0 ml-1">
                                            ✓
                                          </span>
                                        )}
                                      </div>
                                    );
                                  })}
                                </div>
                              ))}

                              {/* Custom Services Section */}
                              <div className="pt-2 border-t border-neutral-100">
                                {showCustomInput ? (
                                  <div className="p-2 bg-neutral-50 rounded-xl border border-neutral-200/80 space-y-2">
                                    <div className="flex items-center justify-between">
                                      <span className="text-[11px] font-semibold text-neutral-800 flex items-center gap-1">
                                        <Sparkles className="size-3 text-[#79c704]" />
                                        Custom Service
                                      </span>
                                      <button
                                        type="button"
                                        onClick={() => setShowCustomInput(false)}
                                        className="text-neutral-400 hover:text-neutral-700"
                                      >
                                        <X className="size-3" />
                                      </button>
                                    </div>
                                    <div className="flex gap-1.5">
                                      <input
                                        type="text"
                                        value={customServiceInput}
                                        onChange={(e) => setCustomServiceInput(e.target.value)}
                                        onKeyDown={(e) => {
                                          if (e.key === "Enter") {
                                            e.preventDefault();
                                            handleAddCustomService();
                                          }
                                        }}
                                        placeholder="e.g. AI Automation, Web3..."
                                        className="flex-1 px-2.5 py-1 text-xs bg-white rounded-lg border border-neutral-200 text-neutral-900 outline-none focus:border-neutral-900"
                                      />
                                      <button
                                        type="button"
                                        onClick={handleAddCustomService}
                                        className="px-2.5 py-1 rounded-lg bg-neutral-950 text-white text-xs font-semibold hover:bg-neutral-800 shrink-0 cursor-pointer"
                                      >
                                        Add
                                      </button>
                                    </div>
                                  </div>
                                ) : (
                                  <button
                                    type="button"
                                    onClick={() => setShowCustomInput(true)}
                                    className="w-full flex items-center justify-center gap-1.5 py-1.5 px-2 rounded-xl border border-dashed border-neutral-300 hover:border-neutral-950 text-neutral-600 hover:text-neutral-950 text-xs font-medium cursor-pointer transition-colors"
                                  >
                                    <Plus className="size-3" />
                                    <span>+ Add Custom Service</span>
                                  </button>
                                )}
                              </div>
                            </div>

                            {/* Done Button */}
                            <div className="pt-2 px-1 border-t border-neutral-100 mt-1 flex justify-end">
                              <button
                                type="button"
                                onClick={() => setHelpDropdownOpen(false)}
                                className="px-3.5 py-1 rounded-lg bg-neutral-950 text-white text-xs font-semibold hover:bg-neutral-800 transition-colors cursor-pointer"
                              >
                                Done
                              </button>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Row 2: Email & Phone with 197 Country Codes & Flags */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      <div>
                        <label className="block text-xs font-medium text-neutral-700 mb-1">
                          Email
                        </label>
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="you@company.com"
                          className="w-full h-10 px-3.5 rounded-xl bg-[#F4F4F5] border border-neutral-200/60 text-neutral-900 placeholder:text-neutral-400 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900 transition-all"
                        />
                      </div>

                      {/* Contact Number with Country Flag Dropdown */}
                      <div className="relative">
                        <label className="block text-xs font-medium text-neutral-700 mb-1">
                          Contact Number
                        </label>
                        <div className="flex rounded-xl bg-[#F4F4F5] border border-neutral-200/60 focus-within:ring-2 focus-within:ring-neutral-900 transition-all h-10 overflow-visible">
                          {/* Flag & Dial Code Trigger */}
                          <button
                            type="button"
                            onClick={() => setCountryDropdownOpen(!countryDropdownOpen)}
                            className="flex items-center gap-1.5 px-2.5 bg-neutral-200/50 hover:bg-neutral-200/80 rounded-l-xl border-r border-neutral-200/80 text-neutral-900 text-xs font-semibold cursor-pointer transition-colors shrink-0"
                          >
                            <img
                              src={`https://flagcdn.com/w40/${selectedCountry.code.toLowerCase()}.png`}
                              srcSet={`https://flagcdn.com/w80/${selectedCountry.code.toLowerCase()}.png 2x`}
                              width="18"
                              height="12"
                              alt=""
                              className="w-4.5 h-3 object-cover rounded-[2px] border border-neutral-300 shadow-2xs shrink-0"
                              onError={(e) => {
                                // Fallback to emoji flag
                                (e.currentTarget as HTMLElement).style.display = "none";
                              }}
                            />
                            <span className="font-mono text-xs">{selectedCountry.dialCode}</span>
                            <ChevronDown
                              className={cn(
                                "size-3 text-neutral-500 transition-transform duration-200",
                                countryDropdownOpen && "rotate-180",
                              )}
                            />
                          </button>

                          {/* Phone input */}
                          <div className="relative flex-1 flex items-center">
                            <input
                              type="tel"
                              value={phoneNumber}
                              onChange={(e) => setPhoneNumber(e.target.value)}
                              placeholder="555 123 4567"
                              className="w-full bg-transparent px-3 text-xs sm:text-sm text-neutral-900 placeholder:text-neutral-400 outline-none rounded-r-xl"
                            />
                          </div>
                        </div>

                        {/* Country Code Dropdown with All 197 Countries & Flags */}
                        {countryDropdownOpen && (
                          <div
                            ref={countryDropdownRef}
                            className="absolute right-0 top-full mt-2 w-72 sm:w-80 max-h-72 overflow-hidden flex flex-col rounded-2xl border border-neutral-200/90 bg-white/98 shadow-[0_24px_50px_rgba(0,0,0,0.18),0_0_0_1px_rgba(0,0,0,0.06)] z-50 backdrop-blur-xl animate-in fade-in-0 zoom-in-95 duration-150"
                          >
                            <div className="p-2 border-b border-neutral-100 bg-neutral-50/80">
                              <div className="flex items-center justify-between mb-1.5 px-0.5">
                                <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-500">
                                  Dial Code ({allCountries.length} Countries)
                                </span>
                              </div>
                              <div className="relative">
                                <Search className="size-3 text-neutral-400 absolute left-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                                <input
                                  type="text"
                                  value={countrySearch}
                                  onChange={(e) => setCountrySearch(e.target.value)}
                                  placeholder="Search country or dial code..."
                                  className="w-full rounded-lg bg-white pl-8 pr-7 py-1 text-xs text-neutral-900 placeholder:text-neutral-400 outline-none border border-neutral-200 focus:border-neutral-900 transition-all"
                                  autoFocus
                                />
                                {countrySearch && (
                                  <button
                                    type="button"
                                    onClick={() => setCountrySearch("")}
                                    className="absolute right-2 top-1/2 -translate-y-1/2 size-3 text-neutral-400 hover:text-neutral-700"
                                  >
                                    <X className="size-2.5" />
                                  </button>
                                )}
                              </div>
                            </div>
                            <div className="overflow-y-auto p-1 max-h-52 custom-scrollbar">
                              {filteredCountries.map((c) => {
                                const isCurrent = selectedCountry.code === c.code;
                                return (
                                  <button
                                    key={c.code}
                                    type="button"
                                    onClick={() => {
                                      setSelectedCountry(c);
                                      setCountryDropdownOpen(false);
                                      setCountrySearch("");
                                    }}
                                    className={cn(
                                      "w-full flex items-center justify-between px-2.5 py-1.5 rounded-lg text-xs transition-colors text-left cursor-pointer",
                                      isCurrent
                                        ? "bg-neutral-900 text-white font-medium"
                                        : "hover:bg-neutral-100 text-neutral-700",
                                    )}
                                  >
                                    <div className="flex items-center gap-2 truncate">
                                      <img
                                        src={`https://flagcdn.com/w40/${c.code.toLowerCase()}.png`}
                                        srcSet={`https://flagcdn.com/w80/${c.code.toLowerCase()}.png 2x`}
                                        width="18"
                                        height="12"
                                        alt=""
                                        className="w-4.5 h-3 object-cover rounded-[2px] border border-neutral-300 shadow-2xs shrink-0"
                                      />
                                      <span className="truncate">{c.name}</span>
                                    </div>
                                    <span
                                      className={cn(
                                        "font-mono text-[11px] shrink-0 ml-2",
                                        isCurrent ? "text-neutral-300" : "text-neutral-400",
                                      )}
                                    >
                                      {c.dialCode}
                                    </span>
                                  </button>
                                );
                              })}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Row 3: Budget range */}
                    <div>
                      <label className="block text-xs font-medium text-neutral-700 mb-1.5">
                        Budget range
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {budgetOptions.map((b) => {
                          const isSelected = budget === b;
                          return (
                            <button
                              key={b}
                              type="button"
                              onClick={() => setBudget(b)}
                              className={`px-3 py-1 rounded-full text-xs font-medium transition-all cursor-pointer border ${
                                isSelected
                                  ? "bg-black text-white border-black font-semibold shadow-xs"
                                  : "bg-white text-neutral-800 border-neutral-300 hover:border-neutral-500"
                              }`}
                            >
                              {b}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Row 4: Additional info? */}
                    <div>
                      <label className="block text-xs font-medium text-neutral-700 mb-1">
                        Additional info?
                      </label>
                      <textarea
                        rows={3}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Goals, scope, timeline, or helpful links"
                        className="w-full px-3.5 py-2 rounded-xl bg-[#F4F4F5] border border-neutral-200/60 text-neutral-900 placeholder:text-neutral-400 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900 transition-all resize-none min-h-[75px]"
                      />
                    </div>
                  </div>
                </div>

                {/* Submit button */}
                <div className="pt-1">
                  <button
                    type="submit"
                    className="w-full bg-[#9AFD0D] hover:bg-[#8ee80c] active:scale-[0.99] text-black font-bold text-sm sm:text-base py-3 rounded-full transition-all cursor-pointer shadow-[0_6px_20px_rgba(154,253,13,0.35)]"
                  >
                    Get in Touch
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
