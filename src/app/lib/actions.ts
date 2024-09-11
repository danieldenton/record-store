"use server";

import { sql } from "@vercel/postgres";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { KindeUser } from "@kinde-oss/kinde-auth-nextjs/types";
import { User } from "./definitions";

export async function postUser(user: KindeUser<Record<string, any>>) {
  try {
    const response = await sql`
          INSERT INTO users (user_id, email, first_name, last_name)
          VALUES (${user.id}, ${user.email}, ${user.given_name}, ${user.family_name})
          RETURNING *;
        `;

    return response.rows[0];
  } catch (error) {
    console.error("Error inserting new user:", error);
    throw new Error("Failed to create user.");
  }
}

export async function getUserFromDB(user: KindeUser<Record<string, any>>) {
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

export async function getUserWrapperFunction() {
  try {
    const { getUser } = getKindeServerSession();
    const kindeUser = await getUser();
    if (kindeUser && kindeUser.id && kindeUser.email) {
      const user = await getUserFromDB(kindeUser);
      return user
    } else {
      console.error("Kinde user is invalid or missing data");
    }
  } catch (error) {
    console.error("Error handling Kinde user:", error);
  }
}
