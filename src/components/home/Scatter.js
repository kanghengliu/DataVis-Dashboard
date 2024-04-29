import React, { PureComponent } from 'react';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import "./ScatterSlider.css";

const initialData = 
[
  {
      "primaryTitle": "Interstellar",
      "budget": 165.0,
      "box_office": 733.2
  },
  {
      "primaryTitle": "The Dark Knight Rises",
      "budget": 250.0,
      "box_office": 1085.29
  },
  {
      "primaryTitle": "Django Unchained",
      "budget": 100.0,
      "box_office": 426.08
  },
  {
      "primaryTitle": "The Wolf of Wall Street",
      "budget": 100.0,
      "box_office": 407.04
  },
  {
      "primaryTitle": "Joker",
      "budget": 55.0,
      "box_office": 1078.96
  },
  {
      "primaryTitle": "The Avengers",
      "budget": 220.0,
      "box_office": 1520.54
  },
  {
      "primaryTitle": "Guardians of the Galaxy",
      "budget": 170.0,
      "box_office": 773.35
  },
  {
      "primaryTitle": "Avengers: Endgame",
      "budget": 356.0,
      "box_office": 2799.44
  },
  {
      "primaryTitle": "Avengers: Infinity War",
      "budget": 321.0,
      "box_office": 2052.42
  },
  {
      "primaryTitle": "Deadpool",
      "budget": 58.0,
      "box_office": 782.84
  },
  {
      "primaryTitle": "Mad Max: Fury Road",
      "budget": 150.0,
      "box_office": 380.42
  },
  {
      "primaryTitle": "Gone Girl",
      "budget": 61.0,
      "box_office": 369.33
  },
  {
      "primaryTitle": "The Hunger Games",
      "budget": 78.0,
      "box_office": 695.22
  },
  {
      "primaryTitle": "Whiplash",
      "budget": 3.3,
      "box_office": 49.45
  },
  {
      "primaryTitle": "Star Wars: Episode VII - The Force Awakens",
      "budget": 245.0,
      "box_office": 2071.31
  },
  {
      "primaryTitle": "Parasite",
      "budget": 11.4,
      "box_office": 262.1
  },
  {
      "primaryTitle": "Harry Potter and the Deathly Hallows: Part 2",
      "budget": 125.0,
      "box_office": 1356.96
  },
  {
      "primaryTitle": "The Intouchables",
      "budget": 9.5,
      "box_office": 426.59
  },
  {
      "primaryTitle": "The Martian",
      "budget": 108.0,
      "box_office": 630.62
  },
  {
      "primaryTitle": "Avengers: Age of Ultron",
      "budget": 250.0,
      "box_office": 1405.02
  },
  {
      "primaryTitle": "Thor",
      "budget": 150.0,
      "box_office": 449.33
  },
  {
      "primaryTitle": "Iron Man 3",
      "budget": 200.0,
      "box_office": 1215.58
  },
  {
      "primaryTitle": "Captain America: The Winter Soldier",
      "budget": 170.0,
      "box_office": 714.42
  },
  {
      "primaryTitle": "Captain America: The First Avenger",
      "budget": 140.0,
      "box_office": 370.57
  },
  {
      "primaryTitle": "The Grand Budapest Hotel",
      "budget": 25.0,
      "box_office": 174.57
  },
  {
      "primaryTitle": "Spider-Man: No Way Home",
      "budget": 200.0,
      "box_office": 1921.85
  },
  {
      "primaryTitle": "The Revenant",
      "budget": 135.0,
      "box_office": 532.95
  },
  {
      "primaryTitle": "The Hobbit: An Unexpected Journey",
      "budget": 180.0,
      "box_office": 1017.11
  },
  {
      "primaryTitle": "Gravity",
      "budget": 100.0,
      "box_office": 773.03
  },
  {
      "primaryTitle": "Captain America: Civil War",
      "budget": 250.0,
      "box_office": 1155.05
  },
  {
      "primaryTitle": "Once Upon a Time... in Hollywood",
      "budget": 90.0,
      "box_office": 377.62
  },
  {
      "primaryTitle": "Dune: Part One",
      "budget": 165.0,
      "box_office": 407.57
  },
  {
      "primaryTitle": "Black Panther",
      "budget": 200.0,
      "box_office": 1349.93
  },
  {
      "primaryTitle": "Logan",
      "budget": 97.0,
      "box_office": 619.18
  },
  {
      "primaryTitle": "The Imitation Game",
      "budget": 14.0,
      "box_office": 233.56
  },
  {
      "primaryTitle": "Thor: Ragnarok",
      "budget": 180.0,
      "box_office": 855.3
  },
  {
      "primaryTitle": "Man of Steel",
      "budget": 225.0,
      "box_office": 670.15
  },
  {
      "primaryTitle": "Prisoners",
      "budget": 46.0,
      "box_office": 122.13
  },
  {
      "primaryTitle": "Doctor Strange",
      "budget": 165.0,
      "box_office": 677.8
  },
  {
      "primaryTitle": "The Batman",
      "budget": 185.0,
      "box_office": 772.25
  },
  {
      "primaryTitle": "Inside Out",
      "budget": 175.0,
      "box_office": 858.85
  },
  {
      "primaryTitle": "Knives Out",
      "budget": 40.0,
      "box_office": 312.9
  },
  {
      "primaryTitle": "Arrival",
      "budget": 47.0,
      "box_office": 203.39
  },
  {
      "primaryTitle": "Guardians of the Galaxy Vol. 2",
      "budget": 200.0,
      "box_office": 863.76
  },
  {
      "primaryTitle": "Batman v Superman: Dawn of Justice",
      "budget": 250.0,
      "box_office": 874.36
  },
  {
      "primaryTitle": "X-Men: Days of Future Past",
      "budget": 200.0,
      "box_office": 746.05
  },
  {
      "primaryTitle": "Silver Linings Playbook",
      "budget": 21.0,
      "box_office": 236.41
  },
  {
      "primaryTitle": "12 Years a Slave",
      "budget": 20.0,
      "box_office": 187.73
  },
  {
      "primaryTitle": "Dunkirk",
      "budget": 100.0,
      "box_office": 530.43
  },
  {
      "primaryTitle": "John Wick",
      "budget": 20.0,
      "box_office": 86.08
  },
  {
      "primaryTitle": "Edge of Tomorrow",
      "budget": 178.0,
      "box_office": 370.57
  },
  {
      "primaryTitle": "Skyfall",
      "budget": 200.0,
      "box_office": 1142.5
  },
  {
      "primaryTitle": "Thor: The Dark World",
      "budget": 170.0,
      "box_office": 644.78
  },
  {
      "primaryTitle": "X-Men: First Class",
      "budget": 160.0,
      "box_office": 352.62
  },
  {
      "primaryTitle": "Suicide Squad",
      "budget": 175.0,
      "box_office": 749.2
  },
  {
      "primaryTitle": "Ant-Man",
      "budget": 130.0,
      "box_office": 519.31
  },
  {
      "primaryTitle": "The Hunger Games: Catching Fire",
      "budget": 130.0,
      "box_office": 865.01
  },
  {
      "primaryTitle": "World War Z",
      "budget": 190.0,
      "box_office": 540.46
  },
  {
      "primaryTitle": "Spider-Man: Homecoming",
      "budget": 175.0,
      "box_office": 880.17
  },
  {
      "primaryTitle": "Kingsman: The Secret Service",
      "budget": 81.0,
      "box_office": 414.35
  },
  {
      "primaryTitle": "Oppenheimer",
      "budget": 100.0,
      "box_office": 970.16
  },
  {
      "primaryTitle": "Now You See Me",
      "budget": 75.0,
      "box_office": 351.72
  },
  {
      "primaryTitle": "The Hobbit: The Desolation of Smaug",
      "budget": 225.0,
      "box_office": 959.08
  },
  {
      "primaryTitle": "Drive",
      "budget": 15.0,
      "box_office": 78.72
  },
  {
      "primaryTitle": "The Amazing Spider-Man",
      "budget": 230.0,
      "box_office": 757.93
  },
  {
      "primaryTitle": "Wonder Woman",
      "budget": 149.0,
      "box_office": 823.97
  },
  {
      "primaryTitle": "Get Out",
      "budget": 4.5,
      "box_office": 255.75
  },
  {
      "primaryTitle": "Top Gun: Maverick",
      "budget": 170.0,
      "box_office": 1495.7
  },
  {
      "primaryTitle": "Rogue One: A Star Wars Story",
      "budget": 200.0,
      "box_office": 1058.68
  },
  {
      "primaryTitle": "Jurassic World",
      "budget": 150.0,
      "box_office": 1671.54
  },
  {
      "primaryTitle": "1917",
      "budget": 95.0,
      "box_office": 384.58
  },
  {
      "primaryTitle": "Star Wars: Episode VIII - The Last Jedi",
      "budget": 317.0,
      "box_office": 1334.41
  },
  {
      "primaryTitle": "La La Land",
      "budget": 30.0,
      "box_office": 471.99
  },
  {
      "primaryTitle": "Her",
      "budget": 23.0,
      "box_office": 48.52
  },
  {
      "primaryTitle": "Life of Pi",
      "budget": 120.0,
      "box_office": 609.02
  },
  {
      "primaryTitle": "Birdman or (The Unexpected Virtue of Ignorance)",
      "budget": 18.0,
      "box_office": 103.22
  },
  {
      "primaryTitle": "Frozen",
      "budget": 150.0,
      "box_office": 1397.05
  },
  {
      "primaryTitle": "Blade Runner 2049",
      "budget": 150.0,
      "box_office": 267.69
  },
  {
      "primaryTitle": "The Hateful Eight",
      "budget": 44.0,
      "box_office": 161.22
  },
  {
      "primaryTitle": "Ted",
      "budget": 50.0,
      "box_office": 549.37
  },
  {
      "primaryTitle": "Deadpool 2",
      "budget": 110.0,
      "box_office": 785.9
  },
  {
      "primaryTitle": "Prometheus",
      "budget": 130.0,
      "box_office": 403.35
  },
  {
      "primaryTitle": "Argo",
      "budget": 44.5,
      "box_office": 232.33
  },
  {
      "primaryTitle": "Limitless",
      "budget": 27.0,
      "box_office": 161.85
  },
  {
      "primaryTitle": "Captain Marvel",
      "budget": 160.0,
      "box_office": 1131.42
  },
  {
      "primaryTitle": "Baby Driver",
      "budget": 34.0,
      "box_office": 226.95
  },
  {
      "primaryTitle": "It",
      "budget": 35.0,
      "box_office": 704.24
  },
  {
      "primaryTitle": "Nightcrawler",
      "budget": 8.5,
      "box_office": 47.43
  },
  {
      "primaryTitle": "Looper",
      "budget": 30.0,
      "box_office": 176.51
  },
  {
      "primaryTitle": "Don't Look Up",
      "budget": 75.0,
      "box_office": 0.79
  },
  {
      "primaryTitle": "21 Jump Street",
      "budget": 42.0,
      "box_office": 201.59
  },
  {
      "primaryTitle": "The Great Gatsby",
      "budget": 105.0,
      "box_office": 353.66
  },
  {
      "primaryTitle": "Hacksaw Ridge",
      "budget": 40.0,
      "box_office": 180.56
  },
  {
      "primaryTitle": "Bohemian Rhapsody",
      "budget": 52.0,
      "box_office": 910.81
  },
  {
      "primaryTitle": "Tenet",
      "budget": 205.0,
      "box_office": 365.3
  },
  {
      "primaryTitle": "Coco",
      "budget": 175.0,
      "box_office": 814.34
  },
  {
      "primaryTitle": "Ex Machina",
      "budget": 15.0,
      "box_office": 37.39
  },
  {
      "primaryTitle": "A Quiet Place",
      "budget": 17.0,
      "box_office": 340.96
  },
  {
      "primaryTitle": "The Hobbit: The Battle of the Five Armies",
      "budget": 250.0,
      "box_office": 962.25
  },
  {
      "primaryTitle": "Green Book",
      "budget": 23.0,
      "box_office": 321.75
  },
  {
      "primaryTitle": "Crazy, Stupid, Love.",
      "budget": 50.0,
      "box_office": 145.09
  },
  {
      "primaryTitle": "Pirates of the Caribbean: On Stranger Tides",
      "budget": 250.0,
      "box_office": 1046.72
  },
  {
      "primaryTitle": "Rise of the Planet of the Apes",
      "budget": 93.0,
      "box_office": 481.8
  },
  {
      "primaryTitle": "Spider-Man: Far from Home",
      "budget": 160.0,
      "box_office": 1131.93
  },
  {
      "primaryTitle": "Three Billboards Outside Ebbing, Missouri",
      "budget": 15.0,
      "box_office": 162.73
  },
  {
      "primaryTitle": "The Conjuring",
      "budget": 20.0,
      "box_office": 320.42
  },
  {
      "primaryTitle": "Oblivion",
      "budget": 120.0,
      "box_office": 286.17
  },
  {
      "primaryTitle": "Split",
      "budget": 9.0,
      "box_office": 278.45
  },
  {
      "primaryTitle": "Source Code",
      "budget": 32.0,
      "box_office": 147.33
  },
  {
      "primaryTitle": "The Perks of Being a Wallflower",
      "budget": 13.0,
      "box_office": 33.38
  },
  {
      "primaryTitle": "Fury",
      "budget": 68.0,
      "box_office": 211.82
  },
  {
      "primaryTitle": "Zootopia",
      "budget": 150.0,
      "box_office": 1025.52
  },
  {
      "primaryTitle": "Venom",
      "budget": 100.0,
      "box_office": 856.09
  },
  {
      "primaryTitle": "The Amazing Spider-Man 2",
      "budget": 200.0,
      "box_office": 708.98
  },
  {
      "primaryTitle": "The Hangover Part II",
      "budget": 80.0,
      "box_office": 586.76
  },
  {
      "primaryTitle": "Lucy",
      "budget": 40.0,
      "box_office": 469.06
  },
  {
      "primaryTitle": "Everything Everywhere All at Once",
      "budget": 14.3,
      "box_office": 143.41
  },
  {
      "primaryTitle": "Pacific Rim",
      "budget": 190.0,
      "box_office": 411.0
  },
  {
      "primaryTitle": "Barbie",
      "budget": 100.0,
      "box_office": 1445.64
  },
  {
      "primaryTitle": "American Sniper",
      "budget": 58.8,
      "box_office": 547.66
  },
  {
      "primaryTitle": "Mission: Impossible - Ghost Protocol",
      "budget": 145.0,
      "box_office": 694.71
  },
  {
      "primaryTitle": "Aquaman",
      "budget": 160.0,
      "box_office": 1152.03
  },
  {
      "primaryTitle": "Dallas Buyers Club",
      "budget": 5.0,
      "box_office": 55.2
  },
  {
      "primaryTitle": "Rush",
      "budget": 38.0,
      "box_office": 96.99
  },
  {
      "primaryTitle": "John Wick: Chapter 2",
      "budget": 40.0,
      "box_office": 174.35
  },
  {
      "primaryTitle": "The Maze Runner",
      "budget": 34.0,
      "box_office": 348.32
  },
  {
      "primaryTitle": "Fantastic Beasts and Where to Find Them",
      "budget": 180.0,
      "box_office": 816.04
  },
  {
      "primaryTitle": "The Hunger Games: Mockingjay - Part 1",
      "budget": 125.0,
      "box_office": 759.16
  },
  {
      "primaryTitle": "Spotlight",
      "budget": 20.0,
      "box_office": 98.69
  },
  {
      "primaryTitle": "Big Hero 6",
      "budget": 165.0,
      "box_office": 657.87
  },
  {
      "primaryTitle": "American Hustle",
      "budget": 40.0,
      "box_office": 251.17
  },
  {
      "primaryTitle": "Warrior",
      "budget": 25.0,
      "box_office": 23.31
  },
  {
      "primaryTitle": "Star Trek Into Darkness",
      "budget": 190.0,
      "box_office": 467.37
  },
  {
      "primaryTitle": "The Girl with the Dragon Tattoo",
      "budget": 90.0,
      "box_office": 232.62
  },
  {
      "primaryTitle": "Star Wars: Episode IX - The Rise of Skywalker",
      "budget": 275.0,
      "box_office": 1077.02
  },
  {
      "primaryTitle": "The Help",
      "budget": 25.0,
      "box_office": 216.64
  },
  {
      "primaryTitle": "Captain Phillips",
      "budget": 55.0,
      "box_office": 218.79
  },
  {
      "primaryTitle": "Avatar: The Way of Water",
      "budget": 350.0,
      "box_office": 2320.25
  },
  {
      "primaryTitle": "The Wolverine",
      "budget": 120.0,
      "box_office": 414.83
  },
  {
      "primaryTitle": "Divergent",
      "budget": 85.0,
      "box_office": 288.89
  },
  {
      "primaryTitle": "We're the Millers",
      "budget": 37.0,
      "box_office": 269.99
  },
  {
      "primaryTitle": "Ready Player One",
      "budget": 175.0,
      "box_office": 607.87
  },
  {
      "primaryTitle": "The Big Short",
      "budget": 28.0,
      "box_office": 133.44
  },
  {
      "primaryTitle": "The Theory of Everything",
      "budget": 15.0,
      "box_office": 123.73
  },
  {
      "primaryTitle": "Sherlock Holmes: A Game of Shadows",
      "budget": 125.0,
      "box_office": 543.85
  },
  {
      "primaryTitle": "Justice League",
      "budget": 300.0,
      "box_office": 661.33
  },
  {
      "primaryTitle": "Doctor Strange in the Multiverse of Madness",
      "budget": 200.0,
      "box_office": 955.78
  },
  {
      "primaryTitle": "Sicario",
      "budget": 30.0,
      "box_office": 85.0
  },
  {
      "primaryTitle": "Elysium",
      "budget": 115.0,
      "box_office": 286.14
  },
  {
      "primaryTitle": "Ford v Ferrari",
      "budget": 97.6,
      "box_office": 225.51
  },
  {
      "primaryTitle": "Horrible Bosses",
      "budget": 35.0,
      "box_office": 209.84
  },
  {
      "primaryTitle": "Dawn of the Planet of the Apes",
      "budget": 170.0,
      "box_office": 710.64
  },
  {
      "primaryTitle": "Spectre",
      "budget": 245.0,
      "box_office": 880.71
  },
  {
      "primaryTitle": "Moneyball",
      "budget": 50.0,
      "box_office": 110.21
  },
  {
      "primaryTitle": "X-Men: Apocalypse",
      "budget": 178.0,
      "box_office": 543.93
  },
  {
      "primaryTitle": "Wreck-It Ralph",
      "budget": 165.0,
      "box_office": 471.22
  },
  {
      "primaryTitle": "The Cabin in the Woods",
      "budget": 30.0,
      "box_office": 70.04
  },
  {
      "primaryTitle": "Room",
      "budget": 13.0,
      "box_office": 35.4
  },
  {
      "primaryTitle": "Midnight in Paris",
      "budget": 17.0,
      "box_office": 151.67
  },
  {
      "primaryTitle": "Ant-Man and the Wasp",
      "budget": 162.0,
      "box_office": 622.67
  },
  {
      "primaryTitle": "The Shape of Water",
      "budget": 19.4,
      "box_office": 195.24
  },
  {
      "primaryTitle": "Passengers",
      "budget": 110.0,
      "box_office": 303.14
  },
  {
      "primaryTitle": "In Time",
      "budget": 40.0,
      "box_office": 173.93
  },
  {
      "primaryTitle": "No Time to Die",
      "budget": 250.0,
      "box_office": 774.15
  },
  {
      "primaryTitle": "Brave",
      "budget": 185.0,
      "box_office": 538.98
  },
  {
      "primaryTitle": "Jojo Rabbit",
      "budget": 14.0,
      "box_office": 93.66
  },
  {
      "primaryTitle": "Jumanji: Welcome to the Jungle",
      "budget": 90.0,
      "box_office": 995.34
  },
  {
      "primaryTitle": "Godzilla",
      "budget": 160.0,
      "box_office": 524.98
  },
  {
      "primaryTitle": "Glass Onion",
      "budget": 40.0,
      "box_office": 13.28
  },
  {
      "primaryTitle": "Zack Snyder's Justice League",
      "budget": 300.0,
      "box_office": null
  },
  {
      "primaryTitle": "This Is the End",
      "budget": 32.0,
      "box_office": 126.04
  },
  {
      "primaryTitle": "Shang-Chi and the Legend of the Ten Rings",
      "budget": 200.0,
      "box_office": 432.24
  },
  {
      "primaryTitle": "Transformers: Dark of the Moon",
      "budget": 195.0,
      "box_office": 1123.79
  },
  {
      "primaryTitle": "The Irishman",
      "budget": 159.0,
      "box_office": 0.97
  },
  {
      "primaryTitle": "Black Widow",
      "budget": 200.0,
      "box_office": 379.75
  },
  {
      "primaryTitle": "John Wick: Chapter 3 - Parabellum",
      "budget": 75.0,
      "box_office": 328.35
  },
  {
      "primaryTitle": "Bullet Train",
      "budget": 85.9,
      "box_office": 239.27
  },
  {
      "primaryTitle": "Free Guy",
      "budget": 120.0,
      "box_office": 331.53
  },
  {
      "primaryTitle": "The Equalizer",
      "budget": 55.0,
      "box_office": 192.33
  },
  {
      "primaryTitle": "A Star Is Born",
      "budget": 36.0,
      "box_office": 436.43
  },
  {
      "primaryTitle": "Fast & Furious 6",
      "budget": 160.0,
      "box_office": 788.68
  },
  {
      "primaryTitle": "Furious 7",
      "budget": 190.0,
      "box_office": 1515.34
  },
  {
      "primaryTitle": "Mission: Impossible - Rogue Nation",
      "budget": 150.0,
      "box_office": 682.72
  },
  {
      "primaryTitle": "The Suicide Squad",
      "budget": 185.0,
      "box_office": 168.72
  },
  {
      "primaryTitle": "Fast Five",
      "budget": 125.0,
      "box_office": 626.14
  },
  {
      "primaryTitle": "22 Jump Street",
      "budget": 50.0,
      "box_office": 331.33
  },
  {
      "primaryTitle": "Midsommar",
      "budget": 9.0,
      "box_office": 48.06
  },
  {
      "primaryTitle": "The Fault in Our Stars",
      "budget": 12.0,
      "box_office": 307.17
  },
  {
      "primaryTitle": "Maleficent",
      "budget": 180.0,
      "box_office": 759.85
  },
  {
      "primaryTitle": "Thor: Love and Thunder",
      "budget": 250.0,
      "box_office": 760.93
  },
  {
      "primaryTitle": "The Gentlemen",
      "budget": 22.0,
      "box_office": 115.18
  },
  {
      "primaryTitle": "Friends with Benefits",
      "budget": 35.0,
      "box_office": 149.54
  },
  {
      "primaryTitle": "The Menu",
      "budget": 35.0,
      "box_office": 79.63
  },
  {
      "primaryTitle": "Monsters University",
      "budget": 200.0,
      "box_office": 743.56
  },
  {
      "primaryTitle": "Snowpiercer",
      "budget": 39.2,
      "box_office": 86.76
  },
  {
      "primaryTitle": "The Lego Movie",
      "budget": 60.0,
      "box_office": 470.76
  },
  {
      "primaryTitle": "Men in Black\u00b3",
      "budget": 225.0,
      "box_office": 654.21
  },
  {
      "primaryTitle": "Bird Box",
      "budget": null,
      "box_office": null
  },
  {
      "primaryTitle": "Eternals",
      "budget": 200.0,
      "box_office": 402.06
  },
  {
      "primaryTitle": "About Time",
      "budget": 12.0,
      "box_office": 87.1
  },
  {
      "primaryTitle": "Shazam!",
      "budget": 100.0,
      "box_office": 367.8
  },
  {
      "primaryTitle": "Solo: A Star Wars Story",
      "budget": 275.0,
      "box_office": 392.92
  },
  {
      "primaryTitle": "Soul",
      "budget": null,
      "box_office": 121.98
  },
  {
      "primaryTitle": "Guardians of the Galaxy Vol. 3",
      "budget": 250.0,
      "box_office": 845.56
  },
  {
      "primaryTitle": "Mission: Impossible - Fallout",
      "budget": 178.0,
      "box_office": 791.66
  },
  {
      "primaryTitle": "Moana",
      "budget": 150.0,
      "box_office": 687.23
  },
  {
      "primaryTitle": "Hereditary",
      "budget": 10.0,
      "box_office": 82.73
  },
  {
      "primaryTitle": "Flight",
      "budget": 31.0,
      "box_office": 161.77
  },
  {
      "primaryTitle": "Cloud Atlas",
      "budget": 102.0,
      "box_office": 130.52
  },
  {
      "primaryTitle": "The Hunger Games: Mockingjay - Part 2",
      "budget": 160.0,
      "box_office": 661.46
  },
  {
      "primaryTitle": "The Nice Guys",
      "budget": 50.0,
      "box_office": 71.26
  },
  {
      "primaryTitle": "Super 8",
      "budget": 50.0,
      "box_office": 260.1
  },
  {
      "primaryTitle": "Boyhood",
      "budget": 4.0,
      "box_office": 48.14
  },
  {
      "primaryTitle": "Moonrise Kingdom",
      "budget": 16.0,
      "box_office": 68.27
  },
  {
      "primaryTitle": "Jack Reacher",
      "budget": 60.0,
      "box_office": 218.34
  },
  {
      "primaryTitle": "The Hunt",
      "budget": 20.0,
      "box_office": 15.89
  },
  {
      "primaryTitle": "Kingsman: The Golden Circle",
      "budget": 104.0,
      "box_office": 410.9
  },
  {
      "primaryTitle": "Annihilation",
      "budget": 40.0,
      "box_office": 43.07
  },
  {
      "primaryTitle": "Real Steel",
      "budget": 110.0,
      "box_office": 299.27
  },
  {
      "primaryTitle": "The Interview",
      "budget": 44.0,
      "box_office": 11.78
  },
  {
      "primaryTitle": "10 Cloverfield Lane",
      "budget": 15.0,
      "box_office": 110.22
  },
  {
      "primaryTitle": "Kong: Skull Island",
      "budget": 185.0,
      "box_office": 568.65
  },
  {
      "primaryTitle": "Les Mis\u00e9rables",
      "budget": 61.0,
      "box_office": 442.75
  },
  {
      "primaryTitle": "Marriage Story",
      "budget": 18.6,
      "box_office": 0.33
  },
  {
      "primaryTitle": "Pirates of the Caribbean: Dead Men Tell No Tales",
      "budget": 230.0,
      "box_office": 795.92
  },
  {
      "primaryTitle": "Jurassic World: Fallen Kingdom",
      "budget": 170.0,
      "box_office": 1310.47
  },
  {
      "primaryTitle": "50/50",
      "budget": 8.0,
      "box_office": 41.1
  },
  {
      "primaryTitle": "The Secret Life of Walter Mitty",
      "budget": 90.0,
      "box_office": 188.13
  },
  {
      "primaryTitle": "Us",
      "budget": 20.0,
      "box_office": 256.07
  },
  {
      "primaryTitle": "Hugo",
      "budget": 150.0,
      "box_office": 185.77
  },
  {
      "primaryTitle": "Fifty Shades of Grey",
      "budget": 40.0,
      "box_office": 569.65
  },
  {
      "primaryTitle": "The Hangover Part III",
      "budget": 103.0,
      "box_office": 362.0
  },
  {
      "primaryTitle": "The Dictator",
      "budget": 65.0,
      "box_office": 179.38
  },
  {
      "primaryTitle": "Beauty and the Beast",
      "budget": 160.0,
      "box_office": 1266.12
  },
  {
      "primaryTitle": "The Man from U.N.C.L.E.",
      "budget": 75.0,
      "box_office": 110.05
  },
  {
      "primaryTitle": "John Wick: Chapter 4",
      "budget": 100.0,
      "box_office": 440.16
  },
  {
      "primaryTitle": "Transformers: Age of Extinction",
      "budget": 210.0,
      "box_office": 1104.05
  },
  {
      "primaryTitle": "Moonlight",
      "budget": 4.0,
      "box_office": 65.17
  },
  {
      "primaryTitle": "Pitch Perfect",
      "budget": 17.0,
      "box_office": 115.65
  },
  {
      "primaryTitle": "Incredibles 2",
      "budget": 200.0,
      "box_office": 1243.23
  },
  {
      "primaryTitle": "Neighbors",
      "budget": 18.0,
      "box_office": 270.67
  },
  {
      "primaryTitle": "Bridge of Spies",
      "budget": 40.0,
      "box_office": 165.48
  },
  {
      "primaryTitle": "Lady Bird",
      "budget": 10.0,
      "box_office": 78.99
  },
  {
      "primaryTitle": "Nobody",
      "budget": 16.0,
      "box_office": 57.51
  },
  {
      "primaryTitle": "Taken 2",
      "budget": 45.0,
      "box_office": 376.15
  },
  {
      "primaryTitle": "The Expendables 2",
      "budget": 100.0,
      "box_office": 314.98
  },
  {
      "primaryTitle": "Now You See Me 2",
      "budget": 90.0,
      "box_office": 334.9
  },
  {
      "primaryTitle": "The Accountant",
      "budget": 44.0,
      "box_office": 155.56
  },
  {
      "primaryTitle": "Kung Fu Panda 2",
      "budget": 150.0,
      "box_office": 665.69
  },
  {
      "primaryTitle": "Zero Dark Thirty",
      "budget": 40.0,
      "box_office": 132.82
  },
  {
      "primaryTitle": "Uncut Gems",
      "budget": 19.0,
      "box_office": 50.02
  },
  {
      "primaryTitle": "Red Notice",
      "budget": 200.0,
      "box_office": 0.18
  },
  {
      "primaryTitle": "Contagion",
      "budget": 60.0,
      "box_office": 136.52
  },
  {
      "primaryTitle": "300: Rise of an Empire",
      "budget": 110.0,
      "box_office": 337.58
  },
  {
      "primaryTitle": "The Bourne Legacy",
      "budget": 125.0,
      "box_office": 276.14
  },
  {
      "primaryTitle": "Dune: Part Two",
      "budget": 190.0,
      "box_office": 684.52
  },
  {
      "primaryTitle": "Call Me by Your Name",
      "budget": 4.0,
      "box_office": 43.37
  },
  {
      "primaryTitle": "Manchester by the Sea",
      "budget": 9.0,
      "box_office": 78.99
  },
  {
      "primaryTitle": "The Greatest Showman",
      "budget": 84.0,
      "box_office": 438.55
  },
  {
      "primaryTitle": "Creed",
      "budget": 35.0,
      "box_office": 174.18
  },
  {
      "primaryTitle": "Bridesmaids",
      "budget": 32.5,
      "box_office": 306.44
  },
  {
      "primaryTitle": "Fantastic Beasts: The Crimes of Grindelwald",
      "budget": 200.0,
      "box_office": 655.76
  },
  {
      "primaryTitle": "Lone Survivor",
      "budget": 40.0,
      "box_office": 154.8
  },
  {
      "primaryTitle": "Black Panther: Wakanda Forever",
      "budget": 250.0,
      "box_office": 859.21
  },
  {
      "primaryTitle": "Predestination",
      "budget": 5.1,
      "box_office": 4.94
  },
  {
      "primaryTitle": "Nocturnal Animals",
      "budget": 22.5,
      "box_office": 30.31
  },
  {
      "primaryTitle": "Alien: Covenant",
      "budget": 97.0,
      "box_office": 240.89
  },
  {
      "primaryTitle": "Finding Dory",
      "budget": 200.0,
      "box_office": 1029.27
  },
  {
      "primaryTitle": "Snow White and the Huntsman",
      "budget": 170.0,
      "box_office": 396.59
  },
  {
      "primaryTitle": "It Chapter Two",
      "budget": 79.0,
      "box_office": 473.12
  },
  {
      "primaryTitle": "Don't Breathe",
      "budget": 9.9,
      "box_office": 157.76
  },
  {
      "primaryTitle": "The Conjuring 2",
      "budget": 40.0,
      "box_office": 322.81
  },
  {
      "primaryTitle": "The Witch",
      "budget": 4.0,
      "box_office": 40.42
  },
  {
      "primaryTitle": "The World's End",
      "budget": 20.0,
      "box_office": 46.09
  },
  {
      "primaryTitle": "Sully",
      "budget": 60.0,
      "box_office": 243.87
  },
  {
      "primaryTitle": "Green Lantern",
      "budget": 200.0,
      "box_office": 237.2
  },
  {
      "primaryTitle": "Murder on the Orient Express",
      "budget": 55.0,
      "box_office": 352.79
  },
  {
      "primaryTitle": "The Lobster",
      "budget": 4.0,
      "box_office": 17.58
  },
  {
      "primaryTitle": "Dredd",
      "budget": 50.0,
      "box_office": 41.04
  },
  {
      "primaryTitle": "Alita: Battle Angel",
      "budget": 170.0,
      "box_office": 404.98
  },
  {
      "primaryTitle": "Terminator Genisys",
      "budget": 155.0,
      "box_office": 440.6
  },
  {
      "primaryTitle": "Olympus Has Fallen",
      "budget": 70.0,
      "box_office": 170.27
  },
  {
      "primaryTitle": "The Jungle Book",
      "budget": 175.0,
      "box_office": 967.72
  },
  {
      "primaryTitle": "Wonder Woman 1984",
      "budget": 200.0,
      "box_office": 169.6
  },
  {
      "primaryTitle": "El Camino: A Breaking Bad Movie",
      "budget": 6.0,
      "box_office": null
  },
  {
      "primaryTitle": "BlacKkKlansman",
      "budget": 15.0,
      "box_office": 93.41
  },
  {
      "primaryTitle": "The Place Beyond the Pines",
      "budget": 15.0,
      "box_office": 47.15
  },
  {
      "primaryTitle": "Aladdin",
      "budget": 183.0,
      "box_office": 1054.3
  },
  {
      "primaryTitle": "Kick-Ass 2",
      "budget": 28.0,
      "box_office": 60.8
  },
  {
      "primaryTitle": "Me Before You",
      "budget": 20.0,
      "box_office": 208.45
  },
  {
      "primaryTitle": "John Carter",
      "budget": 250.0,
      "box_office": 284.14
  },
  {
      "primaryTitle": "Jumanji: The Next Level",
      "budget": 125.0,
      "box_office": 801.69
  },
  {
      "primaryTitle": "War for the Planet of the Apes",
      "budget": 150.0,
      "box_office": 490.72
  },
  {
      "primaryTitle": "Hotel Transylvania",
      "budget": 85.0,
      "box_office": 358.38
  },
  {
      "primaryTitle": "Dark Shadows",
      "budget": 150.0,
      "box_office": 245.53
  },
  {
      "primaryTitle": "Wind River",
      "budget": 11.0,
      "box_office": 44.2
  },
  {
      "primaryTitle": "Toy Story 4",
      "budget": 200.0,
      "box_office": 1073.84
  },
  {
      "primaryTitle": "Sinister",
      "budget": 3.0,
      "box_office": 82.52
  },
  {
      "primaryTitle": "The Matrix Resurrections",
      "budget": 190.0,
      "box_office": 157.39
  },
  {
      "primaryTitle": "Warcraft",
      "budget": 160.0,
      "box_office": 439.05
  },
  {
      "primaryTitle": "Non-Stop",
      "budget": 50.0,
      "box_office": 222.81
  },
  {
      "primaryTitle": "Maze Runner: The Scorch Trials",
      "budget": 61.0,
      "box_office": 312.3
  },
  {
      "primaryTitle": "Focus",
      "budget": 50.1,
      "box_office": 159.16
  },
  {
      "primaryTitle": "Seven Psychopaths",
      "budget": 15.0,
      "box_office": 29.35
  },
  {
      "primaryTitle": "The Intern",
      "budget": 35.0,
      "box_office": 194.76
  },
  {
      "primaryTitle": "Black Adam",
      "budget": 195.0,
      "box_office": 393.45
  },
  {
      "primaryTitle": "Lincoln",
      "budget": 65.0,
      "box_office": 275.29
  },
  {
      "primaryTitle": "A Quiet Place Part II",
      "budget": null,
      "box_office": 297.37
  },
  {
      "primaryTitle": "The Platform",
      "budget": null,
      "box_office": 1.09
  },
  {
      "primaryTitle": "The Adjustment Bureau",
      "budget": 50.2,
      "box_office": 127.87
  },
  {
      "primaryTitle": "Unknown",
      "budget": 30.0,
      "box_office": 135.71
  },
  {
      "primaryTitle": "Chappie",
      "budget": 49.0,
      "box_office": 102.81
  },
  {
      "primaryTitle": "End of Watch",
      "budget": 7.0,
      "box_office": 55.08
  },
  {
      "primaryTitle": "It Follows",
      "budget": 1.0,
      "box_office": 21.95
  },
  {
      "primaryTitle": "Glass",
      "budget": 20.0,
      "box_office": 247.0
  },
  {
      "primaryTitle": "Noah",
      "budget": 125.0,
      "box_office": 359.2
  },
  {
      "primaryTitle": "The Lion King",
      "budget": 260.0,
      "box_office": 1663.08
  },
  {
      "primaryTitle": "Total Recall",
      "budget": 125.0,
      "box_office": 198.47
  },
  {
      "primaryTitle": "Paul",
      "budget": 40.0,
      "box_office": 97.98
  },
  {
      "primaryTitle": "Cruella",
      "budget": 100.0,
      "box_office": 233.5
  },
  {
      "primaryTitle": "Just Go with It",
      "budget": 80.0,
      "box_office": 214.95
  },
  {
      "primaryTitle": "Birds of Prey",
      "budget": 84.5,
      "box_office": 205.54
  },
  {
      "primaryTitle": "Chronicle",
      "budget": 12.0,
      "box_office": 126.64
  },
  {
      "primaryTitle": "Nope",
      "budget": 68.0,
      "box_office": 171.24
  },
  {
      "primaryTitle": "The Grey",
      "budget": 25.0,
      "box_office": 79.78
  },
  {
      "primaryTitle": "The Twilight Saga: Breaking Dawn - Part 2",
      "budget": 120.0,
      "box_office": 848.59
  },
  {
      "primaryTitle": "Extraction",
      "budget": 65.0,
      "box_office": null
  },
  {
      "primaryTitle": "Ad Astra",
      "budget": 90.0,
      "box_office": 127.46
  },
  {
      "primaryTitle": "Minions",
      "budget": 74.0,
      "box_office": 1159.46
  },
  {
      "primaryTitle": "Spy",
      "budget": 65.0,
      "box_office": 235.67
  },
  {
      "primaryTitle": "Venom: Let There Be Carnage",
      "budget": 110.0,
      "box_office": 506.86
  },
  {
      "primaryTitle": "Star Trek Beyond",
      "budget": 185.0,
      "box_office": 343.47
  },
  {
      "primaryTitle": "A Separation",
      "budget": 0.5,
      "box_office": 22.93
  },
  {
      "primaryTitle": "Uncharted",
      "budget": 120.0,
      "box_office": 407.14
  },
  {
      "primaryTitle": "Southpaw",
      "budget": 30.0,
      "box_office": 91.97
  },
  {
      "primaryTitle": "Train to Busan",
      "budget": 10000.0,
      "box_office": 92.77
  },
  {
      "primaryTitle": "Escape Plan",
      "budget": 50.0,
      "box_office": 137.33
  },
  {
      "primaryTitle": "Battleship",
      "budget": 209.0,
      "box_office": 303.03
  },
  {
      "primaryTitle": "San Andreas",
      "budget": 110.0,
      "box_office": 474.61
  },
  {
      "primaryTitle": "Game Night",
      "budget": 37.0,
      "box_office": 117.77
  },
  {
      "primaryTitle": "Hidden Figures",
      "budget": 25.0,
      "box_office": 235.96
  },
  {
      "primaryTitle": "The Invisible Man",
      "budget": 7.0,
      "box_office": 144.49
  },
  {
      "primaryTitle": "The Divergent Series: Insurgent",
      "budget": 110.0,
      "box_office": 297.0
  },
  {
      "primaryTitle": "The Twilight Saga: Breaking Dawn - Part 1",
      "budget": 110.0,
      "box_office": 712.21
  },
  {
      "primaryTitle": "The Lighthouse",
      "budget": 11.0,
      "box_office": 18.13
  },
  {
      "primaryTitle": "Ender's Game",
      "budget": 110.0,
      "box_office": 125.54
  },
  {
      "primaryTitle": "The Lincoln Lawyer",
      "budget": 40.0,
      "box_office": 86.75
  },
  {
      "primaryTitle": "The Fate of the Furious",
      "budget": 250.0,
      "box_office": 1236.01
  },
  {
      "primaryTitle": "Lawless",
      "budget": 26.0,
      "box_office": 55.4
  },
  {
      "primaryTitle": "Life",
      "budget": 58.0,
      "box_office": 100.54
  },
  {
      "primaryTitle": "War Dogs",
      "budget": 40.0,
      "box_office": 86.43
  },
  {
      "primaryTitle": "Sucker Punch",
      "budget": 82.0,
      "box_office": 89.79
  },
  {
      "primaryTitle": "The Northman",
      "budget": 70.0,
      "box_office": 69.63
  },
  {
      "primaryTitle": "Hell or High Water",
      "budget": 12.0,
      "box_office": 38.0
  },
  {
      "primaryTitle": "The Banshees of Inisherin",
      "budget": null,
      "box_office": 49.26
  },
  {
      "primaryTitle": "The Descendants",
      "budget": 20.0,
      "box_office": 177.24
  },
  {
      "primaryTitle": "Lion",
      "budget": 12.0,
      "box_office": 140.85
  },
  {
      "primaryTitle": "Mother!",
      "budget": 30.0,
      "box_office": 44.52
  },
  {
      "primaryTitle": "The Artist",
      "budget": 15.0,
      "box_office": 133.47
  },
  {
      "primaryTitle": "Rio",
      "budget": 90.0,
      "box_office": 483.87
  },
  {
      "primaryTitle": "Don Jon",
      "budget": 3.0,
      "box_office": 39.44
  },
  {
      "primaryTitle": "The Babadook",
      "budget": 2.0,
      "box_office": 10.49
  },
  {
      "primaryTitle": "The Hitman's Bodyguard",
      "budget": 30.0,
      "box_office": 183.43
  },
  {
      "primaryTitle": "I Am Number Four",
      "budget": 60.0,
      "box_office": 149.88
  },
  {
      "primaryTitle": "Ghostbusters",
      "budget": 144.0,
      "box_office": 229.15
  },
  {
      "primaryTitle": "Little Women",
      "budget": 40.0,
      "box_office": 218.84
  },
  {
      "primaryTitle": "The Lone Ranger",
      "budget": 215.0,
      "box_office": 260.5
  },
  {
      "primaryTitle": "Mission: Impossible - Dead Reckoning Part One",
      "budget": 291.0,
      "box_office": 567.54
  },
  {
      "primaryTitle": "All Quiet on the Western Front",
      "budget": null,
      "box_office": null
  },
  {
      "primaryTitle": "No Strings Attached",
      "budget": 25.0,
      "box_office": 149.23
  },
  {
      "primaryTitle": "The Impossible",
      "budget": 45.0,
      "box_office": 198.09
  },
  {
      "primaryTitle": "Warm Bodies",
      "budget": 35.0,
      "box_office": 116.98
  },
  {
      "primaryTitle": "The Adventures of Tintin",
      "budget": 135.0,
      "box_office": 373.99
  },
  {
      "primaryTitle": "I, Tonya",
      "budget": 11.0,
      "box_office": 53.94
  },
  {
      "primaryTitle": "Jason Bourne",
      "budget": 120.0,
      "box_office": 415.48
  },
  {
      "primaryTitle": "Ocean's Eight",
      "budget": 70.0,
      "box_office": 297.8
  },
  {
      "primaryTitle": "The Purge",
      "budget": 3.0,
      "box_office": 89.33
  },
  {
      "primaryTitle": "RoboCop",
      "budget": 100.0,
      "box_office": 242.69
  },
  {
      "primaryTitle": "Godzilla vs. Kong",
      "budget": 200.0,
      "box_office": 470.12
  },
  {
      "primaryTitle": "Transcendence",
      "budget": 100.0,
      "box_office": 103.04
  },
  {
      "primaryTitle": "The Gray Man",
      "budget": 200.0,
      "box_office": 0.45
  },
  {
      "primaryTitle": "White House Down",
      "budget": 150.0,
      "box_office": 205.37
  },
  {
      "primaryTitle": "Fast & Furious Presents: Hobbs & Shaw",
      "budget": 200.0,
      "box_office": 760.73
  },
  {
      "primaryTitle": "Safe House",
      "budget": 85.0,
      "box_office": 208.08
  },
  {
      "primaryTitle": "The Super Mario Bros. Movie",
      "budget": 100.0,
      "box_office": 1362.03
  },
  {
      "primaryTitle": "Captain Fantastic",
      "budget": 5.0,
      "box_office": 23.15
  },
  {
      "primaryTitle": "Killers of the Flower Moon",
      "budget": 200.0,
      "box_office": 157.03
  },
  {
      "primaryTitle": "Elvis",
      "budget": 85.0,
      "box_office": 288.67
  },
  {
      "primaryTitle": "Ted 2",
      "budget": 68.0,
      "box_office": 215.86
  },
  {
      "primaryTitle": "Project X",
      "budget": 12.0,
      "box_office": 102.73
  },
  {
      "primaryTitle": "Cowboys & Aliens",
      "budget": 163.0,
      "box_office": 174.82
  },
  {
      "primaryTitle": "The Favourite",
      "budget": 15.0,
      "box_office": 95.92
  },
  {
      "primaryTitle": "King Arthur: Legend of the Sword",
      "budget": 175.0,
      "box_office": 149.18
  },
  {
      "primaryTitle": "Everest",
      "budget": 55.0,
      "box_office": 203.43
  },
  {
      "primaryTitle": "Chef",
      "budget": 11.0,
      "box_office": 50.44
  },
  {
      "primaryTitle": "Poor Things",
      "budget": 35.0,
      "box_office": 117.02
  },
  {
      "primaryTitle": "The Adam Project",
      "budget": 116.0,
      "box_office": null
  },
  {
      "primaryTitle": "The Ides of March",
      "budget": 12.5,
      "box_office": 76.34
  },
  {
      "primaryTitle": "Pain & Gain",
      "budget": 26.0,
      "box_office": 87.31
  },
  {
      "primaryTitle": "The Magnificent Seven",
      "budget": 90.0,
      "box_office": 162.36
  },
  {
      "primaryTitle": "Ghost in the Shell",
      "budget": 110.0,
      "box_office": 169.85
  },
  {
      "primaryTitle": "The Tomorrow War",
      "budget": 200.0,
      "box_office": 14.4
  },
  {
      "primaryTitle": "Ant-Man and the Wasp: Quantumania",
      "budget": 200.0,
      "box_office": 476.07
  },
  {
      "primaryTitle": "Tomb Raider",
      "budget": 94.0,
      "box_office": 274.95
  },
  {
      "primaryTitle": "Prey",
      "budget": 65.0,
      "box_office": null
  },
  {
      "primaryTitle": "2 Guns",
      "budget": 61.0,
      "box_office": 131.94
  },
  {
      "primaryTitle": "Ice Age: Continental Drift",
      "budget": 95.0,
      "box_office": 877.24
  },
  {
      "primaryTitle": "American Reunion",
      "budget": 50.0,
      "box_office": 234.99
  },
  {
      "primaryTitle": "Dungeons & Dragons: Honor Among Thieves",
      "budget": 150.0,
      "box_office": 208.18
  },
  {
      "primaryTitle": "Gangster Squad",
      "budget": 60.0,
      "box_office": 105.2
  },
  {
      "primaryTitle": "Darkest Hour",
      "budget": 30.0,
      "box_office": 150.85
  },
  {
      "primaryTitle": "Teenage Mutant Ninja Turtles",
      "budget": 125.0,
      "box_office": 485.0
  },
  {
      "primaryTitle": "Enola Holmes",
      "budget": 20.0,
      "box_office": null
  },
  {
      "primaryTitle": "Straight Outta Compton",
      "budget": 28.0,
      "box_office": 201.63
  },
  {
      "primaryTitle": "Doctor Sleep",
      "budget": 45.0,
      "box_office": 72.39
  },
  {
      "primaryTitle": "Cars 2",
      "budget": 200.0,
      "box_office": 559.85
  },
  {
      "primaryTitle": "The Secret Life of Pets",
      "budget": 75.0,
      "box_office": 894.57
  },
  {
      "primaryTitle": "The Raid: Redemption",
      "budget": 1.1,
      "box_office": 9.15
  },
  {
      "primaryTitle": "Hansel & Gretel: Witch Hunters",
      "budget": 50.0,
      "box_office": 226.35
  },
  {
      "primaryTitle": "Ghostbusters: Afterlife",
      "budget": 75.0,
      "box_office": 204.33
  },
  {
      "primaryTitle": "Wild Tales",
      "budget": 3.3,
      "box_office": 31.48
  },
  {
      "primaryTitle": "A Good Day to Die Hard",
      "budget": 92.0,
      "box_office": 304.65
  },
  {
      "primaryTitle": "The Internship",
      "budget": 58.0,
      "box_office": 93.49
  },
  {
      "primaryTitle": "Enemy",
      "budget": null,
      "box_office": 3.47
  },
  {
      "primaryTitle": "Oz the Great and Powerful",
      "budget": 215.0,
      "box_office": 493.31
  },
  {
      "primaryTitle": "Central Intelligence",
      "budget": 50.0,
      "box_office": 216.94
  },
  {
      "primaryTitle": "Bad Teacher",
      "budget": 20.0,
      "box_office": 216.2
  },
  {
      "primaryTitle": "Blue Jasmine",
      "budget": 18.0,
      "box_office": 99.1
  },
  {
      "primaryTitle": "Tinker Tailor Soldier Spy",
      "budget": 20.0,
      "box_office": 81.52
  },
  {
      "primaryTitle": "Jungle Cruise",
      "budget": 200.0,
      "box_office": 220.89
  },
  {
      "primaryTitle": "Promising Young Woman",
      "budget": null,
      "box_office": 18.85
  },
  {
      "primaryTitle": "Dangal",
      "budget": 700.0,
      "box_office": 303.72
  },
  {
      "primaryTitle": "Sausage Party",
      "budget": 19.0,
      "box_office": 140.71
  },
  {
      "primaryTitle": "The Whale",
      "budget": 10.0,
      "box_office": 57.62
  },
  {
      "primaryTitle": "After Earth",
      "budget": 130.0,
      "box_office": 243.61
  },
  {
      "primaryTitle": "The Flash",
      "budget": 200.0,
      "box_office": 271.33
  },
  {
      "primaryTitle": "Assassin's Creed",
      "budget": 125.0,
      "box_office": 240.7
  },
  {
      "primaryTitle": "American Made",
      "budget": 50.0,
      "box_office": 134.87
  },
  {
      "primaryTitle": "Dracula Untold",
      "budget": 70.0,
      "box_office": 217.12
  },
  {
      "primaryTitle": "The Meg",
      "budget": 130.0,
      "box_office": 529.34
  },
  {
      "primaryTitle": "Hanna",
      "budget": 30.0,
      "box_office": 63.78
  },
  {
      "primaryTitle": "Wrath of Man",
      "budget": 40.0,
      "box_office": 103.97
  },
  {
      "primaryTitle": "Upgrade",
      "budget": 5.0,
      "box_office": 16.71
  },
  {
      "primaryTitle": "Atomic Blonde",
      "budget": 30.0,
      "box_office": 100.01
  },
  {
      "primaryTitle": "Shame",
      "budget": 6.5,
      "box_office": 19.12
  },
  {
      "primaryTitle": "The Mummy",
      "budget": 125.0,
      "box_office": 409.23
  },
  {
      "primaryTitle": "Godzilla: King of the Monsters",
      "budget": 170.0,
      "box_office": 387.3
  },
  {
      "primaryTitle": "The Vow",
      "budget": 30.0,
      "box_office": 196.11
  },
  {
      "primaryTitle": "Dark Phoenix",
      "budget": 200.0,
      "box_office": 252.44
  },
  {
      "primaryTitle": "Taken 3",
      "budget": 48.0,
      "box_office": 326.48
  },
  {
      "primaryTitle": "Jurassic World Dominion",
      "budget": 165.0,
      "box_office": 1001.98
  },
  {
      "primaryTitle": "The Age of Adaline",
      "budget": 25.0,
      "box_office": 65.66
  },
  {
      "primaryTitle": "Legend",
      "budget": 30.0,
      "box_office": 42.97
  },
  {
      "primaryTitle": "Zombieland: Double Tap",
      "budget": 42.0,
      "box_office": 122.81
  },
  {
      "primaryTitle": "First Man",
      "budget": 59.0,
      "box_office": 105.71
  },
  {
      "primaryTitle": "Baywatch",
      "budget": 69.0,
      "box_office": 177.86
  },
  {
      "primaryTitle": "Bright",
      "budget": 90.0,
      "box_office": null
  },
  {
      "primaryTitle": "Red Sparrow",
      "budget": 69.0,
      "box_office": 151.57
  },
  {
      "primaryTitle": "The Judge",
      "budget": 50.0,
      "box_office": 84.42
  },
  {
      "primaryTitle": "PK",
      "budget": null,
      "box_office": 100.37
  },
  {
      "primaryTitle": "Saltburn",
      "budget": null,
      "box_office": 21.07
  },
  {
      "primaryTitle": "What We Do in the Shadows",
      "budget": 1.6,
      "box_office": 7.41
  },
  {
      "primaryTitle": "The Girl on the Train",
      "budget": 45.0,
      "box_office": 173.19
  },
  {
      "primaryTitle": "The Danish Girl",
      "budget": 15.0,
      "box_office": 64.19
  },
  {
      "primaryTitle": "A Million Ways to Die in the West",
      "budget": 40.0,
      "box_office": 87.19
  },
  {
      "primaryTitle": "Madagascar 3: Europe's Most Wanted",
      "budget": 145.0,
      "box_office": 746.92
  },
  {
      "primaryTitle": "Side Effects",
      "budget": 30.0,
      "box_office": 63.41
  },
  {
      "primaryTitle": "Evil Dead",
      "budget": 17.0,
      "box_office": 97.54
  },
  {
      "primaryTitle": "Indiana Jones and the Dial of Destiny",
      "budget": 294.7,
      "box_office": 383.96
  },
  {
      "primaryTitle": "The Equalizer 2",
      "budget": 62.0,
      "box_office": 190.4
  },
  {
      "primaryTitle": "Valerian and the City of a Thousand Planets",
      "budget": 177.2,
      "box_office": 225.97
  },
  {
      "primaryTitle": "6 Underground",
      "budget": 150.0,
      "box_office": null
  },
  {
      "primaryTitle": "The Expendables 3",
      "budget": 80.0,
      "box_office": 214.66
  },
  {
      "primaryTitle": "Melancholia",
      "budget": 7.4,
      "box_office": 17.51
  },
  {
      "primaryTitle": "Wrath of the Titans",
      "budget": 150.0,
      "box_office": 301.97
  },
  {
      "primaryTitle": "The Change-Up",
      "budget": 52.0,
      "box_office": 75.45
  },
  {
      "primaryTitle": "Jupiter Ascending",
      "budget": 176.0,
      "box_office": 184.29
  },
  {
      "primaryTitle": "Another Round",
      "budget": null,
      "box_office": 12.75
  },
  {
      "primaryTitle": "This Means War",
      "budget": 65.0,
      "box_office": 156.49
  },
  {
      "primaryTitle": "Frozen II",
      "budget": 150.0,
      "box_office": 1453.68
  },
  {
      "primaryTitle": "Rocketman",
      "budget": 40.0,
      "box_office": 195.32
  },
  {
      "primaryTitle": "The Power of the Dog",
      "budget": 35.0,
      "box_office": 0.27
  },
  {
      "primaryTitle": "Luca",
      "budget": null,
      "box_office": 51.07
  },
  {
      "primaryTitle": "Leave the World Behind",
      "budget": null,
      "box_office": null
  },
  {
      "primaryTitle": "The Trial of the Chicago 7",
      "budget": 35.0,
      "box_office": null
  },
  {
      "primaryTitle": "Terminator: Dark Fate",
      "budget": 185.0,
      "box_office": 261.12
  },
  {
      "primaryTitle": "The Black Phone",
      "budget": 18.0,
      "box_office": 161.44
  },
  {
      "primaryTitle": "The Woman in Black",
      "budget": 17.0,
      "box_office": 128.96
  },
  {
      "primaryTitle": "Anchorman 2: The Legend Continues",
      "budget": 50.0,
      "box_office": 173.65
  },
  {
      "primaryTitle": "The Invisible Guest",
      "budget": 4.0,
      "box_office": 31.19
  },
  {
      "primaryTitle": "Black Mass",
      "budget": 53.0,
      "box_office": 99.98
  },
  {
      "primaryTitle": "The Father",
      "budget": 6.0,
      "box_office": 24.05
  },
  {
      "primaryTitle": "Tomorrowland",
      "budget": 190.0,
      "box_office": 209.04
  },
  {
      "primaryTitle": "Mama",
      "budget": 15.0,
      "box_office": 146.43
  },
  {
      "primaryTitle": "Sing",
      "budget": 75.0,
      "box_office": 634.34
  },
  {
      "primaryTitle": "Isle of Dogs",
      "budget": null,
      "box_office": 64.66
  },
  {
      "primaryTitle": "Cinderella",
      "budget": 95.0,
      "box_office": 542.36
  },
  {
      "primaryTitle": "Mortal Kombat",
      "budget": 55.0,
      "box_office": 84.43
  },
  {
      "primaryTitle": "Crazy Rich Asians",
      "budget": 30.0,
      "box_office": 239.34
  },
  {
      "primaryTitle": "Inferno",
      "budget": 75.0,
      "box_office": 220.02
  },
  {
      "primaryTitle": "Mud",
      "budget": null,
      "box_office": null
  },
  {
      "primaryTitle": "Independence Day: Resurgence",
      "budget": 165.0,
      "box_office": 389.68
  },
  {
      "primaryTitle": "Insidious: Chapter 2",
      "budget": 5.0,
      "box_office": 161.92
  },
  {
      "primaryTitle": "The Legend of Tarzan",
      "budget": 180.0,
      "box_office": 357.24
  },
  {
      "primaryTitle": "Death on the Nile",
      "budget": 90.0,
      "box_office": 137.31
  },
  {
      "primaryTitle": "Bumblebee",
      "budget": 135.0,
      "box_office": 467.99
  },
  {
      "primaryTitle": "Miss Peregrine's Home for Peculiar Children",
      "budget": 110.0,
      "box_office": 296.48
  },
  {
      "primaryTitle": "Army of the Dead",
      "budget": 70.0,
      "box_office": null
  },
  {
      "primaryTitle": "G.I. Joe: Retaliation",
      "budget": 130.0,
      "box_office": 375.74
  },
  {
      "primaryTitle": "Molly's Game",
      "budget": 30.0,
      "box_office": 59.28
  },
  {
      "primaryTitle": "The Killing of a Sacred Deer",
      "budget": null,
      "box_office": 6.94
  },
  {
      "primaryTitle": "The Master",
      "budget": 32.0,
      "box_office": 28.29
  },
  {
      "primaryTitle": "Battle Los Angeles",
      "budget": 70.0,
      "box_office": 211.82
  },
  {
      "primaryTitle": "Horrible Bosses 2",
      "budget": 42.0,
      "box_office": 107.65
  },
  {
      "primaryTitle": "Rampage",
      "budget": 120.0,
      "box_office": 428.13
  },
  {
      "primaryTitle": "The Tree of Life",
      "budget": 32.0,
      "box_office": 58.41
  },
  {
      "primaryTitle": "The Old Guard",
      "budget": 70.0,
      "box_office": null
  },
  {
      "primaryTitle": "Nomadland",
      "budget": 5.0,
      "box_office": 39.46
  },
  {
      "primaryTitle": "Unbroken",
      "budget": 65.0,
      "box_office": 161.46
  },
  {
      "primaryTitle": "Ralph Breaks the Internet",
      "budget": 175.0,
      "box_office": 529.32
  },
  {
      "primaryTitle": "Pok\u00e9mon: Detective Pikachu",
      "budget": 150.0,
      "box_office": 450.06
  },
  {
      "primaryTitle": "Palm Springs",
      "budget": null,
      "box_office": 1.51
  },
  {
      "primaryTitle": "Deepwater Horizon",
      "budget": 110.0,
      "box_office": 121.79
  },
  {
      "primaryTitle": "Ready or Not",
      "budget": 6.0,
      "box_office": 57.62
  },
  {
      "primaryTitle": "The Last Duel",
      "budget": 100.0,
      "box_office": 30.55
  },
  {
      "primaryTitle": "The Heat",
      "budget": 43.0,
      "box_office": 229.93
  },
  {
      "primaryTitle": "The Killer",
      "budget": null,
      "box_office": 0.46
  },
  {
      "primaryTitle": "RED 2",
      "budget": 84.0,
      "box_office": 148.08
  },
  {
      "primaryTitle": "Exodus: Gods and Kings",
      "budget": 140.0,
      "box_office": 268.18
  },
  {
      "primaryTitle": "Barbarian",
      "budget": 4.5,
      "box_office": 45.35
  },
  {
      "primaryTitle": "The Promise",
      "budget": 90.0,
      "box_office": 12.45
  },
  {
      "primaryTitle": "Need for Speed",
      "budget": 66.0,
      "box_office": 203.28
  },
  {
      "primaryTitle": "Steve Jobs",
      "budget": 30.0,
      "box_office": 34.44
  },
  {
      "primaryTitle": "Wonder",
      "budget": 20.0,
      "box_office": 315.03
  },
  {
      "primaryTitle": "Laal Singh Chaddha",
      "budget": 1800.0,
      "box_office": 12.09
  },
  {
      "primaryTitle": "Riddick",
      "budget": 38.0,
      "box_office": 98.34
  },
  {
      "primaryTitle": "Triangle of Sadness",
      "budget": 10.0,
      "box_office": 26.21
  },
  {
      "primaryTitle": "The Founder",
      "budget": 25.0,
      "box_office": 24.12
  },
  {
      "primaryTitle": "Fantastic Four",
      "budget": 120.0,
      "box_office": 167.88
  },
  {
      "primaryTitle": "Immortals",
      "budget": 75.0,
      "box_office": 226.9
  },
  {
      "primaryTitle": "Last Night in Soho",
      "budget": 43.0,
      "box_office": 22.96
  },
  {
      "primaryTitle": "Jack Reacher: Never Go Back",
      "budget": 60.0,
      "box_office": 162.15
  },
  {
      "primaryTitle": "Annabelle",
      "budget": 6.5,
      "box_office": 257.59
  },
  {
      "primaryTitle": "Bad Boys for Life",
      "budget": 90.0,
      "box_office": 426.51
  },
  {
      "primaryTitle": "The King's Man",
      "budget": 100.0,
      "box_office": 125.9
  },
  {
      "primaryTitle": "The Lego Batman Movie",
      "budget": 80.0,
      "box_office": 312.34
  },
  {
      "primaryTitle": "The Handmaiden",
      "budget": 10000.0,
      "box_office": 37.86
  },
  {
      "primaryTitle": "Before Midnight",
      "budget": 3.0,
      "box_office": 20.85
  },
  {
      "primaryTitle": "The Gift",
      "budget": 5.0,
      "box_office": 58.98
  },
  {
      "primaryTitle": "The Mechanic",
      "budget": 40.0,
      "box_office": 76.13
  },
  {
      "primaryTitle": "Raya and the Last Dragon",
      "budget": null,
      "box_office": 130.42
  },
  {
      "primaryTitle": "Scream 4",
      "budget": 40.0,
      "box_office": 97.23
  },
  {
      "primaryTitle": "X",
      "budget": 1.0,
      "box_office": 14.74
  },
  {
      "primaryTitle": "47 Ronin",
      "budget": 175.0,
      "box_office": 151.78
  },
  {
      "primaryTitle": "Sin City: A Dame to Kill For",
      "budget": 65.0,
      "box_office": 39.41
  },
  {
      "primaryTitle": "Pitch Perfect 2",
      "budget": 29.0,
      "box_office": 287.14
  },
  {
      "primaryTitle": "The Nun",
      "budget": 22.0,
      "box_office": 366.08
  },
  {
      "primaryTitle": "Saving Mr. Banks",
      "budget": 35.0,
      "box_office": 117.87
  },
  {
      "primaryTitle": "Fantastic Beasts: The Secrets of Dumbledore",
      "budget": 200.0,
      "box_office": 407.15
  },
  {
      "primaryTitle": "Roma",
      "budget": null,
      "box_office": 1.14
  },
  {
      "primaryTitle": "Onward",
      "budget": 175.0,
      "box_office": 141.94
  },
  {
      "primaryTitle": "Allied",
      "budget": 85.0,
      "box_office": 119.52
  },
  {
      "primaryTitle": "London Has Fallen",
      "budget": 60.0,
      "box_office": 205.75
  },
  {
      "primaryTitle": "Grown Ups 2",
      "budget": 80.0,
      "box_office": 246.98
  },
  {
      "primaryTitle": "Halloween",
      "budget": 10.0,
      "box_office": 259.94
  },
  {
      "primaryTitle": "Transformers: The Last Knight",
      "budget": 217.0,
      "box_office": 605.43
  },
  {
      "primaryTitle": "Murder Mystery",
      "budget": null,
      "box_office": null
  },
  {
      "primaryTitle": "The Ballad of Buster Scruggs",
      "budget": null,
      "box_office": null
  },
  {
      "primaryTitle": "We Need to Talk About Kevin",
      "budget": 7.0,
      "box_office": 9.23
  },
  {
      "primaryTitle": "Yesterday",
      "budget": 26.0,
      "box_office": 154.61
  },
  {
      "primaryTitle": "One Day",
      "budget": 15.0,
      "box_office": 59.39
  },
  {
      "primaryTitle": "RRR",
      "budget": 3500.0,
      "box_office": 166.61
  },
  {
      "primaryTitle": "Begin Again",
      "budget": 8.0,
      "box_office": 84.14
  },
  {
      "primaryTitle": "Babylon",
      "budget": 110.0,
      "box_office": 63.56
  },
  {
      "primaryTitle": "Sicario: Day of the Soldado",
      "budget": 35.0,
      "box_office": 75.84
  },
  {
      "primaryTitle": "Air",
      "budget": 90.0,
      "box_office": 90.06
  },
  {
      "primaryTitle": "The Skin I Live In",
      "budget": 10.0,
      "box_office": 33.72
  },
  {
      "primaryTitle": "War Horse",
      "budget": 66.0,
      "box_office": 177.58
  },
  {
      "primaryTitle": "Nightmare Alley",
      "budget": 60.0,
      "box_office": 39.63
  },
  {
      "primaryTitle": "The Green Hornet",
      "budget": 120.0,
      "box_office": 227.82
  },
  {
      "primaryTitle": "Bad Times at the El Royale",
      "budget": 32.0,
      "box_office": 31.88
  },
  {
      "primaryTitle": "CODA",
      "budget": 10.0,
      "box_office": 1.91
  },
  {
      "primaryTitle": "Hercules",
      "budget": 100.0,
      "box_office": 244.82
  },
  {
      "primaryTitle": "The Disaster Artist",
      "budget": 10.0,
      "box_office": 29.82
  },
  {
      "primaryTitle": "Inside Llewyn Davis",
      "budget": 11.0,
      "box_office": 32.96
  },
  {
      "primaryTitle": "Blue Is the Warmest Colour",
      "budget": 4.0,
      "box_office": 19.47
  },
  {
      "primaryTitle": "Snowden",
      "budget": 40.0,
      "box_office": 37.36
  },
  {
      "primaryTitle": "Happy Death Day",
      "budget": 4.8,
      "box_office": 125.48
  },
  {
      "primaryTitle": "A Simple Favor",
      "budget": 20.0,
      "box_office": 97.64
  },
  {
      "primaryTitle": "Vice",
      "budget": 60.0,
      "box_office": 76.07
  },
  {
      "primaryTitle": "The Purge: Anarchy",
      "budget": 9.0,
      "box_office": 111.93
  },
  {
      "primaryTitle": "Maze Runner: The Death Cure",
      "budget": 62.0,
      "box_office": 288.18
  },
  {
      "primaryTitle": "Logan Lucky",
      "budget": 29.0,
      "box_office": 48.45
  },
  {
      "primaryTitle": "The Drop",
      "budget": 12.6,
      "box_office": 18.66
  },
  {
      "primaryTitle": "The Post",
      "budget": 50.0,
      "box_office": 193.76
  },
  {
      "primaryTitle": "F9: The Fast Saga",
      "budget": 200.0,
      "box_office": 726.23
  },
  {
      "primaryTitle": "Abraham Lincoln: Vampire Hunter",
      "budget": 69.0,
      "box_office": 116.47
  },
  {
      "primaryTitle": "The Spectacular Now",
      "budget": 2.5,
      "box_office": 6.92
  },
  {
      "primaryTitle": "Underworld: Awakening",
      "budget": 70.0,
      "box_office": 160.11
  },
  {
      "primaryTitle": "Guy Ritchie's the Covenant",
      "budget": 55.0,
      "box_office": 21.63
  },
  {
      "primaryTitle": "13 Hours",
      "budget": 50.0,
      "box_office": 69.41
  },
  {
      "primaryTitle": "Old",
      "budget": 18.0,
      "box_office": 90.15
  },
  {
      "primaryTitle": "Locke",
      "budget": 2.0,
      "box_office": 5.09
  },
  {
      "primaryTitle": "House of Gucci",
      "budget": 75.0,
      "box_office": 153.27
  },
  {
      "primaryTitle": "Smile",
      "budget": 17.0,
      "box_office": 217.41
  },
  {
      "primaryTitle": "Mulan",
      "budget": 200.0,
      "box_office": 69.97
  },
  {
      "primaryTitle": "Pixels",
      "budget": 88.0,
      "box_office": 244.87
  },
  {
      "primaryTitle": "Sonic the Hedgehog",
      "budget": 85.0,
      "box_office": 319.72
  },
  {
      "primaryTitle": "Man on a Ledge",
      "budget": 42.0,
      "box_office": 47.64
  },
  {
      "primaryTitle": "Scream",
      "budget": 24.0,
      "box_office": 137.74
  },
  {
      "primaryTitle": "Crimson Peak",
      "budget": 55.0,
      "box_office": 74.68
  },
  {
      "primaryTitle": "Under the Skin",
      "budget": 13.3,
      "box_office": 7.49
  },
  {
      "primaryTitle": "The Lost City",
      "budget": 68.0,
      "box_office": 192.91
  },
  {
      "primaryTitle": "No Hard Feelings",
      "budget": 45.0,
      "box_office": 87.26
  },
  {
      "primaryTitle": "The Creator",
      "budget": 80.0,
      "box_office": 104.27
  },
  {
      "primaryTitle": "A Man Called Otto",
      "budget": 50.0,
      "box_office": 113.19
  },
  {
      "primaryTitle": "The Way Way Back",
      "budget": 5.0,
      "box_office": 26.47
  },
  {
      "primaryTitle": "Pathaan",
      "budget": null,
      "box_office": 128.78
  },
  {
      "primaryTitle": "Love, Rosie",
      "budget": null,
      "box_office": 25.57
  },
  {
      "primaryTitle": "Creed II",
      "budget": 50.0,
      "box_office": 214.22
  },
  {
      "primaryTitle": "The Little Mermaid",
      "budget": 250.0,
      "box_office": 569.63
  },
  {
      "primaryTitle": "Hush",
      "budget": 1.0,
      "box_office": null
  },
  {
      "primaryTitle": "Borat Subsequent Moviefilm",
      "budget": null,
      "box_office": null
  },
  {
      "primaryTitle": "Killing Them Softly",
      "budget": 15.0,
      "box_office": 37.93
  },
  {
      "primaryTitle": "Morbius",
      "budget": 75.0,
      "box_office": 167.46
  },
  {
      "primaryTitle": "The Devil All the Time",
      "budget": null,
      "box_office": null
  },
  {
      "primaryTitle": "The Mule",
      "budget": 50.0,
      "box_office": 174.8
  },
  {
      "primaryTitle": "The King",
      "budget": 23.0,
      "box_office": 0.13
  },
  {
      "primaryTitle": "Turning Red",
      "budget": 175.0,
      "box_office": 21.81
  },
  {
      "primaryTitle": "We Bought a Zoo",
      "budget": 50.0,
      "box_office": 120.08
  },
  {
      "primaryTitle": "The Visit",
      "budget": 5.0,
      "box_office": 98.45
  },
  {
      "primaryTitle": "Tower Heist",
      "budget": 75.0,
      "box_office": 152.93
  },
  {
      "primaryTitle": "Annabelle: Creation",
      "budget": 15.0,
      "box_office": 306.59
  },
  {
      "primaryTitle": "Brooklyn",
      "budget": 11.0,
      "box_office": 62.4
  },
  {
      "primaryTitle": "This Is 40",
      "budget": 35.0,
      "box_office": 88.22
  },
  {
      "primaryTitle": "The Unbearable Weight of Massive Talent",
      "budget": 30.0,
      "box_office": 29.12
  },
  {
      "primaryTitle": "The French Dispatch",
      "budget": 25.0,
      "box_office": 46.33
  },
  {
      "primaryTitle": "Resident Evil: Retribution",
      "budget": 65.0,
      "box_office": 240.16
  },
  {
      "primaryTitle": "The Other Woman",
      "budget": 40.0,
      "box_office": 196.71
  },
  {
      "primaryTitle": "Sound of Metal",
      "budget": 5.4,
      "box_office": 0.52
  },
  {
      "primaryTitle": "Foxcatcher",
      "budget": 24.0,
      "box_office": 19.21
  },
  {
      "primaryTitle": "Spring Breakers",
      "budget": 5.0,
      "box_office": 32.17
  },
  {
      "primaryTitle": "In the Heart of the Sea",
      "budget": 100.0,
      "box_office": 94.32
  },
  {
      "primaryTitle": "The Guilty",
      "budget": null,
      "box_office": null
  },
  {
      "primaryTitle": "Carrie",
      "budget": 30.0,
      "box_office": 84.79
  },
  {
      "primaryTitle": "Into the Woods",
      "budget": 50.0,
      "box_office": 212.9
  },
  {
      "primaryTitle": "Magic Mike",
      "budget": 7.0,
      "box_office": 167.28
  },
  {
      "primaryTitle": "Get Hard",
      "budget": 40.0,
      "box_office": 111.81
  },
  {
      "primaryTitle": "Jack the Giant Slayer",
      "budget": 195.0,
      "box_office": 197.69
  },
  {
      "primaryTitle": "Men in Black: International",
      "budget": 110.0,
      "box_office": 253.89
  },
  {
      "primaryTitle": "Tag",
      "budget": 28.0,
      "box_office": 78.23
  },
  {
      "primaryTitle": "Extraction II",
      "budget": null,
      "box_office": null
  },
  {
      "primaryTitle": "The Great Wall",
      "budget": 150.0,
      "box_office": 334.93
  },
  {
      "primaryTitle": "Don't Worry Darling",
      "budget": 20.0,
      "box_office": 87.61
  },
  {
      "primaryTitle": "The Dark Tower",
      "budget": 60.0,
      "box_office": 113.23
  },
  {
      "primaryTitle": "I Care a Lot",
      "budget": 14.0,
      "box_office": 1.35
  },
  {
      "primaryTitle": "Triple Frontier",
      "budget": 115.0,
      "box_office": null
  },
  {
      "primaryTitle": "The Thing",
      "budget": 38.0,
      "box_office": 31.51
  },
  {
      "primaryTitle": "The Last Stand",
      "budget": 45.0,
      "box_office": 48.33
  },
  {
      "primaryTitle": "Phantom Thread",
      "budget": 35.0,
      "box_office": 48.71
  },
  {
      "primaryTitle": "Love and Monsters",
      "budget": 30.0,
      "box_office": 1.07
  },
  {
      "primaryTitle": "Dumb and Dumber To",
      "budget": 40.0,
      "box_office": 169.84
  },
  {
      "primaryTitle": "Joy",
      "budget": 60.0,
      "box_office": 101.13
  },
  {
      "primaryTitle": "Margin Call",
      "budget": 3.5,
      "box_office": 19.5
  },
  {
      "primaryTitle": "Blended",
      "budget": 40.0,
      "box_office": 128.01
  },
  {
      "primaryTitle": "Hustle",
      "budget": null,
      "box_office": null
  },
  {
      "primaryTitle": "The Big Sick",
      "budget": 5.0,
      "box_office": 56.41
  },
  {
      "primaryTitle": "R.I.P.D.",
      "budget": 130.0,
      "box_office": 78.32
  },
  {
      "primaryTitle": "Still Alice",
      "budget": 5.0,
      "box_office": 44.78
  },
  {
      "primaryTitle": "The Predator",
      "budget": 88.0,
      "box_office": 160.54
  },
  {
      "primaryTitle": "The Shallows",
      "budget": 17.0,
      "box_office": 119.1
  },
  {
      "primaryTitle": "Hail, Caesar!",
      "budget": 22.0,
      "box_office": 63.95
  },
  {
      "primaryTitle": "Trainwreck",
      "budget": 35.0,
      "box_office": 140.8
  },
  {
      "primaryTitle": "The Book Thief",
      "budget": 19.0,
      "box_office": 76.59
  },
  {
      "primaryTitle": "Carol",
      "budget": 11.8,
      "box_office": 40.27
  },
  {
      "primaryTitle": "Lights Out",
      "budget": 4.9,
      "box_office": 149.37
  },
  {
      "primaryTitle": "Hunt for the Wilderpeople",
      "budget": null,
      "box_office": 38.56
  },
  {
      "primaryTitle": "M3GAN",
      "budget": 12.0,
      "box_office": 180.09
  },
  {
      "primaryTitle": "Escape Room",
      "budget": 9.0,
      "box_office": 155.71
  },
  {
      "primaryTitle": "The Monuments Men",
      "budget": 70.0,
      "box_office": 156.71
  },
  {
      "primaryTitle": "The Boss Baby",
      "budget": 125.0,
      "box_office": 527.97
  },
  {
      "primaryTitle": "Identity Thief",
      "budget": 35.0,
      "box_office": 173.97
  },
  {
      "primaryTitle": "Johnny English Reborn",
      "budget": 45.0,
      "box_office": 160.08
  },
  {
      "primaryTitle": "Nerve",
      "budget": 19.0,
      "box_office": 85.25
  },
  {
      "primaryTitle": "Good Time",
      "budget": 4.5,
      "box_office": 3.28
  },
  {
      "primaryTitle": "The Edge of Seventeen",
      "budget": 9.0,
      "box_office": 19.37
  },
  {
      "primaryTitle": "Licorice Pizza",
      "budget": 40.0,
      "box_office": 33.27
  },
  {
      "primaryTitle": "Mortal Engines",
      "budget": 100.0,
      "box_office": 83.87
  },
  {
      "primaryTitle": "Let's Be Cops",
      "budget": 17.0,
      "box_office": 138.22
  },
  {
      "primaryTitle": "Oculus",
      "budget": 5.0,
      "box_office": 44.46
  },
  {
      "primaryTitle": "Talk to Me",
      "budget": 4.5,
      "box_office": 92.18
  },
  {
      "primaryTitle": "Green Room",
      "budget": 5.0,
      "box_office": 3.77
  },
  {
      "primaryTitle": "The Mortal Instruments: City of Bones",
      "budget": 60.0,
      "box_office": 95.4
  },
  {
      "primaryTitle": "Wild",
      "budget": 15.0,
      "box_office": 52.5
  },
  {
      "primaryTitle": "The Autopsy of Jane Doe",
      "budget": null,
      "box_office": 6.17
  },
  {
      "primaryTitle": "The Conjuring: The Devil Made Me Do It",
      "budget": 39.0,
      "box_office": 206.43
  },
  {
      "primaryTitle": "Jack Ryan: Shadow Recruit",
      "budget": 60.0,
      "box_office": 135.5
  },
  {
      "primaryTitle": "Me and Earl and the Dying Girl",
      "budget": 8.0,
      "box_office": 9.07
  },
  {
      "primaryTitle": "The Campaign",
      "budget": 95.0,
      "box_office": 104.91
  },
  {
      "primaryTitle": "Last Vegas",
      "budget": 28.0,
      "box_office": 134.41
  },
  {
      "primaryTitle": "Baahubali: The Beginning",
      "budget": 18.03,
      "box_office": 24.55
  },
  {
      "primaryTitle": "Black Mirror: Bandersnatch",
      "budget": null,
      "box_office": null
  },
  {
      "primaryTitle": "Evil Dead Rise",
      "budget": 12.0,
      "box_office": 147.03
  },
  {
      "primaryTitle": "King Richard",
      "budget": 50.0,
      "box_office": 39.43
  },
  {
      "primaryTitle": "Killer Elite",
      "budget": 70.0,
      "box_office": 57.08
  },
  {
      "primaryTitle": "The Walk",
      "budget": 35.0,
      "box_office": 61.18
  },
  {
      "primaryTitle": "Night at the Museum: Secret of the Tomb",
      "budget": 127.0,
      "box_office": 363.2
  },
  {
      "primaryTitle": "Napoleon",
      "budget": 200.0,
      "box_office": 221.03
  },
  {
      "primaryTitle": "Dil Bechara",
      "budget": null,
      "box_office": 0.05
  },
  {
      "primaryTitle": "Savages",
      "budget": 45.0,
      "box_office": 82.97
  },
  {
      "primaryTitle": "Bad Moms",
      "budget": 20.0,
      "box_office": 183.94
  },
  {
      "primaryTitle": "What Happened to Monday",
      "budget": null,
      "box_office": 27.98
  },
  {
      "primaryTitle": "Greenland",
      "budget": 34.0,
      "box_office": 52.3
  },
  {
      "primaryTitle": "Allegiant",
      "budget": 110.0,
      "box_office": 179.25
  },
  {
      "primaryTitle": "Skyscraper",
      "budget": 125.0,
      "box_office": 304.87
  },
  {
      "primaryTitle": "J. Edgar",
      "budget": 35.0,
      "box_office": 84.92
  },
  {
      "primaryTitle": "I Origins",
      "budget": 1.0,
      "box_office": 0.48
  },
  {
      "primaryTitle": "Swiss Army Man",
      "budget": 3.0,
      "box_office": 4.94
  },
  {
      "primaryTitle": "Paddington",
      "budget": 55.0,
      "box_office": 282.46
  },
  {
      "primaryTitle": "Dirty Grandpa",
      "budget": 25.0,
      "box_office": 94.07
  },
  {
      "primaryTitle": "Wonka",
      "budget": 125.0,
      "box_office": 632.3
  },
  {
      "primaryTitle": "The Watch",
      "budget": 68.0,
      "box_office": 68.27
  },
  {
      "primaryTitle": "Carnage",
      "budget": 25.0,
      "box_office": 30.03
  },
  {
      "primaryTitle": "The Two Popes",
      "budget": 40.0,
      "box_office": 0.24
  },
  {
      "primaryTitle": "T2 Trainspotting",
      "budget": 18.0,
      "box_office": 41.68
  },
  {
      "primaryTitle": "Burnt",
      "budget": 20.0,
      "box_office": 36.61
  },
  {
      "primaryTitle": "The Holdovers",
      "budget": null,
      "box_office": 44.31
  },
  {
      "primaryTitle": "Okja",
      "budget": 50.0,
      "box_office": 2.05
  },
  {
      "primaryTitle": "Nymphomaniac: Vol. I",
      "budget": 4.7,
      "box_office": 13.55
  },
  {
      "primaryTitle": "The Raid 2",
      "budget": 4.5,
      "box_office": 6.57
  },
  {
      "primaryTitle": "Hall Pass",
      "budget": 36.0,
      "box_office": 86.16
  },
  {
      "primaryTitle": "Safety Not Guaranteed",
      "budget": 0.75,
      "box_office": 4.42
  },
  {
      "primaryTitle": "Booksmart",
      "budget": 6.0,
      "box_office": 24.96
  },
  {
      "primaryTitle": "Neighbors 2: Sorority Rising",
      "budget": 35.0,
      "box_office": 108.01
  },
  {
      "primaryTitle": "Gifted",
      "budget": 7.0,
      "box_office": 43.07
  },
  {
      "primaryTitle": "Homefront",
      "budget": 22.0,
      "box_office": 48.45
  },
  {
      "primaryTitle": "The Call",
      "budget": 13.0,
      "box_office": 68.57
  },
  {
      "primaryTitle": "Shershaah",
      "budget": null,
      "box_office": null
  },
  {
      "primaryTitle": "Parker",
      "budget": 35.0,
      "box_office": 46.92
  },
  {
      "primaryTitle": "Daddy's Home",
      "budget": 50.0,
      "box_office": 242.79
  },
  {
      "primaryTitle": "The Hunt",
      "budget": 14.0,
      "box_office": 10.55
  },
  {
      "primaryTitle": "The Best Offer",
      "budget": 13.5,
      "box_office": 20.92
  },
  {
      "primaryTitle": "If I Stay",
      "budget": 11.0,
      "box_office": 78.27
  },
  {
      "primaryTitle": "The Florida Project",
      "budget": 2.0,
      "box_office": 10.95
  },
  {
      "primaryTitle": "Society of the Snow",
      "budget": null,
      "box_office": 0.0
  },
  {
      "primaryTitle": "You Were Never Really Here",
      "budget": null,
      "box_office": 9.36
  },
  {
      "primaryTitle": "A Walk Among the Tombstones",
      "budget": 28.0,
      "box_office": 58.83
  },
  {
      "primaryTitle": "The Good Dinosaur",
      "budget": 200.0,
      "box_office": 332.21
  },
  {
      "primaryTitle": "Pacific Rim: Uprising",
      "budget": 150.0,
      "box_office": 290.93
  },
  {
      "primaryTitle": "Gerald's Game",
      "budget": null,
      "box_office": null
  },
  {
      "primaryTitle": "Bombshell",
      "budget": 32.0,
      "box_office": 61.4
  },
  {
      "primaryTitle": "Percy Jackson: Sea of Monsters",
      "budget": 90.0,
      "box_office": 199.85
  },
  {
      "primaryTitle": "The Mitchells vs. the Machines",
      "budget": 38.0,
      "box_office": null
  },
  {
      "primaryTitle": "Contraband",
      "budget": 25.0,
      "box_office": 96.26
  },
  {
      "primaryTitle": "Ghost Rider: Spirit of Vengeance",
      "budget": 57.0,
      "box_office": 132.56
  },
  {
      "primaryTitle": "Love, Simon",
      "budget": 17.0,
      "box_office": 66.72
  },
  {
      "primaryTitle": "Gods of Egypt",
      "budget": 140.0,
      "box_office": 150.68
  },
  {
      "primaryTitle": "The Giver",
      "budget": 25.0,
      "box_office": 66.98
  },
  {
      "primaryTitle": "The Commuter",
      "budget": 30.0,
      "box_office": 119.94
  },
  {
      "primaryTitle": "Out of the Furnace",
      "budget": 22.0,
      "box_office": 15.66
  },
  {
      "primaryTitle": "Final Destination 5",
      "budget": 40.0,
      "box_office": 157.89
  },
  {
      "primaryTitle": "Elemental",
      "budget": 200.0,
      "box_office": 496.44
  },
  {
      "primaryTitle": "The Little Things",
      "budget": 30.0,
      "box_office": 30.84
  },
  {
      "primaryTitle": "The Pale Blue Eye",
      "budget": 72.0,
      "box_office": null
  },
  {
      "primaryTitle": "Shazam! Fury of the Gods",
      "budget": 125.0,
      "box_office": 134.04
  },
  {
      "primaryTitle": "Downsizing",
      "budget": 68.0,
      "box_office": 55.0
  },
  {
      "primaryTitle": "Priest",
      "budget": 60.0,
      "box_office": 78.31
  },
  {
      "primaryTitle": "Soorarai Pottru",
      "budget": 150.0,
      "box_office": null
  },
  {
      "primaryTitle": "Why Him?",
      "budget": 38.0,
      "box_office": 118.1
  },
  {
      "primaryTitle": "Lightyear",
      "budget": 200.0,
      "box_office": 226.43
  },
  {
      "primaryTitle": "To All the Boys I've Loved Before",
      "budget": null,
      "box_office": null
  },
  {
      "primaryTitle": "Den of Thieves",
      "budget": 30.0,
      "box_office": 80.51
  },
  {
      "primaryTitle": "Nebraska",
      "budget": 12.0,
      "box_office": 27.68
  },
  {
      "primaryTitle": "The Foreigner",
      "budget": 35.0,
      "box_office": 145.42
  },
  {
      "primaryTitle": "The Family",
      "budget": 30.0,
      "box_office": 78.42
  },
  {
      "primaryTitle": "Silence",
      "budget": 46.0,
      "box_office": 23.83
  },
  {
      "primaryTitle": "Ride Along",
      "budget": 25.0,
      "box_office": 154.47
  },
  {
      "primaryTitle": "The Marvels",
      "budget": 220.0,
      "box_office": 206.12
  },
  {
      "primaryTitle": "Gemini Man",
      "budget": 138.0,
      "box_office": 173.47
  },
  {
      "primaryTitle": "Alice Through the Looking Glass",
      "budget": 170.0,
      "box_office": 299.82
  },
  {
      "primaryTitle": "Long Shot",
      "budget": 40.0,
      "box_office": 53.87
  },
  {
      "primaryTitle": "Vacation",
      "budget": 31.0,
      "box_office": 107.23
  },
  {
      "primaryTitle": "Cars 3",
      "budget": 175.0,
      "box_office": 383.93
  },
  {
      "primaryTitle": "Water for Elephants",
      "budget": 38.0,
      "box_office": 117.09
  },
  {
      "primaryTitle": "The Butler",
      "budget": 30.0,
      "box_office": 177.31
  },
  {
      "primaryTitle": "tick, tick... BOOM!",
      "budget": 55.0,
      "box_office": 0.11
  },
  {
      "primaryTitle": "Where the Crawdads Sing",
      "budget": 24.0,
      "box_office": 144.35
  },
  {
      "primaryTitle": "Instant Family",
      "budget": 48.0,
      "box_office": 120.99
  },
  {
      "primaryTitle": "The Huntsman: Winter's War",
      "budget": 115.0,
      "box_office": 164.99
  },
  {
      "primaryTitle": "The Ritual",
      "budget": null,
      "box_office": 1.79
  },
  {
      "primaryTitle": "The Invitation",
      "budget": null,
      "box_office": 0.35
  },
  {
      "primaryTitle": "The Unforgivable",
      "budget": null,
      "box_office": 0.01
  },
  {
      "primaryTitle": "Seeking a Friend for the End of the World",
      "budget": 10.0,
      "box_office": 11.68
  },
  {
      "primaryTitle": "Scream VI",
      "budget": 35.0,
      "box_office": 168.96
  },
  {
      "primaryTitle": "Maleficent: Mistress of Evil",
      "budget": 185.0,
      "box_office": 491.73
  },
  {
      "primaryTitle": "The Host",
      "budget": 40.0,
      "box_office": 63.37
  },
  {
      "primaryTitle": "Premium Rush",
      "budget": 35.0,
      "box_office": 31.08
  },
  {
      "primaryTitle": "Insidious: Chapter 3",
      "budget": 10.0,
      "box_office": 112.98
  },
  {
      "primaryTitle": "Fast X",
      "budget": 340.0,
      "box_office": 704.88
  },
  {
      "primaryTitle": "Geostorm",
      "budget": 120.0,
      "box_office": 221.9
  },
  {
      "primaryTitle": "Only God Forgives",
      "budget": 4.8,
      "box_office": 10.66
  },
  {
      "primaryTitle": "Sex Tape",
      "budget": 40.0,
      "box_office": 126.07
  },
  {
      "primaryTitle": "Fences",
      "budget": 24.0,
      "box_office": 64.41
  },
  {
      "primaryTitle": "Trance",
      "budget": 20.0,
      "box_office": 24.26
  },
  {
      "primaryTitle": "Bone Tomahawk",
      "budget": 1.8,
      "box_office": 0.38
  },
  {
      "primaryTitle": "Safe",
      "budget": 30.0,
      "box_office": 41.56
  },
  {
      "primaryTitle": "The Green Knight",
      "budget": 15.0,
      "box_office": 18.89
  },
  {
      "primaryTitle": "The 5th Wave",
      "budget": 38.0,
      "box_office": 109.91
  },
  {
      "primaryTitle": "Frankenweenie",
      "budget": 39.0,
      "box_office": 84.25
  },
  {
      "primaryTitle": "Pompeii",
      "budget": 100.0,
      "box_office": 117.83
  },
  {
      "primaryTitle": "The Fabelmans",
      "budget": 40.0,
      "box_office": 45.65
  },
  {
      "primaryTitle": "Safe Haven",
      "budget": 28.0,
      "box_office": 97.59
  },
  {
      "primaryTitle": "Red Riding Hood",
      "budget": 42.0,
      "box_office": 90.26
  },
  {
      "primaryTitle": "Filth",
      "budget": 5.0,
      "box_office": 8.49
  },
  {
      "primaryTitle": "Run All Night",
      "budget": 50.0,
      "box_office": 71.66
  },
  {
      "primaryTitle": "Knock at the Cabin",
      "budget": 20.0,
      "box_office": 54.76
  },
  {
      "primaryTitle": "Stoker",
      "budget": 12.0,
      "box_office": 12.08
  },
  {
      "primaryTitle": "Cloudy with a Chance of Meatballs 2",
      "budget": 78.0,
      "box_office": 274.33
  },
  {
      "primaryTitle": "Greyhound",
      "budget": 50.3,
      "box_office": null
  },
  {
      "primaryTitle": "Baahubali 2: The Conclusion",
      "budget": 2500.0,
      "box_office": 254.16
  },
  {
      "primaryTitle": "Power Rangers",
      "budget": 100.0,
      "box_office": 142.34
  },
  {
      "primaryTitle": "The Lucky One",
      "budget": 25.0,
      "box_office": 99.36
  },
  {
      "primaryTitle": "The Iron Lady",
      "budget": 13.0,
      "box_office": 115.89
  },
  {
      "primaryTitle": "The Death of Stalin",
      "budget": 13.0,
      "box_office": 24.65
  },
  {
      "primaryTitle": "Fright Night",
      "budget": 30.0,
      "box_office": 41.0
  },
  {
      "primaryTitle": "Hamilton",
      "budget": null,
      "box_office": null
  },
  {
      "primaryTitle": "The Cloverfield Paradox",
      "budget": 45.0,
      "box_office": null
  },
  {
      "primaryTitle": "Sound of Freedom",
      "budget": 14.6,
      "box_office": 250.57
  },
  {
      "primaryTitle": "Guillermo del Toro's Pinocchio",
      "budget": 35.0,
      "box_office": 0.11
  },
  {
      "primaryTitle": "The Hunger Games: The Ballad of Songbirds & Snakes",
      "budget": 100.0,
      "box_office": 337.37
  },
  {
      "primaryTitle": "Patriots Day",
      "budget": 45.0,
      "box_office": 52.19
  },
  {
      "primaryTitle": "Movie 43",
      "budget": 6.0,
      "box_office": 32.44
  },
  {
      "primaryTitle": "The Three Musketeers",
      "budget": 75.0,
      "box_office": 132.27
  },
  {
      "primaryTitle": "Journey 2: The Mysterious Island",
      "budget": 79.0,
      "box_office": 335.29
  },
  {
      "primaryTitle": "Demolition",
      "budget": 10.0,
      "box_office": 4.37
  },
  {
      "primaryTitle": "Asteroid City",
      "budget": 25.0,
      "box_office": 53.86
  },
  {
      "primaryTitle": "Get the Gringo",
      "budget": 20.0,
      "box_office": 8.83
  },
  {
      "primaryTitle": "Brahmastra Part One: Shiva",
      "budget": 4100.0,
      "box_office": 50.16
  },
  {
      "primaryTitle": "The Equalizer 3",
      "budget": 70.0,
      "box_office": 191.07
  },
  {
      "primaryTitle": "Attack the Block",
      "budget": 13.0,
      "box_office": 6.21
  },
  {
      "primaryTitle": "Home",
      "budget": 135.0,
      "box_office": 386.04
  },
  {
      "primaryTitle": "Fifty Shades Darker",
      "budget": 55.0,
      "box_office": 381.55
  },
  {
      "primaryTitle": "As Above, So Below",
      "budget": 5.0,
      "box_office": 41.9
  },
  {
      "primaryTitle": "Past Lives",
      "budget": null,
      "box_office": 38.77
  },
  {
      "primaryTitle": "The Brothers Grimsby",
      "budget": 35.0,
      "box_office": 27.98
  },
  {
      "primaryTitle": "A Haunting in Venice",
      "budget": 60.0,
      "box_office": 122.29
  },
  {
      "primaryTitle": "Inherent Vice",
      "budget": 20.0,
      "box_office": 14.81
  },
  {
      "primaryTitle": "Anatomy of a Fall",
      "budget": 6.2,
      "box_office": 35.53
  },
  {
      "primaryTitle": "Angel Has Fallen",
      "budget": 40.0,
      "box_office": 146.66
  },
  {
      "primaryTitle": "The Mountain II",
      "budget": 2.0,
      "box_office": 11.38
  },
  {
      "primaryTitle": "The Purge: Election Year",
      "budget": 10.0,
      "box_office": 118.59
  },
  {
      "primaryTitle": "The Last Witch Hunter",
      "budget": 90.0,
      "box_office": 146.94
  }
]


