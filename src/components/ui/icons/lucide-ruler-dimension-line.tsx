import * as React from "react";

export function RulerDimensionLineIcon({
  size = 24,
  color = "currentColor",
  strokeWidth = 2,
  className,
  ...props
}: React.SVGProps<SVGSVGElement> & {
  size?: number;
  color?: string;
  strokeWidth?: number;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <path d="M12 15v-3.014M16 15v-3.014M20 6H4m16 2V4M4 8V4m4 11v-3.014"/><rect width="18" height="7" x="3" y="12" rx="1"/>
    </svg>
  );
}
