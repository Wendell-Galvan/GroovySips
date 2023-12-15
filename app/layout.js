import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./globals.css";

export const metadata = {
  title: "Groovy Sips",
  description: "Mobile Bar Services",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-stone-50 text-stone-800">
        <Navbar />
        <main className="overflow-x-hidden overflow-y-auto mx-12 lg:mx-24">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
