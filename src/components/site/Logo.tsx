export function Logo({ className = "h-9" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Light mode logo (blue) */}
      <img
        src="/Assets/logo_transparent_blue.png"
        alt="Kohinoor Polytech"
        className="h-full w-auto object-contain block dark:hidden"
      />
      {/* Dark mode logo (white) */}
      <img
        src="/Assets/logo_transparent_white.png"
        alt="Kohinoor Polytech"
        className="h-full w-auto object-contain hidden dark:block"
      />
    </div>
  );
}
