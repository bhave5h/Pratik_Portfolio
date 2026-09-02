import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pratik's Portfolio",
  description: "Product Designer & UX Expert",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className="h-full antialiased"
    >
    
      <body className="min-h-full flex flex-col max-w-5xl mx-auto">{children}</body>
    </html>
  );
}
