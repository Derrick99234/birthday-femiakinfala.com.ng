"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

// --- Data Structure derived from the provided text ---

const FULL_NAME = "Dr Frederick Jesugbemi Oluwafemi Akinfala";
const CURRENT_TITLE =
  "Executive Director of Finance and Administration at the Nigeria Education Loan Fund (NELFUND)";
const LINKEDIN_URL = "https://www.linkedin.com/in/dr-femiakinfala";

const SUMMARY_TEXT = `Dr Frederick Jesugbemi Oluwafemi Akinfala is a seasoned professional with a diverse career in the Nigerian economy's public and private sectors. Currently, he holds the position of Executive Director of Finance and Administration at the Nigeria Education Loan Fund (NELFUND), having previously served as the pioneering Director of Human Resources and General Services at the Nigerian Police Trust Fund. Before his role at the Nigerian Police Trust Fund, Dr Akinfala held the position of Head of Research and Development at the Federal Inland Revenue Service. In addition to his professional career, he has contributed to academia as a lecturer at the University of Lagos.

Dr Akinfala's career journey began in banking and finance, working at esteemed institutions, including First Bank Plc, Aideas Banc Ltd, and Peninsula Credits Ltd. He later served as an Executive Director (Treasury Operations) at T S Mortgage Bank Ltd.

With a solid academic background, Dr Akinfala has focused his studies on Personnel Management, Bank Fraud, and Research and Development.   He holds a PhD (2005) and an M.Sc. degree (1990) from the esteemed University of First Choice and the nation's pride, the University of Lagos. He has a B.Sc. (1987) from the University of Ibadan. In 2006, he was elected as a member of the University of Lagos's Senate and served as a University of Lagos Consult board member. Between 2002 and 2006, he held the ex officio position and later the National Social Secretary of the University of Lagos Alumni Association. He also serves as the President of the Sickle Cell Club at the University of Lagos, Akoka.

As an active member of various professional organisations, Dr Akinfala is a proud member or fellow of associations such as the Chartered Institute of Taxation of Nigeria, Institute of Organizational and Administrative Risk Management, the Chartered Institute of Cost and Management Accountants, the American Psychological Association, the International Organization of Criminological Psychology, Nigeria Institute of Security Studies, Institute of Management Consultants, Chartered Institute of Human Resources Management.

In addition to his professional commitments, Dr Akinfala has authored numerous publications, journals, and articles that have become valuable references in the field of learning. Notably, he led a team of tax experts to develop the Federal Inland Revenue Service Tax Awareness Index, a scientific and standardised measurement of tax awareness level in Africa's history of tax administration. This measurement has been published in the International Journal of Business and Management 13(7):249 and translated into various languages, including Yoruba, Hausa, Igbo, English, Tiv, and French.

Driven by a passion for continuous professional development, Dr Akinfala has participated in various programs, training, and conferences on leadership, taxation, and finance on both national and international levels. He has attended training, seminars, and conferences in the United States, China, Morocco, Canada, Uruguay, Panama, Seychelles, Ghana, Kenya, Uganda, Ethiopia, Madagascar, Cuba, Costa Rica, and many other countries to expand his knowledge in tax, finance, and leadership-related matters.

Beyond his professional accomplishments, Dr Akinfala is dedicated to his family and is happily married with three children.`;

const EXPERIENCE_DATA = [
  {
    role: "Executive Director of Finance and Administration",
    organization: "Nigeria Education Loan Fund (NELFUND)",
  },
  {
    role: "Director of Human Resources and General Services (Pioneering Role)",
    organization: "Nigerian Police Trust Fund",
  },
  {
    role: "Head of Research and Development",
    organization: "Federal Inland Revenue Service (FIRS)",
  },
  {
    role: "Lecturer",
    organization: "University of Lagos",
  },
  {
    role: "Executive Director (Treasury Operations)",
    organization: "T S Mortgage Bank Ltd",
  },
  {
    role: "Banking & Finance Professional",
    organization: "First Bank Plc, Aideas Banc Ltd, Peninsula Credits Ltd",
  },
];

const PUBLICATIONS_DATA = [
  {
    title:
      "FIRS Tax Awareness Index - Published in International Journal of Business and Management 13(7):249",
    type: "Research Paper",
    institution: "Federal Inland Revenue Service",
    details:
      "A scientific and standardised measurement of tax awareness level in Africa's history of tax administration, translated into Yoruba, Hausa, Igbo, English, Tiv, and French.",
  },
  {
    title: "Fraudulent behavior among bank employees in Nigeria",
    type: "Ph.D Thesis",
    institution: "University of Lagos",
  },
  {
    title: "The effects of fraudulent behaviour on the society",
    type: "M.Sc Thesis",
    institution: "University of Lagos",
  },
  {
    title: "Patterns and Trends in Bank Frauds in Nigeria",
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
    title: "Neuroticism/Extraversion as a measure of involvement in Alcohol use",
    type: "B.Sc Thesis",
    institution: "University of Ibadan",
  },
];

