import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "next-crud",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`
        flex
        h-screen
        justify-center
        items-center
        bg-gradient-to-tr
        from-indigo-600
        via-purple-600
        to-red-700
        text-white
      `}
      >
        <div
          className={`
        flex flex-col w-2/3
        bg-white text-gray-800
        rounded-md
        `}
        >
          {children}
        </div>
      </body>
    </html>
  );
}
