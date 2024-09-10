import { NextRequest, NextResponse } from 'next/server';
import { sql } from '@vercel/postgres';
import { postUser } from '@/app/lib/actions';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get('user_id');

    const existingUserQuery = await sql`
      SELECT * FROM users WHERE user_id = ${userId};
    `;

    let existingUser = existingUserQuery.rows[0];

    if (!existingUser) {
      const newUser = {
        id: userId,
        email: 'example@example.com', // Replace with actual data
        given_name: 'John', // Replace with actual data
        family_name: 'Doe', // Replace with actual data
        cart: [], // Initialize with empty cart
      };

      existingUser = await postUser(newUser);
    }

    return NextResponse.json(existingUser);
  } catch (error) {
    console.error('Error fetching user:', error);
    return NextResponse.json({ error: 'Failed to fetch user from the database.' }, { status: 500 });
  }
}