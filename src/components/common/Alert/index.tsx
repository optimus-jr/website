"use client";

import { AnimatePresence, m } from "framer-motion";

import ErrorIcon from "@/components/icons/Error";
import cn from "@/utils/cn";

import styles from "./alert.module.scss";

interface Props {
  show: boolean;
  severity: "error"; // Se necessário, implementar "warning", "info" e "success"
  className?: string;
  children: React.ReactNode;
}

const icons = {
  error: ErrorIcon,
};

const Alert = ({ children, className, severity, show }: Props) => {
  const Icon = icons[severity];

  return (
    <AnimatePresence>
      {show && (
        <m.div
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          initial={{ opacity: 0, height: 0 }}
          style={{ overflow: "hidden" }}
        >
          <div className={cn(styles[severity], className)} role="alert">
            <Icon />
            <div>{children}</div>
          </div>
        </m.div>
      )}
    </AnimatePresence>
  );
};

export default Alert;
