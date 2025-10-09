"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { GrLinkedin } from "react-icons/gr";

// --- Interface for Image Data ---
interface BirthdayImage {
  src: string;
  alt: string;
  rotation: string; // Tailwind class for rotation (e.g., 'rotate-3', '-rotate-6')
}

// --- Component Data ---
const NAME = "The Birthday Man";
const IMAGES: BirthdayImage[] = [
  {
    src: "https://cdn.pixabay.com/photo/2023/08/24/04/07/birthday-8209747_1280.jpg",
    alt: "A great memory of him smiling",
    rotation: "rotate-3",
  },
  {
    src: "https://cdn.pixabay.com/photo/2015/08/31/23/42/cake-916253_1280.jpg",
    alt: "A picture from a recent trip",
    rotation: "-rotate-2",
  },
  {
    src: "https://cdn.pixabay.com/photo/2021/12/30/22/08/presents-6904620_1280.jpg",
    alt: "The moment he achieved a milestone",
    rotation: "rotate-1",
  },
  {
    src: "https://cdn.pixabay.com/photo/2021/05/22/16/53/birthday-6274123_1280.jpg",
    alt: "A casual, fun picture",
    rotation: "-rotate-3",
  },
];

const CORE_VALUES = [
  {
    icon: "🌟",
    title: "Integrity",
    description:
      "Your word is your bond. A model of honesty and principle in every situation.",
  },
  {
    icon: "💡",
    title: "Visionary",
    description:
      "Always looking ahead, planning for the future, and inspiring others to do the same.",
  },
  {
    icon: "🛡️",
    title: "Supportive",
    description:
      "Our unwavering rock. Always there with guidance, encouragement, and strength.",
  },
  {
    icon: "🤣",
    title: "Great Humor",
    description:
      "The ability to make any room light up with laughter and good spirits.",
  },
];

