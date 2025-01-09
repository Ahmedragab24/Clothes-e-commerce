import Link from "next/link";
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import NewsletterSignup from "./components/NewsLetterSingUp";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container px-4 py-12 mx-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Shop</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/products/new-arrivals"
                  className="transition-colors hover:text-primary"
                >
                  New Arrivals
                </Link>
              </li>
              <li>
                <Link
                  href="/products/bestsellers"
                  className="transition-colors hover:text-primary"
                >
                  Bestsellers
                </Link>
              </li>
              <li>
                <Link
                  href="/products/sale"
                  className="transition-colors hover:text-primary"
                >
                  Sale
                </Link>
              </li>
              <li>
                <Link
                  href="/products/collections"
                  className="transition-colors hover:text-primary"
                >
                  Collections
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">About</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="transition-colors hover:text-primary"
                >
                  Our Story
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="transition-colors hover:text-primary"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="/sustainability"
                  className="transition-colors hover:text-primary"
                >
                  Sustainability
                </Link>
              </li>
              <li>
                <Link
                  href="/press"
                  className="transition-colors hover:text-primary"
                >
                  Press
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Customer Care</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/contact"
                  className="transition-colors hover:text-primary"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="transition-colors hover:text-primary"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/shipping"
                  className="transition-colors hover:text-primary"
                >
                  Shipping & Returns
                </Link>
              </li>
              <li>
                <Link
                  href="/size-guide"
                  className="transition-colors hover:text-primary"
                >
                  Size Guide
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Stay Connected</h3>
            <NewsletterSignup />
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors text-secondary-foreground hover:text-primary"
              >
                <Facebook size={24} />
                <span className="sr-only">Facebook</span>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors text-secondary-foreground hover:text-primary"
              >
                <Twitter size={24} />
                <span className="sr-only">Twitter</span>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors text-secondary-foreground hover:text-primary"
              >
                <Instagram size={24} />
                <span className="sr-only">Instagram</span>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors text-secondary-foreground hover:text-primary"
              >
                <Youtube size={24} />
                <span className="sr-only">YouTube</span>
              </a>
            </div>
          </div>
        </div>
        <div className="pt-8 mt-12 border-t border-secondary-foreground/10">
          <p className="text-sm text-center">
            © 2023 Your Store Name. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
