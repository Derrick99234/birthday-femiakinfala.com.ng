"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

// --- Data Structure derived from the provided text ---

const FULL_NAME = "Dr Frederick Jesugbemi Oluwafemi Akinfala";
const CURRENT_TITLE =
  "Executive Director at NELFUND | Championing Transformation across Private and Public sector";
const LINKEDIN_URL = "https://www.linkedin.com/in/dr-femiakinfala";

const SUMMARY_TEXT = `
Dr Akinfala is a seasoned professional with a diverse career spanning the Nigerian economy's public and private sectors. He currently serves as the Executive Director, Finance & Administration at the Nigerian Education Loan Fund (NELFUND). Prior to this, he was the pioneering Director of Human Resources and General Services at the Nigerian Police Trust Fund and Head of Research & Development at the Federal Inland Revenue Service (FIRS). He also dedicated a decade to academia as a lecturer at the University of Lagos. His foundation began in banking & finance at esteemed institutions including First Bank Plc, Aideas Banc Ltd, and Peninsula Credits Ltd. A key achievement includes leading a team to develop the FIRS Tax Awareness Index, a scientific and standardized measurement of tax awareness in Africa's tax administration history. Dr Akinfala's comprehensive educational background focuses on Personnel Management, Bank Fraud, and Research and Development, and he maintains active membership in numerous professional organizations globally.
`;

const EXPERIENCE_DATA = [
  {
    role: "Executive Director, Finance & Administration",
    organization: "Nigerian Education Loan Fund (NELFUND)",
    dates: "April 2024 – Present",
    location: "Federal Capital Territory, Nigeria",
    highlights: [
      "Leads strategy formulation, including Annual Budgets, Manpower, and Training Plans.",
      "Drives the development and implementation of business work plans to achieve the FUND's mandate.",
      "Monitors, evaluates, and reconciles funds received and disbursed for student loans and operations.",
      "Manages the overall credit portfolio to optimize risk-return trade-offs and implement risk mitigation techniques.",
    ],
  },
  {
    role: "Director Human Resources and General Services (Pioneering Role)",
    organization: "Nigeria Police Trust Fund",
    dates: "June 2020 – March 2024",
    highlights: [
      "Oversaw HR documentation, staff promotion, disciplinary matters, and welfare.",
      "Managed essential services including facility management, store administration, fleet control, and security provision.",
      "Prepared and implemented staff training programmes (local and international) and handled staff pensions.",
    ],
  },
  {
    role: "Deputy Director & Special Adviser to the Executive Chairman",
    organization: "Federal Inland Revenue Service (FIRS)",
    dates: "2015 – 2020",
    highlights: [
      "Responsible for sourcing donor agencies for the Service.",
      "Ensured research with potential positive impact on FIRS objectives was undertaken.",
      "Monitored and reported on business and economic activities impacting the Service's objectives.",
    ],
  },
  {
    role: "Lecturer",
    organization: "University of Lagos",
    dates: "2005 – 2015",
  },
  {
    role: "Executive Director- Treasury Operations",
    organization: "Three Stars Building Society",
    dates: "1994 – 1997",
  },
];

const PUBLICATIONS_DATA = [
  {
    title:
      "Fraudulent behavior among bank employees in Nigeria: A Psychological Analysis.",
    type: "Ph.D Thesis",
    institution: "University of Lagos",
  },
  {
    title: "The effects of fraudulent behaviour on the society.",
    type: "M.Sc Thesis",
    institution: "University of Lagos",
  },
  {
    title: "Patterns and Trends in Bank Frauds in Nigeria: 1990-2014",
    type: "Research Paper",
    institution: "Academic/Professional",
  },
  {
    title:
      "Dimensions and Implications of Corruption in the Nigerian Police Force",
    type: "Article/Journal",
    institution: "Academic/Professional",
  },
  {
    title:
      "Neuroticism/Extraversion as a measure of involvement in Alcohol use.",
    type: "B.Sc Thesis",
    institution: "University of Ibadan",
  },
];

