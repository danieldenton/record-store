import { sql } from "@vercel/postgres";
import {
  ArtistSearchResults,
  AlbumSearchResults,
  SearchResult,
} from "./definitions";

export async function fetchSearch(query: string) {
  try {
    // Search in albums table
    const albumResults = await sql<AlbumSearchResults>`
        SELECT
          albums.id,
          albums.name
        FROM albums
        WHERE albums.name ILIKE ${`%${query}%`}
      `;

    // Search in artists table
    const artistResults = await sql<ArtistSearchResults>`
        SELECT
          artists.id,
          artists.name
        FROM artists
        WHERE artists.name ILIKE ${`%${query}%`}
      `;

    // Combine results
    const combinedResults = [
      ...albumResults.rows.map((row: AlbumSearchResults) => ({
        id: row.id,
        name: row.name,
        type: "album",
      })),
      ...artistResults.rows.map((row: ArtistSearchResults) => ({
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
