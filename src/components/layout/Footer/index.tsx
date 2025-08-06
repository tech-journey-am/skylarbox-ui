import React from "react";
import NewsletterSignup from "./NewsletterSignup";
import CompanyInfo from "./CompanyInfo";
import QuickLinks from "./QuickLinks";
import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";
import { FooterBottom } from "./FooterBottom";

const Footer = () => {
  return (
    <footer
      className="bg-white border-t border-gray-200"
      style={{ borderTop: "1px solid #e5e7eb" }}
    >
      <div className="container mx-auto" style={{ padding: "0 1vw" }}>
        {/* Main Footer Content */}
        <div className="py-12" style={{ padding: "3vw 0" }}>
          <div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            style={{ gap: "2vw" }}
          >
            <CompanyInfo />
            <QuickLinks />
            <ContactInfo />
            <ContactForm />
          </div>

          {/* Newsletter Section */}
          <div
            className="mt-12 pt-8 border-t border-gray-200"
            style={{
              marginTop: "3vw",
              paddingTop: "2vw",
              borderTop: "1px solid #e5e7eb",
            }}
          >
            <NewsletterSignup />
          </div>
        </div>

        {/* Footer Bottom */}
        <FooterBottom />
      </div>
    </footer>
  );
};

export default Footer;

