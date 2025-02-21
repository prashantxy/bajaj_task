"use client";

import React from "react";
import { cn } from "@/components/ui/lib/utils"; // Utility function for class merging

interface AlertProps {
  children: React.ReactNode;
  variant?: "default" | "destructive" | "success" | "warning"; // Alert variants
  className?: string;
}

export const Alert: React.FC<AlertProps> = ({ children, variant = "default", className = "" }) => {
  const alertStyles = {
    default: "bg-gray-800 text-white",
    destructive: "bg-red-600 text-white",
    success: "bg-green-600 text-white",
    warning: "bg-yellow-500 text-black",
  };

  return (
    <div className={cn("p-4 rounded-lg shadow-md", alertStyles[variant], className)}>
      {children}
    </div>
  );
};

export const AlertDescription: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = "" }) => {
  return <p className={cn("text-sm opacity-90", className)}>{children}</p>;
};
