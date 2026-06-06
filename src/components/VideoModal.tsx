"use client";

import { useEffect, useRef, useState } from "react";

type VideoModalProps = {
  buttonLabel: string;
  videoSrc: string;
};

export function VideoModal({ buttonLabel, videoSrc }: VideoModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [hasError, setHasError] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const closeModal = () => {
    const video = videoRef.current;
    if (video) {
      video.pause();
      video.currentTime = 0;
    }
    setIsOpen(false);
    setHasError(false);
  };

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen]);

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="inline-flex min-h-11 items-center justify-center rounded-md border border-slate-300 bg-white px-5 py-3 text-sm font-semibold !text-slate-950 transition hover:border-orange-300 hover:!text-orange-600"
      >
        {buttonLabel}
      </button>

      {isOpen ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/85 px-4 py-8"
          role="dialog"
          aria-modal="true"
          aria-label="DeployIQ platform overview video"
          onClick={closeModal}
        >
          <div
            className="relative w-full max-w-4xl rounded-lg border border-white/10 bg-slate-950 p-3 shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              aria-label="Close video"
              onClick={closeModal}
              className="absolute right-3 top-3 z-10 flex size-10 items-center justify-center rounded-full bg-white text-xl font-black text-slate-950 shadow-lg transition hover:bg-orange-100"
            >
              x
            </button>

            {hasError ? (
              <div className="flex aspect-video items-center justify-center rounded-md bg-[#061427] p-8 text-center text-white">
                <div>
                  <p className="text-sm font-black uppercase tracking-[0.18em] text-orange-300">
                    Video unavailable
                  </p>
                  <p className="mt-3 text-lg font-semibold text-slate-100">
                    The platform overview video will appear here once the file is available.
                  </p>
                </div>
              </div>
            ) : (
              <video
                ref={videoRef}
                className="aspect-video w-full rounded-md bg-[#061427] object-contain"
                controls
                autoPlay
                playsInline
                preload="metadata"
                onError={() => setHasError(true)}
              >
                <source src={videoSrc} type="video/mp4" />
                The platform overview video will appear here once the file is available.
              </video>
            )}
          </div>
        </div>
      ) : null}
    </>
  );
}
