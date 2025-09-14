"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Skills() {
  const skills = [
    {
      name: "Node.js",
      icon: "",
      experience: "6+ yrs | 15+ projects",
      color: "from-green-400 to-green-600",
    },
    {
      name: "NestJS",
      icon: "",
      experience: "4+ yrs | 10+ projects",
      color: "from-red-400 to-red-600",
    },
    {
      name: "TypeScript",
      icon: "",
      experience: "5+ yrs | 12+ projects",
      color: "from-blue-400 to-blue-600",
    },
    {
      name: "AWS",
      icon: "",
      experience: "4+ yrs | Cloud Deployments",
      color: "from-yellow-400 to-orange-500",
    },
    {
      name: "PostgreSQL",
      icon: "", // ❌ No icon → fallback
      experience: "6+ yrs | Scalable Databases",
      color: "from-sky-400 to-blue-700",
    },
    {
      name: "MongoDB",
      icon: "",
      experience: "5+ yrs | NoSQL Systems",
      color: "from-emerald-400 to-emerald-600",
    },
    {
      name: "Docker",
      icon: "",
      experience: "4+ yrs | DevOps & CI/CD",
      color: "from-cyan-400 to-cyan-600",
    },
    {
      name: "Angular",
      icon: "", // ❌ No icon → fallback
      experience: "3+ yrs | Frontend Projects",
      color: "from-red-400 to-pink-600",
    },
  ];

  return (
    <section className="py-20 relative">
      {/* Background */}

      <div className="relative max-w-6xl mx-auto text-center px-6">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-extrabold mb-12"
        >
          Skills & Expertise
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ scale: 1.05, rotate: 1 }}
              className="relative p-6 rounded-2xl shadow-lg backdrop-blur-md bg-white/70 dark:bg-gray-800/70 flex flex-col items-center text-center border border-gray-200 dark:border-gray-700"
            >
              {/* Gradient Circle */}
              <div
                className={`w-20 h-20 rounded-full bg-gradient-to-br ${skill.color} flex items-center justify-center mb-4 shadow-md`}
              >
                {skill.icon ? (
                  <Image
                    src={skill.icon}
                    alt={skill.name}
                    width={40}
                    height={40}
                  />
                ) : (
                  <span className="text-2xl font-bold text-white">
                    {skill.name.charAt(0)}
                  </span>
                )}
              </div>

              {/* Skill Name */}
              <h3 className="text-lg font-semibold mb-2">{skill.name}</h3>

              {/* Experience Tag */}
              <span className="px-3 py-1 text-xs rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300">
                {skill.experience}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
