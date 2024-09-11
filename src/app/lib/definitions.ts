export type Album = {
  id: number;
  name: string;
  release: string;
  notes: string;
  price: string;
  cover: string;
  genres: string[];
  artistIds: number[];
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
  type: string | null;
};

export type User = {
  id: number;
  user_d: string;
  email: string;
  first_name: string;
  last_name: string;
};
