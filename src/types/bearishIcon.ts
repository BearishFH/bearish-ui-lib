import * as React from "react";

/**
 * Props for Bearish UI SVG Icon components.
 * - `className`: for Tailwind or custom CSS classes
 * - `style`: for inline styles
 * - All standard SVG props are supported
 */
export type BearishIconProps = React.SVGProps<SVGSVGElement> & {
  className?: string;
  style?: React.CSSProperties;
};