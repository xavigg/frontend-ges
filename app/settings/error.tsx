"use client"; // Error components must be Client Components

import { Metadata } from "next";
import React from "react";
import { useEffect } from "react";
import DefaultLayout from "@components/Layouts/DefaultLayout";

export const metadata: Metadata = {
  title: "Gestion v1 | Error",
  description: "Error page",
};

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <DefaultLayout>
    <div>
      <h2>Something went wrong!</h2>
      <button onClick={() => reset()}>Try again</button>
    </div>
    </DefaultLayout>
  );
}
