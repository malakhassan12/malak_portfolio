"use server";

import { EmailTemplate } from "@/components/Resend/email-template";
import { about } from "@/constants/ProfileConstants";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export type FormState = {
  errors?: {
    firstName?: string;
    secondName?: string;
    email?: string;
    phone?: string;
    service?: string;
    message?: string;
  };
  success?: boolean;
};

async function sendEmailViaResend(formData: FormData): Promise<boolean> {
  try {
    const firstName = formData.get("firstName") as string;
    const secondName = formData.get("secondName") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const service = formData.get("service") as string;
    const message = formData.get("message") as string;

    const { data, error } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: [about.email],
      replyTo: email,
      subject: `New Contact Form Submission from ${firstName} ${secondName}`,
      react: EmailTemplate({
        firstName,
        secondName,
        email,
        phone,
        service,
        message,
      }),
    });

    if (error) {
      console.error("Resend API Refused to send:", error);
      return false;
    }

    console.log("Email sent successfully:", data);
    return true;
  } catch (error) {
    console.error("CRITICAL RESEND ERROR:", error);
    return false;
  }
}

export async function sendData(
  prevState: FormState,
  formData: FormData,
): Promise<FormState> {
  const firstName = formData.get("firstName") as string;
  const secondName = formData.get("secondName") as string;
  const email = formData.get("email") as string;
  const phone = formData.get("phone") as string;
  const service = formData.get("service") as string;
  const message = formData.get("message") as string;

  const errors: FormState["errors"] = {};

  // --- الـ Validation ---
  if (!firstName || firstName.trim().length < 2) {
    errors.firstName = "First name is required (minimum 2 characters)";
  }
  if (!secondName || secondName.trim().length < 2) {
    errors.secondName = "Second name is required (minimum 2 characters)";
  }
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = "Valid email address is required";
  }
  if (phone && !/^[+\d\s\-()]{10,}$/.test(phone)) {
    errors.phone = "Please enter a valid phone number";
  }
  if (!service) {
    errors.service = "Service is required";
  }
  if (!message || message.trim().length < 10) {
    errors.message = "Message is required (minimum 10 characters)";
  }

  if (Object.keys(errors).length > 0) {
    return {
      errors,
      success: false,
    };
  }

  const isEmailSent = await sendEmailViaResend(formData);

  return {
    success: isEmailSent,
  };
}
