export type Album = {
  id: number;
  name: string;
  release: string;
  notes: string;
  price: string;
  cover: string;
  genres: string[];
  artistIds: number[]
};

export type Artist = {
  id: number;
  name: string;
  bio: string
  image: string
  genres: string[]
};

export type SearchResult = Album & {
  match: string;
};
