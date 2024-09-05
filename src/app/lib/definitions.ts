export type Album = {
  id: number;
  artist: string;
  name: string;
  year: string;
  notes: string;
  price: string;
  cover: string;
  genre: string;
};

export type SearchResult = Album & {
  match: string;
};
