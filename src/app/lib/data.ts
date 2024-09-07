import { sql } from "@vercel/postgres";
import { ArtistSearchResult, AlbumSearchResult } from "./definitions";

export async function fetchSearch(query: string) {
  try {
    const albumResults = await sql<AlbumSearchResult>`
        SELECT
          albums.id,
          albums.name
        FROM albums
        WHERE albums.name ILIKE ${`%${query}%`}
      `;

    const artistResults = await sql<ArtistSearchResult>`
        SELECT
          artists.id,
          artists.name
        FROM artists
        WHERE artists.name ILIKE ${`%${query}%`}
      `;

    const combinedResults = [
      ...albumResults.rows.map((row: AlbumSearchResult) => ({
        id: row.id,
        name: row.name,
        type: "album",
      })),
      ...artistResults.rows.map((row: ArtistSearchResult) => ({
        id: row.id,
        name: row.name,
        type: "artist",
      })),
    ];

    return combinedResults;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch results.");
  }
}
