import * as React from "react";
import { NewsletterSignup } from "./NewsletterSignup";
import { CompanyInfo } from "./CompanyInfo";
import { QuickLinks } from "./QuickLinks";
import { ContactInfo } from "./ContactInfo";
import { ContactForm } from "./ContactForm";
import { FooterBottom } from "./FooterBottom";

interface FooterProps {}

export function Footer({}: FooterProps) {
  return (
    <footer className='relative bg-gradient-to-br from-brand-cream to-brand-sky/30'>
      <div className='z-0 px-4 md:px-vw-4 py-4 md:py-vw-2 w-full'>
        <NewsletterSignup />

        <hr className='my-4 md:my-vw-2 w-full border border-solid border-brand-lavender/20 min-h-px' />

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-vw justify-between items-start w-full'>
          <CompanyInfo />
          <QuickLinks />
          <ContactInfo />
          <ContactForm />
        </div>
      </div>

      <hr className='mt-4 md:mt-vw-2 w-full border border-solid border-brand-lavender/20 min-h-px' />

      <FooterBottom />
    </footer>
  );
}

export default Footer;
