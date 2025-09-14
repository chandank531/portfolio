"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative flex flex-col md:flex-row items-center justify-center py-20 gap-12 text-center md:text-left overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"></div>

      {/* Decorative Blobs */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 1 }}
        className="absolute -top-32 -left-32 w-96 h-96 bg-blue-400 rounded-full blur-3xl opacity-30"
      ></motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 1.2 }}
        className="absolute -bottom-32 -right-32 w-96 h-96 bg-purple-400 rounded-full blur-3xl opacity-30"
      ></motion.div>

      {/* Content */}
      <div className="relative z-10 flex flex-col md:flex-row items-center gap-12">
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="flex-shrink-0"
        >
          <Image
            src="/chandan.png"
            alt="Kumar Chandan"
            width={250}
            height={250}
            className="rounded-full shadow-lg border-4 border-blue-500"
          />
        </motion.div>

        {/* Intro Text */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-xl"
        >
          <h1 className="text-5xl font-extrabold leading-tight">
            Hi, I’m <span className="text-blue-600">Kumar Chandan</span> 👋
          </h1>
          <p className="mt-6 text-lg text-gray-700 dark:text-gray-300">
            🚀 Senior Backend Developer | Software Developer <br />
            Specializing in{" "}
            <strong>Node.js, NestJS, TypeScript, and AWS</strong>.
          </p>
          <div className="mt-8 flex justify-center md:justify-start gap-4">
            <a
              href="/projects"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
            >
              View My Work
            </a>
            <a
              href="/contact"
              className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-800 transition"
            >
              Contact Me
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
