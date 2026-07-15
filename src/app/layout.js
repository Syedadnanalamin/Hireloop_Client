import Navbar from "@/Components/Shared/Navbar/Navbar";
import "./globals.css";
import Footer from "@/Components/Shared/Footer/Footer";


export default function RootLayout({ children }) {
  return (
    <html
      lang="en" data-theme="dark"
      className="h-full antialiased">
      <body className="min-h-full flex flex-col ">

        {children}

      </body>
    </html>
  );
}
