"use client";

import { useState } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useData } from "@/providers/data-provider";
import { cn } from "@/lib/utils";

const CATEGORIES = ["Complaint", "Policy Idea", "Welfare Concern"] as const;

export function PetitionForm() {
  const { addPetition } = useData();
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [indexNumber, setIndexNumber] = useState("");
  const [category, setCategory] = useState<string>(CATEGORIES[2]);
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (submitting) return;

    setError(null);
    setSubmitting(true);

    try {
      await addPetition({
        name: name.trim(),
        indexNumber: indexNumber.trim(),
        category,
        message: message.trim(),
      });
      setSubmitted(true);
      setName("");
      setIndexNumber("");
      setMessage("");
      setCategory(CATEGORIES[2]);
    } catch {
      setError(
        "We could not send your petition just now. Please check your connection and try again.",
      );
    } finally {
      setSubmitting(false);
    }
  }

  function resetForm() {
    setSubmitted(false);
    setError(null);
  }

  if (submitted) {
    return (
      <Card className="mx-auto max-w-2xl border-[var(--senate-blue)]/15 shadow-sm">
        <CardContent className="px-6 py-10 text-center sm:px-10 sm:py-12">
          <span className="mx-auto flex size-14 items-center justify-center rounded-full bg-[var(--senate-blue)]/8 text-[var(--senate-blue)]">
            <CheckCircle2 className="size-7" strokeWidth={1.75} aria-hidden />
          </span>
          <p className="mt-5 font-heading text-xl font-semibold tracking-tight text-primary sm:text-2xl">
            Thank you for your submission
          </p>
          <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-muted-foreground sm:text-base">
            Your petition has been received by the SCISA Senate. Leadership will
            review it and respond within one week. Where further details are
            needed, you may be contacted through the channels linked to your
            submission.
          </p>
          <p className="mx-auto mt-4 max-w-md text-xs leading-relaxed text-muted-foreground sm:text-sm">
            Please keep your index number available for reference during follow-up.
          </p>
          <button
            type="button"
            className="mt-8 text-sm font-semibold text-[var(--senate-blue)] underline-offset-4 hover:underline"
            onClick={resetForm}
          >
            Submit another petition
          </button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="mx-auto max-w-2xl shadow-sm">
      <CardHeader className="space-y-2">
        <CardTitle>Submit a petition</CardTitle>
        <p className="text-sm leading-relaxed text-muted-foreground">
          Share a complaint, policy idea, or welfare concern for formal Senate
          consideration. You should receive a response within one week.
        </p>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4" noValidate={false}>
          <div>
            <label htmlFor="name" className="mb-1.5 block text-sm font-medium">
              Full name
            </label>
            <input
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              autoComplete="name"
              disabled={submitting}
              className="w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm disabled:opacity-60"
              required
            />
          </div>
          <div>
            <label htmlFor="index" className="mb-1.5 block text-sm font-medium">
              Index number
            </label>
            <input
              id="index"
              name="indexNumber"
              value={indexNumber}
              onChange={(e) => setIndexNumber(e.target.value)}
              disabled={submitting}
              className="w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm disabled:opacity-60"
              required
            />
          </div>
          <div>
            <label htmlFor="category" className="mb-1.5 block text-sm font-medium">
              Category
            </label>
            <select
              id="category"
              name="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              disabled={submitting}
              className="w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm disabled:opacity-60"
            >
              {CATEGORIES.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="message" className="mb-1.5 block text-sm font-medium">
              Details
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              disabled={submitting}
              className="w-full resize-y rounded-lg border border-input bg-background px-3 py-2.5 text-sm disabled:opacity-60"
              required
            />
          </div>

          {error ? (
            <p
              role="alert"
              className="rounded-lg border border-destructive/25 bg-destructive/5 px-3 py-2.5 text-sm text-destructive"
            >
              {error}
            </p>
          ) : null}

          <button
            type="submit"
            disabled={submitting}
            className={cn(
              "inline-flex w-full items-center justify-center gap-2 rounded-lg bg-destructive py-3 text-sm font-semibold text-white",
              "hover:bg-destructive/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--institutional-gold)] focus-visible:ring-offset-2",
              "disabled:cursor-not-allowed disabled:opacity-70",
            )}
          >
            {submitting ? (
              <>
                <Loader2 className="size-4 animate-spin" aria-hidden />
                Submitting…
              </>
            ) : (
              "Submit petition"
            )}
          </button>
        </form>
      </CardContent>
    </Card>
  );
}
