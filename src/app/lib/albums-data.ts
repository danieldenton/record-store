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
    artistIds: [4]
  },
  {
    id: 5,
    name: "Amore Del Tropico",
    release: "2002",
    notes: "",
    price: "100",
    cover: "/album-covers/AmoreDelTropico.png",
    genres: ["Indie Rock", "Rock"],
    artistIds: [4]
  },

  {
    id: 6,
    name: "Six",
    release: "2009",
    notes: "",
    price: "100",
    cover: "/album-covers/BHPSix.png",
    genres: ["Indie Rock", "Rock"],
    artistIds: [4]
  },
  {
    id: 7,
    name: "Dandelion Gum",
    release: "2008",
    notes: "",
    price: "100",
    cover: "/album-covers/DandelionGum.png",
    genres: ["Indie Rock", "Instrumental", "Experimental"],
    artistIds: [5]
  },
  {
    id: 8,
    name: "Black Sabbath",
    release: "1970",
    notes: "This LP has the cover of Evil Woman on it.",
    price: "1000",
    cover: "/album-covers/BlackSabbath.png",
    genres: ["Rock", "Metal"],
    artistIds: [6]
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
    artistIds: [6]
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
    artistIds: [6]
  },
  {
    id: 11,
    name: "The Rise and Fall of Ziggy Stardust and the Spiders from Mars",
    release: "1972",
    notes: "",
    price: "50",
    cover: "/album-covers/Ziggy.png",
    genres: ["Rock", "Pop", "Glam"],
    artistIds: [7]
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
    artistIds: [7]
  },
  {
    id: 13,
    artist: "Broadcast",
    name: "Berbarian Sound",
    release: "2013",
    notes: "",
    price: "1000",
    cover: "/album-covers/Berberian.png",
    genres: ["Indie Rock", "Soundtrack", "Experimental"],
    artistIds: [8]
  },
  {
    id: 14,
    name: "Journey",
    release: "1974",
    notes: "",
    price: "100",
    cover: "/album-covers/Journey.png",
    genres: ["Rock", "Psychedelic"],
    artistIds: [9]
  },
  {
    id: 15,
    name: "Untitled",
    release: "2013",
    notes: "",
    price: "100",
    cover: "/album-covers/EzraBuchla",
    genres: ["Experimental", "Ambient"],
    artistIds: [10]
  },
  {
    id: 16,
    name: "Guts",
    release: "1977",
    notes: "",
    price: "50",
    cover: "/album-covers/Guts",
    genres: ["Rock"],
    artistIds: [11]
  },
  {
    id: 17,
    name: "Tago Mago",
    release: "1971",
    notes: "",
    price: "100",
    cover: "/album-covers/TagoMago",
    genres: ["Rock", "Kraught-Rock", "Experimental"],
    artistIds: [12]
  },
  {
    id: 18,
    artist: "Nick Cave and the Bad Seeds",
    name: "The First Born is Dead",
    release: "1985",
    notes: "no cover",
    price: "20",
    cover: "",
    genres: ["Rock"],
    artistIds: [13]
  },
  {
    id: 19,
    name: "Always",
    release: "1980",
    notes: "",
    price: "20",
    cover: "/album-covers/Always.png",
    genres: ["Country"],
    artistIds: [14]
  },
  {
    id: 20,
    name: "Live Songs",
    release: "1973",
    notes: "",
    price: "30",
    cover: "/album-covers/LiveSongs.png",
    genres: ["Folk"],
    artistIds: [15]
  },
  {
    id: 21,
    name: "Ornette on Tenor",
    release: "1962",
    notes: "",
    price: "100",
    cover: "/album-covers/Ornette.png",
    genres: ["Jazz"],
    artistIds: [16]
  },
  {
    id: 22,
    name: "Ptah the el Daoud",
    release: "1970",
    notes: "",
    price: "100",
    cover: "/album-covers/Ptah.png",
    genres: ["Jazz"],
    artistIds: [17]
  },
  {
    id: 23,
    name: "Kiss Me Kiss Me Kiss Me",
    release: "1987",
    notes: "",
    price: "100",
    cover: "/album-covers/KissMe.png",
    genres: ["Rock", "Pop"],
    artistIds: [18]
  },
  {
    id: 24,
    name: "Dark Mark vs Skeleton Joe",
    release: "2021",
    notes: "",
    price: "100",
    cover: "/album-covers/DMvSJ",
    genre: ["Rock"]
  },
  {
    id: 25,
    name: "Sketches of Spain",
    release: "1960",
    notes: "",
    price: "100",
    cover: "/album-covers/SketchesOfSpain.png",
    genres: ["Jazz"],
    artistIds: [20]
  },
  {
    id: 26,
    name: "In a Silent Way",
    release: "1969",
    notes: "",
    price: "100",
    cover: "/album-covers/SilentWay.png",
    genres: ["Jazz"],
    artistIds: [20]
  },
  {
    id: 27,
    name: "Get Up With It",
    release: "1974",
    notes: "",
    price: "100",
    cover: "/album-covers/GetUp.png",
    genres: ["Jazz"],
    artistIds: [20]
  },
  {
    id: 28,
    name: "Dead Ahead",
    release: "2004",
    notes: "no cover",
    price: "20",
    cover: "",
    genres: ["Rock"],
    artistIds: [21]
  },
  {
    id: 29,
    name: "Highway 61 Revisited",
    release: "1965",
    notes: "",
    price: "50",
    cover: "/album-covers/H61.png",
    genres: ["Folk"],
    artistIds: [22]
  },
  {
    id: 30,
    artist: "Brian Eno",
    name: "Another Green World",
    release: "1975",
    notes: "",
    price: "1000",
    cover: "/album-covers/GreenWorld.png",
    genres: ["Ambient", "Experimental"],
    artistIds: [23]
  },
  {
    id: 31,
    artist: "John Hassell/Brian Eno",
    name: "Fourth World Vol 1 Possible Musics",
    release: "1980",
    notes: "",
    price: "50",
    cover: "/album-covers/PossibleMusics.png",
    genres: ["Ambient", "Experimental"],
    artistIds: [23, 24]
  },
];
