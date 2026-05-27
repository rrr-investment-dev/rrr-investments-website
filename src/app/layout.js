import "./globals.css";
import "@/styles/components/header.css";
import "@/styles/components/footer.css";
import "@/styles/components/form.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "RRR Investments — Alternative Investment Fund",
  description:
    "RRR Investments is a SEBI-registered Alternative Investment Fund (AIF) focused on delivering superior risk-adjusted returns through disciplined investment strategies.",
  keywords: "RRR Investments, AIF, Alternative Investment Fund, SEBI, India",
  icons: {
    icon: "/assets/Images/rrr-favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="main-container">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
