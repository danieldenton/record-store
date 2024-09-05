import { db } from "@vercel/postgres";
import { albums } from "../lib/albums-data";

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

  const insertedArtists = await Promise.all(
    albums.map(
      (album) => client.sql`
        INSERT INTO albums (id, artist, name, year, notes, price, cover, genre)
        VALUES (${album.id}, ${album.artist}, ${album.name}, ${album.year}, ${album.notes}, ${album.price}, ${album.cover}, ${album.genre})
        ON CONFLICT (id) DO NOTHING;
      `
    )
  );

return insertedArtists;
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
      genres TEXT[]
    );
  `;

  const insertedAlbums = await Promise.all(
    albums.map(
      (album) => client.sql`
        INSERT INTO albums (id, artist, name, year, notes, price, cover, genre)
        VALUES (${album.id}, ${album.artist}, ${album.name}, ${album.year}, ${album.notes}, ${album.price}, ${album.cover}, ${album.genre})
        ON CONFLICT (id) DO NOTHING;
      `
    )
  );

  return insertedAlbums
}

 

export async function GET() {
  try {
    await client.sql`BEGIN`;
    await seedArtists()
    await seedAlbums();
    await client.sql`COMMIT`;

    return Response.json({ message: "Database seeded successfully" });
  } catch (error) {
    await client.sql`ROLLBACK`;
    return Response.json({ error }, { status: 500 });
  }
}
