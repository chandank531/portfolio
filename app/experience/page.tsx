"use client";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Experience() {
  const experiences = [
    {
      role: "Senior Backend Developer",
      company: "Oyelab Technology Pvt Ltd",
      duration: "Sep 2021 – Present",
      location: "Remote",
      details:
        "Built scalable microservices for apps like Elssa (Home Services – Germany), On Par (Food Delivery – USA), and Wishkart (Grocery Delivery). Designed and optimized RESTful & GraphQL APIs across account, booking, and inventory modules. Implemented CI/CD pipelines for deployment workflows. Integrated payment gateways: Stripe, PayPal, Razorpay, Leantech. Designed cron jobs, implemented API gateways, and led performance improvements. Mentored junior developers and led discussions for scalable design.",
      tech: ["Node.js", "NestJS", "PostgreSQL", "GraphQL", "REST APIs", "Stripe", "PayPal", "Razorpay", "Docker", "CI/CD", "AWS"],
      projects: [
        { name: "Elssa", link: "#" },
        { name: "On Par", link: "#" },
        { name: "Wishkart", link: "#" },
      ],
    },
    {
      role: "Software Developer",
      company: "GA Software Technologies",
      duration: "May 2021 – Sep 2021",
      location: "Pune, India",
      details:
        "Led backend development for Police Recruitment Portal. Performed encryption/decryption using SHA256 and wrote complex stored procedures and triggers.",
      tech: ["Node.js", "Express", "PostgreSQL", "SHA256", "SQL", "Backend Development"],
      projects: [{ name: "Police Recruitment Portal", link: "#" }],
    },
    {
      role: "Software Developer",
      company: "PowerGuru",
      duration: "2017 – 2021",
      location: "Pune, India",
      details:
        "Built field worker tracking apps and utility bill payment platforms (Medhavi, Esuvidha). Integrated Google Maps API and payment systems (Razorpay). Created MIS reporting modules and collaborated with clients for requirements.",
      tech: ["Node.js", "Express", "PostgreSQL", "Google Maps API", "Razorpay", "Reporting", "Client Collaboration"],
      projects: [
        { name: "Medhavi", link: "#" },
        { name: "Esuvidha", link: "#" },
      ],
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20">
      <div className="max-w-5xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-extrabold mb-12 text-center text-gray-900 dark:text-white"
        >
          Experience
        </motion.h2>

        <div className="grid gap-8 md:grid-cols-1">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="relative p-8 bg-white dark:bg-gray-800 rounded-3xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border-l-4 border-blue-500"
            >
              {/* Role & Company */}
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{exp.role}</h3>
              <p className="text-blue-600 dark:text-blue-400 font-medium mb-4">
                {exp.company} — <span className="italic">{exp.duration}</span>{" "}
                <span className="text-gray-500 dark:text-gray-400">({exp.location})</span>
              </p>

              {/* Short description or details */}
              <p className={`text-gray-700 dark:text-gray-300 leading-relaxed mb-4 ${openIndex === i ? "" : "line-clamp-4"}`}>
                {exp.details}
              </p>

              {/* Tech badges */}
              <div className="flex flex-wrap gap-2 mb-4">
                {exp.tech.map((tech, idx) => (
                  <span
                    key={idx}
                    className="bg-blue-100 text-blue-800 dark:bg-blue-800 dark:text-blue-100 px-3 py-1 rounded-full text-xs font-semibold"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* View Details Button */}
              {exp.projects?.length > 0 && (
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="mt-2 inline-block px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                >
                  {openIndex === i ? "Hide Projects" : "View Projects"}
                </button>
              )}

              {/* Projects List */}
              {openIndex === i && exp.projects && (
                <ul className="mt-4 list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
                  {exp.projects.map((proj, idx) => (
                    <li key={idx}>
                      <a href={proj.link} className="text-blue-600 dark:text-blue-400 underline hover:text-blue-800 dark:hover:text-blue-200" target="_blank">
                        {proj.name}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
