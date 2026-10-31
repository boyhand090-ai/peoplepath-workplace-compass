import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

export function ShowcaseReveal() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const largeVideoWrapperRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const floatingRef = useRef<HTMLDivElement>(null);
  const floatingVideoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  // Synchronize playback between large video and pill video
  useEffect(() => {
    const mainVideo = videoRef.current;
    const floatingVideo = floatingVideoRef.current;
    const pillVideo = document.querySelector<HTMLVideoElement>("[data-pill-video]");

    const syncInterval = setInterval(() => {
      if (!mainVideo) return;
      const t = mainVideo.currentTime;

      if (floatingVideo && Math.abs(floatingVideo.currentTime - t) > 0.25) {
        floatingVideo.currentTime = t;
      }
      if (pillVideo && Math.abs(pillVideo.currentTime - t) > 0.25) {
        pillVideo.currentTime = t;
      }
    }, 1000);

    return () => clearInterval(syncInterval);
  }, []);

  // Butter-smooth, zero-React-re-render scroll interpolation
  useEffect(() => {
    let animId: number;

    const onScrollOrResize = () => {
      animId = requestAnimationFrame(() => {
        const card = cardRef.current;
        const target = document.querySelector<HTMLElement>("[data-showreel-target]");
        const pillVideo = document.querySelector<HTMLVideoElement>("[data-pill-video]");
        const floating = floatingRef.current;
        const largeWrapper = largeVideoWrapperRef.current;

        if (!card || !target || !floating || !largeWrapper) return;

        // On mobile / small screens, disable scroll morphing animation completely
        // Both the showcase card video and headline pill video remain static in place
        if (window.innerWidth < 1024) {
          floating.style.display = "none";
          largeWrapper.style.opacity = "1";
          if (pillVideo) {
            pillVideo.style.opacity = "1";
          }
          return;
        }

        // Document-relative coordinates for stable, jitter-free scroll range
        const cardPageTop = card.offsetTop;
        const targetPageTop = target.getBoundingClientRect().top + window.scrollY;

        const startScroll = cardPageTop - 80;
        const endScroll = targetPageTop - window.innerHeight * 0.35;
        const totalDistance = Math.max(endScroll - startScroll, 200);

        const currentScroll = window.scrollY;
        const rawProgress = (currentScroll - startScroll) / totalDistance;
        const progress = Math.min(Math.max(rawProgress, 0), 1);

        // Standard easeInOutQuad: acceleration at start, deceleration into landing
        const ease =
          progress < 0.5 ? 2 * progress * progress : 1 - Math.pow(-2 * progress + 2, 2) / 2;

        if (progress <= 0) {
          // Resting fully in large showcase container
          floating.style.display = "none";
          largeWrapper.style.opacity = "1";
          if (pillVideo) {
            pillVideo.style.opacity = "0";
          }
        } else if (progress >= 1) {
          // Landed 100% inside the headline pill
          floating.style.display = "none";
          largeWrapper.style.opacity = "0";
          if (pillVideo) {
            pillVideo.style.opacity = "1";
          }
        } else {
          // Floating transition with hardware-accelerated direct DOM updates
          const pRect = card.getBoundingClientRect();
          const tRect = target.getBoundingClientRect();

          const currentLeft = pRect.left + (tRect.left - pRect.left) * ease;
          const currentTop = pRect.top + (tRect.top - pRect.top) * ease;
          const currentWidth = pRect.width + (tRect.width - pRect.width) * ease;
          const currentHeight = pRect.height + (tRect.height - pRect.height) * ease;

          const startRadius = 28;
          const targetRadius = currentHeight / 2;
          const currentRadius = startRadius + (targetRadius - startRadius) * ease;

          floating.style.display = "block";
          floating.style.left = `${currentLeft}px`;
          floating.style.top = `${currentTop}px`;
          floating.style.width = `${currentWidth}px`;
          floating.style.height = `${currentHeight}px`;
          floating.style.borderRadius = `${currentRadius}px`;

          largeWrapper.style.opacity = "0";
          if (pillVideo) {
            pillVideo.style.opacity = "0";
          }
        }
      });
    };

    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize, { passive: true });
    onScrollOrResize();

    return () => {
      window.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onScrollOrResize);
      cancelAnimationFrame(animId);
    };
  }, []);

  const toggleMute = () => {
    if (videoRef.current) {
      const nextMuted = !videoRef.current.muted;
      videoRef.current.muted = nextMuted;
      if (floatingVideoRef.current) {
        floatingVideoRef.current.muted = nextMuted;
      }
      setIsMuted(nextMuted);
    }
  };

  return (
    <section
      id="showcase-reveal-section"
      ref={containerRef}
      className="relative z-20 py-8 sm:py-14 lg:py-20 bg-background"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Placeholder frame preserving document layout */}
        <div
          ref={cardRef}
          className="relative aspect-video w-full max-h-[620px] rounded-[24px] sm:rounded-[32px] overflow-hidden bg-black/60 border border-white/10 shadow-[0_32px_80px_rgba(0,0,0,0.8)]"
        >
          {/* Static Large Video Container */}
          <div
            ref={largeVideoWrapperRef}
            className="absolute inset-0 size-full overflow-hidden rounded-[24px] sm:rounded-[32px] transition-opacity duration-150"
          >
            <video
              ref={videoRef}
              src="/showreel.mp4"
              poster="/showreel-poster.jpg"
              autoPlay
              loop
              muted={isMuted}
              playsInline
              className="size-full object-cover"
            />

            {/* Sound Toggle Button */}
            <button
              type="button"
              onClick={toggleMute}
              aria-label={isMuted ? "Unmute video" : "Mute video"}
              className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 size-10 sm:size-11 rounded-full bg-black/70 hover:bg-black/90 backdrop-blur-md border border-white/20 text-white flex items-center justify-center transition-all cursor-pointer z-10 shadow-lg hover:scale-105 active:scale-95"
            >
              {isMuted ? (
                <VolumeX className="size-4 sm:size-5" />
              ) : (
                <Volume2 className="size-4 sm:size-5 text-[#9AFD0D]" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Floating Morphing Video: only active on lg+ desktops, completely hidden on mobile/small screens */}
      <div
        ref={floatingRef}
        className="hidden lg:block fixed z-40 overflow-hidden border border-white/20 bg-black shadow-[0_16px_50px_rgba(0,0,0,0.8)] pointer-events-none will-change-[left,top,width,height,border-radius]"
        style={{ display: "none" }}
      >
        <video
          ref={floatingVideoRef}
          src="/showreel.mp4"
          poster="/showreel-poster.jpg"
          autoPlay
          loop
          muted={isMuted}
          playsInline
          className="size-full object-cover"
        />
      </div>
    </section>
  );
}
