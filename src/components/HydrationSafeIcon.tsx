"use client";

import { ComponentType, SVGProps } from "react";

// Lucide icons have a custom size prop that extends SVGProps
interface LucideIconProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
}

/**
 * IconWrapper component - simple wrapper with suppressHydrationWarning
 * 
 * This is the simplest solution: wrap any icon in this component to prevent
 * hydration mismatches caused by browser extensions.
 * 
 * Usage:
 * ```tsx
 * import { Menu } from "lucide-react";
 * import { IconWrapper } from "@/components/HydrationSafeIcon";
 * 
 * <IconWrapper>
 *   <Menu size={24} />
 * </IconWrapper>
 * ```
 */
export function IconWrapper({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center justify-center" suppressHydrationWarning>
      {children}
    </span>
  );
}

/**
 * createSafeIcon function - creates a hydration-safe version of any lucide icon
 * 
 * Usage:
 * ```tsx
 * import { Menu } from "lucide-react";
 * import { createSafeIcon } from "@/components/HydrationSafeIcon";
 * 
 * const SafeMenu = createSafeIcon(Menu);
 * 
 * <SafeMenu size={24} />
 * ```
 */
export function createSafeIcon(Icon: ComponentType<LucideIconProps>) {
  return function SafeIcon(props: LucideIconProps) {
    return (
      <span 
        className="inline-flex items-center justify-center" 
        suppressHydrationWarning
        style={{
          width: typeof props.size === 'number' ? props.size : undefined,
          height: typeof props.size === 'number' ? props.size : undefined,
        }}
      >
        <Icon {...props} />
      </span>
    );
  };
}

/**
 * SafeIcon component - render any lucide icon with hydration protection
 * 
 * Usage:
 * ```tsx
 * import { Menu } from "lucide-react";
 * import { SafeIcon } from "@/components/HydrationSafeIcon";
 * 
 * <SafeIcon icon={Menu} size={24} />
 * ```
 */
export function SafeIcon({ icon: Icon, ...props }: { icon: ComponentType<LucideIconProps> } & LucideIconProps) {
  return (
    <span 
      className="inline-flex items-center justify-center" 
      suppressHydrationWarning
      style={{
        width: typeof props.size === 'number' ? props.size : undefined,
        height: typeof props.size === 'number' ? props.size : undefined,
      }}
    >
      <Icon {...props} />
    </span>
  );
}
