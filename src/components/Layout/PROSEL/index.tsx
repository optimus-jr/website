import { AnimatePresence, m } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

import Button from "@/components/common/Button";
import Card from "@/components/common/Card";
import CloseIcon from "@/components/icons/Close";

import styles from "./prosel.module.scss";

const PROSEL = () => {
  // Comente a linha abaixo para ativar o banner quando for época de processo seletivo.
  // return null;

  const [isOpen, setIsOpen] = useState(true);

  return (
    <AnimatePresence>
      {isOpen && (
        <m.div
          className={styles.container}
          exit={{ y: 20, opacity: 0 }}
          initial={{ y: 0, opacity: 1 }}
          transition={{ linear: true }}
        >
          <Card cardLayout="none" className={styles.dialog}>
            <h3>Estamos contratando!</h3>
            <p>
              Estão abertas as inscrições para o nosso processo seletivo. Venha trabalhar com a
              gente!
            </p>

            <Button as={Link} href="/prosel" onClick={() => setIsOpen(false)}>
              Quero me Inscrever!
            </Button>
            <Button className={styles.close} onClick={() => setIsOpen(false)} variant="text">
              <CloseIcon />
            </Button>
          </Card>
        </m.div>
      )}
    </AnimatePresence>
  );
};

export default PROSEL;