const FloatingBalloon: React.FC<{
  color: string;
  position: string;
  delay: string;
}> = ({ color, position, delay }) => (
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

const BirthdayPage: React.FC = () => {
  const confettiRef = useRef<HTMLDivElement>(null);

  // ✅ FIX: Generate stars on the client only to avoid hydration mismatch
  const [stars, setStars] = useState<
    { top: string; left: string; delay: string }[]
  >([]);

  useEffect(() => {
    const generated = Array.from({ length: 50 }, () => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 5}s`,
    }));
    setStars(generated);
  }, []);

  // --- CONFETTI ANIMATION LOGIC ---
  useEffect(() => {
    const container = confettiRef.current;
    if (!container) return;

    const colors = ["#FCD34D", "#10B981", "#3B82F6", "#EF4444", "#EC4899"];
    const count = 50;

    const createConfetti = () => {
      const confetti = document.createElement("div");
      confetti.classList.add("confetti");
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
      <style jsx global>{`
        @keyframes confetti-fall {
          0% {
            transform: translateY(-100vh) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(100vh) rotate(720deg);
            opacity: 0.8;
          }
        }
        .animate-confetti {
          animation: confetti-fall linear infinite;
        }
        @keyframes fade-in {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes twinkle {
          0%,
          100% {
            opacity: 0.3;
          }
          50% {
            opacity: 1;
          }
        }
        .star {
          animation: twinkle 4s ease-in-out infinite;
        }
        @keyframes glow-pulse {
          0%,
          100% {
            filter: drop-shadow(0 0 10px rgba(252, 211, 77, 0.6));
          }
          50% {
            filter: drop-shadow(0 0 20px rgba(252, 211, 77, 1));
            transform: scale(1.01);
          }
        }
        .animate-glow-pulse {
          animation: glow-pulse 4s ease-in-out infinite;
        }
        @keyframes subtle-pop {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.01);
          }
          100% {
            transform: scale(1);
          }
        }
        .animate-subtle-pop {
          animation: subtle-pop 3s ease-in-out 2s 1;
        }
        @keyframes float-slow {
          0%,
          100% {
            transform: translateY(0) rotate(2deg);
          }
          50% {
            transform: translateY(-20px) rotate(-2deg);
          }
        }
        .animate-float-slow {
          animation: float-slow 15s ease-in-out infinite;
        }
      `}</style>

      <div
        ref={confettiRef}
        className="fixed inset-0 pointer-events-none z-50"
      ></div>

      {/* ✅ Safe client-only stars */}
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

      {/* Floating Balloons */}
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
            className="text-6xl sm:text-7xl lg:text-9xl font-extrabold tracking-tight animate-glow-pulse"
            style={{
              color: "#FCD34D", // Gold
              textShadow: "0 0 10px rgba(252, 211, 77, 0.8)",
            }}
          >
            HAPPY BIRTHDAY!
          </h1>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-light mt-4 tracking-wide"
            style={{
              animation: "fade-in 1s ease-out 0.8s forwards",
              opacity: 0,
            }}
          >
            To our incredible <span className="font-semibold">{NAME}</span>
          </h2>
        </section>

        {/* --- QUOTE / MAIN THEME SECTION --- */}
        <section
          className="max-w-4xl mx-auto my-12 p-8 md:p-12 bg-neutral-800/80 backdrop-blur-sm rounded-xl shadow-2xl border-t-4 border-amber-500 animate-subtle-pop"
          style={{ animation: "fade-in 1s ease-out 1.5s forwards", opacity: 0 }}
        >
          <div className="text-4xl text-amber-500 font-serif mb-4">“</div>
          <p className="text-xl md:text-2xl italic leading-relaxed text-neutral-200">
            Today, we celebrate not just the passing of another year, but the
            remarkable man you are: a steadfast friend, a passionate leader, and
            a source of constant inspiration. May this new year bring you joy,
            health, and endless opportunities to chase your greatest passions.
          </p>
          <div className="text-right mt-6 text-lg font-medium text-amber-400">
            — With all our love and best wishes
          </div>
        </section>

        {/* --- NEW: CORE VALUES / ATTRIBUTES SECTION --- */}
        <section
          className="max-w-6xl mx-auto my-20 pt-10"
          style={{ animation: "fade-in 1s ease-out 2s forwards", opacity: 0 }}
        >
          <h3 className="text-4xl font-bold text-center mb-12 text-amber-500">
            Celebrating Your Best Qualities
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {CORE_VALUES.map((value, index) => (
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

        {/* --- GALLERY SECTION: Photo Layout --- */}
        <section className="mt-20">
          <h3
            className="text-4xl font-bold text-center mb-12 text-amber-500"
            style={{
              animation: "fade-in 0.8s ease-out 2.5s forwards",
              opacity: 0,
            }}
          >
            A Few Memories to Treasure
          </h3>

          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 max-w-7xl mx-auto"
            style={{ perspective: "1000px" }}
          >
            {IMAGES.map((img, index) => (
              <div
                key={index}
                // NEW: Added group-hover:rotate-[var(--r)] and transition for 3D effect
                className={`relative group overflow-hidden rounded-xl shadow-xl transition-transform duration-500 hover:scale-[1.05] hover:shadow-2xl hover:shadow-amber-500/50 ${img.rotation}`}
                style={{
                  animation: `fade-in 0.8s ease-out ${
                    2.7 + index * 0.2
                  }s forwards`,
                  opacity: 0,
                  // 3D Tilt variable on hover
                  ["--r" as keyof React.CSSProperties]: img.rotation.includes(
                    "-"
                  )
                    ? "rotateY(8deg)"
                    : "rotateY(-8deg)",
                }}
              >
                {/* Image Placeholder */}
                <Image
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover aspect-square transition duration-300 group-hover:brightness-110 group-hover:skew-x-1"
                  onError={(e) => {
                    e.currentTarget.src =
                      "https://placehold.co/400x400/1E3A8A/FCD34D?text=Photo+Error";
                  }}
                  width={400}
                  height={400}
                />

                {/* Overlay Caption */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                  <p className="text-center text-sm font-light italic">
                    {img.alt}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* --- CLOSING MESSAGE --- */}

        <GrLinkedin className="bottom-4 right-10 fixed text-4xl text-amber-500 hover:text-amber-400 transition-colors duration-300" />

        <section
          className="text-center mt-24 pt-10 border-t border-amber-600/50"
          style={{ animation: "fade-in 1s ease-out 4s forwards", opacity: 0 }}
        >
          <p className="text-3xl font-semibold mb-3">
            Wishing you the best day,
          </p>
          <p className="text-xl text-amber-500">From all of us.</p>
        </section>
      </main>
    </div>
  );
};

export default BirthdayPage;