const EDUCATION_DATA = [
  {
    institution: "University of Lagos",
    degree: "Doctor of Philosophy - PhD",
    dates: "2005",
  },
  {
    institution: "University of Lagos",
    degree: "Master of Science - M.Sc",
    dates: "1990",
  },
  {
    institution: "University of Ibadan",
    degree: "Bachelor of Science - B.Sc",
    dates: "1987",
  },
];

// Replaced for a professional bio theme
const ATTRIBUTES_SUMMARY = [
  {
    icon: "🎓",
    title: "Advanced Education",
    description:
      "PhD (2005) and M.Sc. (1990) from University of Lagos, B.Sc. (1987) from University of Ibadan — focused on Personnel Management, Bank Fraud, and Research and Development.",
  },
  {
    icon: "🏢",
    title: "Leadership Excellence",
    description:
      "Executive Director at NELFUND, pioneering Director at Nigerian Police Trust Fund, Head of R&D at FIRS, University of Lagos Senate member and Sickle Cell Club President.",
  },
  {
    icon: "💡",
    title: "Research & Innovation",
    description:
      "Led team to develop the FIRS Tax Awareness Index — a scientific measurement of tax awareness published in International Journal of Business and Management.",
  },
  {
    icon: "💼",
    title: "Professional Excellence",
    description:
      "Member of 8+ professional bodies including IOARM, CICMA, APA, IOCP, NISS, IMC, CIHRM, and NIPM.",
  },
];

const LEADERSHIP_DATA = [
  {
    role: "University of Lagos Senate Member",
    year: "2006",
    details:
      "Elected as Senate member representing the University community.",
  },
  {
    role: "University of Lagos Consult Board Member",
    year: "2006",
    details:
      "Served on the Consult board, contributing to university governance and development.",
  },
  {
    role: "National Social Secretary",
    year: "2002 – 2006",
    details:
      "University of Lagos Alumni Association, held ex officio position and later National Social Secretary.",
  },
  {
    role: "President",
    year: "Ongoing",
    details:
      "President of the Sickle Cell Club at the University of Lagos, Akoka.",
  },
];

const PROFESSIONAL_MEMBERSHIPS = [
  "Institute of Organizational and Administrative Risk Management",
  "Chartered Institute of Cost and Management Accountants",
  "American Psychological Association",
  "International Organization of Criminological Psychology",
  "Nigeria Institute of Security Studies",
  "Institute of Management Consultants",
  "Chartered Institute of Human Resources Management",
  "Nigeria Institute of Personnel Management",
];

const INTERNATIONAL_TRAINING = [
  "United States",
  "China",
  "Morocco",
  "Canada",
  "Uruguay",
  "Panama",
  "Seychelles",
  "Ghana",
  "Kenya",
  "Uganda",
  "Ethiopia",
  "Madagascar",
  "Cuba",
  "Costa Rica",
];

const FAMILY_SECTION = {
  title: "Personal Life",
  description: "Beyond his professional accomplishments, Dr Akinfala is dedicated to his family and is happily married with three children.",
};

