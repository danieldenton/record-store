import { db } from "@vercel/postgres";
import { albums } from "../lib/albums-data";
import { artists } from "../lib/artist-data";

const client = await db.connect();

async function seedArtists() {
  await client.sql`
    CREATE TABLE IF NOT EXISTS artists (
      id SERIAL PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      bio VARCHAR(255) NOT NULL,
      image VARCHAR(255) NOT NULL,
      genres TEXT[]
    );
  `;

  await Promise.all(
    artists.map(
      (artist) => client.sql`
        INSERT INTO artists (id, name, bio, image, genres)
        VALUES (${artist.id}, ${artist.name}, ${artist.bio}, ${artist.image}, ${artist.genres})
        ON CONFLICT (id) DO NOTHING;
      `
    )
  );
}

async function seedAlbums() {
  await client.sql`
    CREATE TABLE IF NOT EXISTS albums (
      id SERIAL PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      release VARCHAR(255) NOT NULL,
      notes VARCHAR(255) NOT NULL,
      price VARCHAR(255) NOT NULL,
      cover VARCHAR(255) NOT NULL,
      genres TEXT[],
      artist_id INTEGER REFERENCES artists(id) ON DELETE SET NULL
    );
  `;

  await Promise.all(
    albums.map(
      (album) => client.sql`
        INSERT INTO albums (id, name, release, notes, price, cover, genres, artist_id)
        VALUES (${album.id}, ${album.name}, ${album.release}, ${album.notes}, ${album.price}, ${album.cover}, ${album.genres}, ${album.artistId})
        ON CONFLICT (id) DO NOTHING;
      `
    )
  );
}

export async function GET() {
  try {
    await client.sql`BEGIN`;
    await seedArtists();
    await seedAlbums();
    await client.sql`COMMIT`;

    return Response.json({ message: "Database seeded successfully" });
  } catch (error) {
    await client.sql`ROLLBACK`;
    return Response.json({ error }, { status: 500 });
  }
}
