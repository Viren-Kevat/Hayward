"use client";
import { motion } from "framer-motion";
import {
  User,
  Users,
  Heart,
  Brain,
  GraduationCap,
  Briefcase,
  Baby,
  Shield,
} from "lucide-react";

const services = [
  {
    icon: User,
    title: "Individual Therapy",
    tagline: "A Happier, Healthier You",
    description:
      "Therapy has the power to illuminate what is truly possible for an individual, and helps clients access their inherent strengths and move closer to their full potential.",
  },
  {
    icon: Heart,
    title: "Couples Therapy",
    tagline: "Renew Your Connection",
    description:
      "Therapy for couples that is rooted in the science of attachment and uses gold standard interventions to enable fundamentally different ways of relating to one another.",
  },
  {
    icon: Briefcase,
    title: "Consulting",
    tagline: "Let's Put Our Minds Together",
    description:
      "Topics include applying to and making it through graduate school programs in psychology, writing the dissertation, clinical internship applications, starting a private practice, disability inclusion, and more.",
  },
  {
    icon: GraduationCap,
    title: "Speaking & Presentations",
    tagline: "Knowledge is Power",
    description:
      "From mental health to disability as diversity — engaging Lunch & Learn events, podcast interviews, Grand Rounds presentations, and didactic lectures on stress, mindfulness, ableism, and resilience.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export function ServicesSection() {
  return (
    <section className="services-section" id="services-section">
      <div className="section-container">
        <motion.div
          className="services-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="services-label">What I Offer</span>
          <h2 className="section-title">
            Therapy, Consulting &{" "}
            <span className="gradient-text">Speaking</span>
          </h2>
          <p className="section-subtitle" style={{ margin: "0 auto" }}>
            Dr. H'Sien Hayward provides evidence-based therapy, consulting, and speaking for adults, couples, and professionals — by phone and video.
          </p>
        </motion.div>

        <motion.div
          className="services-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              className="service-card"
              variants={cardVariants}
              whileHover={{ y: -8, boxShadow: "0 20px 50px rgba(0,0,0,0.1)" }}
            >
              <div className="service-icon">
                <service.icon size={24} />
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-tagline">{service.tagline}</p>
              <p className="service-description">{service.description}</p>
              <a href="#" className="service-link">
                Learn More →
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <style>{`
        .services-section {
          background: var(--color-bg-alt);
          position: relative;
          overflow: hidden;
        }

        .services-section::before {
          content: '';
          position: absolute;
          top: -200px;
          right: -200px;
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(45, 125, 111, 0.06), transparent);
          border-radius: 50%;
        }

        .services-header {
          text-align: center;
          margin-bottom: var(--space-3xl);
        }

        .services-label {
          display: inline-block;
          padding: 6px 16px;
          background: var(--color-primary-50);
          color: var(--color-primary);
          font-size: 0.85rem;
          font-weight: 600;
          border-radius: var(--radius-full);
          margin-bottom: var(--space-md);
          letter-spacing: 0.03em;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: var(--space-lg);
        }

        .service-card {
          background: var(--color-surface);
          border: 1px solid var(--color-border);
          border-radius: var(--radius-lg);
          padding: var(--space-xl);
          transition: all var(--transition-base);
          display: flex;
          flex-direction: column;
          gap: var(--space-sm);
          cursor: pointer;
        }

        .service-card:hover {
          border-color: var(--color-primary-100);
        }

        .service-icon {
          width: 52px;
          height: 52px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, var(--color-primary-50), var(--color-primary-100));
          border-radius: 14px;
          color: var(--color-primary);
          margin-bottom: var(--space-xs);
        }

        .service-title {
          font-size: 1.15rem;
          font-weight: 700;
          color: var(--color-text);
        }

        .service-tagline {
          font-size: 0.85rem;
          color: var(--color-primary);
          font-weight: 600;
          letter-spacing: 0.01em;
        }

        .service-description {
          font-size: 0.9rem;
          color: var(--color-text-secondary);
          line-height: 1.6;
          flex: 1;
        }

        .service-link {
          font-size: 0.88rem;
          font-weight: 600;
          color: var(--color-primary);
          display: inline-flex;
          align-items: center;
          gap: 4px;
          padding-top: var(--space-sm);
          transition: gap var(--transition-fast);
        }

        .service-link:hover {
          gap: 8px;
        }

        @media (max-width: 768px) {
          .services-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