const PROFILE_IMAGE = {
  src: encodeURI("/images/Dr Frederick Jesugbemi Oluwafemi Akinfala.jpeg"),
  alt: "Portrait of Dr Frederick Jesugbemi Oluwafemi Akinfala",
};

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

        {/* --- SUMMARY + PORTRAIT SECTION --- */}
        <section
          className="max-w-5xl mx-auto my-14 p-4 md:p-6 lg:p-8 bg-neutral-800/80 backdrop-blur-sm rounded-[36px] shadow-2xl border border-white/10 section-fade"
          style={{ animationDelay: "1.5s" }}
        >
          <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-neutral-950 shadow-2xl">
            <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-amber-500/20 to-transparent" />
            <Image
              src={PROFILE_IMAGE.src}
              alt={PROFILE_IMAGE.alt}
              width={1200}
              height={1500}
              quality={90}
              className="w-full h-[750px] object-cover object-[0%_25%]"
              priority
            />
          </div>

          <div className="mt-10 text-center md:text-left">
                   <h3 className="text-3xl font-bold text-amber-500 mb-6">
            Executive Summary
          </h3>
            <div className="mt-6 space-y-6">
              {/* <h3 className="text-3xl font-bold text-white sm:text-4xl">
                Elegant, focused, and balanced for a strong first impression.
              </h3> */}
              <p className="mx-auto mt-4 max-w-full text-lg leading-8 text-neutral-300 whitespace-pre-line">
                {SUMMARY_TEXT.trim()}
              </p>
            </div>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            <div className="rounded-3xl border border-amber-500/20 bg-neutral-900/80 p-5">
              <p className="text-sm uppercase tracking-[0.24em] text-amber-300">
                Leadership
              </p>
              <p className="mt-2 text-xl font-semibold text-white">
                Strategic finance and public sector governance
              </p>
            </div>
            <div className="rounded-3xl border border-amber-500/20 bg-neutral-900/80 p-5">
              <p className="text-sm uppercase tracking-[0.24em] text-amber-300">
                Research
              </p>
              <p className="mt-2 text-xl font-semibold text-white">
                FIRS Tax Awareness Index and academic publications
              </p>
            </div>
            <div className="rounded-3xl border border-amber-500/20 bg-neutral-900/80 p-5">
              <p className="text-sm uppercase tracking-[0.24em] text-amber-300">
                Education
              </p>
              <p className="mt-2 text-xl font-semibold text-white">
                PhD, M.Sc, and B.Sc from top Nigerian universities
              </p>
            </div>
            <div className="rounded-3xl border border-amber-500/20 bg-neutral-900/80 p-5">
              <p className="text-sm uppercase tracking-[0.24em] text-amber-300">
                Impact
              </p>
              <p className="mt-2 text-xl font-semibold text-white">
                Public service, academia, and financial sector leadership
              </p>
            </div>
          </div>
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
                <h4 className="text-xl font-bold text-white leading-tight mb-2">
                  {job.role}
                </h4>
                <p className="text-lg italic text-neutral-300">
                  {job.organization}
                </p>
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
                  {pub.details && (
                    <p className="text-sm text-neutral-300 mt-2 leading-relaxed">
                      {pub.details}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- LEADERSHIP & COMMUNITY SERVICE SECTION --- */}
        <section
          className="max-w-5xl mx-auto my-20 pt-10 section-fade"
          style={{ animationDelay: "3.2s" }}
        >
          <h3 className="text-4xl font-bold text-center mb-12 text-amber-500">
            Leadership & Community Service
          </h3>
          <div className="space-y-6">
            {LEADERSHIP_DATA.map((leadership, index) => (
              <div
                key={index}
                className="p-6 bg-neutral-800 rounded-xl shadow-xl border-l-4 border-amber-600 transition duration-300 hover:border-amber-400"
              >
                <div className="flex justify-between items-start flex-wrap mb-2">
                  <h4 className="text-xl font-bold text-white leading-tight">
                    {leadership.role}
                  </h4>
                  <p className="text-sm font-medium text-amber-400">
                    {leadership.year}
                  </p>
                </div>
                <p className="text-neutral-300">{leadership.details}</p>
              </div>
            ))}
          </div>
        </section>

        {/* --- PROFESSIONAL MEMBERSHIPS SECTION --- */}
        <section
          className="max-w-5xl mx-auto my-20 pt-10 section-fade"
          style={{ animationDelay: "3.3s" }}
        >
          <h3 className="text-4xl font-bold text-center mb-12 text-amber-500">
            Professional Memberships
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PROFESSIONAL_MEMBERSHIPS.map((membership, index) => (
              <div
                key={index}
                className="p-4 bg-neutral-800 rounded-lg shadow-md text-center transition duration-300 hover:bg-amber-500/10 hover:scale-[1.02]"
              >
                <p className="text-md font-medium text-neutral-200">
                  {membership}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* --- INTERNATIONAL TRAINING SECTION --- */}
        <section
          className="max-w-5xl mx-auto my-20 pt-10 section-fade"
          style={{ animationDelay: "3.4s" }}
        >
          <h3 className="text-4xl font-bold text-center mb-12 text-amber-500">
            International Training & Conferences
          </h3>
          <div className="p-8 bg-neutral-800/80 backdrop-blur-sm rounded-xl shadow-2xl border-t-4 border-amber-500">
            <p className="text-lg leading-relaxed text-neutral-200 mb-6 text-center">
              Dr Akinfala has participated in various programs, training, and conferences on leadership, taxation, and finance on both national and international levels. He has attended training, seminars, and conferences in the following countries:
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {INTERNATIONAL_TRAINING.map((country, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-amber-600/20 text-amber-400 rounded-full text-sm font-medium border border-amber-600/50 hover:bg-amber-600/30 transition duration-300"
                >
                  {country}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* --- FAMILY SECTION --- */}
        <section
          className="max-w-5xl mx-auto my-20 pt-10 section-fade"
          style={{ animationDelay: "3.45s" }}
        >
          <h3 className="text-4xl font-bold text-center mb-12 text-amber-500">
            Personal Life
          </h3>
          <div className="p-8 bg-neutral-800/80 backdrop-blur-sm rounded-xl shadow-2xl border-t-4 border-amber-500 text-center">
            <p className="text-lg leading-relaxed text-neutral-200">
              {FAMILY_SECTION.description}
            </p>
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
