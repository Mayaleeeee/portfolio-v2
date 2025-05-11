"use client";
import { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import styles from "./styles.module.css";
import ScrollText from "./ScrollText";
import AnimatedTitle from "../Animations/AnimatedTitle";
import AnimatedText from "../Animations/AnimatedText";
import { renderCanvas } from "./renderCanvas";

export default function Header() {
    useEffect(() => {
        renderCanvas();
    }, []);

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
            <div id="header" className={styles.header}>
                <div className={styles.header_name}>
                    <div className={styles.header_hello}>
                        <h1>
                            <AnimatedTitle title="Hello" />
                        </h1>
                    </div>
                    <div>
                        <h1>
                            <AnimatedTitle title="I'm Aishat" />
                        </h1>
                        <h1>
                            <AnimatedTitle title="(preferred name: Maya)" />
                        </h1>
                    </div>
                </div>
                <div className={styles.header_para}>
                    <div className={styles.para}>
                        <p>
                            <AnimatedText content=" a Product Designer with experience in UX Research and a love for open source. Volunteering as a Design Maintainer/Manager" />
                            <br />
                            {/* <AnimatedText content="Currently working" /> */}
                            <a href="https://www.asyncapi.com/" target="_blank">@ AsyncAPI</a>
                        </p>
                    </div>
                    <div className={styles.resume_project}>
                        <motion.div
                            initial="hidden"
                            ref={ref}
                            animate={ctrls}
                            variants={AnimationUp}
                            className={styles.resume_project_container}
                        >
                            <div className={styles.view_buttons}>
                                <Link
                                    target="_blank"
                                    href="https://docs.google.com/document/d/1f9ICHESesu9CYE235K2lG0OSpzTGJB0oZOIirVqVPsQ/edit?usp=drive_link"
                                >
                                    <h5>Resume.</h5>
                                </Link>
                            </div>
                            <div className={styles.view_buttons}>
                                <Link href="/projects">
                                    <h5>Projects.</h5>
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
            {/*<ScrollText />*/}
            <canvas className={styles.canvas_pointer} id="canvas"></canvas>
        </div>
    );
}