const EDUCATION_DATA = [
  {
    institution: "University of Lagos",
    degree: "Doctor of Philosophy - PhD, Psychology",
    dates: "1995 – 2005",
  },
  {
    institution: "University of Lagos",
    degree: "Master of Science - MS, Psychology",
    dates: "1990 – 1991",
  },
  {
    institution: "University of Ibadan",
    degree: "Bachelor of Science - BS, Psychology",
    dates: "1985 – 1988",
  },
];

// Replaced for a professional bio theme
const ATTRIBUTES_SUMMARY = [
  {
    icon: "🎓",
    title: "Advanced Psychology",
    description:
      "Ph.D. and M.Sc. in Psychology focused on complex societal and organizational behavior (Fraud, Corruption).",
  },
  {
    icon: "🏢",
    title: "Public Sector Transformation",
    description:
      "Pioneering leadership roles at NELFUND and Nigeria Police Trust Fund, driving key organizational setup and HR strategies.",
  },
  {
    icon: "💡",
    title: "Research & Innovation",
    description:
      "Developer of the FIRS Tax Awareness Index and extensive publication history in forensic psychology and banking fraud.",
  },
  {
    icon: "💼",
    title: "Fellowships & Credentials",
    description:
      "FIOARM, FCMA, APA, MIMC, MCIHRM, CIPM — demonstrating commitment to management, risk, and HR professionalism.",
  },
];

// const IMAGES: BioImage[] = [
//   {
//     src: "/images/1.jpg",
//     alt: "The visionary. A decisive portrait embodying leadership and clarity of purpose.", // New theme: Vision
//     rotation: "rotate-3",
//   },
//   {
//     src: "/images/2.jpg",
//     alt: "The Strategist. Deep in thought, planning the next major organizational milestone.", // New theme: Strategy/Planning
//     rotation: "-rotate-2",
//   },
//   {
//     src: "/images/3.jpg",
//     alt: "The Collaborator. Engaging with the team, fostering a culture of joint success.", // New theme: Collaboration/Teamwork
//     rotation: "rotate-1",
//   },
//   {
//     src: "/images/4.jpg",
//     alt: "The Mentor. Sharing expertise and inspiring the next generation of leaders.", // New theme: Mentorship/Teaching
//     rotation: "-rotate-3",
//   },
//   {
//     src: "/images/5.jpg",
//     alt: "The Innovator. Celebrating the launch or completion of a landmark project.", // New theme: Achievement/Innovation
//     rotation: "rotate-2",
//   },
//   {
//     src: "/images/6.jpg",
//     alt: "The Legacy. Reflecting on years of dedication and profound professional impact.", // New theme: Reflection/Legacy
//     rotation: "-rotate-1",
//   },
// ];

const IMAGES = [
  {
    src: "/images/1.jpg",
    alt: "Leading the Nigerian Education Loan Fund, focusing on finance and administration strategy.",
    rotation: "rotate-3",
  },
  {
    src: "/images/2.jpg",
    alt: "Pioneering the Director of HR role at the Nigeria Police Trust Fund (2020-2024).",
    rotation: "-rotate-2",
  },
  {
    src: "/images/3.jpg",
    alt: "Heading Research & Development at the Federal Inland Revenue Service (FIRS).",
    rotation: "rotate-1",
  },
  {
    src: "/images/4.jpg",
    alt: "Ten years serving as a Lecturer at the University of Lagos.",
    rotation: "-rotate-3",
  },
  {
    src: "/images/5.jpg",
    alt: "Early career experience in banking and financial institutions.",
    rotation: "rotate-2",
  },
  {
    src: "/images/6.jpg",
    alt: "Participating in international training and conferences on leadership and finance.",
    rotation: "-rotate-1",
  },
];

// --- Utility Components ---

