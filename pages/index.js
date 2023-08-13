import React from "react";
import Layout from "../components/Layout";
import { motion } from "framer-motion";
import Typical from "react-typical";

//iconlar
import Github from "../components/icons/Github";
import Linkedin from "../components/icons/Linkedin";
import Twitter from "../components/icons/Twitter";
import Link from "next/link";

const TypingAnimation = React.memo(
  () => {
    return (
      <Typical
        loop={3}
        wrapper="p"
        steps={[
          "Hello,",
          1000,
          "I'm",
          1000,
          "Gizem Candemir",
          1000,
          "I'm React Developer",
        ]}
      />
    );
  },
  (props, prevProps) => true
);

export default function Home() {
  return (
    <div>
      <Layout
        title={"Portfolio- Gizem Candemir"}
        description={"Gizem Candemir Portfolio"}
      >
        <motion.img
          src="/images/blue-ball.png"
          alt="ball-1"
          className="w-44 hidden md:block h-auto absolute top-48 right-10 z-[1] "
          whileHover={{ y: -10, rotate: 90, transition: { duration: 0.4 } }}
          drag
          dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
        />
        <motion.img
          src="/images/blue-ball.png"
          alt="ball-2"
          className="w-36 hidden md:block h-auto absolute bottom-10 left-10 z-[1] "
          whileHover={{ y: -10, rotate: 90, transition: { duration: 0.4 } }}
          drag
          dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
        />

        <main className="w-full h-full">
          <section className="h-full max-w-5xl mx-auto pt-16 md:pt-8">
            <div>
              <div className="mt-5 text-2xl font-large  text-transparent bg-gradient-to-r from-blue-500 via-indigo-400 to-purple-600 bg-clip-text md:nt-3">
                <TypingAnimation />
              </div>

              {/* social icon */}
              <div className="flex items-center mt-4 space-x-6 md:mt-4">
                <motion.a
                  href="https://github.com/mhndsbgyn"
                  target={"_blank"}
                  rol="noopener noreferrer"
                  className="flex items-center justify-center text-gray-800 transition-colors duration-300 dark:text-gray-100 dark:hover:text-blue-500 hover:text-blue-500"
                  whileHover={{ scale: 1.2 }}
                >
                  <Github className={"w-8 h-8 fill-current"} />
                </motion.a>

                <motion.a
                  href="https://www.linkedin.com/in/gzmcndmrr/"
                  target={"_blank"}
                  rol="noopener noreferrer"
                  className="flex items-center justify-center text-gray-800 transition-colors duration-300 dark:text-gray-100 dark:hover:text-blue-500 hover:text-blue-500"
                  whileHover={{ scale: 1.2 }}
                >
                  <Linkedin className={"w-8 h-8 fill-current"} />
                </motion.a>

                <motion.a
                  href="https://twitter.com/Gizem38030017"
                  target={"_blank"}
                  rol="noopener noreferrer"
                  className="flex items-center justify-center text-gray-800 transition-colors duration-300 dark:text-gray-100 dark:hover:text-blue-500 hover:text-blue-500"
                  whileHover={{ scale: 1.2 }}
                >
                  <Twitter className={"w-8 h-8 fill-current"} />
                </motion.a>
              </div>
            </div>
            {/* Code Area */}
            <article className="mt-3 prose md:mt-4 md:prose-lg dark:prose-dark ">
              <div>
                <pre>
                  <code className="language-js">
                    <div className="flex items-center py-0 my-0 space-x-4 text-gray-500">
                      <span>// created by Gizem Candemir </span>
                    </div>
                    <p>
                      <span className="text-gray-500">//</span>{" "}
                      <span className="text-purple-300">Todo:</span> You can
                      drag these my magic balloons ☞ ⊙
                    </p>
                    <p>
                      <span className="text-gray-500">//</span>{" "}
                      <span className="text-purple-300">Who am I?:</span> Hi! I
                      am a frontend developer with a passion for the latest
                      solutions or frameworks and interactive design.
                    </p>
                    <ul className="list-none">
                      <li>
                        ⭕ Tech stack: HTML(5), CSS(3), JavaScript, Typescript,
                        React, NextJs, Redux, GraphQl, Tailwind CSS, Material
                        UI, Chakra UI, Sass, Bootstrap
                      </li>
                      <li>
                        ⭕ Frontend Developer with 2+ years of professional
                        experience in Web Designing and User Interface
                        Development.
                      </li>
                      <li>
                        ⭕ Strong experience with Cross Browser Compatibility
                        issues and Optimization for the web, including CSS
                        Sprites and best practices.
                      </li>
                      <li>
                        ⭕ Proficiency in code optimization to improve
                        performance.
                      </li>
                    </ul>
                    <div className="flex items-center space-x-8">
                      <Link href="/projects">
                        <a className="transition duration-300">Projects</a>
                      </Link>
                      <a
                        href="https://www.youtube.com/channel/UCiR33IirpRI4T5L-gUpaLhA"
                        target={"_blank"}
                        rel="noopener noreferrer"
                        className="transition duration-300"
                      >
                        Youtube
                      </a>
                    </div>
                    <div className="flex items-center space-x-4">
                      <img
                        src="/images/elmass.png"
                        alt="Me"
                        className="w-32 rounded-full"
                      />
                      <div className="">
                        <p className="text-sm">
                          <span className="text-blue-400"> {">"} </span> const
                          techWeb
                          <span className="font-bold text-blue-400">2</span> =
                          ["Reactjs", "Nextjs", "Graphql", "Nodejs"];{" "}
                        </p>
                        <p className="text-sm">
                          <span className="text-blue-400"> {">"} </span> const
                          techWeb
                          <span className="font-bold text-blue-400">3</span> =
                          ["JavaScript", "TypeScript", "Tailwind"];{" "}
                        </p>
                      </div>
                    </div>
                  </code>
                </pre>
              </div>
            </article>
          </section>
        </main>
      </Layout>
    </div>
  );
}
