import { useTeam } from "@/hooks/useTeam";
import { TeamShowcase } from "@/components/ui/team-showcase";
import { Skeleton } from "@/components/ui/skeleton";
import { ErrorState } from "@/components/common/ErrorState";

// Mirrors the showcase layout (photo mosaic + list) so the page doesn't jump
// when the data arrives.
function TeamSkeleton() {
  return (
    <div
      className="mx-auto flex w-full max-w-5xl flex-col gap-32 md:flex-row lg:gap-56"
      aria-hidden="true"
    >
      <Skeleton className="mx-auto h-[220px] w-[268px] shrink-0 sm:h-[300px] sm:w-[396px] md:mx-0 lg:h-[420px] lg:w-[513px]" />
      <div className="flex w-full flex-1 flex-col gap-12">
        {Array.from({ length: 8 }).map((_, i) => (
          <Skeleton key={i} className="h-[56px] w-full" />
        ))}
      </div>
    </div>
  );
}

export function TeamSection() {
  const { data, isLoading, isError, refetch } = useTeam();

  return (
    <section className="section-spacing">
      <div className="container-page">
        {isLoading && <TeamSkeleton />}
        {isError && <ErrorState message="Couldn't load the team." onRetry={() => refetch()} />}
        {data && <TeamShowcase members={data} />}
      </div>
    </section>
  );
}