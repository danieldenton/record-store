import { db } from "@vercel/postgres";
import { albums } from "../lib/albums-data";
import { artists } from "../lib/artist-data";

const client = await db.connect();

async function seedArtists() {
  await Promise.all(
    artists.map((artist) => {
      const genresArray = `{${artist.genres.join(",")}}`; // Convert to PostgreSQL array format
      return client.sql`
        INSERT INTO artists (id, name, bio, image, genres)
        VALUES (${artist.id}, ${artist.name}, ${artist.bio}, ${artist.image}, ${genresArray})
        ON CONFLICT (id) DO NOTHING;
      `;
    })
  );
}

async function seedAlbums() {
  await Promise.all(
    albums.map((album) => {
      const genresArray = album.genres ? `{${album.genres.join(",")}}` : "{}";
      return client.sql`
        INSERT INTO albums (id, name, release, notes, price, cover, genres)
        VALUES (${album.id}, ${album.name}, ${album.release}, ${album.notes}, ${album.price}, ${album.cover}, ${genresArray})
        ON CONFLICT (id) DO NOTHING;
      `;
    })
  );
}

async function seedAlbumArtists() {
  await Promise.all(
    albums.map((album) => {
      if (album.artistIds) {
        return Promise.all(
          album.artistIds.map((artistId) =>
            client.sql`
              INSERT INTO album_artists (album_id, artist_id)
              VALUES (${album.id}, ${artistId})
              ON CONFLICT (album_id, artist_id) DO NOTHING;
            `
          )
        );
      } else {
        return Promise.resolve();
      }
    })
  );
}

export async function GET() {
  try {
    await client.sql`BEGIN`;
    await seedArtists();
    await seedAlbums();
    await seedAlbumArtists();
    await client.sql`COMMIT`;

    return new Response(
      JSON.stringify({ message: "Database seeded successfully" }),
      { status: 200 }
    );
  } catch (error) {
    console.log(error)
    await client.sql`ROLLBACK`;
    return new Response("There was an error seeding you data", {
      status: 500,
    });
  }
}