const FloatingBalloon = ({
  color,
  position,
  delay,
}: {
  color: string;
  position: string;
  delay: string;
}) => (
  <div
    className={`hidden lg:block absolute w-16 h-20 rounded-t-full shadow-lg z-0 animate-float-slow ${position}`}
    style={{
      backgroundColor: color,
      animationDelay: delay,
      border: "3px solid rgba(255, 255, 255, 0.2)",
    }}
  >
    <div className="absolute left-1/2 transform -translate-x-1/2 bottom-[-15px] w-1 h-3 bg-neutral-700/50 rounded-b-sm"></div>
    <div className="absolute left-1/2 transform -translate-x-1/2 bottom-[-25px] w-px h-20 bg-neutral-700/50"></div>
  </div>
);

// LinkedIn Icon SVG
const LinkedInIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-10 h-10 fixed bottom-4 right-10 text-amber-500 hover:text-amber-400 transition-colors duration-300 cursor-pointer"
    style={{ zIndex: 50 }}
  >
    <path d="M20.5 2H3.5A1.5 1.5 0 0 0 2 3.5v17A1.5 1.5 0 0 0 3.5 22h17a1.5 1.5 0 0 0 1.5-1.5v-17A1.5 1.5 0 0 0 20.5 2ZM8 19H5V8h3v11Zm-1.5-12a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3ZM19 19h-3v-5c0-1.2-.6-2.5-2-2.5-1.5 0-2 1.2-2 2.5v5h-3V8h3v1.7c.6-1.1 1.7-2 3-2 2.7 0 4 1.8 4 4.3V19Z" />
  </svg>
);

// --- Main Component ---

