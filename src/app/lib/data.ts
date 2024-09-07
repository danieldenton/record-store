import { sql } from "@vercel/postgres";
import {
  ArtistSearchResult,
  AlbumSearchResult,
  Album,
  Artist,
} from "./definitions";

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
    const albumQuery = await sql<Album>`
        SELECT
          id,
          name,
          release,
          notes,
          price,
          cover,
          genres
        FROM albums  
        WHERE albums.id = ${id};
      `;

    const album = albumQuery.rows[0];

    const artistQuery = await sql`
        SELECT 
          artist_id
        FROM album_artists
        WHERE album_artists.album_id = ${id}  
      `;

    const albumIds = artistQuery.rows.map((row) => row.artist_id);

    const albumIdsString = `{${albumIds.join(",")}}`;

    const artistNamesQuery = await sql`
        SELECT 
          name
        FROM artists
        WHERE id = ANY(${albumIdsString});
  `;

    const artists = artistNamesQuery.rows.map((row) => row.name);

    return {
      ...album,
      artists,
    };
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch album.");
  }
}

export async function fetchArtistById(id: string) {
  try {
    const artistQuery = await sql<Artist>`
          SELECT
            id,
            name,
            bio,
            image,
            genres
          FROM artists  
          WHERE artists.id = ${id};
        `;

    const artist = artistQuery.rows[0];

    const albumsQuery = await sql`
          SELECT 
            album_id
          FROM album_artists
          WHERE album_artists.artist_id = ${id}  
        `;

    const albumIds = albumsQuery.rows.map((row) => row.album_id);

    const albumIdsString = `{${albumIds.join(",")}}`;

    const albumNamesQuery = await sql`
          SELECT 
            id,
            name,
            cover
          FROM albums
          WHERE id = ANY(${albumIdsString});
    `;

    const albums = albumNamesQuery.rows.map((row) => ({
        id: row.id,
        name: row.name,
        cover: row.cover
      }));
  

    return {
      ...artist,
      albums,
    };
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch album.");
  }
}
