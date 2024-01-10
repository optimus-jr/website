"use client";

import { m } from "framer-motion";

import Card from "@/components/Card";
import fadeIn from "@/utils/animations/fadeIn";
import type { PropsWithChildren } from "@/utils/types/PropsWithChildren";

interface Props extends PropsWithChildren {
  Icon: React.ComponentType<{ className?: string }>;
}

const AboutCard = ({ Icon, children }: Props) => (
  <Card
    as={m.li}
    bgColor="white"
    className="flex flex-col items-center gap-4 p-8 text-center"
    {...fadeIn}
  >
    <Icon className="w-32" />
    {children}
  </Card>
);

AboutCard.title = ({ children }: PropsWithChildren) => (
  <h2 className="text-2xl font-bold uppercase text-primary-800">{children}</h2>
);

AboutCard.description = ({ children }: PropsWithChildren) => (
  <p className="text-lg/tight">{children}</p>
);

export default AboutCard;
