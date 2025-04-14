// src/components/AnalyticsWrapper.tsx
"use client";

import { useAnalytics } from '@/hooks/useAnalytics';

export function AnalyticsWrapper() {
  useAnalytics();
  return null; // Esse componente não renderiza nada
}