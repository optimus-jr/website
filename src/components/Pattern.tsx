"use client";

import { m, useScroll, useSpring, useTransform } from "framer-motion";
import { useId, useRef } from "react";
import { tv, type VariantProps } from "tailwind-variants";

import useMediaQuery from "@/hooks/useMediaQuery";

const pattern = tv({
  slots: {
    container: "absolute inset-0 -z-10 overflow-hidden",
    patternDiv: "absolute aspect-square min-h-full w-full",
    gradientDiv: "absolute h-full w-full",
  },
  variants: {
    backgroundColor: {
      green: {
        container: "bg-secondary-600 fill-secondary-800",
        gradientDiv: "from-transparent to-secondary-600",
      },
    },
    gradient: {
      radial: { gradientDiv: "bg-gradient-radial top-[-30%]" },
    },
  },
});

interface Props extends VariantProps<typeof pattern> {
  SVGPattern: React.ComponentType<{ id: string }>;
}

const Pattern = ({ SVGPattern, backgroundColor, gradient }: Props) => {
  const { container, patternDiv, gradientDiv } = pattern({ backgroundColor, gradient });

  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const springedScrollYProgress = useSpring(scrollYProgress, {
    damping: 15,
    mass: 0.27,
    stiffness: 55,
  });

  const isTouch = useMediaQuery("(pointer: coarse)");
  const y = useTransform(
    isTouch ? scrollYProgress : springedScrollYProgress,
    [0, 1],
    ["-50%", "-30%"],
  );

  const patternId = useId();

  return (
    <div className={container()} ref={containerRef}>
      <div className={patternDiv()}>
        <div className={gradientDiv()} />

        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <SVGPattern id={patternId} />
          </defs>
          <m.rect className="h-[200vh] w-full" fill={`url(#${patternId})`} style={{ y }} />
        </svg>
      </div>
    </div>
  );
};

export default Pattern;
