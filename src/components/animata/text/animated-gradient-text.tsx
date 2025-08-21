import { cn } from "@/lib/utils";

export default function AnimatedGradientText({
  className,
  children,
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "bg-gradient-to-r from-yellow-500 via-yellow-700 to-pink-500 bg-[length:200%_auto] bg-clip-text text-transparent animate-[bg-position_3s_linear_infinite_alternate]",
        className,
      )}
    >
      {children}
    </div>
  );
}
