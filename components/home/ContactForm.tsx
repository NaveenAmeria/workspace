"use client";

import { useState, type FormEvent } from "react";
import { CheckIcon, LockIcon } from "@/components/ui/Icons";

/**
 * Project inquiry form — shared by the homepage consultation section and
 * the /contact page. Includes client-side validation (required fields,
 * email format, 500-character brief limit) and a success confirmation
 * state. Wire the submit handler to your CRM / email endpoint to go live.
 */

const BUDGET_OPTIONS = [
  "Under $500",
  "$500 – $1,000",
  "$1,000 – $2,500",
  "$2,500 – $5,000",
  "Not sure yet",
];

const BRIEF_MAX_CHARS = 500;

const FIELD_CLASSES =
  "min-h-12 w-full rounded-lg border border-line bg-card px-[18px] py-[14px] text-snow placeholder:text-dim transition-all duration-200 focus:border-violet focus:shadow-[0_0_0_3px_rgba(108,99,255,0.15)] focus:outline-none";

interface FieldErrors {
  name?: string;
  email?: string;
  brief?: string;
}

export default function ContactForm() {
  const [brief, setBrief] = useState("");
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [shaking, setShaking] = useState(false);

  const validate = (form: HTMLFormElement): FieldErrors => {
    const data = new FormData(form);
    const next: FieldErrors = {};
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const briefValue = String(data.get("brief") ?? "").trim();

    if (!name) next.name = "Please enter your full name.";
    if (!email) {
      next.email = "Please enter your business email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      next.email = "That email address doesn't look right.";
    }
    if (!briefValue) {
      next.brief = "Tell us a little about your project.";
    } else if (briefValue.length > BRIEF_MAX_CHARS) {
      next.brief = `Please keep the brief under ${BRIEF_MAX_CHARS} characters.`;
    }
    return next;
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const fieldErrors = validate(form);
    setErrors(fieldErrors);
    if (Object.keys(fieldErrors).length > 0) {
      // Briefly shake the invalid fields to draw the eye.
      setShaking(true);
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: new FormData(form),
      });
      const data = await res.json();
      if (data.success) {
        setStatus("sent");
      } else {
        setStatus("idle");
        alert(data.message ?? "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("idle");
      alert("Network error. Please check your connection and try again.");
    }
  };

  if (status === "sent") {
    return (
      <div
        role="status"
        className="flex flex-col items-center rounded-lg border border-mint/30 bg-mint/[0.06] px-8 py-14 text-center"
      >
        <span className="animate-pop flex h-14 w-14 items-center justify-center rounded-full border border-mint/30 bg-mint/10 text-mint shadow-[0_0_40px_rgba(0,229,190,0.25)]">
          <CheckIcon size={28} />
        </span>
        <h3 className="mt-6 font-display text-2xl font-bold text-snow">
          Brief received.
        </h3>
        <p className="mt-3 max-w-md leading-relaxed text-mute">
          Thanks for reaching out. We reply to every inquiry within{" "}
          <span className="text-mint">1 business day</span> — keep an eye on
          your inbox.
        </p>
        <button
          type="button"
          onClick={() => {
            setStatus("idle");
            setBrief("");
          }}
          className="mt-8 text-sm font-medium text-violet hover:underline"
        >
          Send another brief
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      onAnimationEnd={() => setShaking(false)}
      noValidate
      className="space-y-5"
    >
      {/* Web3Forms access key — replace with your own from https://web3forms.com */}
      <input type="hidden" name="access_key" value="2952c9b2-3b32-4bb9-a654-b62a9223826b" />
      <input type="hidden" name="subject" value="New Project Inquiry — SmoothCuts" />
      <input type="hidden" name="from_name" value="SmoothCuts Contact Form" />
      {/* Full name */}
      <div>
        <label htmlFor="name" className="mb-2 block text-sm font-medium text-snow">
          Full Name <span className="text-coral" aria-hidden="true">*</span>
        </label>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          placeholder="Your full name"
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? "name-error" : undefined}
          className={`${FIELD_CLASSES} ${shaking && errors.name ? "animate-shake border-coral/60" : ""}`}
        />
        {errors.name && (
          <p id="name-error" role="alert" className="mt-1.5 text-sm text-coral">
            {errors.name}
          </p>
        )}
      </div>

      {/* Business email */}
      <div>
        <label htmlFor="email" className="mb-2 block text-sm font-medium text-snow">
          Business Email <span className="text-coral" aria-hidden="true">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="you@company.com"
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? "email-error" : undefined}
          className={`${FIELD_CLASSES} ${shaking && errors.email ? "animate-shake border-coral/60" : ""}`}
        />
        {errors.email && (
          <p id="email-error" role="alert" className="mt-1.5 text-sm text-coral">
            {errors.email}
          </p>
        )}
      </div>

      {/* Company name */}
      <div>
        <label htmlFor="company" className="mb-2 block text-sm font-medium text-snow">
          Company Name
        </label>
        <input
          id="company"
          name="company"
          type="text"
          autoComplete="organization"
          placeholder="Your company or brand name"
          className={FIELD_CLASSES}
        />
      </div>

      {/* Budget range */}
      <div>
        <label htmlFor="budget" className="mb-2 block text-sm font-medium text-snow">
          Budget Range
        </label>
        <select id="budget" name="budget" defaultValue="" className={FIELD_CLASSES}>
          <option value="" disabled>
            Select your budget range
          </option>
          {BUDGET_OPTIONS.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      {/* Project brief */}
      <div>
        <label htmlFor="brief" className="mb-2 block text-sm font-medium text-snow">
          Project Brief <span className="text-coral" aria-hidden="true">*</span>
        </label>
        <textarea
          id="brief"
          name="brief"
          rows={4}
          maxLength={BRIEF_MAX_CHARS}
          value={brief}
          onChange={(e) => setBrief(e.target.value)}
          placeholder="Briefly describe your project, goals, and any specific requirements..."
          aria-invalid={Boolean(errors.brief)}
          aria-describedby={errors.brief ? "brief-error" : "brief-counter"}
          className={`${FIELD_CLASSES} resize-y ${shaking && errors.brief ? "animate-shake border-coral/60" : ""}`}
        />
        <div className="mt-1.5 flex items-center justify-between">
          {errors.brief ? (
            <p id="brief-error" role="alert" className="text-sm text-coral">
              {errors.brief}
            </p>
          ) : (
            <span />
          )}
          <p id="brief-counter" className="font-mono text-xs text-dim">
            {brief.length}/{BRIEF_MAX_CHARS}
          </p>
        </div>
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="gradient-cta w-full rounded-lg py-[18px] font-display text-base font-semibold text-white transition-all duration-200 ease-out hover:scale-[1.01] hover:opacity-90 disabled:cursor-wait disabled:opacity-60"
      >
        {status === "sending" ? "Sending…" : "Send My Brief →"}
      </button>

      <p className="flex items-center justify-center gap-2 text-center text-[13px] text-dim">
        <LockIcon size={14} />
        Your information is completely private and never shared with anyone.
      </p>
    </form>
  );
}
