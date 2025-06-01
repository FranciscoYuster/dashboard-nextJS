"use server"

import { z } from "zod"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

const CustomerSchema = z.object({
  name: z.string().min(1, { message: "Please enter a customer name." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  imageUrl: z.string().optional(),
})

export type CustomerState = {
  errors?: {
    name?: string[]
    email?: string[]
    imageUrl?: string[]
  }
  message?: string | null
}

export async function createCustomer(prevState: CustomerState, formData: FormData) {
  // Validate form fields using Zod
  const validatedFields = CustomerSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    imageUrl: formData.get("imageUrl"),
  })

  // If form validation fails, return errors
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Missing Fields. Failed to Create Customer.",
    }
  }

  // Prepare data for insertion into the database
  const { name, email, imageUrl } = validatedFields.data

  // Simulate database operation
  try {
    console.log("Creating customer:", { name, email, imageUrl })
    // In a real app, you would insert the data into your database here
    await new Promise((resolve) => setTimeout(resolve, 1000))
  } catch (error) {
    return {
      message: "Database Error: Failed to Create Customer.",
    }
  }

  // Revalidate the customers page and redirect
  revalidatePath("/dashboard/customers")
  redirect("/dashboard/customers")
}
