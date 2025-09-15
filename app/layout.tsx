import "./globals.css";
import RootClient from "./components/ThemeToggle";

export const metadata = {
  title: "Kumar Chandan Portfolio",
  description: "Portfolio website",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <RootClient>{children}</RootClient>
      </body>
    </html>
  );
}
