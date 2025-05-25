interface SniprLogoProps {
  className?: string;
  size?: number;
}

export function SniprLogo({ className = "h-5 w-5", size }: Readonly<SniprLogoProps>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width={size}
      height={size}
    >
      {/* Outer targeting ring */}
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.6" />

      {/* Inner targeting ring */}
      <circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.8" />

      {/* Center crosshair - horizontal */}
      <line x1="2" y1="12" x2="22" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />

      {/* Center crosshair - vertical */}
      <line x1="12" y1="2" x2="12" y2="22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />

      {/* Sharp targeting points */}
      <polygon points="12,8 14,10 12,12 10,10" fill="currentColor" />

      <polygon points="12,16 14,14 12,12 10,14" fill="currentColor" />

      <polygon points="8,12 10,10 12,12 10,14" fill="currentColor" />

      <polygon points="16,12 14,10 12,12 14,14" fill="currentColor" />

      {/* Center dot */}
      <circle cx="12" cy="12" r="1.5" fill="currentColor" />
    </svg>
  );
}

export function SniprLogoAlt({ className = "h-5 w-5", size }: Readonly<SniprLogoProps>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width={size}
      height={size}
    >
      {/* Stylized S with sharp cuts */}
      <path
        d="M8 4L16 4C18.2 4 20 5.8 20 8C20 9.5 19.2 10.8 18 11.5C19.2 12.2 20 13.5 20 15C20 17.2 18.2 19 16 19L8 19"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />

      {/* Sharp cut lines */}
      <line x1="6" y1="6" x2="10" y2="10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />

      <line x1="14" y1="14" x2="18" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />

      {/* Precision dots */}
      <circle cx="7" cy="7" r="1" fill="currentColor" />
      <circle cx="17" cy="17" r="1" fill="currentColor" />
    </svg>
  );
}

export function SniprLogoMinimal({ className = "h-5 w-5", size }: Readonly<SniprLogoProps>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width={size}
      height={size}
    >
      {/* Link chain with cut */}
      <path
        d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Sharp cut through the middle */}
      <line x1="8" y1="16" x2="16" y2="8" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />

      {/* Precision targeting dots */}
      <circle cx="6" cy="18" r="1.5" fill="currentColor" />
      <circle cx="18" cy="6" r="1.5" fill="currentColor" />
    </svg>
  );
}
