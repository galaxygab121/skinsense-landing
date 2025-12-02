"use client";

import { FormEvent, useState } from "react";

export default function WaitlistCTA() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (!res.ok) throw new Error("Request failed");

      setStatus("success");
      setEmail("");
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  }

  return (
    <section
      id="waitlist"
      className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8"
    >
      <div className="section-card flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
        <div>
          <h2 className="text-2xl font-semibold text-graphite">
            Get early access to SkinSense
          </h2>
          <p className="mt-1 text-sm text-slate-600">
            Join the waitlist and be the first to try AI-powered skincare routines.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="mt-4 flex w-full flex-col gap-3 sm:mt-0 sm:flex-row"
        >
          <input
            type="email"
            required
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-full border border-serenity/60 bg-white/80 px-4 py-2 text-sm text-graphite outline-none placeholder:text-slate-400 focus:border-neuralBlue"
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className="btn-primary w-full sm:w-auto"
          >
            {status === "loading" ? "Joining..." : "Join the Waitlist"}
          </button>
        </form>

        {status === "success" && (
          <p className="mt-1 text-xs text-emerald-600">
            You&apos;re in! Check your inbox soon for updates.
          </p>
        )}
        {status === "error" && (
          <p className="mt-1 text-xs text-rose-600">
            Something went wrong. Please try again.
          </p>
        )}
      </div>
    </section>
  );
}
