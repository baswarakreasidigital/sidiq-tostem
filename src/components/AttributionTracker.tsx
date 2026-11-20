"use client";

import { useEffect } from "react";
import { captureAttribution } from "@/lib/tracking";

export default function AttributionTracker() {
  useEffect(() => {
    captureAttribution();
  }, []);

  return null;
}
