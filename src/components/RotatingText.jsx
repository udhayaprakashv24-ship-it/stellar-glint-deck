import { useEffect, useState, useCallback } from "react";
import { AnimatePresence, motion } from "motion/react";
import "./RotatingText.css";

function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function RotatingText({
  texts,
  transition = { type: "spring", damping: 30, stiffness: 400 },
  initial = { y: "100%", opacity: 0 },
  animate = { y: 0, opacity: 1 },
  exit = { y: "-120%", opacity: 0 },
  animatePresenceMode = "wait",
  animatePresenceInitial = false,
  rotationInterval = 1800,
  staggerDuration = 0.025,
  staggerFrom = "last",
  loop = true,
  auto = true,
  mainClassName,
  splitLevelClassName,
}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = useCallback(() => {
    setCurrentIndex((prev) =>
      loop ? (prev + 1) % texts.length : Math.min(prev + 1, texts.length - 1)
    );
  }, [texts.length, loop]);

  useEffect(() => {
    if (!auto) return;
    const id = setInterval(next, rotationInterval);
    return () => clearInterval(id);
  }, [auto, next, rotationInterval]);

  const letters = texts[currentIndex].split("");

  const getDelay = (i, total) => {
    if (staggerFrom === "first") return i * staggerDuration;
    if (staggerFrom === "last") return (total - 1 - i) * staggerDuration;
    if (staggerFrom === "center") return Math.abs(i - (total - 1) / 2) * staggerDuration;
    return i * staggerDuration;
  };

  return (
    <span className={cn("rotating-text-wrapper", mainClassName)}>
      <AnimatePresence mode={animatePresenceMode} initial={animatePresenceInitial}>
        <motion.span
          key={currentIndex}
          style={{ display: "inline-flex" }}
        >
          {letters.map((char, i) => (
            <motion.span
              key={i}
              className={splitLevelClassName}
              initial={initial}
              animate={animate}
              exit={exit}
              transition={{ ...transition, delay: getDelay(i, letters.length) }}
              style={{ display: "inline-block", whiteSpace: char === " " ? "pre" : "normal" }}
            >
              {char}
            </motion.span>
          ))}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
