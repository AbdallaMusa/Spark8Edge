import React from "react";

interface LoadingSpinnerProps {
  className?: string;
}

export const LoadingSpinner = ({ className = "bg-[#F4F4F9]" }: LoadingSpinnerProps) => (
  <div className={`w-full h-screen flex items-center justify-center ${className}`}>
    <div className="w-12 h-12 border-4 border-[#DFA236]/30 border-t-[#DFA236] rounded-full animate-spin" />
  </div>
);