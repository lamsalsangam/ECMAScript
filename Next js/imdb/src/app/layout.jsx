import Header from "./components/Header";
import "./globals.css";

export const metadata = {
  title: "Imdb Clone",
  description: "IMDb clone website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
