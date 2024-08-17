import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import PropTypes from "prop-types";
const Reveal = (props) => {
  const { className, hidden, visible, delay, children } = props;
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView]);

  return (
    <motion.div
      ref={ref}
      className={`${className ? className : ""}`}
      variants={{
        hidden: hidden,
        visible: visible,
      }}
      initial="hidden"
      animate={controls}
      transition={{ duration: 0.6, delay: delay, ease: "easeIn" }}
    >
      {children}
    </motion.div>
  );
};
Reveal.propTypes = {
  visible: PropTypes.object,
  hidden: PropTypes.object,
  className: PropTypes.string,
};
export default Reveal;
