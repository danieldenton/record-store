export type Album = {
  id: number;
  name: string;
  release: string;
  notes: string;
  price: string;
  cover: string;
  genres: string[];
};

export type Artist = {
  id: number;
  name: string;
  bio: string;
  image: string;
  genres: string[];
};

export type SearchResult = {
  id: number | null;
  name: string;
  type: "album" | "artist" | null;
};

export type User = {
  id: number;
  user_d: string;
  email: string;
  first_name: string;
  last_name: string;
};

export type CartAlbum = {
  id: number;
  name: string;
  cover: string;
  price: string;
  artists: string[]
};
