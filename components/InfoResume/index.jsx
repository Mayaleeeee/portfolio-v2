"use client";
import styles from "./styles.module.css";
import Link from "next/link";
import { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import AnimatedText from "@/components/Animations/AnimatedText";
import AnimatedTitle from "../Animations/AnimatedTitle";

export default function InfoResume() {
    const ctrls = useAnimation();

    const { ref, inView } = useInView({
        threshold: 0.4,
        triggerOnce: true,
    });

    useEffect(() => {
        if (inView) {
            ctrls.start("visible");
        }
        if (!inView) {
            ctrls.start("hidden");
        }
    }, [ctrls, inView]);

    // Animation
    const AnimationUp = {
        hidden: {
            opacity: 0,
            y: `4em`,
        },
        visible: {
            opacity: 1,
            y: `0em`,
            transition: {
                duration: 0.5,
                ease: [0.5, 0.75, 0.4, 0.9],
            },
        },
    };

    return (
        <motion.div
            initial="hidden"
            ref={ref}
            animate={ctrls}
            variants={AnimationUp}
            className={styles.info}
        >
            <div className={styles.info_text}>
                <div className={styles.info_text_one}>
                    <p>
                        <AnimatedText content="I design with a deep focus on human connection, turning ideas into experiences that feel intuitive, meaningful, and genuinely useful." />
                    </p>
                </div> 
                <div className={styles.info_text_two}>
                    <p>
                        <AnimatedText content="My work is driven by empathy and the belief that design should not just look good, but work seamlessly for the people it’s meant to serve." />
                    </p>
                </div>
            </div>
            <motion.div
                whileHover={{ scale: 0.95, transition: { duration: 0.3 } }}
                className={styles.resume}
            >
                <Link
                    target="_blank"
                    href="https://docs.google.com/document/d/1f9ICHESesu9CYE235K2lG0OSpzTGJB0oZOIirVqVPsQ/edit?usp=drive_link"
                >
                    <div className={styles.resume_text}>
                        <h3>
                            <AnimatedTitle title="See My Resume" />
                        </h3>
                    </div>
                </Link>
            </motion.div>
        </motion.div>
    );
}
