"use client";

import { useState } from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useData } from "@/providers/data-provider";

export function PetitionForm() {
  const { addPetition } = useData();
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [indexNumber, setIndexNumber] = useState("");
  const [category, setCategory] = useState("Welfare Concern");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    await addPetition({ name, indexNumber, category, message });
    setSubmitted(true);
    setName("");
    setIndexNumber("");
    setMessage("");
  }

  if (submitted) {
    return (
      <Card className="mx-auto max-w-2xl border-destructive/20">
        <CardContent className="p-8 text-center">
          <p className="text-lg font-semibold text-primary">Petition received</p>
          <p className="mt-2 text-sm text-muted-foreground">
            The Senate clerk will review your submission. You can track status after
            staff sign in to the dashboard.
          </p>
          <button
            type="button"
            className="mt-6 text-sm font-medium text-destructive hover:underline"
            onClick={() => setSubmitted(false)}
          >
            Submit another petition
          </button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="mx-auto max-w-2xl">
      <CardHeader>
        <CardTitle>Submit a Petition</CardTitle>
        <p className="text-sm text-muted-foreground">
          Submissions are stored in Supabase when configured, or locally for demo mode.
        </p>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="mb-1 block text-sm font-medium">
              Full Name
            </label>
            <input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm"
              required
            />
          </div>
          <div>
            <label htmlFor="index" className="mb-1 block text-sm font-medium">
              Index Number
            </label>
            <input
              id="index"
              value={indexNumber}
              onChange={(e) => setIndexNumber(e.target.value)}
              className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm"
              required
            />
          </div>
          <div>
            <label htmlFor="category" className="mb-1 block text-sm font-medium">
              Category
            </label>
            <select
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm"
            >
              <option>Complaint</option>
              <option>Policy Idea</option>
              <option>Welfare Concern</option>
            </select>
          </div>
          <div>
            <label htmlFor="message" className="mb-1 block text-sm font-medium">
              Details
            </label>
            <textarea
              id="message"
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-lg bg-destructive py-3 text-sm font-semibold text-white hover:bg-destructive/90"
          >
            Submit Petition
          </button>
        </form>
      </CardContent>
    </Card>
  );
}
