import { sql } from "@vercel/postgres";
import { Album } from "./definitions";

export async function fetchSearch(
    query: string,
  ) {
  
    try {
      const invoices = await sql<Album>`
        SELECT
          albums.is
          albums.artist
          albums.name
          albums.year
          albums.notes
          albums.price
          albums.cover
          albums.genre
        FROM albums
        JOIN customers ON invoices.customer_id = customers.id
        WHERE
          albums.name ILIKE ${`%${query}%`} OR
          albums.artist ILIKE ${`%${query}%`}
      `;
  
      return invoices.rows;
    } catch (error) {
      console.error('Database Error:', error);
      throw new Error('Failed to fetch invoices.');
    }
  }
  