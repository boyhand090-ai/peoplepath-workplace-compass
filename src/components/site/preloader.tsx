import { useEffect, useState } from "react";
import { greetings } from "@/data/site";
import { cn } from "@/lib/utils";

export function Preloader() {
  const [index, setIndex] = useState(0);
  const [fading, setFading] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    try {
      if (
        typeof window !== "undefined" &&
        window.sessionStorage.getItem("s28_preloader_seen") === "true"
      ) {
        setDone(true);
        return;
      }
      if (typeof window !== "undefined") {
        window.sessionStorage.setItem("s28_preloader_seen", "true");
      }
    } catch {
      // sessionStorage unavailable
    }

    // Failsafe timeout: never block page render for more than 750ms total
    const safety = window.setTimeout(() => {
      setFading(true);
      window.setTimeout(() => setDone(true), 200);
    }, 750);

    const id = window.setInterval(() => {
      setIndex((i) => {
        if (i >= greetings.length - 1) {
          window.clearInterval(id);
          window.clearTimeout(safety);
          setFading(true);
          window.setTimeout(() => setDone(true), 250);
          return i;
        }
        return i + 1;
      });
    }, 90);

    return () => {
      window.clearInterval(id);
      window.clearTimeout(safety);
    };
  }, []);

  if (done) return null;

  return (
    <div
      aria-hidden
      className={cn(
        "fixed inset-0 z-[100] flex items-center justify-center bg-ink transition-opacity duration-400 ease-out",
        fading ? "pointer-events-none opacity-0" : "opacity-100",
      )}
    >
      <p className="flex items-end gap-2 text-3xl font-light tracking-tight text-foreground sm:text-5xl">
        {greetings[index]}
        <span className="mb-2 inline-block size-2 bg-primary shadow-[0_0_8px_#9AFD0D] animate-pulse" />
      </p>
    </div>
  );
}
