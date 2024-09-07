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

export type AlbumSearchResults = {
  id: number;
  name: string;
  type: string
}

export type Artist = {
  id: number;
  name: string;
  bio: string
  image: string
  genres: string[]
};

export type ArtistSearchResults = {
  id: number;
  name: string;
  type: string
}


export type SearchResult = Album | Artist & {
  match: string;
};
