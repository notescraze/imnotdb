import Header from "@/components/Header";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* header */}
        <Header />
        {/* navbar */}

        {/* searchbox */}

        {children}
      </body>
    </html>
  );
}
