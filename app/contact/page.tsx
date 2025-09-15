"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState<string | null>(null);

  // handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  // handle submit
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" }); // reset
      } else {
        setStatus("error");
      }
    } catch (err) {
      console.error("Form submit error:", err);
      setStatus("error");
    }
  };

  return (
    <section className="relative py-20">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Left: Contact Info */}
        <div className="text-center md:text-left">
          <h2 className="text-4xl font-extrabold mb-4 text-gray-900 dark:text-white">
            Get In Touch
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
            I’m open to opportunities, collaborations, or just a friendly chat.
            Feel free to reach out and I’ll get back to you as soon as possible.
          </p>

          <a
            href="mailto:chandank531@gmail.com"
            className="inline-block px-8 py-3 bg-blue-600 text-white rounded-xl shadow-lg hover:bg-blue-700 transition-colors font-semibold"
          >
            Say Hello 👋
          </a>

          <div className="mt-8 space-y-4 text-gray-700 dark:text-gray-300">
            <p>
              Email:{" "}
              <a
                href="mailto:chandank531@gmail.com"
                className="text-blue-600 dark:text-blue-400 underline"
              >
                chandank531@gmail.com
              </a>
            </p>
            <p>
              Phone:{" "}
              <a
                href="tel:+919686711048"
                className="text-blue-600 dark:text-blue-400 underline"
              >
                +91 96867 11048
              </a>
            </p>
            <p>Location: Patna, India</p>
          </div>
        </div>

        {/* Right: Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-lg space-y-4"
        >
          <div>
            <label
              htmlFor="name"
              className="block text-gray-700 dark:text-gray-300 font-medium mb-1"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 
                         focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-gray-700 dark:text-gray-300 font-medium mb-1"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              required
              className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 
                         focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-gray-700 dark:text-gray-300 font-medium mb-1"
            >
              Message
            </label>
            <textarea
              id="message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              placeholder="Your message..."
              required
              className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 
                         focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full px-6 py-3 bg-blue-600 text-white rounded-xl shadow-lg 
                       hover:bg-blue-700 transition-colors font-semibold mt-2 disabled:opacity-70"
          >
            {status === "loading" ? "Sending..." : "Send Message"}
          </button>

          {status === "success" && (
            <p className="text-green-600 mt-2">✅ Message sent successfully!</p>
          )}
          {status === "error" && (
            <p className="text-red-600 mt-2">❌ Something went wrong. Try again.</p>
          )}
        </form>
      </div>
    </section>
  );
}
