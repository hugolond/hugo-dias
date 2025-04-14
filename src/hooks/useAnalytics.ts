// src/hooks/useAnalytics.ts
"use client";

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import ReactGA from 'react-ga4';

const GA_MEASUREMENT_ID = 'G-7EH1L718ST';

export const useAnalytics = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Inicializa o GA apenas uma vez
  useEffect(() => {
    ReactGA.initialize(GA_MEASUREMENT_ID);
  }, []);

  // Rastreia mudanças de rota
  useEffect(() => {
    const query = searchParams?.toString() ?? "";
    const url = `${pathname}${query ? "?" + query : ""}`;
    ReactGA.send({ hitType: 'pageview', page: url });
  }, [pathname, searchParams]);
};
