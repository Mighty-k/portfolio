// components/sections/Contact.jsx
import { useState } from "react";
import { FiMail, FiMapPin, FiPhone, FiGithub, FiLinkedin, FiSend, FiCheck } from "react-icons/fi";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setSubmitted(true);
      setIsSubmitting(false);
      setFormData({ name: "", email: "", message: "" });
    }, 1500);
  };

  const contactInfo = [
    { icon: <FiMail className="text-lg" />, label: "Email", value: "tiolupopo@gmail.com", href: "mailto:tiolupopo@gmail.com" },
    { icon: <FiPhone className="text-lg" />, label: "Phone", value: "+234 704 283 7826", href: "tel:+2347042837826" },
    { icon: <FiMapPin className="text-lg" />, label: "Location", value: "Lagos, Nigeria" },
  ];

  return (
    <section id="contact" className="py-24 px-6 md:px-12" style={{ backgroundColor: "#FDFAF6" }}>
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="max-w-2xl mb-12">
          <p className="section-label mb-3">Get In Touch</p>
          <h2 className="text-4xl md:text-5xl font-serif font-semibold mb-4" style={{ color: "#2C2825" }}>
            Let's create something <span className="text-gradient">together</span>
          </h2>
          <p className="text-base" style={{ color: "#8B8680" }}>
            Have a project in mind? I'm always open to discussing new opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column */}
          <div className="lg:col-span-4 space-y-6">
            {contactInfo.map((item, index) => (
              <a key={index} href={item.href || undefined} className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "rgba(122, 158, 126, 0.1)", color: "#7A9E7E" }}>
                  {item.icon}
                </div>
                <div>
                  <p className="text-xs font-medium mb-0.5" style={{ color: "#8B8680" }}>{item.label}</p>
                  <p className="font-medium" style={{ color: "#2C2825" }}>{item.value}</p>
                </div>
              </a>
            ))}

            <div className="pt-6">
              <p className="section-label mb-4">Follow Me</p>
              <div className="flex gap-3">
                <a href="https://github.com/Mighty-k" target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-xl flex items-center justify-center transition-colors" style={{ backgroundColor: "rgba(139, 134, 128, 0.1)", color: "#8B8680" }}>
                  <FiGithub />
                </a>
                <a href="https://linkedin.com/in/mighty-popoola" target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-xl flex items-center justify-center transition-colors" style={{ backgroundColor: "rgba(139, 134, 128, 0.1)", color: "#8B8680" }}>
                  <FiLinkedin />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="lg:col-span-8">
            <div className="card p-8">
              {!submitted ? (
                <>
                  <h3 className="text-xl font-serif font-semibold mb-6" style={{ color: "#2C2825" }}>
                    Send me a message
                  </h3>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium mb-2" style={{ color: "#2C2825" }}>Name</label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-xl border transition-all focus:outline-none"
                          style={{ backgroundColor: "rgba(232, 223, 213, 0.5)", borderColor: "transparent", color: "#2C2825" }}
                          onFocus={(e) => e.target.style.borderColor = "#7A9E7E"}
                          onBlur={(e) => e.target.style.borderColor = "transparent"}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2" style={{ color: "#2C2825" }}>Email</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-xl border transition-all focus:outline-none"
                          style={{ backgroundColor: "rgba(232, 223, 213, 0.5)", borderColor: "transparent", color: "#2C2825" }}
                          onFocus={(e) => e.target.style.borderColor = "#7A9E7E"}
                          onBlur={(e) => e.target.style.borderColor = "transparent"}
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2" style={{ color: "#2C2825" }}>Message</label>
                      <textarea
                        name="message"
                        rows="4"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border transition-all focus:outline-none resize-none"
                        style={{ backgroundColor: "rgba(232, 223, 213, 0.5)", borderColor: "transparent", color: "#2C2825" }}
                        onFocus={(e) => e.target.style.borderColor = "#7A9E7E"}
                        onBlur={(e) => e.target.style.borderColor = "transparent"}
                      />
                    </div>
                    <button type="submit" className="btn-primary w-full flex items-center justify-center gap-2" disabled={isSubmitting}>
                      {isSubmitting ? (
                        <>
                          <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <FiSend className="text-sm" />
                        </>
                      )}
                    </button>
                  </form>
                </>
              ) : (
                <div className="text-center py-10">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: "rgba(122, 158, 126, 0.1)", color: "#7A9E7E" }}>
                    <FiCheck className="text-2xl" />
                  </div>
                  <h3 className="text-xl font-serif font-semibold mb-2" style={{ color: "#2C2825" }}>Message Sent!</h3>
                  <p className="text-sm mb-4" style={{ color: "#8B8680" }}>I'll get back to you within 24 hours.</p>
                  <button onClick={() => setSubmitted(false)} className="text-sm font-medium underline" style={{ color: "#7A9E7E" }}>
                    Send another
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;