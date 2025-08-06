import Skeleton from "react-loading-skeleton";

interface ProductSkeletonProps {
  className?: string;
}

export default function ProductSkeleton({ className }: ProductSkeletonProps) {
  return (
    <div
      className={`bg-white rounded-2xl shadow-lg overflow-hidden ${
        className || ""
      }`}
    >
      <Skeleton className="aspect-[4/3]" />
      <div style={{ padding: "1.5vw" }}>
        <Skeleton
          style={{ height: "1.75vw", marginBottom: "0.5vw", minHeight: "28px" }}
        />
        <div style={{ gap: "0.5vw", marginBottom: "1vw" }}>
          <Skeleton count={3} />
        </div>
        <div className="flex justify-between items-end">
          <div style={{ gap: "0.25vw" }}>
            <Skeleton style={{ width: "5vw", minWidth: "80px" }} />
            <Skeleton
              style={{
                width: "6vw",
                height: "2vw",
                minWidth: "96px",
                minHeight: "32px",
              }}
            />
            <Skeleton style={{ width: "4vw", minWidth: "64px" }} />
          </div>
          <div className="flex flex-col items-end" style={{ gap: "0.75vw" }}>
            <Skeleton
              style={{
                width: "1.5vw",
                height: "1.5vw",
                minWidth: "24px",
                minHeight: "24px",
              }}
            />
            <Skeleton
              style={{
                width: "6vw",
                height: "2vw",
                minWidth: "96px",
                minHeight: "32px",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