export default class Example extends PureComponent {
  state = {
    lowerBound: 0,
    upperBound: 10000,
    filteredData: initialData,
  };

  handleRangeChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: Number(value) }, this.filterData);
  };

  filterData = () => {
    const { lowerBound, upperBound } = this.state;
    const filteredData = initialData.filter((item) => item.budget >= lowerBound && item.budget <= upperBound);
    this.setState({ filteredData });
  };

  componentDidMount() {
    this.filterData();  // Initially filter the data based on the default state
  }
  customTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="custom-tooltip bg-black p-2">
          <p className="label">{`Title: ${data.primaryTitle}`}</p>
          <p className="intro">{`Budget: $${data.budget}M`}</p>
          <p className="desc">{`Box Office: $${data.box_office}M`}</p>
        </div>
      );
    }

    return null;
  };

  render() {
    const { lowerBound, upperBound, filteredData } = this.state;
    return (
      <div className="w-full h-full bg-gray-700 rounded flex bg-transparent justify-center items-center">
        <ResponsiveContainer width="100%" height="100%">
          <ScatterChart
            margin={{
              top: 20,
              right: 20,
              bottom: 20,
              left: 20,
            }}
          >
            <CartesianGrid />
            <XAxis type="number" dataKey="budget" name="Budget" domain={[lowerBound, upperBound]} label={{ value: 'Budget (in millions)', position: 'insideBottom', offset: -5 }}/>
            <YAxis type="number" dataKey="box_office" name="Box Office" label={{ value: 'Box Office (in millions)', angle: -90, position: 'insideLeft', dy: 80 }}/>
            <Tooltip content={this.customTooltip} cursor={{ strokeDasharray: '3 3' }} contentStyle={{ color: '#fcba03' }}/>
            <Scatter name="A school" data={filteredData} fill="#8884d8" />
          </ScatterChart>
        </ResponsiveContainer>
        <div className="justify-center w-50 h-2 m-2">
          <div className="text-black mb-2">
            <label htmlFor="lowerBound">Budget Filter:</label>
            <input type="range" className="slider-track slider-thumb" name="lowerBound" min="0" max="10000" value={lowerBound} onChange={this.handleRangeChange} />
          </div>
            <input type="range" className="slider-track slider-thumb" name="upperBound" min="0" max="10000" value={upperBound} onChange={this.handleRangeChange} />
        </div>
      </div>
    );
  }
}
