import { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="max-w-5xl mx-auto px-5 py-8">
      <p className="text-xs uppercase tracking-widest text-teal font-mono mb-2">
        Get in Touch
      </p>
      <h1 className="font-display text-3xl text-ink mb-8">Contact Us</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1 flex flex-col gap-5 font-body text-ink/70">
          <div className="flex items-start gap-3">
            <Mail size={18} className="text-gold mt-0.5" />
            <span>support@waypointstays.com</span>
          </div>
          <div className="flex items-start gap-3">
            <Phone size={18} className="text-gold mt-0.5" />
            <span>+91 98765 43210</span>
          </div>
          <div className="flex items-start gap-3">
            <MapPin size={18} className="text-gold mt-0.5" />
            <span>Ghaziabad, Uttar Pradesh, India</span>
          </div>
        </div>

        <div className="lg:col-span-2 bg-white border border-ink/10 rounded-xl p-6">
          {sent ? (
            <div className="flex flex-col items-center justify-center gap-3 py-10 text-center">
              <CheckCircle2 size={36} className="text-teal" />
              <p className="font-display text-lg text-ink">
                Message bhej diya gaya!
              </p>
              <p className="text-ink/50 text-sm">
                Hum jald hi aapse contact karenge.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 font-body">
              <div>
                <label className="text-xs uppercase tracking-widest text-ink/50 font-mono">
                  Name
                </label>
                <input
                  required
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="mt-1 w-full border border-ink/15 rounded-lg px-3 py-2 bg-parchment focus:outline-none focus:ring-2 focus:ring-gold"
                />
              </div>
              <div>
                <label className="text-xs uppercase tracking-widest text-ink/50 font-mono">
                  Email
                </label>
                <input
                  required
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className="mt-1 w-full border border-ink/15 rounded-lg px-3 py-2 bg-parchment focus:outline-none focus:ring-2 focus:ring-gold"
                />
              </div>
              <div>
                <label className="text-xs uppercase tracking-widest text-ink/50 font-mono">
                  Message
                </label>
                <textarea
                  required
                  rows={4}
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  className="mt-1 w-full border border-ink/15 rounded-lg px-3 py-2 bg-parchment focus:outline-none focus:ring-2 focus:ring-gold"
                />
              </div>
              <button
                type="submit"
                className="self-start flex items-center gap-2 bg-ink text-parchment px-5 py-2.5 rounded-lg hover:bg-teal transition"
              >
                <Send size={16} /> Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
