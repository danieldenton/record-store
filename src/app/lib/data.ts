import { sql } from "@vercel/postgres";
import { ArtistSearchResult, AlbumSearchResult, Album } from "./definitions";

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

export async function fetchAlbumById(id: string) {
  try {
    const album = await sql<Album>`
        SELECT
          id,
          name,
          release,
          notes,
          price,
          cover,
          genres,
        FROM albums
        WHERE albums.id = ${id};
      `;

    const artistQuery = await sql`
        SELECT 
          artist_id,
        FROM album_artists
        WHERE album_artists.album_id = ${id}  
      `;

    const artistIds = artistQuery.rows.map((row) => row.artist_id);

    const artistIdsString = `{${artistIds.join(",")}}`;

    const artistNamesQuery = await sql`
        SELECT 
          name,
        FROM artists
        WHERE id = ANY(${artistIdsString});
  `;

    const artist = artistNamesQuery.rows.map((row) => row.name);

    return {
      ...album,
      artist,
    };
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch album.");
  }
}
