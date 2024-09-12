"use server";

import { sql } from "@vercel/postgres";
import { z } from "zod";
import { KindeUser } from "@kinde-oss/kinde-auth-nextjs/types";

export const userSchema = z.object({
  id: z.number(),
  user_id: z.string(),
  email: z.string(),
  first_name: z.string(),
  last_name: z.string(),
});

export async function postUser(user: KindeUser<Record<string, any>>) {
  try {
    const response = await sql`
          INSERT INTO users (user_id, email, first_name, last_name)
          VALUES (${user.id}, ${user.email}, ${user.given_name}, ${user.family_name})
          RETURNING *;
        `;

    const validatedUser = userSchema.safeParse(response.rows[0]);

    if (!validatedUser.success) {
      console.error(validatedUser.error);
      return;
    }

    return validatedUser.data;
  } catch (error) {
    console.error("Error inserting new user:", error);
    throw new Error("Failed to create user.");
  }
}