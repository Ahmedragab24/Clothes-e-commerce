"use client";

import { subscribeToNewsletter } from "@/services/NewsLatterEmail";
import { useState } from "react";
import { useFormStatus } from "react-dom";

const NewsletterSignup = () => {
  const [message, setMessage] = useState("");

  const handleSubmit = async (formData: FormData) => {
    const result = await subscribeToNewsletter(formData);
    setMessage(result.message);
  };

  return (
    <form action={handleSubmit} className="space-y-2">
      <div className="flex">
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          required
          className="flex-grow px-3 py-2 border border-secondary-foreground/20 rounded-l-md focus:outline-none focus:ring-2 focus:ring-primary"
        />
        <SubmitButton />
      </div>
      {message && <p className="text-sm text-primary">{message}</p>}
    </form>
  );
};

const SubmitButton = () => {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="px-4 py-2 transition-colors bg-primary text-primary-foreground rounded-r-md hover:bg-primary/90 disabled:bg-primary/50"
    >
      {pending ? "Subscribing..." : "Subscribe"}
    </button>
  );
};

export default NewsletterSignup;
