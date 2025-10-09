"use client";

import Banner from "./agent/banner/banner";

export default function Navigation({ isLoading }: { isLoading: boolean }) {
  return <Banner isLoading={isLoading} />;
}
