"use client";
import { motion } from "framer-motion";
import { Code, Server, Globe } from "lucide-react"; // Optional icons

export default function Projects() {
  const projects = [
    {
      title: "E-commerce Platform",
      desc: "Scalable API backend with payment integration.",
      icon: <Server size={24} />,
    },
    {
      title: "Logistics Management System",
      desc: "Real-time tracking with Node.js + AWS.",
      icon: <Globe size={24} />,
    },
    {
      title: "Home Services Marketplace",
      desc: "Multi-role platform with microservices.",
      icon: <Code size={24} />,
    },
  ];

  return (
    <section className="text-center py-20">
      <h2 className="text-4xl font-extrabold mb-12 text-gray-900 dark:text-white">
        Projects
      </h2>

      <div className="grid md:grid-cols-3 gap-8 px-4 md:px-0">
        {projects.map((proj, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
            className="p-8 rounded-3xl shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300 backdrop-blur-md border border-white/30 dark:border-gray-600"
          >
            <div className="flex items-center justify-center mb-4 text-blue-600 dark:text-blue-400">
              {proj.icon}
            </div>
            <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
              {proj.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{proj.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