const BiographyPage: React.FC = () => {
  const confettiRef = useRef<HTMLDivElement>(null);
  const [stars, setStars] = useState<
    { top: string; left: string; delay: string }[]
  >([]);

  // Initialize background stars
  useEffect(() => {
    const generated = Array.from({ length: 50 }, () => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 5}s`,
    }));
    setStars(generated);
  }, []);

  // Initialize confetti/sparkle effect
  useEffect(() => {
    const container = confettiRef.current;
    if (!container) return;

    const colors = ["#FCD34D", "#10B981", "#3B82F6", "#EF4444", "#EC4899"];
    const count = 50;

    const createConfetti = () => {
      const confetti = document.createElement("div");
      confetti.className = `absolute w-2 h-2 rounded-full opacity-0 animate-confetti`;
      confetti.style.backgroundColor =
        colors[Math.floor(Math.random() * colors.length)];
      confetti.style.left = `${Math.random() * 100}vw`;
      confetti.style.animationDelay = `-${Math.random() * 5}s`;
      confetti.style.animationDuration = `${2 + Math.random() * 3}s`;
      container.appendChild(confetti);
      setTimeout(() => confetti.remove(), 6000);
    };

    for (let i = 0; i < count; i++) setTimeout(createConfetti, i * 100);

    const interval = setInterval(() => {
      for (let i = 0; i < 5; i++) createConfetti();
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-neutral-900 text-white font-sans overflow-hidden relative">
      {/* --- Custom CSS Animations --- */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap');
        body { font-family: 'Inter', sans-serif; }
        @keyframes confetti-fall {
          0% { transform: translateY(-100vh) rotate(0deg); opacity: 1; }
          100% { transform: translateY(100vh) rotate(720deg); opacity: 0.8; }
        }
        .animate-confetti { animation: confetti-fall linear infinite; }
        @keyframes fade-in {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes twinkle { 0%, 100% { opacity: 0.3; } 50% { opacity: 1; } }
        .star { animation: twinkle 4s ease-in-out infinite; }
        @keyframes glow-pulse {
          0%, 100% { filter: drop-shadow(0 0 10px rgba(252, 211, 77, 0.6)); }
          50% { filter: drop-shadow(0 0 20px rgba(252, 211, 77, 1)); transform: scale(1.01); }
        }
        .animate-glow-pulse { animation: glow-pulse 4s ease-in-out infinite; }
        @keyframes subtle-pop {
          0% { transform: scale(1); } 50% { transform: scale(1.01); } 100% { transform: scale(1); }
        }
        .animate-subtle-pop { animation: subtle-pop 3s ease-in-out 2s 1; }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0) rotate(2deg); }
          50% { transform: translateY(-20px) rotate(-2deg); }
        }
        .animate-float-slow { animation: float-slow 15s ease-in-out infinite; }
        .section-fade { opacity: 0; animation: fade-in 1s ease-out forwards; }
      `}</style>

      {/* Confetti and Stars Background */}
      <div
        ref={confettiRef}
        className="fixed inset-0 pointer-events-none z-50"
      ></div>
      <div className="absolute inset-0 z-0">
        {stars.map((star, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-yellow-400 star"
            style={{
              top: star.top,
              left: star.left,
              animationDelay: star.delay,
            }}
          />
        ))}
      </div>
      <FloatingBalloon color="#3B82F6" position="top-10 left-10" delay="0s" />
      <FloatingBalloon
        color="#EF4444"
        position="bottom-20 right-10"
        delay="4s"
      />

      <main className="relative z-10 p-4 md:p-12 lg:p-20">
        {/* --- HERO SECTION: Title and Main Message --- */}
        <section className="text-center pt-16 pb-10 sm:pt-24 sm:pb-16">
          <h1
            className="text-6xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight animate-glow-pulse"
            style={{
              color: "#FCD34D", // Gold
              textShadow: "0 0 10px rgba(252, 211, 77, 0.8)",
            }}
          >
            {FULL_NAME}
          </h1>
          <h2
            className="text-xl sm:text-xl lg:text-2xl font-light mt-4 tracking-wide text-neutral-300 section-fade"
            style={{ animationDelay: "0.8s" }}
          >
            <span className="font-semibold text-amber-400">
              {CURRENT_TITLE}
            </span>
          </h2>
        </section>

        {/* --- SUMMARY SECTION --- */}
        <section
          className="max-w-5xl mx-auto my-12 p-8 md:p-12 bg-neutral-800/80 backdrop-blur-sm rounded-xl shadow-2xl border-t-4 border-amber-500 section-fade"
          style={{ animationDelay: "1.5s" }}
        >
          <h3 className="text-3xl font-bold text-amber-500 mb-6">
            Executive Summary
          </h3>
          <p className="text-lg leading-relaxed text-neutral-200 whitespace-pre-line">
            {SUMMARY_TEXT.trim()}
          </p>
        </section>

        {/* --- KEY EXPERTISE SECTION --- */}
        <section
          className="max-w-6xl mx-auto my-20 pt-10 section-fade"
          style={{ animationDelay: "2.0s" }}
        >
          <h3 className="text-4xl font-bold text-center mb-12 text-amber-500">
            Key Expertise & Credentials
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {ATTRIBUTES_SUMMARY.map((value, index) => (
              <div
                key={index}
                className="p-4 sm:p-6 bg-neutral-800 rounded-lg text-center shadow-xl transition duration-300 transform hover:bg-amber-500/10 hover:shadow-amber-500/50 hover:scale-[1.03]"
              >
                <p className="text-4xl mb-3">{value.icon}</p>
                <h4 className="text-lg font-bold text-amber-400 mb-2">
                  {value.title}
                </h4>
                <p className="text-sm text-neutral-400">{value.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* --- EXPERIENCE SECTION --- */}
        <section
          className="max-w-5xl mx-auto my-20 pt-10 section-fade"
          style={{ animationDelay: "2.5s" }}
        >
          <h3 className="text-4xl font-bold text-center mb-12 text-amber-500">
            Professional Experience
          </h3>
          <div className="space-y-12">
            {EXPERIENCE_DATA.map((job, index) => (
              <div
                key={index}
                className="p-6 bg-neutral-800 rounded-xl shadow-xl border-l-4 border-amber-600 transition duration-300 hover:border-amber-400"
              >
                <div className="flex justify-between items-start flex-wrap mb-2">
                  <h4 className="text-xl font-bold text-white leading-tight">
                    {job.role}
                  </h4>
                  <p className="text-sm font-medium text-amber-400">
                    {job.dates}
                  </p>
                </div>
                <p className="text-lg italic text-neutral-300 mb-3">
                  {job.organization}
                </p>
                {job.highlights && job.highlights.length > 0 && (
                  <ul className="list-disc list-inside space-y-1 text-neutral-400 ml-4">
                    {job.highlights.map((highlight, hIndex) => (
                      <li key={hIndex} className="text-sm">
                        {highlight}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* --- EDUCATION & PUBLICATIONS SECTION --- */}
        <section
          className="max-w-5xl mx-auto my-20 pt-10 grid grid-cols-1 md:grid-cols-2 gap-12 section-fade"
          style={{ animationDelay: "3.0s" }}
        >
          {/* Education */}
          <div>
            <h3 className="text-3xl font-bold text-amber-500 mb-8 border-b border-amber-600/50 pb-3">
              Academic Background
            </h3>
            <div className="space-y-6">
              {EDUCATION_DATA.map((edu, index) => (
                <div
                  key={index}
                  className="bg-neutral-800 p-4 rounded-lg shadow-md"
                >
                  <p className="text-lg font-semibold text-white">
                    {edu.degree}
                  </p>
                  <p className="text-md text-amber-400">{edu.institution}</p>
                  <p className="text-sm text-neutral-400">{edu.dates}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Publications */}
          <div>
            <h3 className="text-3xl font-bold text-amber-500 mb-8 border-b border-amber-600/50 pb-3">
              Selected Publications
            </h3>
            <div className="space-y-6">
              {PUBLICATIONS_DATA.map((pub, index) => (
                <div
                  key={index}
                  className="bg-neutral-800 p-4 rounded-lg shadow-md"
                >
                  <p className="text-md font-medium text-white leading-snug">
                    <span className="font-bold text-amber-400 mr-2">
                      [{pub.type}]
                    </span>
                    {pub.title}
                  </p>
                  <p className="text-sm italic text-neutral-400 mt-1">
                    Affiliation: {pub.institution}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- GALLERY SECTION (Retained for visual break) --- */}
        <section
          className="mt-20 section-fade"
          style={{ animationDelay: "3.5s" }}
        >
          <h3 className="text-4xl font-bold text-center mb-12 text-amber-500">
            Career Moments
          </h3>
          <div
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 max-w-7xl mx-auto"
            style={{ perspective: "1000px" }}
          >
            {IMAGES.map((img, index) => (
              <div
                key={index}
                className={`relative group overflow-hidden rounded-xl shadow-xl transition-transform duration-500 hover:scale-[1.05] hover:shadow-2xl hover:shadow-amber-500/50 ${img.rotation}`}
              >
                <Image
                  width={600}
                  height={600}
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover aspect-square transition duration-300 group-hover:brightness-110"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-2">
                  <p className="text-center text-xs font-light italic text-neutral-100">
                    {img.alt}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* --- CLOSING MESSAGE / CALL TO ACTION --- */}
        <a target="_blank" href={LINKEDIN_URL} rel="noopener noreferrer">
          <LinkedInIcon />
        </a>
        <section
          className="text-center mt-24 pt-10 pb-16 border-t border-amber-600/50 section-fade"
          style={{ animationDelay: "4.0s" }}
        >
          <p className="text-3xl font-semibold mb-3">
            Connecting Public Service, Finance, and Research
          </p>
          <p className="text-xl text-amber-500">
            Learn more about Dr. Akinfala&apos;s contributions on LinkedIn.
          </p>
        </section>
      </main>
    </div>
  );
};

export default BiographyPage;
