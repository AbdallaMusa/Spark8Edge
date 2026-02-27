"use client";

import { useEffect } from "react";

/**
 * BrowserExtensionMitigation component
 * 
 * This component helps mitigate hydration errors caused by browser extensions
 * that modify the DOM before React hydrates (e.g., Dark Reader, ad blockers).
 * 
 * Key issues addressed:
 * 1. Dark Reader adds data-darkreader-* attributes and inline styles
 * 2. Some extensions modify HTML structure or add attributes
 * 3. Style inconsistencies between server and client rendering
 */
export function BrowserExtensionMitigation() {
  useEffect(() => {
    // Only run on the client after hydration
    if (typeof window === "undefined") return;

    // Clean up Dark Reader attributes that cause hydration mismatches
    const cleanupDarkReaderAttributes = () => {
      // Remove data-darkreader-* attributes
      document.querySelectorAll("[data-darkreader]").forEach(el => {
        el.removeAttribute("data-darkreader");
      });
      
      document.querySelectorAll("[data-darkreader-inline-color]").forEach(el => {
        el.removeAttribute("data-darkreader-inline-color");
      });
      
      document.querySelectorAll("[data-darkreader-inline-bgcolor]").forEach(el => {
        el.removeAttribute("data-darkreader-inline-bgcolor");
      });
      
      document.querySelectorAll("[data-darkreader-inline-stroke]").forEach(el => {
        el.removeAttribute("data-darkreader-inline-stroke");
      });
      
      document.querySelectorAll("[data-darkreader-inline-fill]").forEach(el => {
        el.removeAttribute("data-darkreader-inline-fill");
      });
      
      document.querySelectorAll("[data-darkreader-mode]").forEach(el => {
        el.removeAttribute("data-darkreader-mode");
      });
      
      document.querySelectorAll("[data-darkreader-scheme]").forEach(el => {
        el.removeAttribute("data-darkreader-scheme");
      });
      
      // Remove Dark Reader inline styles
      document.querySelectorAll("[style*='--darkreader-inline-']").forEach(el => {
        const style = el.getAttribute("style");
        if (style) {
          const cleaned = style.replace(/--darkreader-inline-[^;]+;?/g, '').trim();
          if (cleaned) {
            el.setAttribute("style", cleaned);
          } else {
            el.removeAttribute("style");
          }
        }
      });
    };

    // Remove common extension-added attributes
    const cleanupExtensionAttributes = () => {
      // Grammarly attributes
      document.querySelectorAll("[data-gramm]").forEach(el => {
        el.removeAttribute("data-gramm");
      });
      
      document.querySelectorAll("[data-grammarly-shadow-root]").forEach(el => {
        el.removeAttribute("data-grammarly-shadow-root");
      });
      
      // Ad blocker attributes
      document.querySelectorAll("[data-adblock-removed]").forEach(el => {
        el.removeAttribute("data-adblock-removed");
      });
      
      // Common extension attributes
      document.querySelectorAll("[data-new-gr-c-s-check-loaded]").forEach(el => {
        el.removeAttribute("data-new-gr-c-s-check-loaded");
      });
      
      document.querySelectorAll("[data-gr-ext-installed]").forEach(el => {
        el.removeAttribute("data-gr-ext-installed");
      });
    };

    // Normalize style attribute formatting
    const normalizeStyles = () => {
      // This helps with style inconsistencies between SSR and client
      // For example: "0px" vs "0", "0.6" vs "0.6000000000000001"
      document.querySelectorAll("[style]").forEach(el => {
        const style = el.getAttribute("style");
        if (!style) return;
        
        // Normalize numeric values
        const normalized = style
          .replace(/(\d+\.\d+?)0+(?=\D|$)/g, "$1") // Remove trailing zeros
          .replace(/(\d+)px(?=\D|$)/g, "$1") // Remove px suffix for 0 values
          .replace(/:\s*(\d+)px(?=\D|$)/g, ":$1") // Remove px for all values
          .replace(/(rgb\(\d+, \d+, \d+\))/g, (match) => {
            // Convert rgb to hex for consistency
            const rgb = match.match(/\d+/g);
            if (rgb && rgb.length === 3) {
              const [r, g, b] = rgb.map(Number);
              return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
            }
            return match;
          });
        
        if (style !== normalized) {
          el.setAttribute("style", normalized);
        }
      });
    };

    // Run cleanup immediately and aggressively
    const runCleanup = () => {
      cleanupDarkReaderAttributes();
      cleanupExtensionAttributes();
      normalizeStyles();
      
      // Also add suppressHydrationWarning to SVG elements that commonly have issues
      document.querySelectorAll("svg[data-darkreader-inline-stroke], svg[style*='--darkreader-inline-']").forEach(svg => {
        svg.setAttribute("suppressHydrationWarning", "true");
      });
    };

    // Run immediately
    runCleanup();
    
    // Run again after a microtask to catch any delayed modifications
    setTimeout(runCleanup, 0);
    
    // Run after DOM is fully loaded
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', runCleanup);
    }
    
    // Run on next animation frame
    requestAnimationFrame(runCleanup);

    // Dispatch event that cleanup is complete
    window.dispatchEvent(new CustomEvent("extension-cleanup-complete"));
  }, []);

  // This component doesn't render anything visible
  return null;
}
