import Header from "./components/Header";
import Navbar from "./components/Navbar";
import "./globals.css";
import Providers from "./Providers";

export const metadata = {
  title: "Imdb Clone",
  description: "IMDb clone website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Header />
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
