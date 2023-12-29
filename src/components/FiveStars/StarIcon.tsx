"use client";

import { AnimationProps, m } from "framer-motion";

const icon = {
  hidden: {
    opacity: 0,
    y: "100%",
  },
  visible: {
    opacity: 1,
    y: 0,
  },
} as AnimationProps["variants"];

const StarIcon = () => (
  <m.svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <title>Estrela</title>
    <m.path
      d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"
      variants={icon}
    />
  </m.svg>
);

export default StarIcon;
