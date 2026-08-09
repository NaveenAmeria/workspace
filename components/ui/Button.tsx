import Link from "next/link";
import type { ReactNode } from "react";

/**
 * Shared button component.
 * - "primary": violet gradient fill, white text (main CTAs)
 * - "ghost": transparent with subtle border (secondary CTAs)
 * Renders a <Link> when href is provided, otherwise a <button>.
 */
interface BaseProps {
  children: ReactNode;
  variant?: "primary" | "ghost";
  className?: string;
  ariaLabel?: string;
}

interface LinkProps extends BaseProps {
  href: string;
  onClick?: never;
  type?: never;
}

interface ButtonProps extends BaseProps {
  href?: undefined;
  onClick?: () => void;
  type?: "button" | "submit";
}

const VARIANT_STYLES = {
  primary:
    "gradient-cta text-white font-medium shadow-[0_4px_20px_rgba(108,99,255,0.25)] hover:scale-[1.03] hover:shadow-btn-hover transition-all duration-200 ease-out",
  ghost:
    "border border-line bg-transparent text-snow hover:border-violet hover:text-violet transition-colors duration-200",
} as const;

export default function Button(props: LinkProps | ButtonProps) {
  const {
    children,
    variant = "primary",
    className = "",
    ariaLabel,
  } = props;

  const classes = `inline-flex items-center justify-center gap-2 rounded-lg px-8 py-4 text-base leading-none ${VARIANT_STYLES[variant]} ${className}`;

  if (props.href !== undefined) {
    return (
      <Link href={props.href} className={classes} aria-label={ariaLabel}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={props.type ?? "button"}
      onClick={props.onClick}
      className={classes}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}
