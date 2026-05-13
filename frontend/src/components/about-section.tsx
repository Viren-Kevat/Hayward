import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import { Heart, Users, Brain } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import aboutOffice from "@/assets/img-2.jpg";
import aboutSession from "@/assets/about-session.png";
import aboutTeam from "@/assets/about-team.png";

interface TabContent {
  badge: string;
  title: string;
  description: string;
  buttonText: string;
  imageSrc: string;
  imageAlt: string;
}

interface Tab {
  value: string;
  icon: React.ReactNode;
  label: string;
  content: TabContent;
}

interface AboutSectionProps {
  badge?: string;
  heading?: string;
  description?: React.ReactNode;
  tabs?: Tab[];
}

const AboutSection = ({
  badge = "About Dr. H'Sien Hayward, Ph.D.",
  heading = "Passionate about helping adults and couples transform and thrive.",
  description = (
    <>
     <span className="gradient-text">Dr. H’Sien Hayward</span> is passionate about helping adult individuals and couples transform and thrive. She offers culturally-sensitive, evidence-based therapy that is tailored to each person’s strengths and goals.
    </>
  ),
  tabs = [
    {
      value: "tab-1",
      icon: <Heart className="h-auto w-4 shrink-0" />,
      label: "Clinical Care",
      content: {
        badge: "Insight-Oriented & Skills-Based",
        title: "Helping clients access their inherent strengths.",
        description:
          "Dr. Hayward integrates insight-oriented and skills-based approaches, using CBT, ACT, and DBT to help clients gain clarity, build new skills, and move toward a life aligned with their values and full potential.",
        buttonText: "Learn More",
        imageSrc: aboutOffice,
        imageAlt:
          "Therapy session after-hours with a calm consultation atmosphere",
      },
    },
    {
      value: "tab-2",
      icon: <Users className="h-auto w-4 shrink-0" />,
      label: "Education",
      content: {
        badge: "Harvard & Stanford",
        title: "Deep clinical and academic training.",
        description:
          "PhD from Harvard University, postdoctoral respecialization at California School of Professional Psychology, and clinical training at VA Medical Centers, Kaiser Permanente, and Stanford University Medical Center.",
        buttonText: "View Credentials",
        imageSrc: aboutSession,
        imageAlt:
          "Professional academic research environment and clinical study setting",
      },
    },
    {
      value: "tab-3",
      icon: <Brain className="h-auto w-4 shrink-0" />,
      label: "Experience",
      content: {
        badge: "Consulting & Speaking",
        title: "Trusted by clients and organizations.",
        description:
          "Dr. Hayward supports individuals and couples through therapy, consulting on graduate school, private practice, and disability inclusion, and delivers engaging speaking engagements on stress, mindfulness, ableism, and resilience.",
        buttonText: "Contact for Speaking",
        imageSrc: aboutTeam,
        imageAlt:
          "Consulting and collaborative discussion between professionals",
      },
    },
  ],
}: AboutSectionProps) => {
  return (
    <section className="about-section" id="about-section">
      <div className="about-container">
        <div className="about-header">
          <Badge variant="outline" className="about-badge">
            {badge}
          </Badge>
          <h2 className="about-heading">{heading}</h2>
          <p className="about-description">{description}</p>
        </div>
        <Tabs defaultValue={tabs[0].value} className="about-tabs">
          <TabsList className="about-tabs-list">
            {tabs.map((tab) => (
              <TabsTrigger
                key={tab.value}
                value={tab.value}
                className="about-tab-trigger"
              >
                {tab.icon} {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>
          <div className="about-tabs-content-wrapper">
            {tabs.map((tab) => (
              <TabsContent
                key={tab.value}
                value={tab.value}
                className="about-tab-content"
              >
                <div className="about-tab-text">
                  <Badge variant="outline" className="about-content-badge">
                    {tab.content.badge}
                  </Badge>
                  <h3 className="about-tab-title">{tab.content.title}</h3>
                  <p className="about-tab-description">
                    {tab.content.description}
                  </p>
                  <Button className="about-tab-button" size="lg">
                    {tab.content.buttonText}
                  </Button>
                </div>
                <div className="about-tab-image-wrapper">
                  <img
                    src={tab.content.imageSrc}
                    alt={tab.content.imageAlt}
                    className="about-tab-image"
                  />
                </div>
              </TabsContent>
            ))}
          </div>
        </Tabs>
      </div>

      <style>{`
        .about-section {
          padding: 5rem 0;
          background-color: var(--color-bg);
          font-family: var(--font-sans);
        }

        .about-container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 var(--space-xl);
        }

        .about-header {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
          text-align: center;
          margin-bottom: 2.5rem;
        }

        .about-badge {
          font-family: var(--font-sans);
          font-size: 0.8rem;
          font-weight: 700;
          letter-spacing: 0.04em;
          color: var(--color-primary);
          border-color: var(--color-primary-100);
          background: var(--color-primary-50);
          padding: 6px 18px;
        }

        .about-heading {
          max-width: 780px;
          font-size: clamp(1.7rem, 3.5vw, 2.5rem);
          font-weight: 700;
          color: var(--color-text);
          line-height: 1.2;
          letter-spacing: -0.01em;
        }

        .about-description {
          color: var(--color-text-secondary);
          font-size: clamp(0.95rem, 1.5vw, 1.1rem);
          max-width: 600px;
          line-height: 1.7;
        }

        /* === Tabs List === */
        .about-tabs {
          margin-top: 2rem;
        }

        .about-tabs-list {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
        }

        .about-tab-trigger {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 22px;
          border-radius: var(--radius-xl);
          font-size: 0.9rem;
          font-weight: 600;
          font-family: var(--font-sans);
          color: var(--color-text-muted);
          background: transparent;
          border: 1.5px solid transparent;
          cursor: pointer;
          transition: all var(--transition-base);
        }

        .about-tab-trigger:hover {
          color: var(--color-primary);
          background: var(--color-primary-50);
        }

        .about-tab-trigger[data-state="active"] {
          color: var(--color-primary);
          background: var(--color-primary-50);
          border-color: var(--color-primary-100);
          box-shadow: var(--shadow-sm);
        }

        .about-tab-trigger svg {
          color: var(--color-primary);
        }

        /* === Tab Content === */
        .about-tabs-content-wrapper {
          margin-top: 2rem;
          background: var(--color-bg-alt);
          border-radius: var(--radius-xl);
          padding: clamp(1.5rem, 4vw, 4rem);
          border: 1px solid var(--color-border);
        }

        .about-tab-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          align-items: center;
        }

        .about-tab-content[data-state="inactive"] {
          display: none;
        }

        .about-tab-text {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .about-content-badge {
          width: fit-content;
          font-size: 0.75rem;
          font-weight: 700;
          font-family: var(--font-sans);
          color: var(--color-primary-dark);
          border-color: var(--color-primary-100);
          background: var(--color-surface);
          padding: 5px 14px;
        }

        .about-tab-title {
          font-size: clamp(1.5rem, 3vw, 2.4rem);
          font-weight: 700;
          color: var(--color-text);
          line-height: 1.2;
          letter-spacing: -0.01em;
        }

        .about-tab-description {
          color: var(--color-text-secondary);
          font-size: clamp(0.95rem, 1.2vw, 1.08rem);
          line-height: 1.8;
        }

        .about-tab-button {
          width: fit-content;
          margin-top: 0.5rem;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 12px 28px;
          background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-light) 100%);
          color: white;
          font-weight: 600;
          font-size: 0.95rem;
          font-family: var(--font-sans);
          border: none;
          border-radius: var(--radius-full);
          cursor: pointer;
          transition: all var(--transition-base);
          box-shadow: 0 4px 15px rgba(45, 125, 111, 0.3);
          letter-spacing: 0.01em;
        }

        .about-tab-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(45, 125, 111, 0.4);
        }

        .about-tab-button:active {
          transform: translateY(0);
        }

        /* === Image === */
        .about-tab-image-wrapper {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .about-tab-image {
          width: 100%;
          max-height: 420px;
          object-fit: cover;
          border-radius: var(--radius-lg);
          box-shadow: var(--shadow-lg);
        }

        /* === Responsive === */
        @media (max-width: 868px) {
          .about-tab-content {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .about-tab-text {
            text-align: center;
            align-items: center;
          }

          .about-tab-image {
            max-height: 320px;
          }
        }

        @media (max-width: 540px) {
          .about-section {
            padding: 3rem 0;
          }

          .about-tabs-list {
            flex-direction: column;
            gap: 0.5rem;
          }

          .about-tab-trigger {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
};

export { AboutSection };
