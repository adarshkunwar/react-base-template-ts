interface TypographyProps {
  variant?: "xs" | "sm" | "base" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl";
  weight?: "light" | "normal" | "medium" | "semibold" | "bold";
  family?: "sans" | "serif" | "mono";
  children: React.ReactNode;
  as?: React.ElementType;
}

export default function Typography({
  variant = "base",
  weight = "normal",
  family = "sans",
  children,
  as: Component = "p",
}: TypographyProps) {
  const sizeClasses = {
    xs: "text-xs",
    sm: "text-sm",
    base: "text-base",
    lg: "text-lg",
    xl: "text-xl",
    "2xl": "text-2xl",
    "3xl": "text-3xl",
    "4xl": "text-4xl",
    "5xl": "text-5xl",
  };

  const weightClasses = {
    light: "font-light",
    normal: "font-normal",
    medium: "font-medium",
    semibold: "font-semibold",
    bold: "font-bold",
  };

  const familyClasses = {
    sans: "font-sans",
    serif: "font-serif",
    mono: "font-mono",
  };

  const classes = [
    sizeClasses[variant],
    weightClasses[weight],
    familyClasses[family],
  ]
    .filter(Boolean)
    .join(" ");

  return <Component className={classes}>{children}</Component>;
}
