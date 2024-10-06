import { sql } from "@vercel/postgres";
import { SearchResult, Album, Artist } from "./definitions";

export async function fetchSearch(query: string) {
  try {
    const albumResults = await sql<SearchResult>`
        SELECT
          albums.id,
          albums.name
        FROM albums
        WHERE albums.name ILIKE ${`%${query}%`}
      `;

    const artistResults = await sql<SearchResult>`
        SELECT
          artists.id,
          artists.name
        FROM artists
        WHERE artists.name ILIKE ${`%${query}%`}
      `;

    let combinedResults: SearchResult[] = [
      ...albumResults.rows.map((row: SearchResult) => ({
        id: row.id,
        name: row.name,
        type: "album" as const,
      })),
      ...artistResults.rows.map((row: SearchResult) => ({
        id: row.id,
        name: row.name,
        type: "artist" as const,
      })),
    ];

    if (combinedResults.length === 0) {
      combinedResults = [
        {
          id: null,
          name: "We can't find anything that matches your search...",
          type: null,
        },
      ];
    }

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

    const artistIds = artistQuery.rows.map((row) => row.artist_id);

    const artistIdsString = `{${artistIds.join(",")}}`;

    const artistNamesQuery = await sql`
        SELECT 
          id,
          name
        FROM artists
        WHERE id = ANY(${artistIdsString});
  `;

    const artists = artistNamesQuery.rows.map((row) => ({
      id: row.id,
      name: row.name,
      image: row.image,
    }));

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
            cover,
            release
          FROM albums
          WHERE id = ANY(${albumIdsString});
    `;

    const albums = albumNamesQuery.rows.map((row) => ({
      id: row.id,
      name: row.name,
      cover: row.cover,
      release: row.release,
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

export async function fetchAlbumsByIds(ids: string) {
  try {
    const albumQuery = await sql<Album>`
        SELECT
          id,
          name,
          price,
          cover
        FROM albums  
        WHERE albums.id = ANY(${ids})
      `;

    const albumResults = albumQuery.rows;

    const albumsWithArtists = await Promise.all(
      albumResults.map(async (album) => {
        const artistQuery = await sql`
        SELECT 
          artist_id
        FROM album_artists
        WHERE album_artists.album_id = ${album.id}  
      `;

        const artistIds = artistQuery.rows.map((row) => row.artist_id);

        const artistIdsString = `{${artistIds.join(",")}}`;

        const artistNamesQuery = await sql`
        SELECT 
          name
        FROM artists
        WHERE id = ANY(${artistIdsString});
  `;

        const artists = artistNamesQuery.rows.map((row) => row.name);

        return {
          ...album,
          artists,
        };
      })
    );

    return albumsWithArtists;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch albums.");
  }
}
