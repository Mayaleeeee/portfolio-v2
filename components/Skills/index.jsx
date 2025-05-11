"use client";
import styles from "./styles.module.css";
import Image from "next/image";
import { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import AnimatedText from "@/components/Animations/AnimatedText";

export default function Skills() {
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
        <div className={styles.main}>
            <motion.div
                initial="hidden"
                ref={ref}
                animate={ctrls}
                variants={AnimationUp}
                className={styles.skills_grid}
            >
                <div className={styles.title}>
                    <p>
                        <AnimatedText content="Design + Research" />
                    </p>
                </div>

                <div className={styles.design_prototyping}>
                    <div className={styles.container}>
                        <Image
                            src="/skills/prototyping.svg"
                            alt=""
                            role="img"
                            fill
                        />
                    </div>

                    <h3>
                        <AnimatedText content="Design Prototyping" />
                    </h3>
                    <p>
                        <AnimatedText content="Figma, Penpot, Framer, Adobe Creative Suite, Phase" />
                    </p>
                </div>

                <div className={styles.design_skills}>
                    <div className={styles.container}>
                        <Image
                            src="/skills/design.svg"
                            alt=""
                            role="img"
                            fill
                        />
                    </div>

                    <h3>
                        <AnimatedText content="Design Skills" />
                    </h3>
                    <p>
                        <AnimatedText content="Wireframing, Accessibility, Design Systems, UX Writing,  Visual Design" />
                    </p>
                </div>

                <div className={styles.user_research}>
                    <div className={styles.container}>
                        <Image src="/skills/user.svg" alt="" role="img" fill />
                    </div>
                    <h3>
                        <AnimatedText content="User Research" />
                    </h3>
                    <p>
                        <AnimatedText content="A/B Testing, Foundational Research, Usability Study, User Interview, Storytelling" />
                    </p>
                </div>

                <div className={styles.frontend}>
                    <div className={styles.container}>
                        <Image
                            src="/skills/frontend.svg"
                            alt=""
                            role="img"
                            fill
                        />
                    </div>

                    <h3>
                        <AnimatedText content="Front-End Development" />
                    </h3>
                    <p>
                        <AnimatedText content="HTML, Tailwind CSS, CSS, R" />
                    </p>
                </div>
            </motion.div>
        </div>
    );
}
