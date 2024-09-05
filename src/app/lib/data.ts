import { sql } from "@vercel/postgres";
import { Album } from "./definitions";

export async function fetchSearch(query: string) {
  try {
    const results = await sql<Album & { match: string }>`
        SELECT
          albums.id
          albums.artist
          albums.name
          albums.year
          albums.notes
          albums.price
          albums.cover
          albums.genre
        CASE
          WHEN albums.name ILIKE ${`%${query}%`} THEN 'name'
          WHEN albums.artist ILIKE ${`%${query}%`} THEN 'artist'
        END AS match
      FROM albums
      WHERE
        albums.name ILIKE ${`%${query}%`} OR
        albums.artist ILIKE ${`%${query}%`}
      `;

    return results.rows;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch results.");
  }
}
