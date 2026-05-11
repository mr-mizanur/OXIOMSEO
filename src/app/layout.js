import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./globals.css";


export const metadata = {
  title: "OxiomSEO - Dominate Search Results",
  description: "Premium SEO Agency for modern businesses",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className="bg-[#0a0a0a] text-white antialiased">
       
        <main className="pt-20"> {/* Navbar এর উচ্চতা অনুযায়ী প্যাডিং */}
          <Navbar></Navbar>
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}