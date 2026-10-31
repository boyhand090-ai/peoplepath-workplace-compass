import { useState, useEffect, useRef, type ImgHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export interface LazyImageProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, "src"> {
  src: string;
  fallbackSrc?: string;
  alt: string;
  aspectRatio?: string;
  containerClassName?: string;
  priority?: boolean;
  showSkeleton?: boolean;
}

export function LazyImage({
  src,
  fallbackSrc,
  alt,
  aspectRatio,
  className,
  containerClassName,
  priority = false,
  showSkeleton = true,
  width,
  height,
  ...props
}: LazyImageProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [shouldLoad, setShouldLoad] = useState(priority);
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentSrc, setCurrentSrc] = useState(src);
  const [hasError, setHasError] = useState(false);

  // Sync src if prop changes
  useEffect(() => {
    setCurrentSrc(src);
    setIsLoaded(false);
    setHasError(false);
  }, [src]);

  // IntersectionObserver for lazy loading when near viewport
  useEffect(() => {
    if (priority || shouldLoad) return;

    const el = containerRef.current;
    if (!el) return;

    if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
      setShouldLoad(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setShouldLoad(true);
            observer.disconnect();
            break;
          }
        }
      },
      {
        rootMargin: "350px 0px 200px 0px", // pre-load before it enters viewport
        threshold: 0.01,
      },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [priority, shouldLoad]);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    if (fallbackSrc && currentSrc !== fallbackSrc) {
      setCurrentSrc(fallbackSrc);
    } else {
      setHasError(true);
      setIsLoaded(true);
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn("relative overflow-hidden bg-surface/50", aspectRatio, containerClassName)}
    >
      {/* Shimmer skeleton placeholder */}
      {showSkeleton && !isLoaded && (
        <div
          aria-hidden
          className="absolute inset-0 z-0 animate-pulse bg-gradient-to-r from-muted/30 via-muted/60 to-muted/30"
        />
      )}

      {/* Render actual image once ready to load */}
      {shouldLoad && !hasError && (
        <img
          src={currentSrc}
          alt={alt}
          width={width}
          height={height}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          fetchPriority={priority ? "high" : "low"}
          onLoad={handleLoad}
          onError={handleError}
          className={cn(
            "w-full h-full object-cover transition-all duration-500 ease-out",
            isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-[1.02] blur-xs",
            className,
          )}
          {...props}
        />
      )}

      {/* Error fallback indicator if image fails */}
      {hasError && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-card/60 p-4 text-center">
          <span className="text-xs uppercase tracking-wider text-muted-foreground">{alt}</span>
        </div>
      )}
    </div>
  );
}
