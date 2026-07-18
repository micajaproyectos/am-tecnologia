"use client";

import { useEffect, useState } from "react";
import { reviews, StarIcon, GoogleIcon } from "./TestimonialsCard";

const INTERVAL_MS = 5000;

export default function HeroReviewsRotator() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(
      () => setIndex((prev) => (prev + 1) % reviews.length),
      INTERVAL_MS
    );
    return () => clearInterval(timer);
  }, []);

  const review = reviews[index];

  return (
    <div className="bg-white rounded-xl ring-1 ring-slate-200 shadow-[0_12px_36px_rgba(0,0,0,0.14)] px-4 py-3">
      <style>{`
        @media (prefers-reduced-motion: no-preference) {
          .hero-review-enter {
            animation: hero-review-fade 0.45s ease;
          }
        }
        @keyframes hero-review-fade {
          from { opacity: 0; transform: translateY(6px); }
          to   { opacity: 1; transform: none; }
        }
      `}</style>

      <div key={index} className="hero-review-enter flex items-start gap-3">
        <div
          className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 text-white font-semibold text-[13px]"
          style={{ backgroundColor: review.color }}
        >
          {review.initial}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-0.5">
            <span className="text-[#202124] text-[13px] font-medium leading-tight truncate">
              {review.name}
            </span>
            <span className="flex gap-0.5 shrink-0">
              {[...Array(review.stars)].map((_, i) => (
                <StarIcon key={i} size={10} />
              ))}
            </span>
            <span className="flex items-center gap-1 shrink-0 ml-auto">
              <GoogleIcon size={13} />
              <span className="text-[#202124] text-[12px] font-semibold">5,0</span>
            </span>
          </div>
          <p className="text-[#3c4043] text-[12px] leading-[1.5] min-h-[36px]">
            {review.text}
          </p>
        </div>
      </div>
    </div>
  );
}
