import Nav from "@components/Nav";
import "@styles/globals.css";

export const metadata = {
  title: "PROMPTopia",
  description: "Discover and share AI Prompts",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="gradient" />
        </div>
        <main className="app">
          <Nav />
          {children}
        </main>
      </body>
    </html>
  );
}