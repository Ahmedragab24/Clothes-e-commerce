"use server";

import { z } from "zod";

const schema = z.object({
  email: z.string().email(),
});

export async function subscribeToNewsletter(formData: FormData) {
  const email = formData.get("email");

  const result = schema.safeParse({ email });

  if (!result.success) {
    return { message: "Invalid email address" };
  }

  // Here you would typically send the email to your newsletter service
  // For this example, we'll just simulate a successful subscription
  console.log(`Subscribing email: ${email}`);

  return { message: "Thank you for subscribing!" };
}
