"use server";

import { sql } from "@vercel/postgres";
import { z } from "zod";
import { KindeUser } from "@kinde-oss/kinde-auth-nextjs/types";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

const userSchema = z.object({
  id: z.number(),
  user_id: z.string(),
  email: z.string(),
  first_name: z.string(),
  last_name: z.string(),
});

async function postUser(user: KindeUser<Record<string, any>>) {
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

async function getUserFromDB(user: KindeUser<Record<string, any>>) {
  try {
    const existingUserQuery = await sql`
        SELECT * FROM users WHERE user_id = ${user.id};
      `;

    let existingUser = existingUserQuery.rows[0];

    const validatedUser = userSchema.safeParse(existingUser);

    if (!validatedUser.success) {
      console.error(validatedUser.error);
      return;
    }

    return validatedUser.data;
  } catch (error) {
    console.error("Error fetching user:", error);
    throw new Error("Failed to fetch user from the database.");
  }
}

export async function getUserWrapperFunction() {
  try {
    const { getUser } = getKindeServerSession();
    const kindeUser = await getUser();
    if (kindeUser && kindeUser.id && kindeUser.email) {
      let user = await getUserFromDB(kindeUser);
      if (!user) {
        user = await postUser(kindeUser);
      }
      return user;
    } else {
      console.error("Kinde user is invalid or missing data");
    }
  } catch (error) {
    console.error("Error handling Kinde user:", error);
  }
}

// export async function updateUser(userId: string, cart: number[]) {
//   try {
//     const response = await sql`
//       UPDATE users
//       SET cart = ${JSON.stringify(cart)}
//       WHERE user_id = ${userId}
//       RETURNING *;
//     `;

//     const validatedUser = userSchema.safeParse(response.rows[0]);

//     if (!validatedUser.success) {
//       console.error(validatedUser.error);
//       return;
//     }

//     return validatedUser.data;
//   } catch (error) {
//     console.error("Error updating user:", error);
//     throw new Error("Failed to update user.");
//   }
// }