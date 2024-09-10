"use server";

import { z } from "zod";
import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function postUser(user: {
  id: string;
  email: string;
  given_name: string;
  family_name: string;
  cart: number[];
}) {
  try {
    const response = await sql`
          INSERT INTO users (user_id, email, first_name, last_name, cart)
          VALUES (${user.id}, ${user.email}, ${user.given_name}, ${user.family_name})
          RETURNING *;
        `;

    return response.rows[0];
  } catch (error) {
    console.error("Error inserting new user:", error);
    throw new Error("Failed to create user.");
  }
}

export async function getUserFromDB(user: any) {
  try {
    const existingUserQuery = await sql`
        SELECT * FROM users WHERE user_id = ${user.id};
      `;

    let existingUser = existingUserQuery.rows[0];

    if (!existingUser) {
      existingUser = await postUser(user);
    }

    return existingUser;
  } catch (error) {
    console.error("Error fetching user:", error);
    throw new Error("Failed to fetch user from the database.");
  }
}
