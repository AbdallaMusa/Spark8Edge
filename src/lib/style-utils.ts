/**
 * Style utilities for consistent hydration between server and client
 * 
 * This module provides functions to ensure style values are formatted
 * consistently between SSR and client rendering, preventing hydration errors.
 */

/**
 * Normalize numeric values to prevent hydration mismatches
 * Examples:
 * - "0px" → "0"
 * - "0.6000000000000001" → "0.6"
 * - "0" → "0" (no change)
 */
export function normalizeNumber(value: number | string): string {
  if (typeof value === "string") {
    // Remove px suffix and parse
    const numStr = value.replace("px", "");
    const num = parseFloat(numStr);
    if (isNaN(num)) return value;
    return normalizeFloat(num);
  }
  return normalizeFloat(value);
}

/**
 * Normalize floating point numbers to remove precision artifacts
 */
function normalizeFloat(num: number): string {
  // Round to 6 decimal places to avoid floating point precision issues
  const rounded = Math.round(num * 1000000) / 1000000;
  
  // If it's an integer, return without decimal
  if (Math.abs(rounded - Math.round(rounded)) < 0.000001) {
    return Math.round(rounded).toString();
  }
  
  // Remove trailing zeros
  return parseFloat(rounded.toFixed(6)).toString();
}

/**
 * Normalize color values to ensure consistent format
 * Supports: hex, rgb, rgba, named colors
 * Always returns rgb() or rgba() format for consistency between server and client
 */
export function normalizeColor(color: string): string {
  if (!color) return color;
  
  // Convert hex to rgb for consistency (React often converts hex to rgb on server)
  const hexMatch = color.match(/^#([A-Fa-f0-9]{6})$/);
  if (hexMatch) {
    const hex = hexMatch[1];
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
    return `rgb(${r}, ${g}, ${b})`;
  }
  
  // Convert short hex (#RGB) to rgb
  const shortHexMatch = color.match(/^#([A-Fa-f0-9]{3})$/);
  if (shortHexMatch) {
    const short = shortHexMatch[1];
    const r = parseInt(short.charAt(0) + short.charAt(0), 16);
    const g = parseInt(short.charAt(1) + short.charAt(1), 16);
    const b = parseInt(short.charAt(2) + short.charAt(2), 16);
    return `rgb(${r}, ${g}, ${b})`;
  }
  
  // Normalize existing rgb() values (ensure consistent spacing)
  const rgbMatch = color.match(/rgb\((\d+),\s*(\d+),\s*(\d+)\)/);
  if (rgbMatch) {
    const r = parseInt(rgbMatch[1], 10);
    const g = parseInt(rgbMatch[2], 10);
    const b = parseInt(rgbMatch[3], 10);
    return `rgb(${r}, ${g}, ${b})`;
  }
  
  // Normalize rgba() values
  const rgbaMatch = color.match(/rgba\((\d+),\s*(\d+),\s*(\d+),\s*([\d.]+)\)/);
  if (rgbaMatch) {
    const r = parseInt(rgbaMatch[1], 10);
    const g = parseInt(rgbaMatch[2], 10);
    const b = parseInt(rgbaMatch[3], 10);
    const a = parseFloat(rgbaMatch[4]);
    return `rgba(${r}, ${g}, ${b}, ${normalizeFloat(a)})`;
  }
  
  // For named colors or other formats, return as-is
  return color;
}

/**
 * Create a normalized style object for consistent hydration
 */
export function createNormalizedStyle<T extends Record<string, string | number>>(
  styles: T
): Record<string, string> {
  const normalized: Record<string, string> = {};
  
  for (const [key, value] of Object.entries(styles)) {
    if (typeof value === "number") {
      // Convert numbers to strings, normalizing floats
      normalized[key] = normalizeFloat(value);
    } else if (typeof value === "string") {
      // Handle color values and numeric strings
      if (key.toLowerCase().includes("color")) {
        normalized[key] = normalizeColor(value);
      } else if (key === "opacity" || key.includes("width") || key.includes("height") || key.includes("size")) {
        normalized[key] = normalizeNumber(value);
      } else {
        normalized[key] = value;
      }
    }
  }
  
  return normalized;
}

/**
 * Stringify a style object with consistent formatting
 */
export function stringifyStyle(styles: Record<string, string | number>): string {
  const normalized = createNormalizedStyle(styles);
  return Object.entries(normalized)
    .map(([key, value]) => `${key}: ${value}`)
    .join("; ");
}