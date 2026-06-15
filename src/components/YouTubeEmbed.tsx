"use client";

import { useState } from "react";
import type { Video } from "@/lib/types";

/**
 * Privacy-enhanced, lazy-loaded YouTube embed.
 * Shows a clickable thumbnail until the user opts in (no cookies until then),
 * then loads the youtube-nocookie.com iframe.
 */
export function YouTubeEmbed({ video }: { video: Video }) {
  const [active, setActive] = useState(false);
  const hasVideo = Boolean(video.youtubeId);

  return (
    <figure className="overflow-hidden rounded-xl border border-slate-200 bg-white">
      <div className="relative aspect-video bg-slate-900">
        {hasVideo && active ? (
          <iframe
            className="absolute inset-0 h-full w-full"
            src={`https://www.youtube-nocookie.com/embed/${video.youtubeId}?autoplay=1&rel=0`}
            title={video.title}
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : hasVideo ? (
          <button
            type="button"
            onClick={() => setActive(true)}
            className="group absolute inset-0 flex flex-col items-center justify-center text-white"
            aria-label={`Play video: ${video.title}`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`https://i.ytimg.com/vi/${video.youtubeId}/hqdefault.jpg`}
              alt=""
              className="absolute inset-0 h-full w-full object-cover opacity-70 transition group-hover:opacity-90"
            />
            <span className="relative flex h-16 w-16 items-center justify-center rounded-full bg-brand/90 text-2xl shadow-lg transition group-hover:scale-110">
              ▶
            </span>
            <span className="relative mt-3 max-w-[80%] text-center text-sm font-semibold drop-shadow">
              Watch &amp; Learn
            </span>
          </button>
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center text-slate-300">
            <span className="text-3xl" aria-hidden>
              🎬
            </span>
            <p className="mt-2 text-sm font-semibold">Video to be added</p>
            <p className="mt-1 text-xs">A vetted source is referenced below — add the link before launch.</p>
          </div>
        )}
      </div>
      <figcaption className="space-y-1 p-3">
        <p className="font-semibold text-ink">{video.title}</p>
        <p className="text-sm text-muted">{video.source}</p>
        {video.note && <p className="text-xs text-amber-700">⚠ {video.note}</p>}
      </figcaption>
    </figure>
  );
}
