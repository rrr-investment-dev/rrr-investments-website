import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-brand-section">
            <div className="footer-brand">
              <Image
                src="/assets/Images/RRR 3d logo lg.png"
                alt="RRR Logo"
                width={60}
                height={60}
                className="footer-logo"
              />
              <div className="footer-text">
                <Image
                  src="/assets/Images/rrr_text_logo.svg"
                  alt=""
                  width={160}
                  height={160}
                  className="footer-text-logo"
                />
              </div>
            </div>
          </div>

          <div className="footer-links-section">
            <div className="footer-links">
              <div className="footer-column">
                <h3>RRR Investments</h3>
                <Link href="/" id="footer-home-link">About</Link>
                <Link href="/#strategy">Strategy</Link>
                <Link href="/teams" id="footer-team-link">Team</Link>
              </div>
              <div className="footer-column">
                <h3>Contacts</h3>
                <a
                  href="https://www.linkedin.com/in/rrr-investments-26924a349/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
                <Link href="#legal">Legal</Link>
                <Link href="#disclaimer">Disclaimer</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <div className="footer-bottom-bar">
        <p>
          SEBI Registration Number:{" "}
          <strong>IN/AIF2/26-27/2141</strong>
        </p>
      </div>
    </>
  );
}
