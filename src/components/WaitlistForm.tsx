"use client";
import { useState } from "react";

interface WaitlistFormProps {
  ctaText?: string;
}

export default function WaitlistForm({ ctaText = "Join waitlist" }: WaitlistFormProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (res.ok) {
        setStatus("success");
        setMessage(data.message);
        setEmail("");
      } else {
        setStatus("error");
        setMessage(data.message || "Er is iets misgegaan.");
      }
    } catch {
      setStatus("error");
      setMessage("Er is iets misgegaan. Probeer het opnieuw.");
    }
  };

  if (status === "success") {
    return (
      <div className="bg-white/5 border border-white/10 rounded-2xl p-6 max-w-md mx-auto">
        <p className="text-green-400 font-medium">{message}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="jouw@email.nl"
        required
        className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-green-400/50 transition-colors"
      />
      <button
        type="submit"
        disabled={status === "loading"}
        className="bg-green-400 text-black font-semibold px-6 py-3 rounded-xl hover:bg-green-300 transition-colors disabled:opacity-50"
      >
        {status === "loading" ? "..." : ctaText}
      </button>
      {status === "error" && (
        <p className="text-red-400 text-sm mt-2 w-full">{message}</p>
      )}
    </form>
  );
}
