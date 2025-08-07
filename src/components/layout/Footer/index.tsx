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
      <div className='z-0 px-vw-4 py-vw-2 w-full'>
        <NewsletterSignup />

        <hr className='my-vw-2 w-full border border-solid border-brand-lavender/20 min-h-px' />

        <div className='flex flex-wrap gap-vw justify-between items-start w-full'>
          <CompanyInfo />
          <QuickLinks />
          <ContactInfo />
          <ContactForm />
        </div>
      </div>

      <hr className='mt-vw-2 w-full border border-solid border-brand-lavender/20 min-h-px' />

      <FooterBottom />
    </footer>
  );
}

export default Footer;
