import { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { Autoplay, EffectCoverflow, Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css";

import { cn } from "@/lib/utils";
import { ActivityCard } from "@/components/common/ActivityCard";
import type { Activity } from "@/types";

interface InvertedPerspectiveCarouselProps {
  cards: Activity[];
  className?: string;
  showPagination?: boolean;
  showNavigation?: boolean;
  loop?: boolean;
  autoplay?: boolean;
  spaceBetween?: number;
}

// Adapted from Skiper 49 (Carousel_003) by Skiper UI — same Swiper coverflow
// mechanic, restyled onto the site's own tokens (carbon-card/graphite/ash-gray,
// rounded-card) and swapped from an image gallery to the "What We Do" activity
// cards, since we have text content rather than photography.
export const InvertedPerspectiveCarousel = ({
  cards,
  className,
  showPagination = true,
  showNavigation = true,
  loop = true,
  autoplay = true,
  spaceBetween = 0,
}: InvertedPerspectiveCarouselProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [swiper, setSwiper] = useState<SwiperType | null>(null);

  // Swiper's loop mode needs more slides than "slidesPerView + looped slides"
  // to work. With only a handful of cards it silently breaks (the carousel
  // gets stuck on the last card with an uneven left/right layout), so we feed
  // it the cards twice. The pagination below tracks the *real* card index.
  const slides = loop && cards.length < 8 ? [...cards, ...cards] : cards;

  const css = `
    .activities-carousel {
      width: 100%;
      max-width: 960px;
      margin: 0 auto;
      padding-bottom: 8px !important;
    }

    .activities-carousel .swiper-slide {
      width: 280px;
      height: 260px;
      opacity: 0;
      pointer-events: none;
      transition: opacity 650ms cubic-bezier(0.22, 1, 0.36, 1);
    }

    /* Symmetric layout: only the active card and its immediate neighbours
       (one on each side) are shown. Everything else stays hidden. */
    .activities-carousel .swiper-slide-active,
    .activities-carousel .swiper-slide-prev,
    .activities-carousel .swiper-slide-next {
      opacity: 1;
      pointer-events: auto;
    }


    .activities-carousel .swiper-button-next,
    .activities-carousel .swiper-button-prev {
      width: 40px;
      height: 40px;
    }
  `;

  return (
    <div className={cn("relative w-full", className)}>
      <style>{css}</style>

      <Swiper
        spaceBetween={spaceBetween}
        autoplay={autoplay ? { delay: 3400, disableOnInteraction: false, pauseOnMouseEnter: true } : false}
        effect="coverflow"
        speed={650}
        grabCursor
        slidesPerView="auto"
        centeredSlides
        loop={loop}
        coverflowEffect={{
          rotate: 40,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        onSwiper={setSwiper}
        onSlideChange={(sw) => setActiveIndex(sw.realIndex % cards.length)}
        navigation={
          showNavigation
            ? { nextEl: ".activities-carousel-next", prevEl: ".activities-carousel-prev" }
            : false
        }
        className="activities-carousel"
        modules={[EffectCoverflow, Autoplay, Navigation]}
      >
        {slides.map((activity, i) => (
          <SwiperSlide key={`${activity.number}-${i}`} aria-hidden={i >= cards.length || undefined}>
            <ActivityCard activity={activity} />
          </SwiperSlide>
        ))}

        {showNavigation && (
          <>
            <div className="activities-carousel-prev absolute left-0 top-1/2 z-10 flex h-40 w-40 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-graphite bg-carbon-card transition-colors hover:border-steel-gray">
              <ChevronLeftIcon className="h-20 w-20 text-ghost-white" />
            </div>
            <div className="activities-carousel-next absolute right-0 top-1/2 z-10 flex h-40 w-40 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-graphite bg-carbon-card transition-colors hover:border-steel-gray">
              <ChevronRightIcon className="h-20 w-20 text-ghost-white" />
            </div>
          </>
        )}
      </Swiper>

      {showPagination && (
        <div className="mt-16 flex items-center justify-center gap-8">
          {cards.map((activity, i) => (
            <button
              key={activity.number}
              type="button"
              aria-label={`Go to ${activity.title}`}
              aria-current={i === activeIndex}
              onClick={() => swiper?.slideToLoop(i)}
              className={cn(
                "h-8 w-8 rounded-full transition-colors",
                i === activeIndex ? "bg-white" : "bg-[#808080]/60 hover:bg-[#808080]",
              )}
            />
          ))}
        </div>
      )}
    </div>
  );
};