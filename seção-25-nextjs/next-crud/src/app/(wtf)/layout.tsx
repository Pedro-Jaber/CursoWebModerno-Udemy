export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className={`
        flex flex-col w-2/3
        bg-white text-gray-800
        rounded-md
        `}
    >
      {children}
    </div>
  );
}
