"use client";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, ArrowUpRight } from "lucide-react";

const quickLinks = [
  { label: "Individual Therapy", href: "#" },
  { label: "Couples Therapy", href: "#" },
  { label: "Consulting", href: "#" },
  { label: "Speaking & Presentations", href: "#" },
];

const specializations = [
  { label: "Anxiety", href: "#" },
  { label: "Depression", href: "#" },
  { label: "Couples & Relationships", href: "#" },
  { label: "Disability Inclusion", href: "#" },
  { label: "Stress & Burnout", href: "#" },
  { label: "Mindfulness", href: "#" },
  { label: "Positive Psychology", href: "#" },
  { label: "Resilience", href: "#" },
];

export function Footer() {
  return (
    <footer className="footer" id="site-footer">
      <div className="footer-inner">
        {/* Top CTA Band */}
        <motion.div
          className="footer-cta-band"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="footer-cta-content">
            <h2 className="footer-cta-title">
              A More Meaningful & Satisfying Life Awaits
            </h2>
            <p className="footer-cta-sub">
              Contact us today to request a phone consultation, schedule a
              session, or learn more about our services.
            </p>
          </div>
          <div className="footer-cta-buttons">
            <a href="#contact" className="btn-primary" id="footer-schedule">
              Schedule Now
              <ArrowUpRight size={16} />
            </a>
            <a href="tel:650-535-2633" className="btn-secondary" id="footer-call">
              <Phone size={16} />
              (650) 535-2633
            </a>
          </div>
        </motion.div>

        {/* Footer Grid */}
        <div className="footer-grid">
          {/* Brand column */}
          <div className="footer-brand">
            <div className="footer-logo">
              <span className="footer-logo-icon">HH</span>
              <span className="footer-logo-text">H. Hayward, Ph.D.</span>
            </div>
            <p className="footer-brand-desc">
              Clinical psychology, consulting, and speaking grounded in research, cultural sensitivity, and compassion. Phone & video sessions only.
            </p>
            <div className="footer-contact-list">
              <div className="footer-contact-item">
                <MapPin size={16} />
                <span>Phone & video sessions only</span>
              </div>
              <div className="footer-contact-item">
                <Phone size={16} />
                <a href="tel:650-535-2633">(650) 535-2633</a>
              </div>
              <div className="footer-contact-item">
                <Mail size={16} />
                <a href="mailto:hsien@drhsienhayward.com">
                  hsien@drhsienhayward.com
                </a>
              </div>
              <div className="footer-contact-item">
                <Clock size={16} />
                <span>Phone/video sessions by appointment</span>
              </div>
            </div>
          </div>

          {/* Services column */}
          <div className="footer-links-col">
            <h4 className="footer-col-title">Services</h4>
            <ul className="footer-link-list">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="footer-link">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Specializations column */}
          <div className="footer-links-col">
            <h4 className="footer-col-title">Specializations</h4>
            <ul className="footer-link-list">
              {specializations.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="footer-link">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick links column */}
          <div className="footer-links-col">
            <h4 className="footer-col-title">Quick Links</h4>
            <ul className="footer-link-list">
              <li><a href="#" className="footer-link">Home</a></li>
              <li><a href="#about-section" className="footer-link">About</a></li>
              <li><a href="#services-section" className="footer-link">Services</a></li>
              <li><a href="#testimonials" className="footer-link">Testimonials</a></li>
              <li><a href="#faq" className="footer-link">FAQ</a></li>
              <li><a href="#contact" className="footer-link">Contact</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} H. Hayward, Ph.D. Psychology Inc. All rights reserved.</p>
          <p>Phone & video sessions only | By appointment only</p>
        </div>
      </div>

      <style>{`
        .footer {
          background: var(--color-text);
          color: #ccc;
          position: relative;
          overflow: hidden;
        }

        .footer::before {
          content: '';
          position: absolute;
          bottom: -200px;
          left: -100px;
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, rgba(45, 125, 111, 0.1), transparent);
          border-radius: 50%;
        }

        .footer-inner {
          max-width: 1400px;
          margin: 0 auto;
          padding: var(--space-3xl) var(--space-xl) var(--space-xl);
        }

        .footer-cta-band {
          background: linear-gradient(135deg, var(--color-primary), var(--color-primary-light));
          border-radius: var(--radius-xl);
          padding: var(--space-2xl) var(--space-2xl);
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: var(--space-xl);
          margin-bottom: var(--space-3xl);
          flex-wrap: wrap;
        }

        .footer-cta-title {
          font-size: clamp(1.3rem, 2.5vw, 1.8rem);
          font-weight: 800;
          color: white;
          margin-bottom: var(--space-sm);
        }

        .footer-cta-sub {
          font-size: 0.95rem;
          color: rgba(255, 255, 255, 0.85);
          max-width: 500px;
        }

        .footer-cta-buttons {
          display: flex;
          gap: var(--space-md);
          flex-wrap: wrap;
        }

        .footer-cta-buttons .btn-primary {
          background: white;
          color: var(--color-primary);
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
        }

        .footer-cta-buttons .btn-primary:hover {
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
        }

        .footer-cta-buttons .btn-secondary {
          border-color: rgba(255, 255, 255, 0.5);
          color: white;
        }

        .footer-cta-buttons .btn-secondary:hover {
          background: rgba(255, 255, 255, 0.15);
          border-color: white;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr;
          gap: var(--space-2xl);
          padding-bottom: var(--space-2xl);
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }

        .footer-logo {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: var(--space-md);
        }

        .footer-logo-icon {
          width: 38px;
          height: 38px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, var(--color-primary), var(--color-primary-light));
          color: white;
          font-size: 0.85rem;
          font-weight: 800;
          border-radius: 10px;
        }

        .footer-logo-text {
          font-size: 1.1rem;
          font-weight: 800;
          color: white;
          font-family: var(--font-heading);
        }

        .footer-brand-desc {
          font-size: 0.9rem;
          line-height: 1.7;
          color: rgba(255, 255, 255, 0.6);
          margin-bottom: var(--space-lg);
        }

        .footer-contact-list {
          display: flex;
          flex-direction: column;
          gap: var(--space-sm);
        }

        .footer-contact-item {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.88rem;
          color: rgba(255, 255, 255, 0.6);
        }

        .footer-contact-item svg {
          color: var(--color-primary-light);
          flex-shrink: 0;
        }

        .footer-contact-item a {
          color: rgba(255, 255, 255, 0.6);
          transition: color var(--transition-fast);
        }

        .footer-contact-item a:hover {
          color: var(--color-primary-light);
        }

        .footer-col-title {
          font-size: 1rem;
          font-weight: 700;
          color: white;
          margin-bottom: var(--space-lg);
          font-family: var(--font-heading);
        }

        .footer-link-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .footer-link {
          font-size: 0.88rem;
          color: rgba(255, 255, 255, 0.5);
          transition: all var(--transition-fast);
        }

        .footer-link:hover {
          color: var(--color-primary-light);
          padding-left: 4px;
        }

        .footer-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: var(--space-lg);
          font-size: 0.82rem;
          color: rgba(255, 255, 255, 0.35);
          flex-wrap: wrap;
          gap: var(--space-sm);
        }

        @media (max-width: 968px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr;
          }

          .footer-cta-band {
            flex-direction: column;
            text-align: center;
          }

          .footer-cta-buttons {
            justify-content: center;
          }
        }

        @media (max-width: 480px) {
          .footer-grid {
            grid-template-columns: 1fr;
          }

          .footer-bottom {
            flex-direction: column;
            text-align: center;
          }
        }
      `}</style>
    </footer>
  );
}
