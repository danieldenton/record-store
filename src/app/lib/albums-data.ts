import { artists } from "./artist-data";
import { Album } from "./definitions";

export const albums = [
  {
    id: 1,
    name: "Heavy Axe",
    release: "1974",
    notes: "",
    price: "50",
    cover: "/album-covers/HeavyAxe.jpg",
    genres: ["Fusion", "Jazz", "R&B"],
    artistIds: [1]
  
  },
  {
    id: 2,
    name: "Paths of Ignition",
    release: "1974",
    notes: "",
    price: "100",
    cover: "/album-covers/PathsOfIgnition.jpg",
    genres: ["Instrumental",  "Folk"],
    artistIds: [2]
  },
  {
    id: 3,
    artist: "The Beatles",
    name: "Rubber Soul",
    release: "1965",
    notes: "",
    price: "100",
    cover: "/album-covers/RubberSoul.png",
    genres: ["Rock", "Pop"]
  },
  {
    id: 4,
    name: "Three",
    release: "2000",
    notes: "",
    price: "100",
    cover: "/album-covers/BHPThree.png",
    genres: ["Indie Rock", "Rock"],
    artistsIds: [4]
  },
  {
    id: 5,
    name: "Amore Del Tropico",
    release: "2002",
    notes: "",
    price: "100",
    cover: "/album-covers/AmoreDelTropico.png",
    genres: ["Indie Rock", "Rock"],
    artistsIds: [4]
  },

  {
    id: 6,
    name: "Six",
    release: "2009",
    notes: "",
    price: "100",
    cover: "/album-covers/BHPSix.png",
    genres: ["Indie Rock", "Rock"],
    artistsIds: [4]
  },
  {
    id: 7,
    name: "Dandelion Gum",
    release: "2008",
    notes: "",
    price: "100",
    cover: "/album-covers/DandelionGum.png",
    genres: ["Indie Rock", "Instrumental", "Experimental"],
    artistsIds: [5]
  },
  {
    id: 8,
    name: "Black Sabbath",
    release: "1970",
    notes: "This LP has the cover of Evil Woman on it.",
    price: "1000",
    cover: "/album-covers/BlackSabbath.png",
    genres: ["Rock", "Metal"],
    artistsIds: [6]
  },
  {
    id: 9,
    artist: "Black Sabbath",
    name: "Master of Reality",
    release: "1971",
    notes: "this one is a little warped",
    price: "50",
    cover: "/album-covers/MasterOfReality.png",
    genres: ["Rock", "Metal"],
    artistsIds: [6]
  },
  {
    id: 10,
    artist: "Black Sabbath",
    name: "Sabotage",
    release: "1975",
    notes: "",
    price: "100",
    cover: "/album-covers/Sabotage.png",
    genres: ["Rock", "Metal"],
    artistsIds: [6]
  },
  {
    id: 11,
    name: "The Rise and Fall of Ziggy Stardust and the Spiders from Mars",
    release: "1972",
    notes: "",
    price: "50",
    cover: "/album-covers/Ziggy.png",
    genres: ["Rock", "Pop", "Glam"],
    artistsIds: [7]
  },
  {
    id: 12,
    artist: "David Bowie",
    name: "Let's Dance",
    release: "1983",
    notes: "",
    price: "100",
    cover: "/album-covers/LetsDance.png",
    genres: ["Rock", "Pop"],
    artistsIds: [7]
  },
  {
    id: 13,
    artist: "Broadcast",
    name: "Berbarian Sound",
    release: "2013",
    notes: "",
    price: "1000",
    cover: "/album-covers/Berberian.png",
    genre: ["Indie Rock", "Soundtrack", "Experimental"],
    artistsIds: [8]
  },
  {
    id: 14,
    artist: "Arthur Brown's Kingdome Come",
    name: "Journey",
    release: "1974",
    notes: "",
    price: "100",
    cover: "/album-covers/Journey.png",
    genre: "Rock"
  },
  {
    id: 15,
    artist: "Ezra Buchla",
    name: "Ezra Buchla",
    release: "2013",
    notes: "",
    price: "100",
    cover: "/album-covers/EzraBuchla",
    genre: "Experimental"
  },
  {
    id: 16,
    artist: "John Cale",
    name: "Guts",
    release: "1977",
    notes: "",
    price: "50",
    cover: "/album-covers/Guts",
    genre: "Rock"
  },
  {
    id: 17,
    artist: "Can",
    name: "Tago Mago",
    release: "1971",
    notes: "",
    price: "100",
    cover: "/album-covers/TagoMago",
    genre: "Rock"
  },
  {
    id: 18,
    artist: "Nick Cave and the Bad Seeds",
    name: "The First Born is Dead",
    release: "1985",
    notes: "no cover",
    price: "20",
    cover: "",
    genre: "Rock"
  },
  {
    id: 19,
    artist: "Patsy Cline",
    name: "Always",
    release: "1980",
    notes: "",
    price: "20",
    cover: "/album-covers/Always.png",
    genre: "Country"
  },
  {
    id: 20,
    artist: "Leonard Cohen",
    name: "Live Songs",
    release: "1973",
    notes: "",
    price: "30",
    cover: "/album-covers/LiveSongs.png",
    genre: "Folk"
  },
  {
    id: 21,
    artist: "Ornette Coleman",
    name: "Ornette on Tenor",
    release: "1962",
    notes: "",
    price: "100",
    cover: "/album-covers/Ornette.png",
    genre: "Jazz"
  },
  {
    id: 22,
    artist: "Alice Coltrane",
    name: "Ptah the el Daoud",
    release: "1970",
    notes: "",
    price: "100",
    cover: "/album-covers/Ptah.png",
    genre: "Jazz"
  },
  {
    id: 23,
    artist: "The Cure",
    name: "Kiss Me Kiss Me Kiss Me",
    release: "1987",
    notes: "",
    price: "100",
    cover: "/album-covers/KissMe.png",
    genre: "Rock"
  },
  {
    id: 24,
    artist: "Dark Mark vs Skeleton Joe",
    name: "Dark Mark vs Skeleton Joe",
    release: "2021",
    notes: "",
    price: "100",
    cover: "/album-covers/DMvSJ",
    genre: "Experimental"
  },
  {
    id: 25,
    artist: "Miles Davis",
    name: "Sketches of Spain",
    release: "1960",
    notes: "",
    price: "100",
    cover: "/album-covers/SketchesOfSpain.png",
    genre: "Jazz"
  },
  {
    id: 26,
    artist: "Miles Davis",
    name: "In a Silent Way",
    release: "1969",
    notes: "",
    price: "100",
    cover: "/album-covers/SilentWay.png",
    genre: "Jazz"
  },
  {
    id: 27,
    artist: "Miles Davis",
    name: "Get Up With It",
    release: "1974",
    notes: "",
    price: "100",
    cover: "/album-covers/GetUp.png",
    genre: "Jazz"
  },
  {
    id: 28,
    artist: "Dead Moon",
    name: "Dead Ahead",
    release: "2004",
    notes: "no cover",
    price: "20",
    cover: "",
    genre: "Rock"
  },
  {
    id: 29,
    artist: "Bob Dylan",
    name: "Highway 61 Revisited",
    release: "1965",
    notes: "",
    price: "50",
    cover: "/album-covers/H61.png",
    genre: "Folk"
  },
  {
    id: 30,
    artist: "Brian Eno",
    name: "Another Green World",
    release: "1975",
    notes: "",
    price: "1000",
    cover: "/album-covers/GreenWorld.png",
    genre: "Experimental"
  },
  {
    id: 31,
    artist: "John Hassell/Brian Eno",
    name: "Fourth World Vol 1 Possible Musics",
    release: "1980",
    notes: "",
    price: "50",
    cover: "/album-covers/PossibleMusics.png",
    genre: "Experimental"
  },
];
