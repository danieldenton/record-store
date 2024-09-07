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

export type AlbumSearchResult = {
  id: number;
  name: string;
  type: string
}

export type AlbumWithArtist = Album & {
  artist: string[]
}

export type Artist = {
  id: number;
  name: string;
  bio: string
  image: string
  genres: string[]
};

export type ArtistSearchResult = {
  id: number;
  name: string;
  type: string
}

export type SearchResult = AlbumSearchResult | ArtistSearchResult
