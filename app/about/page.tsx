"use client";
import { motion } from "framer-motion";
import { FileDown, Code2, Briefcase, Users } from "lucide-react";

export default function About() {
  return (
    <section className="relative py-20">
      {/* Background Gradient */}

      <div className="relative max-w-5xl mx-auto text-center px-6">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl font-extrabold mb-6"
        >
          About Me
        </motion.h2>

        {/* Bio */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-gray-700 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto mb-10"
        >
          I’m a software developer with <strong>6+ years of experience</strong>{" "}
          in full-cycle software development. Currently, I work as a{" "}
          <strong>Senior Backend Developer at Oyelab Technology</strong>,
          building scalable backend solutions for international clients across
          Germany and the USA. <br />
          <br />
          I specialize in{" "}
          <span className="text-blue-600 font-semibold">
            Node.js, NestJS, TypeScript, and AWS
          </span>
          , and I love solving problems, optimizing performance, and
          collaborating across full-stack teams.
        </motion.p>

        {/* Animated Counters */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {[
            { icon: <Briefcase size={28} />, value: "6+", label: "Years Experience" },
            { icon: <Code2 size={28} />, value: "20+", label: "Projects Delivered" },
            { icon: <Users size={28} />, value: "10+", label: "Clients Worldwide" },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md flex flex-col items-center"
            >
              <div className="text-blue-600 mb-2">{item.icon}</div>
              <h3 className="text-2xl font-bold">{item.value}</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">{item.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Resume + Cover Letter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <a
            href="/resume.pdf"
            download
            className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
          >
            <FileDown size={18} /> Resume
          </a>
          <a
            href="/cover-letter.pdf"
            download
            className="flex items-center gap-2 px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-800 transition"
          >
            <FileDown size={18} /> Cover Letter
          </a>
        </motion.div>
      </div>
    </section>
  );
}
