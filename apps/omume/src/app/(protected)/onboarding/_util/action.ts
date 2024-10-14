"use server"
import { Country, State } from "country-state-city"
import { redirect } from "next/navigation"

export async function registerUser(details: any, formData: FormData) {
  try {
    const bioData = {
      country: formData.get("country"),
      state: formData.get("state"),
      city: formData.get("city"),
      timezone: formData.get("timezone"),
    }

    const user = {
      first_name: details?.fullName.split(" ")[0],
      last_name: details?.fullName.split(" ")[1],
      email: details?.email,
      phone: details?.phoneNumber,
      "Auth Type": "Password",
      password: details?.password,
      "Google UUID": "",
      "Facebook UUID": "",
      "Apple UUID": "",
      "Profile Photo URL": "",
      Interests: details.interests,
      City: bioData.city,
      State: State.getStateByCode(bioData?.state as string)?.name,
      Country: Country.getCountryByCode(bioData?.country as string)?.name,
      Timezone: bioData?.timezone,
      Role: "Attendee",
    }
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/v1/auth/register`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      }
    )
    const data = await res.json()
    if (!res.ok) {
      return {
        error: true,
        ...data,
      }
    }
    return {
      success: true,
      message: "User registered successfully",
      user: data,
    }
  } catch (error: any) {
    return {
      error: true,
      message: "Failed to register user",
      details: error.message,
    }
  }
}
