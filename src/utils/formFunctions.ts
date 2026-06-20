"use server";

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

  // Validate First Name
  if (!firstName || firstName.trim().length < 2) {
    errors.firstName = "First name is required (minimum 2 characters)";
  }
  // Validate Second Name

  if (!secondName || secondName.trim().length < 2) {
    errors.secondName = "Second name is required (minimum 2 characters)";
  }

  // Validate Email
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = "Valid email address is required";
  }

  // Validate Phone (optional but must be valid if provided)
  if (!phone && !/^[\+\d\s\-\(\)]{10,}$/.test(phone)) {
    errors.phone = "Please enter a valid phone number";
  }

  // Validate Service
  if (!service || service.trim().length < 10) {
    errors.service = "Service is required ";
  }

  // Validate Message
  if (!message || message.trim().length < 10) {
    errors.message = "Message is required (minimum 10 characters)";
  }

  // If there are errors, return them
  if (Object.keys(errors).length > 0) {
    return {
      errors,
      success: false,
    };
  }

  // Here you would typically send the data to your email service or database
  // For example: await sendEmail({ firstName, secondName, email, phone, service, message });

  console.log("Form Data:", {
    firstName,
    secondName,
    email,
    phone,
    service,
    message,
  });

  // Return success
  return {
    success: true,
  };
}
