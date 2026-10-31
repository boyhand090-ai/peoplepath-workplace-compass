import { useState, useEffect, useRef, useMemo, type FormEvent } from "react";
import { Star, ChevronDown, X, Check, Search, Sparkles, Plus } from "lucide-react";
import { toast } from "sonner";
import { siteData } from "@/data/webdev/siteData";
import { saveInquiry } from "@/lib/inbox";
import { cn } from "@/lib/utils";
import { SERVICE_CATEGORIES, ALL_MENU_SERVICES } from "@/data/servicesList";

const budgetOptions = ["$1k to 10k", "$10k to 20k", "$20k to $50k", "$100k+"];

export function Contact() {
  const testimonials = siteData.contact.testimonials;
  // Start with index 1 (DailyTime) to match the user's design reference exactly
  const [activeTestimonial, setActiveTestimonial] = useState(1);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [serviceDropdownOpen, setServiceDropdownOpen] = useState(false);
  const [budget, setBudget] = useState("$1k to 10k");
  const [message, setMessage] = useState("");
  const [serviceSearch, setServiceSearch] = useState("");
  const [customServiceInput, setCustomServiceInput] = useState("");
  const [showCustomInput, setShowCustomInput] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleAddCustomService = () => {
    const trimmed = customServiceInput.trim();
    if (!trimmed) return;
    if (!selectedServices.includes(trimmed)) {
      setSelectedServices([...selectedServices, trimmed]);
    }
    setCustomServiceInput("");
    setShowCustomInput(false);
    toast.success(`Added "${trimmed}" to disciplines`);
  };

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

  // Auto-advance testimonial carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServiceDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleService = (srv: string) => {
    if (selectedServices.includes(srv)) {
      setSelectedServices(selectedServices.filter((s) => s !== srv));
    } else {
      setSelectedServices([...selectedServices, srv]);
    }
  };

  const removeService = (e: React.MouseEvent, srv: string) => {
    e.stopPropagation();
    setSelectedServices(selectedServices.filter((s) => s !== srv));
  };

  const currentT = testimonials[activeTestimonial]!;

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!fullName.trim() || !email.trim()) return;

    try {
      saveInquiry({
        fullName: fullName.trim(),
        email: email.trim(),
        services: selectedServices.length > 0 ? selectedServices : ["Web Development"],
        budget,
        message: message.trim() || undefined,
        source: "Homepage /#contact",
      });
    } catch (err) {
      console.error(err);
    }

    toast.success(
      "Thank you! Your project request has been received. Our team will get back to you shortly.",
    );
    setFullName("");
    setEmail("");
    setSelectedServices([]);
    setMessage("");
  };

  return (
    <section
      id="contact"
      className="relative z-10 border-t border-white/10 bg-[#0E0E10] py-16 sm:py-24 px-4 sm:px-6 lg:px-8 text-neutral-900"
    >
      <div className="mx-auto max-w-6xl">
        {/* Main 2-column rounded card matching exact design */}
        <div className="overflow-hidden rounded-[28px] sm:rounded-[36px] bg-white shadow-[0_24px_70px_rgba(0,0,0,0.55)] border border-white/20 flex flex-col lg:flex-row">
          {/* Left Column: Testimonial panel with off-white background */}
          <div className="w-full lg:w-[45%] bg-[#F7F8F9] border-b lg:border-b-0 lg:border-r border-neutral-200/70 p-7 sm:p-10 lg:p-12 flex flex-col justify-between">
            {/* Top Company Indicator */}
            <div className="flex items-center gap-3">
              <div className="size-10 rounded-full bg-white border border-neutral-200 shadow-xs flex items-center justify-center font-bold text-sm text-[#c05230]">
                {currentT.letter}
              </div>
              <span className="text-base font-semibold text-neutral-900">{currentT.company}</span>
            </div>

            {/* Testimonial Quote & Copy */}
            <div className="my-8 sm:my-12">
              <h3 className="text-2xl sm:text-[28px] lg:text-[30px] font-bold text-neutral-950 leading-[1.25] tracking-tight">
                {currentT.quote}
              </h3>
              <p className="mt-4 text-sm sm:text-[15px] leading-relaxed text-neutral-600 font-normal">
                {currentT.subquote}
              </p>

              {/* Company Logo Badge */}
              <div className="mt-8 flex items-center gap-3">
                <div className="size-10 rounded-full overflow-hidden bg-white border border-neutral-200 shadow-xs p-1 flex items-center justify-center shrink-0">
                  <img
                    src={currentT.avatar}
                    alt={currentT.company}
                    className="size-full object-contain"
                  />
                </div>
                <span className="text-lg sm:text-xl font-bold text-neutral-950 tracking-tight">
                  {currentT.company}
                </span>
              </div>
            </div>

            {/* Bottom Rating and Progress indicator */}
            <div className="pt-4 border-t border-neutral-200/60">
              <div className="flex items-center gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="size-4 fill-neutral-950 text-neutral-950" />
                ))}
              </div>
              <p className="text-xs sm:text-sm text-neutral-600 font-normal">
                200+ happy Customers based on complement and customer reviews
              </p>

              {/* Progress Bar Carousel Tabs */}
              <div className="flex items-center gap-2.5 mt-6">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActiveTestimonial(idx)}
                    className="h-1 flex-1 rounded-full bg-neutral-200 overflow-hidden cursor-pointer transition-all"
                    aria-label={`Show testimonial ${idx + 1}`}
                  >
                    {activeTestimonial === idx && (
                      <div
                        className="h-full bg-[#87E00C] animate-[contactProgressGrow_linear_forwards]"
                        style={{ animationDuration: "6s" }}
                      />
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="w-full lg:w-[55%] bg-white p-7 sm:p-10 lg:p-12 flex flex-col justify-between">
            {/* Top Eyebrow Badge */}
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-[#111113] px-3.5 py-1.5 text-xs font-semibold text-white shadow-xs">
                <span className="size-2 rounded-full bg-[#9AFD0D] shadow-[0_0_8px_#9AFD0D] animate-pulse" />
                Get in Touch
              </div>

              <h2 className="mt-4 text-2xl sm:text-3xl lg:text-[34px] font-bold text-neutral-950 tracking-tight leading-tight">
                Let&rsquo;s Talk About Your Project
              </h2>
              <p className="mt-2 text-sm sm:text-base text-neutral-600 font-normal">
                Tell us what you&rsquo;re building. We design and build high-quality digital
                products globally.
              </p>
            </div>

            <form onSubmit={onSubmit} className="mt-6 sm:mt-8 space-y-5">
              {/* Row 1: Name and Service Selection */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-neutral-800 mb-1.5">
                    Hi, I&rsquo;m
                  </label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Your full name"
                    className="w-full rounded-xl bg-[#F3F4F6] border-none px-4 py-3 text-sm font-medium text-neutral-900 placeholder:text-neutral-400 focus:bg-white focus:ring-2 focus:ring-neutral-900 outline-none transition-all"
                  />
                </div>

                {/* Service Dropdown Multi-Selector */}
                <div ref={dropdownRef} className="relative">
                  <div className="flex items-center justify-between mb-1.5">
                    <label className="block text-xs sm:text-sm font-semibold text-neutral-800">
                      I need help with
                    </label>
                    <span className="text-[11px] text-neutral-500 font-medium">Multi-select</span>
                  </div>
                  <div
                    role="button"
                    tabIndex={0}
                    onClick={() => setServiceDropdownOpen(!serviceDropdownOpen)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        setServiceDropdownOpen(!serviceDropdownOpen);
                      }
                    }}
                    className={cn(
                      "w-full min-h-[48px] rounded-xl bg-[#F8F9FA] border px-3.5 py-2 flex items-center justify-between gap-2 cursor-pointer transition-all",
                      serviceDropdownOpen
                        ? "border-neutral-900 bg-white ring-2 ring-neutral-900/10 shadow-xs"
                        : "border-neutral-200/90 hover:border-neutral-300 hover:bg-[#F3F4F6]",
                    )}
                  >
                    <div className="flex flex-wrap items-center gap-1.5 overflow-hidden">
                      {selectedServices.length === 0 ? (
                        <span className="text-xs sm:text-sm font-medium text-neutral-400 select-none">
                          Select required disciplines...
                        </span>
                      ) : (
                        selectedServices.slice(0, 2).map((srv) => (
                          <span
                            key={srv}
                            className="inline-flex items-center gap-1.5 rounded-lg bg-white border border-neutral-200 px-2.5 py-1 text-xs font-semibold text-neutral-900 shadow-2xs"
                          >
                            <span className="truncate max-w-[95px] sm:max-w-[120px]">{srv}</span>
                            <button
                              type="button"
                              onClick={(e) => removeService(e, srv)}
                              className="size-3.5 rounded-full hover:bg-neutral-100 flex items-center justify-center text-neutral-400 hover:text-neutral-900 cursor-pointer transition-colors"
                              title={`Remove ${srv}`}
                            >
                              <X className="size-2.5 stroke-[2.5]" />
                            </button>
                          </span>
                        ))
                      )}
                      {selectedServices.length > 2 && (
                        <span className="text-[11px] font-bold text-neutral-700 bg-neutral-200/80 px-2 py-0.5 rounded-full">
                          +{selectedServices.length - 2} more
                        </span>
                      )}
                    </div>
                    <ChevronDown
                      className={cn(
                        "size-4 text-neutral-500 shrink-0 transition-transform duration-200",
                        serviceDropdownOpen && "rotate-180 text-neutral-900",
                      )}
                    />
                  </div>

                  {/* Dropdown Menu - All 12 Services from Menubar */}
                  {serviceDropdownOpen && (
                    <div className="absolute left-0 right-0 top-full mt-2 z-40 rounded-2xl bg-white/98 backdrop-blur-xl border border-neutral-200/90 p-2.5 shadow-[0_24px_50px_rgba(0,0,0,0.18),0_0_0_1px_rgba(0,0,0,0.06)] animate-in fade-in-0 zoom-in-95 duration-150 max-h-[340px] flex flex-col">
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
                              className="absolute right-2 top-1/2 -translate-y-1/2 size-3 text-neutral-400 hover:text-neutral-700"
                            >
                              <X className="size-2.5" />
                            </button>
                          )}
                        </div>
                        <div className="flex items-center justify-between text-[11px] font-medium text-neutral-500 px-0.5">
                          <span>{selectedServices.length} selected</span>
                          {selectedServices.length > 0 && (
                            <button
                              type="button"
                              onClick={() => setSelectedServices([])}
                              className="text-neutral-700 hover:text-neutral-950 font-semibold cursor-pointer transition-colors"
                            >
                              Clear all ({selectedServices.length})
                            </button>
                          )}
                        </div>
                      </div>

                      <div className="overflow-y-auto p-1 space-y-3 custom-scrollbar max-h-[220px]">
                        {filteredCategories.map((group) => (
                          <div key={group.category} className="space-y-1">
                            <div className="px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-neutral-400">
                              {group.category}
                            </div>
                            {group.items.map((item) => {
                              const isChecked = selectedServices.includes(item.title);
                              return (
                                <button
                                  key={item.id}
                                  type="button"
                                  onClick={() => toggleService(item.title)}
                                  className={cn(
                                    "w-full flex items-center justify-between px-2.5 py-2 rounded-xl text-xs font-medium transition-all text-left cursor-pointer group",
                                    isChecked
                                      ? "bg-[#9AFD0D]/20 text-neutral-950 font-semibold shadow-2xs"
                                      : "text-neutral-700 hover:bg-neutral-100/80 hover:text-neutral-950",
                                  )}
                                >
                                  <div className="flex items-center gap-2.5 min-w-0">
                                    <div
                                      className={cn(
                                        "size-4 rounded-md flex items-center justify-center border shrink-0 transition-all",
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
                                </button>
                              );
                            })}
                          </div>
                        ))}

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

                      <div className="pt-2 px-1 border-t border-neutral-100 mt-1 flex justify-end">
                        <button
                          type="button"
                          onClick={() => setServiceDropdownOpen(false)}
                          className="px-3.5 py-1 rounded-lg bg-neutral-950 text-white text-xs font-semibold hover:bg-neutral-800 transition-colors cursor-pointer"
                        >
                          Done
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Row 2: Email */}
              <div>
                <label className="block text-xs sm:text-sm font-semibold text-neutral-800 mb-1.5">
                  Email
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@company.com"
                  className="w-full rounded-xl bg-[#F3F4F6] border-none px-4 py-3 text-sm font-medium text-neutral-900 placeholder:text-neutral-400 focus:bg-white focus:ring-2 focus:ring-neutral-900 outline-none transition-all"
                />
              </div>

              {/* Row 3: Budget Range */}
              <div>
                <label className="block text-xs sm:text-sm font-semibold text-neutral-800 mb-2">
                  Budget range
                </label>
                <div className="flex flex-wrap gap-2 sm:gap-2.5">
                  {budgetOptions.map((b) => {
                    const isSelected = budget === b;
                    return (
                      <button
                        key={b}
                        type="button"
                        onClick={() => setBudget(b)}
                        className={`rounded-full px-4 py-1.5 text-xs sm:text-sm font-semibold transition-all cursor-pointer border ${
                          isSelected
                            ? "border-neutral-950 bg-neutral-950 text-white shadow-xs"
                            : "border-neutral-400/90 bg-transparent text-neutral-800 hover:border-neutral-950 hover:text-neutral-950"
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
                <label className="block text-xs sm:text-sm font-semibold text-neutral-800 mb-1.5">
                  Additional info?
                </label>
                <textarea
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Goals, scope, timeline, or helpful links"
                  className="w-full rounded-xl bg-[#F3F4F6] border-none px-4 py-3 text-sm font-medium text-neutral-900 placeholder:text-neutral-400 focus:bg-white focus:ring-2 focus:ring-neutral-900 outline-none transition-all resize-none min-h-[96px]"
                />
              </div>

              {/* Row 5: CTA Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full rounded-full bg-[#9AFD0D] hover:bg-[#8cee07] text-neutral-950 font-bold py-3.5 sm:py-4 px-8 text-base transition-all shadow-[0_4px_16px_rgba(154,253,13,0.35)] cursor-pointer hover:scale-[1.005] active:scale-[0.995]"
                >
                  Get in Touch
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
