"use client";

import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { personalInfo } from "@/data/portfolio";
import {
  Linkedin,
  Github,
  Twitter,
  Instagram,
  Facebook,
  Heart,
} from "lucide-react";

const socialIcons = {
  linkedin: Linkedin,
  github: Github,
  twitter: Twitter,
  instagram: Instagram,
  facebook: Facebook,
};

export function Footer() {
  const { t } = useTranslation("common");

  return (
    <footer className="bg-muted py-12 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-gradient mb-4">
              Ahmed Saeed
            </h3>
            <p className="text-muted-foreground">{personalInfo.bio}</p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h4 className="text-lg font-semibold text-foreground mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {["home", "about", "portfolio", "contact"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item}`}
                    className="text-muted-foreground hover:text-primary transition-colors"
                    onClick={(e) => {
                      e.preventDefault();
                      const element = document.querySelector(`#${item}`);
                      if (element) {
                        element.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                  >
                    {t(`nav.${item}`)}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <h4 className="text-lg font-semibold text-foreground mb-4">
              Contact
            </h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>ahmedsaeed2515l@gmail.com</li>
              <li>+20 112 896 8983</li>
              <li>{personalInfo.location}</li>
            </ul>

            {/* Social Links */}
            <div className="flex space-x-4 mt-6">
              {Object.entries(personalInfo.social).map(([platform, url]) => {
                const IconComponent =
                  socialIcons[platform as keyof typeof socialIcons];
                return (
                  <motion.a
                    key={platform}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 bg-background text-muted-foreground rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <IconComponent className="w-4 h-4" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <p className="text-muted-foreground text-sm flex items-center">
            © {new Date().getFullYear()} Ahmed Saeed. Let’s build something
            amazing together!
            <Heart className="w-4 h-4 text-red-500 mx-2" />
          </p>

          <p className="text-muted-foreground text-sm mt-4 md:mt-0">
            Made with Next.js, TypeScript & Framer Motion
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
