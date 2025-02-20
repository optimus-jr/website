"use client";

import { AnimatePresence, m } from "framer-motion";
import { useState } from "react";

import CloseIcon from "@/components/icons/Close";
import Link from "@/components/lib/Link";
import Button from "@/components/ui/Button";
import { Card, CardTitle } from "@/components/ui/Card";
import config from "@/config";

const PROSEL = () => {
  const [isOpen, setIsOpen] = useState(true);
  const close = () => setIsOpen(false);

  if (!config.IS_PROSEL) {
    return null;
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <m.div
          className="fixed bottom-0 left-0 z-30 animate-fade-in sm:p-4"
          exit={{ y: 20, opacity: 0 }}
          initial={{ y: 0, opacity: 1 }}
          transition={{ linear: true }}
        >
          <Card className="flex flex-col items-start gap-2 rounded-b-none p-6 shadow-2xl sm:max-w-lg sm:rounded-2xl">
            <div className="flex w-full items-center justify-between">
              <CardTitle>Estamos contratando!</CardTitle>

              <Button onClick={close} variant="text">
                <CloseIcon />
              </Button>
            </div>

            <p>
              Estão abertas as inscrições para o nosso processo seletivo. Venha trabalhar com a
              gente!
            </p>

            <Button as={Link} className="ml-auto" href={config.PROSEL_FORM_URL} onClick={close}>
              Quero me Inscrever!
            </Button>
          </Card>
        </m.div>
      )}
    </AnimatePresence>
  );
};

export default PROSEL;
