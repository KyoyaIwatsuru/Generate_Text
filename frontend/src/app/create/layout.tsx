import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create",
  description: "Create",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {children}
    </>
  );
}
