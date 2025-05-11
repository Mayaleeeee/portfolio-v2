"use client";
import { useEffect } from "react";
import AnimatedTitle from "@/components/Animations/AnimatedTitle";
import AnimatedText from "@/components/Animations/AnimatedText";
import SlidingImages from "@/components/SlidingImages";
import Experience from "@/components/Experience";
import WorkedWith from "@/components/WorkedWith";
import Image from "next/image";
import styles from "./page.module.css";

export default function About() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className={styles.main}>
            <div className={styles.header_container}>
                <div className={styles.title}>
                    <div className={styles.title_hello}>
                        <h1>
                            <AnimatedTitle title="Hallo :)" />
                        </h1>
                    </div>
                    {/* <div className={styles.title_namaste}>
                        <h2>
                            <AnimatedText content="नमस्ते 🙏" />
                        </h2>
                    </div> */}
                </div>
                <div className={styles.myphoto}>
                    <Image fill src="/dp.png" alt="aboutme image" />
                </div>
            </div>
            <div className={styles.info_text}>
                <div className={styles.info_text_content}>
                    <p>
                        <AnimatedText content="Hi, I’m Aishat Muibudeen, also known as Maya. I'm a Product Designer based in Nigeria and open to relocating. I volunteer as the Lead Designer at AsyncAPI,  one of the most meaningful parts of my journey so far. Contributing to open source has taught me more than just tools; it’s taught me to believe in myself, to speak up, and to take up space, even when I feel small." />
                        <br />
                        <br />
                        <AnimatedText content="My path into tech didn’t start with a computer science degree or a fancy boot camp — it began with curiosity, grit, and a deep desire to prove that I could do something different. I studied Islamic Studies at university. That wasn’t supposed to lead to design, right? Guess what? I didn’t let that stop me." />
                        <br />
                        <br />
                        <AnimatedText content="I care about people,  how they feel, what confuses them, and what makes them smile. That’s what drew me to design. And it’s also what led me to community work. I like bringing people together. I enjoy helping others feel seen. That matters deeply to me. In 2024, I co-founded OpenNest-Africa with three amazing women, a space focused on creating beginner-friendly open-source resources and building community across the continent." />
                        <br />
                        <br />
                        <AnimatedText content="Outside of design, I love WRITING! Writing helps me slow down, reflect, and say what I mean without holding back. It’s how I make sense of the world, and how I stay grounded. Often, my best thoughts come with music playing in the background. Easy on Me by Adele. Goodbyes (Is the hardest word to say) by Celine Dion. Taylor Swift on a rainy day. These songs don’t just inspire me,  they hold space for my emotions and help me create from the heart." />
                   
                        <br />
                        <br />
                        <AnimatedText content="Lately, I’ve also found myself drawn to public speaking, sharing stories, ideas, and lessons I’ve learned along the way. It feels like an extension of writing, with a voice. I have had a few talks accepted, and with each step, I’m learning to keep showing up every day, even when it’s scary, or I don’t feel ready." />
                    
                        <br />
                        <br />
                        <AnimatedText content="PS: I’m also learning German—Ich lerne Deutsch—and I can’t wait to speak it fluently!" />
                    </p>
                </div>
            </div>
            <div className={styles.activities}>
                <div className={styles.activities_content}>
                    <h1>
                        <AnimatedText content="I love attending conferences, meeting people, travelling and photography!" />
                    </h1>
                </div>
                <div className={styles.sliding_images}>
                    <SlidingImages />
                </div>
            </div>
            <Experience />
            <WorkedWith />
        </div>
    );
}
