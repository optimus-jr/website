"use client";

import { m } from "framer-motion";

import ArrowLeftIcon from "@/components/icons/ArrowLeft";
import Link from "@/components/lib/Link";
import Button from "@/components/ui/Button";

const BackToHomeButton = () => (
  <m.div animate="rest" whileHover="hover">
    <Button as={Link} href="/">
      <ArrowLeftIcon
        as={m.svg}
        variants={{ hover: { x: [0, -5, 0], transition: { repeat: Infinity } } }}
      />
      Voltar para página inicial
    </Button>
  </m.div>
);

export default BackToHomeButton;
