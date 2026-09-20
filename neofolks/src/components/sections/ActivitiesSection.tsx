import { activities } from "@/data/activities";
import { ActivityCard } from "@/components/common/ActivityCard";
import { SectionHeader } from "@/components/common/SectionHeader";
import { InvertedPerspectiveCarousel } from "@/components/ui/inverted-perspective-carousel";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export function ActivitiesSection() {
  const reducedMotion = useReducedMotion();

  return (
    <section className="section-spacing overflow-hidden">
      <div className="container-page flex flex-col gap-48">
        <SectionHeader eyebrow="Our Activities" title="What We Do" animateOnScroll={false} />

        {reducedMotion ? (
          <div className="grid grid-cols-1 gap-16 sm:grid-cols-2 lg:grid-cols-4">
            {activities.map((activity) => (
              <ActivityCard
                key={activity.number}
                activity={activity}
                className="min-h-[220px] gap-24 transition-colors hover:border-steel-gray"
              />
            ))}
          </div>
        ) : (
          <InvertedPerspectiveCarousel cards={activities} />
        )}
      </div>
    </section>
  );
}