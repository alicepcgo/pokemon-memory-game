const data = {
    category: [
        { "name": "Normal", "value": "Normal" },
        { "name": "Fire", "value": "Fire" },
        { "name": "Water", "value": "Water" },
        { "name": "Electric", "value": "Electric" },
        { "name": "Grass", "value": "Grass" },
        { "name": "Fighting", "value": "Fighting" },
        { "name": "Ice", "value": "Ice" },
        { "name": "Poison", "value": "Poison" },
        { "name": "Ground", "value": "Ground" },
        { "name": "Flying", "value": "Flying" },
        { "name": "Psychic", "value": "Psychic" },
        { "name": "Bug", "value": "Bug" },
        { "name": "Rock", "value": "Rock" },
        { "name": "Ghost", "value": "Ghost" },
        { "name": "Dragon", "value": "Dragon" },
        { "name": "Dark", "value": "Dark" },
        { "name": "Steel", "value": "Steel" },
        { "name": "Fairy", "value": "Fairy" }
      ],
    number: [
        {
            value: "10"
        },
        {
            value: "20"
        },
        {
            value: "30"
        },
        {
            value: "40"
        },
        {
            value: "50"
        },
    ]
};

const pokemon = [
    {
        "name": "Bulbasaur",
        "type": [
            "Grass",
            "Poison"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/001.png"
    },
    {
        "name": "Ivysaur",
        "type": [
            "Grass",
            "Poison"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/002.png"
    },
    {
        "name": "Venusaur",
        "type": [
            "Grass",
            "Poison"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/003.png"
    },
    {
        "name": "Charmander",
        "type": [
            "Fire"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/004.png"
    },
    {
        "name": "Charmeleon",
        "type": [
            "Fire"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/005.png"
    },
    {
        "name": "Charizard",
        "type": [
            "Fire",
            "Flying"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/006.png"
    },
    {
        "name": "Squirtle",
        "type": [
            "Water"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/007.png"
    },
    {
        "name": "Wartortle",
        "type": [
            "Water"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/008.png"
    },
    {
        "name": "Blastoise",
        "type": [
            "Water"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/009.png"
    },
    {
        "name": "Caterpie",
        "type": [
            "Bug"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/010.png"
    },
    {
        "name": "Metapod",
        "type": [
            "Bug"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/011.png"
    },
    {
        "name": "Butterfree",
        "type": [
            "Bug",
            "Flying"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/012.png"
    },
    {
        "name": "Weedle",
        "type": [
            "Bug",
            "Poison"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/013.png"
    },
    {
        "name": "Kakuna",
        "type": [
            "Bug",
            "Poison"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/014.png"
    },
    {
        "name": "Beedrill",
        "type": [
            "Bug",
            "Poison"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/015.png"
    },
    {
        "name": "Pidgey",
        "type": [
            "Normal",
            "Flying"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/016.png"
    },
    {
        "name": "Pidgeotto",
        "type": [
            "Normal",
            "Flying"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/017.png"
    },
    {
        "name": "Pidgeot",
        "type": [
            "Normal",
            "Flying"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/018.png"
    },
    {
        "name": "Rattata",
        "type": [
            "Normal"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/019.png"
    },
    {
        "name": "Raticate",
        "type": [
            "Normal"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/020.png"
    },
    {
        "name": "Spearow",
        "type": [
            "Normal",
            "Flying"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/021.png"
    },
    {
        "name": "Fearow",
        "type": [
            "Normal",
            "Flying"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/022.png"
    },
    {
        "name": "Ekans",
        "type": [
            "Poison"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/023.png"
    },
    {
        "name": "Arbok",
        "type": [
            "Poison"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/024.png"
    },
    {
        "name": "Pikachu",
        "type": [
            "Electric"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/025.png"
    },
    {
        "name": "Raichu",
        "type": [
            "Electric"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/026.png"
    },
    {
        "name": "Sandshrew",
        "type": [
            "Ground"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/027.png"
    },
    {
        "name": "Sandslash",
        "type": [
            "Ground"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/028.png"
    },
    {
        "name": "Nidoran♀",
        "type": [
            "Poison"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/029.png"
    },
    {
        "name": "Nidorina",
        "type": [
            "Poison"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/030.png"
    },
    {
        "name": "Nidoqueen",
        "type": [
            "Poison",
            "Ground"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/031.png"
    },
    {
        "name": "Nidoran♂",
        "type": [
            "Poison"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/032.png"
    },
    {
        "name": "Nidorino",
        "type": [
            "Poison"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/033.png"
    },
    {
        "name": "Nidoking",
        "type": [
            "Poison",
            "Ground"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/034.png"
    },
    {
        "name": "Clefairy",
        "type": [
            "Fairy"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/035.png"
    },
    {
        "name": "Clefable",
        "type": [
            "Fairy"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/036.png"
    },
    {
        "name": "Vulpix",
        "type": [
            "Fire"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/037.png"
    },
    {
        "name": "Ninetales",
        "type": [
            "Fire"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/038.png"
    },
    {
        "name": "Jigglypuff",
        "type": [
            "Normal",
            "Fairy"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/039.png"
    },
    {
        "name": "Wigglytuff",
        "type": [
            "Normal",
            "Fairy"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/040.png"
    },
    {
        "name": "Zubat",
        "type": [
            "Poison",
            "Flying"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/041.png"
    },
    {
        "name": "Golbat",
        "type": [
            "Poison",
            "Flying"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/042.png"
    },
    {
        "name": "Oddish",
        "type": [
            "Grass",
            "Poison"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/043.png"
    },
    {
        "name": "Gloom",
        "type": [
            "Grass",
            "Poison"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/044.png"
    },
    {
        "name": "Vileplume",
        "type": [
            "Grass",
            "Poison"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/045.png"
    },
    {
        "name": "Paras",
        "type": [
            "Bug",
            "Grass"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/046.png"
    },
    {
        "name": "Parasect",
        "type": [
            "Bug",
            "Grass"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/047.png"
    },
    {
        "name": "Venonat",
        "type": [
            "Bug",
            "Poison"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/048.png"
    },
    {
        "name": "Venomoth",
        "type": [
            "Bug",
            "Poison"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/049.png"
    },
    {
        "name": "Diglett",
        "type": [
            "Ground"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/050.png"
    },
    {
        "name": "Dugtrio",
        "type": [
            "Ground"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/051.png"
    },
    {
        "name": "Meowth",
        "type": [
            "Normal"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/052.png"
    },
    {
        "name": "Persian",
        "type": [
            "Normal"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/053.png"
    },
    {
        "name": "Psyduck",
        "type": [
            "Water"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/054.png"
    },
    {
        "name": "Golduck",
        "type": [
            "Water"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/055.png"
    },
    {
        "name": "Mankey",
        "type": [
            "Fighting"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/056.png"
    },
    {
        "name": "Primeape",
        "type": [
            "Fighting"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/057.png"
    },
    {
        "name": "Growlithe",
        "type": [
            "Fire"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/058.png"
    },
    {
        "name": "Arcanine",
        "type": [
            "Fire"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/059.png"
    },
    {
        "name": "Poliwag",
        "type": [
            "Water"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/060.png"
    },
    {
        "name": "Poliwhirl",
        "type": [
            "Water"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/061.png"
    },
    {
        "name": "Poliwrath",
        "type": [
            "Water",
            "Fighting"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/062.png"
    },
    {
        "name": "Abra",
        "type": [
            "Psychic"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/063.png"
    },
    {
        "name": "Kadabra",
        "type": [
            "Psychic"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/064.png"
    },
    {
        "name": "Alakazam",
        "type": [
            "Psychic"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/065.png"
    },
    {
        "name": "Machop",
        "type": [
            "Fighting"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/066.png"
    },
    {
        "name": "Machoke",
        "type": [
            "Fighting"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/067.png"
    },
    {
        "name": "Machamp",
        "type": [
            "Fighting"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/068.png"
    },
    {
        "name": "Bellsprout",
        "type": [
            "Grass",
            "Poison"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/069.png"
    },
    {
        "name": "Weepinbell",
        "type": [
            "Grass",
            "Poison"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/070.png"
    },
    {
        "name": "Victreebel",
        "type": [
            "Grass",
            "Poison"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/071.png"
    },
    {
        "name": "Tentacool",
        "type": [
            "Water",
            "Poison"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/072.png"
    },
    {
        "name": "Tentacruel",
        "type": [
            "Water",
            "Poison"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/073.png"
    },
    {
        "name": "Geodude",
        "type": [
            "Rock",
            "Ground"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/074.png"
    },
    {
        "name": "Graveler",
        "type": [
            "Rock",
            "Ground"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/075.png"
    },
    {
        "name": "Golem",
        "type": [
            "Rock",
            "Ground"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/076.png"
    },
    {
        "name": "Ponyta",
        "type": [
            "Fire"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/077.png"
    },
    {
        "name": "Rapidash",
        "type": [
            "Fire"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/078.png"
    },
    {
        "name": "Slowpoke",
        "type": [
            "Water",
            "Psychic"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/079.png"
    },
    {
        "name": "Slowbro",
        "type": [
            "Water",
            "Psychic"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/080.png"
    },
    {
        "name": "Magnemite",
        "type": [
            "Electric",
            "Steel"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/081.png"
    },
    {
        "name": "Magneton",
        "type": [
            "Electric",
            "Steel"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/082.png"
    },
    {
        "name": "Farfetch'd",
        "type": [
            "Normal",
            "Flying"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/083.png"
    },
    {
        "name": "Doduo",
        "type": [
            "Normal",
            "Flying"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/084.png"
    },
    {
        "name": "Dodrio",
        "type": [
            "Normal",
            "Flying"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/085.png"
    },
    {
        "name": "Seel",
        "type": [
            "Water"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/086.png"
    },
    {
        "name": "Dewgong",
        "type": [
            "Water",
            "Ice"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/087.png"
    },
    {
        "name": "Grimer",
        "type": [
            "Poison"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/088.png"
    },
    {
        "name": "Muk",
        "type": [
            "Poison"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/089.png"
    },
    {
        "name": "Shellder",
        "type": [
            "Water"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/090.png"
    },
    {
        "name": "Cloyster",
        "type": [
            "Water",
            "Ice"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/091.png"
    },
    {
        "name": "Gastly",
        "type": [
            "Ghost",
            "Poison"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/092.png"
    },
    {
        "name": "Haunter",
        "type": [
            "Ghost",
            "Poison"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/093.png"
    },
    {
        "name": "Gengar",
        "type": [
            "Ghost",
            "Poison"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/094.png"
    },
    {
        "name": "Onix",
        "type": [
            "Rock",
            "Ground"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/095.png"
    },
    {
        "name": "Drowzee",
        "type": [
            "Psychic"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/096.png"
    },
    {
        "name": "Hypno",
        "type": [
            "Psychic"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/097.png"
    },
    {
        "name": "Krabby",
        "type": [
            "Water"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/098.png"
    },
    {
        "name": "Kingler",
        "type": [
            "Water"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/099.png"
    },
    {
        "name": "Voltorb",
        "type": [
            "Electric"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/100.png"
    },
    {
        "name": "Electrode",
        "type": [
            "Electric"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/101.png"
    },
    {
        "name": "Exeggcute",
        "type": [
            "Grass",
            "Psychic"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/102.png"
    },
    {
        "name": "Exeggutor",
        "type": [
            "Grass",
            "Psychic"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/103.png"
    },
    {
        "name": "Cubone",
        "type": [
            "Ground"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/104.png"
    },
    {
        "name": "Marowak",
        "type": [
            "Ground"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/105.png"
    },
    {
        "name": "Hitmonlee",
        "type": [
            "Fighting"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/106.png"
    },
    {
        "name": "Hitmonchan",
        "type": [
            "Fighting"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/107.png"
    },
    {
        "name": "Lickitung",
        "type": [
            "Normal"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/108.png"
    },
    {
        "name": "Koffing",
        "type": [
            "Poison"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/109.png"
    },
    {
        "name": "Weezing",
        "type": [
            "Poison"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/110.png"
    },
    {
        "name": "Rhyhorn",
        "type": [
            "Ground",
            "Rock"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/111.png"
    },
    {
        "name": "Rhydon",
        "type": [
            "Ground",
            "Rock"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/112.png"
    },
    {
        "name": "Chansey",
        "type": [
            "Normal"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/113.png"
    },
    {
        "name": "Tangela",
        "type": [
            "Grass"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/114.png"
    },
    {
        "name": "Kangaskhan",
        "type": [
            "Normal"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/115.png"
    },
    {
        "name": "Horsea",
        "type": [
            "Water"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/116.png"
    },
    {
        "name": "Seadra",
        "type": [
            "Water"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/117.png"
    },
    {
        "name": "Goldeen",
        "type": [
            "Water"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/118.png"
    },
    {
        "name": "Seaking",
        "type": [
            "Water"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/119.png"
    },
    {
        "name": "Staryu",
        "type": [
            "Water"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/120.png"
    },
    {
        "name": "Starmie",
        "type": [
            "Water",
            "Psychic"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/121.png"
    },
    {
        "name": "Mr. Mime",
        "type": [
            "Psychic",
            "Fairy"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/122.png"
    },
    {
        "name": "Scyther",
        "type": [
            "Bug",
            "Flying"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/123.png"
    },
    {
        "name": "Jynx",
        "type": [
            "Ice",
            "Psychic"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/124.png"
    },
    {
        "name": "Electabuzz",
        "type": [
            "Electric"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/125.png"
    },
    {
        "name": "Magmar",
        "type": [
            "Fire"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/126.png"
    },
    {
        "name": "Pinsir",
        "type": [
            "Bug"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/127.png"
    },
    {
        "name": "Tauros",
        "type": [
            "Normal"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/128.png"
    },
    {
        "name": "Magikarp",
        "type": [
            "Water"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/129.png"
    },
    {
        "name": "Gyarados",
        "type": [
            "Water",
            "Flying"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/130.png"
    },
    {
        "name": "Lapras",
        "type": [
            "Water",
            "Ice"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/131.png"
    },
    {
        "name": "Ditto",
        "type": [
            "Normal"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/132.png"
    },
    {
        "name": "Eevee",
        "type": [
            "Normal"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/133.png"
    },
    {
        "name": "Vaporeon",
        "type": [
            "Water"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/134.png"
    },
    {
        "name": "Jolteon",
        "type": [
            "Electric"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/135.png"
    },
    {
        "name": "Flareon",
        "type": [
            "Fire"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/136.png"
    },
    {
        "name": "Porygon",
        "type": [
            "Normal"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/137.png"
    },
    {
        "name": "Omanyte",
        "type": [
            "Rock",
            "Water"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/138.png"
    },
    {
        "name": "Omastar",
        "type": [
            "Rock",
            "Water"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/139.png"
    },
    {
        "name": "Kabuto",
        "type": [
            "Rock",
            "Water"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/140.png"
    },
    {
        "name": "Kabutops",
        "type": [
            "Rock",
            "Water"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/141.png"
    },
    {
        "name": "Aerodactyl",
        "type": [
            "Rock",
            "Flying"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/142.png"
    },
    {
        "name": "Snorlax",
        "type": [
            "Normal"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/143.png"
    },
    {
        "name": "Articuno",
        "type": [
            "Ice",
            "Flying"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/144.png"
    },
    {
        "name": "Zapdos",
        "type": [
            "Electric",
            "Flying"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/145.png"
    },
    {
        "name": "Moltres",
        "type": [
            "Fire",
            "Flying"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/146.png"
    },
    {
        "name": "Dratini",
        "type": [
            "Dragon"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/147.png"
    },
    {
        "name": "Dragonair",
        "type": [
            "Dragon"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/148.png"
    },
    {
        "name": "Dragonite",
        "type": [
            "Dragon",
            "Flying"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/149.png"
    },
    {
        "name": "Mewtwo",
        "type": [
            "Psychic"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/150.png"
    },
    {
        "name": "Mew",
        "type": [
            "Psychic"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/151.png"
    },
    {
        "name": "Chikorita",
        "type": [
            "Grass"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/152.png"
    },
    {
        "name": "Bayleef",
        "type": [
            "Grass"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/153.png"
    },
    {
        "name": "Meganium",
        "type": [
            "Grass"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/154.png"
    },
    {
        "name": "Cyndaquil",
        "type": [
            "Fire"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/155.png"
    },
    {
        "name": "Quilava",
        "type": [
            "Fire"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/156.png"
    },
    {
        "name": "Typhlosion",
        "type": [
            "Fire"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/157.png"
    },
    {
        "name": "Totodile",
        "type": [
            "Water"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/158.png"
    },
    {
        "name": "Croconaw",
        "type": [
            "Water"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/159.png"
    },
    {
        "name": "Feraligatr",
        "type": [
            "Water"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/160.png"
    },
    {
        "name": "Sentret",
        "type": [
            "Normal"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/161.png"
    },
    {
        "name": "Furret",
        "type": [
            "Normal"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/162.png"
    },
    {
        "name": "Hoothoot",
        "type": [
            "Normal",
            "Flying"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/163.png"
    },
    {
        "name": "Noctowl",
        "type": [
            "Normal",
            "Flying"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/164.png"
    },
    {
        "name": "Ledyba",
        "type": [
            "Bug",
            "Flying"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/165.png"
    },
    {
        "name": "Ledian",
        "type": [
            "Bug",
            "Flying"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/166.png"
    },
    {
        "name": "Spinarak",
        "type": [
            "Bug",
            "Poison"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/167.png"
    },
    {
        "name": "Ariados",
        "type": [
            "Bug",
            "Poison"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/168.png"
    },
    {
        "name": "Crobat",
        "type": [
            "Poison",
            "Flying"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/169.png"
    },
    {
        "name": "Chinchou",
        "type": [
            "Water",
            "Electric"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/170.png"
    },
    {
        "name": "Lanturn",
        "type": [
            "Water",
            "Electric"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/171.png"
    },
    {
        "name": "Pichu",
        "type": [
            "Electric"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/172.png"
    },
    {
        "name": "Cleffa",
        "type": [
            "Fairy"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/173.png"
    },
    {
        "name": "Igglybuff",
        "type": [
            "Normal",
            "Fairy"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/174.png"
    },
    {
        "name": "Togepi",
        "type": [
            "Fairy"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/175.png"
    },
    {
        "name": "Togetic",
        "type": [
            "Fairy",
            "Flying"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/176.png"
    },
    {
        "name": "Natu",
        "type": [
            "Psychic",
            "Flying"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/177.png"
    },
    {
        "name": "Xatu",
        "type": [
            "Psychic",
            "Flying"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/178.png"
    },
    {
        "name": "Mareep",
        "type": [
            "Electric"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/179.png"
    },
    {
        "name": "Flaaffy",
        "type": [
            "Electric"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/180.png"
    },
    {
        "name": "Ampharos",
        "type": [
            "Electric"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/181.png"
    },
    {
        "name": "Bellossom",
        "type": [
            "Grass"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/182.png"
    },
    {
        "name": "Marill",
        "type": [
            "Water",
            "Fairy"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/183.png"
    },
    {
        "name": "Azumarill",
        "type": [
            "Water",
            "Fairy"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/184.png"
    },
    {
        "name": "Sudowoodo",
        "type": [
            "Rock"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/185.png"
    },
    {
        "name": "Politoed",
        "type": [
            "Water"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/186.png"
    },
    {
        "name": "Hoppip",
        "type": [
            "Grass",
            "Flying"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/187.png"
    },
    {
        "name": "Skiploom",
        "type": [
            "Grass",
            "Flying"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/188.png"
    },
    {
        "name": "Jumpluff",
        "type": [
            "Grass",
            "Flying"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/189.png"
    },
    {
        "name": "Aipom",
        "type": [
            "Normal"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/190.png"
    },
    {
        "name": "Sunkern",
        "type": [
            "Grass"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/191.png"
    },
    {
        "name": "Sunflora",
        "type": [
            "Grass"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/192.png"
    },
    {
        "name": "Yanma",
        "type": [
            "Bug",
            "Flying"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/193.png"
    },
    {
        "name": "Wooper",
        "type": [
            "Water",
            "Ground"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/194.png"
    },
    {
        "name": "Quagsire",
        "type": [
            "Water",
            "Ground"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/195.png"
    },
    {
        "name": "Espeon",
        "type": [
            "Psychic"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/196.png"
    },
    {
        "name": "Umbreon",
        "type": [
            "Dark"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/197.png"
    },
    {
        "name": "Murkrow",
        "type": [
            "Dark",
            "Flying"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/198.png"
    },
    {
        "name": "Slowking",
        "type": [
            "Water",
            "Psychic"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/199.png"
    },
    {
        "name": "Misdreavus",
        "type": [
            "Ghost"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/200.png"
    },
    {
        "name": "Unown",
        "type": [
            "Psychic"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/201.png"
    },
    {
        "name": "Wobbuffet",
        "type": [
            "Psychic"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/202.png"
    },
    {
        "name": "Girafarig",
        "type": [
            "Normal",
            "Psychic"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/203.png"
    },
    {
        "name": "Pineco",
        "type": [
            "Bug"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/204.png"
    },
    {
        "name": "Forretress",
        "type": [
            "Bug",
            "Steel"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/205.png"
    },
    {
        "name": "Dunsparce",
        "type": [
            "Normal"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/206.png"
    },
    {
        "name": "Gligar",
        "type": [
            "Ground",
            "Flying"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/207.png"
    },
    {
        "name": "Steelix",
        "type": [
            "Steel",
            "Ground"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/208.png"
    },
    {
        "name": "Snubbull",
        "type": [
            "Fairy"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/209.png"
    },
    {
        "name": "Granbull",
        "type": [
            "Fairy"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/210.png"
    },
    {
        "name": "Qwilfish",
        "type": [
            "Water",
            "Poison"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/211.png"
    },
    {
        "name": "Scizor",
        "type": [
            "Bug",
            "Steel"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/212.png"
    },
    {
        "name": "Shuckle",
        "type": [
            "Bug",
            "Rock"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/213.png"
    },
    {
        "name": "Heracross",
        "type": [
            "Bug",
            "Fighting"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/214.png"
    },
    {
        "name": "Sneasel",
        "type": [
            "Dark",
            "Ice"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/215.png"
    },
    {
        "name": "Teddiursa",
        "type": [
            "Normal"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/216.png"
    },
    {
        "name": "Ursaring",
        "type": [
            "Normal"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/217.png"
    },
    {
        "name": "Slugma",
        "type": [
            "Fire"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/218.png"
    },
    {
        "name": "Magcargo",
        "type": [
            "Fire",
            "Rock"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/219.png"
    },
    {
        "name": "Swinub",
        "type": [
            "Ice",
            "Ground"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/220.png"
    },
    {
        "name": "Piloswine",
        "type": [
            "Ice",
            "Ground"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/221.png"
    },
    {
        "name": "Corsola",
        "type": [
            "Water",
            "Rock"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/222.png"
    },
    {
        "name": "Remoraid",
        "type": [
            "Water"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/223.png"
    },
    {
        "name": "Octillery",
        "type": [
            "Water"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/224.png"
    },
    {
        "name": "Delibird",
        "type": [
            "Ice",
            "Flying"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/225.png"
    },
    {
        "name": "Mantine",
        "type": [
            "Water",
            "Flying"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/226.png"
    },
    {
        "name": "Skarmory",
        "type": [
            "Steel",
            "Flying"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/227.png"
    },
    {
        "name": "Houndour",
        "type": [
            "Dark",
            "Fire"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/228.png"
    },
    {
        "name": "Houndoom",
        "type": [
            "Dark",
            "Fire"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/229.png"
    },
    {
        "name": "Kingdra",
        "type": [
            "Water",
            "Dragon"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/230.png"
    },
    {
        "name": "Phanpy",
        "type": [
            "Ground"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/231.png"
    },
    {
        "name": "Donphan",
        "type": [
            "Ground"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/232.png"
    },
    {
        "name": "Porygon2",
        "type": [
            "Normal"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/233.png"
    },
    {
        "name": "Stantler",
        "type": [
            "Normal"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/234.png"
    },
    {
        "name": "Smeargle",
        "type": [
            "Normal"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/235.png"
    },
    {
        "name": "Tyrogue",
        "type": [
            "Fighting"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/236.png"
    },
    {
        "name": "Hitmontop",
        "type": [
            "Fighting"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/237.png"
    },
    {
        "name": "Smoochum",
        "type": [
            "Ice",
            "Psychic"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/238.png"
    },
    {
        "name": "Elekid",
        "type": [
            "Electric"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/239.png"
    },
    {
        "name": "Magby",
        "type": [
            "Fire"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/240.png"
    },
    {
        "name": "Miltank",
        "type": [
            "Normal"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/241.png"
    },
    {
        "name": "Blissey",
        "type": [
            "Normal"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/242.png"
    },
    {
        "name": "Raikou",
        "type": [
            "Electric"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/243.png"
    },
    {
        "name": "Entei",
        "type": [
            "Fire"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/244.png"
    },
    {
        "name": "Suicune",
        "type": [
            "Water"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/245.png"
    },
    {
        "name": "Larvitar",
        "type": [
            "Rock",
            "Ground"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/246.png"
    },
    {
        "name": "Pupitar",
        "type": [
            "Rock",
            "Ground"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/247.png"
    },
    {
        "name": "Tyranitar",
        "type": [
            "Rock",
            "Dark"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/248.png"
    },
    {
        "name": "Lugia",
        "type": [
            "Psychic",
            "Flying"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/249.png"
    },
    {
        "name": "Ho-Oh",
        "type": [
            "Fire",
            "Flying"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/250.png"
    },
    {
        "name": "Celebi",
        "type": [
            "Psychic",
            "Grass"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/251.png"
    },
    {
        "name": "Treecko",
        "type": [
            "Grass"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/252.png"
    },
    {
        "name": "Grovyle",
        "type": [
            "Grass"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/253.png"
    },
    {
        "name": "Sceptile",
        "type": [
            "Grass"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/254.png"
    },
    {
        "name": "Torchic",
        "type": [
            "Fire"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/255.png"
    },
    {
        "name": "Combusken",
        "type": [
            "Fire",
            "Fighting"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/256.png"
    },
    {
        "name": "Blaziken",
        "type": [
            "Fire",
            "Fighting"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/257.png"
    },
    {
        "name": "Mudkip",
        "type": [
            "Water"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/258.png"
    },
    {
        "name": "Marshtomp",
        "type": [
            "Water",
            "Ground"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/259.png"
    },
    {
        "name": "Swampert",
        "type": [
            "Water",
            "Ground"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/260.png"
    },
    {
        "name": "Poochyena",
        "type": [
            "Dark"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/261.png"
    },
    {
        "name": "Mightyena",
        "type": [
            "Dark"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/262.png"
    },
    {
        "name": "Zigzagoon",
        "type": [
            "Normal"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/263.png"
    },
    {
        "name": "Linoone",
        "type": [
            "Normal"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/264.png"
    },
    {
        "name": "Wurmple",
        "type": [
            "Bug"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/265.png"
    },
    {
        "name": "Silcoon",
        "type": [
            "Bug"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/266.png"
    },
    {
        "name": "Beautifly",
        "type": [
            "Bug",
            "Flying"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/267.png"
    },
    {
        "name": "Cascoon",
        "type": [
            "Bug"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/268.png"
    },
    {
        "name": "Dustox",
        "type": [
            "Bug",
            "Poison"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/269.png"
    },
    {
        "name": "Lotad",
        "type": [
            "Water",
            "Grass"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/270.png"
    },
    {
        "name": "Lombre",
        "type": [
            "Water",
            "Grass"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/271.png"
    },
    {
        "name": "Ludicolo",
        "type": [
            "Water",
            "Grass"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/272.png"
    },
    {
        "name": "Seedot",
        "type": [
            "Grass"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/273.png"
    },
    {
        "name": "Nuzleaf",
        "type": [
            "Grass",
            "Dark"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/274.png"
    },
    {
        "name": "Shiftry",
        "type": [
            "Grass",
            "Dark"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/275.png"
    },
    {
        "name": "Taillow",
        "type": [
            "Normal",
            "Flying"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/276.png"
    },
    {
        "name": "Swellow",
        "type": [
            "Normal",
            "Flying"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/277.png"
    },
    {
        "name": "Wingull",
        "type": [
            "Water",
            "Flying"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/278.png"
    },
    {
        "name": "Pelipper",
        "type": [
            "Water",
            "Flying"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/279.png"
    },
    {
        "name": "Ralts",
        "type": [
            "Psychic",
            "Fairy"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/280.png"
    },
    {
        "name": "Kirlia",
        "type": [
            "Psychic",
            "Fairy"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/281.png"
    },
    {
        "name": "Gardevoir",
        "type": [
            "Psychic",
            "Fairy"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/282.png"
    },
    {
        "name": "Surskit",
        "type": [
            "Bug",
            "Water"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/283.png"
    },
    {
        "name": "Masquerain",
        "type": [
            "Bug",
            "Flying"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/284.png"
    },
    {
        "name": "Shroomish",
        "type": [
            "Grass"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/285.png"
    },
    {
        "name": "Breloom",
        "type": [
            "Grass",
            "Fighting"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/286.png"
    },
    {
        "name": "Slakoth",
        "type": [
            "Normal"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/287.png"
    },
    {
        "name": "Vigoroth",
        "type": [
            "Normal"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/288.png"
    },
    {
        "name": "Slaking",
        "type": [
            "Normal"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/289.png"
    },
    {
        "name": "Nincada",
        "type": [
            "Bug",
            "Ground"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/290.png"
    },
    {
        "name": "Ninjask",
        "type": [
            "Bug",
            "Flying"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/291.png"
    },
    {
        "name": "Shedinja",
        "type": [
            "Bug",
            "Ghost"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/292.png"
    },
    {
        "name": "Whismur",
        "type": [
            "Normal"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/293.png"
    },
    {
        "name": "Loudred",
        "type": [
            "Normal"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/294.png"
    },
    {
        "name": "Exploud",
        "type": [
            "Normal"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/295.png"
    },
    {
        "name": "Makuhita",
        "type": [
            "Fighting"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/296.png"
    },
    {
        "name": "Hariyama",
        "type": [
            "Fighting"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/297.png"
    },
    {
        "name": "Azurill",
        "type": [
            "Normal",
            "Fairy"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/298.png"
    },
    {
        "name": "Nosepass",
        "type": [
            "Rock"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/299.png"
    },
    {
        "name": "Skitty",
        "type": [
            "Normal"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/300.png"
    },
    {
        "name": "Delcatty",
        "type": [
            "Normal"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/301.png"
    },
    {
        "name": "Sableye",
        "type": [
            "Dark",
            "Ghost"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/302.png"
    },
    {
        "name": "Mawile",
        "type": [
            "Steel",
            "Fairy"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/303.png"
    },
    {
        "name": "Aron",
        "type": [
            "Steel",
            "Rock"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/304.png"
    },
    {
        "name": "Lairon",
        "type": [
            "Steel",
            "Rock"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/305.png"
    },
    {
        "name": "Aggron",
        "type": [
            "Steel",
            "Rock"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/306.png"
    },
    {
        "name": "Meditite",
        "type": [
            "Fighting",
            "Psychic"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/307.png"
    },
    {
        "name": "Medicham",
        "type": [
            "Fighting",
            "Psychic"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/308.png"
    },
    {
        "name": "Electrike",
        "type": [
            "Electric"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/309.png"
    },
    {
        "name": "Manectric",
        "type": [
            "Electric"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/310.png"
    },
    {
        "name": "Plusle",
        "type": [
            "Electric"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/311.png"
    },
    {
        "name": "Minun",
        "type": [
            "Electric"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/312.png"
    },
    {
        "name": "Volbeat",
        "type": [
            "Bug"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/313.png"
    },
    {
        "name": "Illumise",
        "type": [
            "Bug"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/314.png"
    },
    {
        "name": "Roselia",
        "type": [
            "Grass",
            "Poison"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/315.png"
    },
    {
        "name": "Gulpin",
        "type": [
            "Poison"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/316.png"
    },
    {
        "name": "Swalot",
        "type": [
            "Poison"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/317.png"
    },
    {
        "name": "Carvanha",
        "type": [
            "Water",
            "Dark"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/318.png"
    },
    {
        "name": "Sharpedo",
        "type": [
            "Water",
            "Dark"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/319.png"
    },
    {
        "name": "Wailmer",
        "type": [
            "Water"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/320.png"
    },
    {
        "name": "Wailord",
        "type": [
            "Water"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/321.png"
    },
    {
        "name": "Numel",
        "type": [
            "Fire",
            "Ground"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/322.png"
    },
    {
        "name": "Camerupt",
        "type": [
            "Fire",
            "Ground"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/323.png"
    },
    {
        "name": "Torkoal",
        "type": [
            "Fire"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/324.png"
    },
    {
        "name": "Spoink",
        "type": [
            "Psychic"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/325.png"
    },
    {
        "name": "Grumpig",
        "type": [
            "Psychic"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/326.png"
    },
    {
        "name": "Spinda",
        "type": [
            "Normal"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/327.png"
    },
    {
        "name": "Trapinch",
        "type": [
            "Ground"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/328.png"
    },
    {
        "name": "Vibrava",
        "type": [
            "Ground",
            "Dragon"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/329.png"
    },
    {
        "name": "Flygon",
        "type": [
            "Ground",
            "Dragon"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/330.png"
    },
    {
        "name": "Cacnea",
        "type": [
            "Grass"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/331.png"
    },
    {
        "name": "Cacturne",
        "type": [
            "Grass",
            "Dark"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/332.png"
    },
    {
        "name": "Swablu",
        "type": [
            "Normal",
            "Flying"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/333.png"
    },
    {
        "name": "Altaria",
        "type": [
            "Dragon",
            "Flying"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/334.png"
    },
    {
        "name": "Zangoose",
        "type": [
            "Normal"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/335.png"
    },
    {
        "name": "Seviper",
        "type": [
            "Poison"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/336.png"
    },
    {
        "name": "Lunatone",
        "type": [
            "Rock",
            "Psychic"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/337.png"
    },
    {
        "name": "Solrock",
        "type": [
            "Rock",
            "Psychic"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/338.png"
    },
    {
        "name": "Barboach",
        "type": [
            "Water",
            "Ground"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/339.png"
    },
    {
        "name": "Whiscash",
        "type": [
            "Water",
            "Ground"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/340.png"
    },
    {
        "name": "Corphish",
        "type": [
            "Water"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/341.png"
    },
    {
        "name": "Crawdaunt",
        "type": [
            "Water",
            "Dark"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/342.png"
    },
    {
        "name": "Baltoy",
        "type": [
            "Ground",
            "Psychic"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/343.png"
    },
    {
        "name": "Claydol",
        "type": [
            "Ground",
            "Psychic"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/344.png"
    },
    {
        "name": "Lileep",
        "type": [
            "Rock",
            "Grass"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/345.png"
    },
    {
        "name": "Cradily",
        "type": [
            "Rock",
            "Grass"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/346.png"
    },
    {
        "name": "Anorith",
        "type": [
            "Rock",
            "Bug"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/347.png"
    },
    {
        "name": "Armaldo",
        "type": [
            "Rock",
            "Bug"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/348.png"
    },
    {
        "name": "Feebas",
        "type": [
            "Water"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/349.png"
    },
    {
        "name": "Milotic",
        "type": [
            "Water"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/350.png"
    },
    {
        "name": "Castform",
        "type": [
            "Normal"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/351.png"
    },
    {
        "name": "Kecleon",
        "type": [
            "Normal"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/352.png"
    },
    {
        "name": "Shuppet",
        "type": [
            "Ghost"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/353.png"
    },
    {
        "name": "Banette",
        "type": [
            "Ghost"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/354.png"
    },
    {
        "name": "Duskull",
        "type": [
            "Ghost"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/355.png"
    },
    {
        "name": "Dusclops",
        "type": [
            "Ghost"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/356.png"
    },
    {
        "name": "Tropius",
        "type": [
            "Grass",
            "Flying"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/357.png"
    },
    {
        "name": "Chimecho",
        "type": [
            "Psychic"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/358.png"
    },
    {
        "name": "Absol",
        "type": [
            "Dark"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/359.png"
    },
    {
        "name": "Wynaut",
        "type": [
            "Psychic"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/360.png"
    },
    {
        "name": "Snorunt",
        "type": [
            "Ice"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/361.png"
    },
    {
        "name": "Glalie",
        "type": [
            "Ice"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/362.png"
    },
    {
        "name": "Spheal",
        "type": [
            "Ice",
            "Water"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/363.png"
    },
    {
        "name": "Sealeo",
        "type": [
            "Ice",
            "Water"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/364.png"
    },
    {
        "name": "Walrein",
        "type": [
            "Ice",
            "Water"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/365.png"
    },
    {
        "name": "Clamperl",
        "type": [
            "Water"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/366.png"
    },
    {
        "name": "Huntail",
        "type": [
            "Water"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/367.png"
    },
    {
        "name": "Gorebyss",
        "type": [
            "Water"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/368.png"
    },
    {
        "name": "Relicanth",
        "type": [
            "Water",
            "Rock"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/369.png"
    },
    {
        "name": "Luvdisc",
        "type": [
            "Water"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/370.png"
    },
    {
        "name": "Bagon",
        "type": [
            "Dragon"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/371.png"
    },
    {
        "name": "Shelgon",
        "type": [
            "Dragon"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/372.png"
    },
    {
        "name": "Salamence",
        "type": [
            "Dragon",
            "Flying"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/373.png"
    },
    {
        "name": "Beldum",
        "type": [
            "Steel",
            "Psychic"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/374.png"
    },
    {
        "name": "Metang",
        "type": [
            "Steel",
            "Psychic"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/375.png"
    },
    {
        "name": "Metagross",
        "type": [
            "Steel",
            "Psychic"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/376.png"
    },
    {
        "name": "Regirock",
        "type": [
            "Rock"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/377.png"
    },
    {
        "name": "Regice",
        "type": [
            "Ice"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/378.png"
    },
    {
        "name": "Registeel",
        "type": [
            "Steel"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/379.png"
    },
    {
        "name": "Latias",
        "type": [
            "Dragon",
            "Psychic"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/380.png"
    },
    {
        "name": "Latios",
        "type": [
            "Dragon",
            "Psychic"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/381.png"
    },
    {
        "name": "Kyogre",
        "type": [
            "Water"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/382.png"
    },
    {
        "name": "Groudon",
        "type": [
            "Ground"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/383.png"
    },
    {
        "name": "Rayquaza",
        "type": [
            "Dragon",
            "Flying"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/384.png"
    },
    {
        "name": "Jirachi",
        "type": [
            "Steel",
            "Psychic"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/385.png"
    },
    {
        "name": "Deoxys",
        "type": [
            "Psychic"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/386.png"
    },
    {
        "name": "Turtwig",
        "type": [
            "Grass"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/387.png"
    },
    {
        "name": "Grotle",
        "type": [
            "Grass"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/388.png"
    },
    {
        "name": "Torterra",
        "type": [
            "Grass",
            "Ground"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/389.png"
    },
    {
        "name": "Chimchar",
        "type": [
            "Fire"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/390.png"
    },
    {
        "name": "Monferno",
        "type": [
            "Fire",
            "Fighting"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/391.png"
    },
    {
        "name": "Infernape",
        "type": [
            "Fire",
            "Fighting"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/392.png"
    },
    {
        "name": "Piplup",
        "type": [
            "Water"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/393.png"
    },
    {
        "name": "Prinplup",
        "type": [
            "Water"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/394.png"
    },
    {
        "name": "Empoleon",
        "type": [
            "Water",
            "Steel"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/395.png"
    },
    {
        "name": "Starly",
        "type": [
            "Normal",
            "Flying"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/396.png"
    },
    {
        "name": "Staravia",
        "type": [
            "Normal",
            "Flying"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/397.png"
    },
    {
        "name": "Staraptor",
        "type": [
            "Normal",
            "Flying"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/398.png"
    },
    {
        "name": "Bidoof",
        "type": [
            "Normal"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/399.png"
    },
    {
        "name": "Bibarel",
        "type": [
            "Normal",
            "Water"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/400.png"
    },
    {
        "name": "Kricketot",
        "type": [
            "Bug"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/401.png"
    },
    {
        "name": "Kricketune",
        "type": [
            "Bug"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/402.png"
    },
    {
        "name": "Shinx",
        "type": [
            "Electric"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/403.png"
    },
    {
        "name": "Luxio",
        "type": [
            "Electric"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/404.png"
    },
    {
        "name": "Luxray",
        "type": [
            "Electric"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/405.png"
    },
    {
        "name": "Budew",
        "type": [
            "Grass",
            "Poison"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/406.png"
    },
    {
        "name": "Roserade",
        "type": [
            "Grass",
            "Poison"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/407.png"
    },
    {
        "name": "Cranidos",
        "type": [
            "Rock"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/408.png"
    },
    {
        "name": "Rampardos",
        "type": [
            "Rock"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/409.png"
    },
    {
        "name": "Shieldon",
        "type": [
            "Rock",
            "Steel"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/410.png"
    },
    {
        "name": "Bastiodon",
        "type": [
            "Rock",
            "Steel"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/411.png"
    },
    {
        "name": "Burmy",
        "type": [
            "Bug"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/412.png"
    },
    {
        "name": "Wormadam",
        "type": [
            "Bug",
            "Grass"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/413.png"
    },
    {
        "name": "Mothim",
        "type": [
            "Bug",
            "Flying"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/414.png"
    },
    {
        "name": "Combee",
        "type": [
            "Bug",
            "Flying"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/415.png"
    },
    {
        "name": "Vespiquen",
        "type": [
            "Bug",
            "Flying"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/416.png"
    },
    {
        "name": "Pachirisu",
        "type": [
            "Electric"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/417.png"
    },
    {
        "name": "Buizel",
        "type": [
            "Water"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/418.png"
    },
    {
        "name": "Floatzel",
        "type": [
            "Water"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/419.png"
    },
    {
        "name": "Cherubi",
        "type": [
            "Grass"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/420.png"
    },
    {
        "name": "Cherrim",
        "type": [
            "Grass"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/421.png"
    },
    {
        "name": "Shellos",
        "type": [
            "Water"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/422.png"
    },
    {
        "name": "Gastrodon",
        "type": [
            "Water",
            "Ground"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/423.png"
    },
    {
        "name": "Ambipom",
        "type": [
            "Normal"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/424.png"
    },
    {
        "name": "Drifloon",
        "type": [
            "Ghost",
            "Flying"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/425.png"
    },
    {
        "name": "Drifblim",
        "type": [
            "Ghost",
            "Flying"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/426.png"
    },
    {
        "name": "Buneary",
        "type": [
            "Normal"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/427.png"
    },
    {
        "name": "Lopunny",
        "type": [
            "Normal"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/428.png"
    },
    {
        "name": "Mismagius",
        "type": [
            "Ghost"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/429.png"
    },
    {
        "name": "Honchkrow",
        "type": [
            "Dark",
            "Flying"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/430.png"
    },
    {
        "name": "Glameow",
        "type": [
            "Normal"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/431.png"
    },
    {
        "name": "Purugly",
        "type": [
            "Normal"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/432.png"
    },
    {
        "name": "Chingling",
        "type": [
            "Psychic"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/433.png"
    },
    {
        "name": "Stunky",
        "type": [
            "Poison",
            "Dark"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/434.png"
    },
    {
        "name": "Skuntank",
        "type": [
            "Poison",
            "Dark"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/435.png"
    },
    {
        "name": "Bronzor",
        "type": [
            "Steel",
            "Psychic"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/436.png"
    },
    {
        "name": "Bronzong",
        "type": [
            "Steel",
            "Psychic"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/437.png"
    },
    {
        "name": "Bonsly",
        "type": [
            "Rock"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/438.png"
    },
    {
        "name": "Mime Jr.",
        "type": [
            "Psychic",
            "Fairy"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/439.png"
    },
    {
        "name": "Happiny",
        "type": [
            "Normal"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/440.png"
    },
    {
        "name": "Chatot",
        "type": [
            "Normal",
            "Flying"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/441.png"
    },
    {
        "name": "Spiritomb",
        "type": [
            "Ghost",
            "Dark"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/442.png"
    },
    {
        "name": "Gible",
        "type": [
            "Dragon",
            "Ground"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/443.png"
    },
    {
        "name": "Gabite",
        "type": [
            "Dragon",
            "Ground"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/444.png"
    },
    {
        "name": "Garchomp",
        "type": [
            "Dragon",
            "Ground"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/445.png"
    },
    {
        "name": "Munchlax",
        "type": [
            "Normal"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/446.png"
    },
    {
        "name": "Riolu",
        "type": [
            "Fighting"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/447.png"
    },
    {
        "name": "Lucario",
        "type": [
            "Fighting",
            "Steel"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/448.png"
    },
    {
        "name": "Hippopotas",
        "type": [
            "Ground"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/449.png"
    },
    {
        "name": "Hippowdon",
        "type": [
            "Ground"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/450.png"
    },
    {
        "name": "Skorupi",
        "type": [
            "Poison",
            "Bug"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/451.png"
    },
    {
        "name": "Drapion",
        "type": [
            "Poison",
            "Dark"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/452.png"
    },
    {
        "name": "Croagunk",
        "type": [
            "Poison",
            "Fighting"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/453.png"
    },
    {
        "name": "Toxicroak",
        "type": [
            "Poison",
            "Fighting"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/454.png"
    },
    {
        "name": "Carnivine",
        "type": [
            "Grass"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/455.png"
    },
    {
        "name": "Finneon",
        "type": [
            "Water"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/456.png"
    },
    {
        "name": "Lumineon",
        "type": [
            "Water"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/457.png"
    },
    {
        "name": "Mantyke",
        "type": [
            "Water",
            "Flying"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/458.png"
    },
    {
        "name": "Snover",
        "type": [
            "Grass",
            "Ice"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/459.png"
    },
    {
        "name": "Abomasnow",
        "type": [
            "Grass",
            "Ice"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/460.png"
    },
    {
        "name": "Weavile",
        "type": [
            "Dark",
            "Ice"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/461.png"
    },
    {
        "name": "Magnezone",
        "type": [
            "Electric",
            "Steel"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/462.png"
    },
    {
        "name": "Lickilicky",
        "type": [
            "Normal"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/463.png"
    },
    {
        "name": "Rhyperior",
        "type": [
            "Ground",
            "Rock"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/464.png"
    },
    {
        "name": "Tangrowth",
        "type": [
            "Grass"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/465.png"
    },
    {
        "name": "Electivire",
        "type": [
            "Electric"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/466.png"
    },
    {
        "name": "Magmortar",
        "type": [
            "Fire"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/467.png"
    },
    {
        "name": "Togekiss",
        "type": [
            "Fairy",
            "Flying"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/468.png"
    },
    {
        "name": "Yanmega",
        "type": [
            "Bug",
            "Flying"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/469.png"
    },
    {
        "name": "Leafeon",
        "type": [
            "Grass"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/470.png"
    },
    {
        "name": "Glaceon",
        "type": [
            "Ice"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/471.png"
    },
    {
        "name": "Gliscor",
        "type": [
            "Ground",
            "Flying"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/472.png"
    },
    {
        "name": "Mamoswine",
        "type": [
            "Ice",
            "Ground"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/473.png"
    },
    {
        "name": "Porygon-Z",
        "type": [
            "Normal"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/474.png"
    },
    {
        "name": "Gallade",
        "type": [
            "Psychic",
            "Fighting"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/475.png"
    },
    {
        "name": "Probopass",
        "type": [
            "Rock",
            "Steel"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/476.png"
    },
    {
        "name": "Dusknoir",
        "type": [
            "Ghost"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/477.png"
    },
    {
        "name": "Froslass",
        "type": [
            "Ice",
            "Ghost"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/478.png"
    },
    {
        "name": "Rotom",
        "type": [
            "Electric",
            "Ghost"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/479.png"
    },
    {
        "name": "Uxie",
        "type": [
            "Psychic"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/480.png"
    },
    {
        "name": "Mesprit",
        "type": [
            "Psychic"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/481.png"
    },
    {
        "name": "Azelf",
        "type": [
            "Psychic"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/482.png"
    },
    {
        "name": "Dialga",
        "type": [
            "Steel",
            "Dragon"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/483.png"
    },
    {
        "name": "Palkia",
        "type": [
            "Water",
            "Dragon"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/484.png"
    },
    {
        "name": "Heatran",
        "type": [
            "Fire",
            "Steel"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/485.png"
    },
    {
        "name": "Regigigas",
        "type": [
            "Normal"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/486.png"
    },
    {
        "name": "Giratina",
        "type": [
            "Ghost",
            "Dragon"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/487.png"
    },
    {
        "name": "Cresselia",
        "type": [
            "Psychic"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/488.png"
    },
    {
        "name": "Phione",
        "type": [
            "Water"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/489.png"
    },
    {
        "name": "Manaphy",
        "type": [
            "Water"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/490.png"
    },
    {
        "name": "Darkrai",
        "type": [
            "Dark"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/491.png"
    },
    {
        "name": "Shaymin",
        "type": [
            "Grass"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/492.png"
    },
    {
        "name": "Arceus",
        "type": [
            "Normal"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/493.png"
    },
    {
        "name": "Victini",
        "type": [
            "Psychic",
            "Fire"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/494.png"
    },
    {
        "name": "Snivy",
        "type": [
            "Grass"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/495.png"
    },
    {
        "name": "Servine",
        "type": [
            "Grass"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/496.png"
    },
    {
        "name": "Serperior",
        "type": [
            "Grass"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/497.png"
    },
    {
        "name": "Tepig",
        "type": [
            "Fire"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/498.png"
    },
    {
        "name": "Pignite",
        "type": [
            "Fire",
            "Fighting"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/499.png"
    },
    {
        "name": "Emboar",
        "type": [
            "Fire",
            "Fighting"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/500.png"
    },
    {
        "name": "Oshawott",
        "type": [
            "Water"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/501.png"
    },
    {
        "name": "Dewott",
        "type": [
            "Water"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/502.png"
    },
    {
        "name": "Samurott",
        "type": [
            "Water"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/503.png"
    },
    {
        "name": "Patrat",
        "type": [
            "Normal"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/504.png"
    },
    {
        "name": "Watchog",
        "type": [
            "Normal"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/505.png"
    },
    {
        "name": "Lillipup",
        "type": [
            "Normal"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/506.png"
    },
    {
        "name": "Herdier",
        "type": [
            "Normal"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/507.png"
    },
    {
        "name": "Stoutland",
        "type": [
            "Normal"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/508.png"
    },
    {
        "name": "Purrloin",
        "type": [
            "Dark"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/509.png"
    },
    {
        "name": "Liepard",
        "type": [
            "Dark"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/510.png"
    },
    {
        "name": "Pansage",
        "type": [
            "Grass"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/511.png"
    },
    {
        "name": "Simisage",
        "type": [
            "Grass"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/512.png"
    },
    {
        "name": "Pansear",
        "type": [
            "Fire"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/513.png"
    },
    {
        "name": "Simisear",
        "type": [
            "Fire"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/514.png"
    },
    {
        "name": "Panpour",
        "type": [
            "Water"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/515.png"
    },
    {
        "name": "Simipour",
        "type": [
            "Water"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/516.png"
    },
    {
        "name": "Munna",
        "type": [
            "Psychic"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/517.png"
    },
    {
        "name": "Musharna",
        "type": [
            "Psychic"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/518.png"
    },
    {
        "name": "Pidove",
        "type": [
            "Normal",
            "Flying"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/519.png"
    },
    {
        "name": "Tranquill",
        "type": [
            "Normal",
            "Flying"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/520.png"
    },
    {
        "name": "Unfezant",
        "type": [
            "Normal",
            "Flying"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/521.png"
    },
    {
        "name": "Blitzle",
        "type": [
            "Electric"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/522.png"
    },
    {
        "name": "Zebstrika",
        "type": [
            "Electric"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/523.png"
    },
    {
        "name": "Roggenrola",
        "type": [
            "Rock"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/524.png"
    },
    {
        "name": "Boldore",
        "type": [
            "Rock"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/525.png"
    },
    {
        "name": "Gigalith",
        "type": [
            "Rock"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/526.png"
    },
    {
        "name": "Woobat",
        "type": [
            "Psychic",
            "Flying"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/527.png"
    },
    {
        "name": "Swoobat",
        "type": [
            "Psychic",
            "Flying"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/528.png"
    },
    {
        "name": "Drilbur",
        "type": [
            "Ground"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/529.png"
    },
    {
        "name": "Excadrill",
        "type": [
            "Ground",
            "Steel"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/530.png"
    },
    {
        "name": "Audino",
        "type": [
            "Normal"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/531.png"
    },
    {
        "name": "Timburr",
        "type": [
            "Fighting"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/532.png"
    },
    {
        "name": "Gurdurr",
        "type": [
            "Fighting"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/533.png"
    },
    {
        "name": "Conkeldurr",
        "type": [
            "Fighting"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/534.png"
    },
    {
        "name": "Tympole",
        "type": [
            "Water"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/535.png"
    },
    {
        "name": "Palpitoad",
        "type": [
            "Water",
            "Ground"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/536.png"
    },
    {
        "name": "Seismitoad",
        "type": [
            "Water",
            "Ground"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/537.png"
    },
    {
        "name": "Throh",
        "type": [
            "Fighting"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/538.png"
    },
    {
        "name": "Sawk",
        "type": [
            "Fighting"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/539.png"
    },
    {
        "name": "Sewaddle",
        "type": [
            "Bug",
            "Grass"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/540.png"
    },
    {
        "name": "Swadloon",
        "type": [
            "Bug",
            "Grass"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/541.png"
    },
    {
        "name": "Leavanny",
        "type": [
            "Bug",
            "Grass"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/542.png"
    },
    {
        "name": "Venipede",
        "type": [
            "Bug",
            "Poison"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/543.png"
    },
    {
        "name": "Whirlipede",
        "type": [
            "Bug",
            "Poison"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/544.png"
    },
    {
        "name": "Scolipede",
        "type": [
            "Bug",
            "Poison"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/545.png"
    },
    {
        "name": "Cottonee",
        "type": [
            "Grass",
            "Fairy"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/546.png"
    },
    {
        "name": "Whimsicott",
        "type": [
            "Grass",
            "Fairy"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/547.png"
    },
    {
        "name": "Petilil",
        "type": [
            "Grass"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/548.png"
    },
    {
        "name": "Lilligant",
        "type": [
            "Grass"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/549.png"
    },
    {
        "name": "Basculin",
        "type": [
            "Water"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/550.png"
    },
    {
        "name": "Sandile",
        "type": [
            "Ground",
            "Dark"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/551.png"
    },
    {
        "name": "Krokorok",
        "type": [
            "Ground",
            "Dark"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/552.png"
    },
    {
        "name": "Krookodile",
        "type": [
            "Ground",
            "Dark"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/553.png"
    },
    {
        "name": "Darumaka",
        "type": [
            "Fire"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/554.png"
    },
    {
        "name": "Darmanitan",
        "type": [
            "Fire"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/555.png"
    },
    {
        "name": "Maractus",
        "type": [
            "Grass"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/556.png"
    },
    {
        "name": "Dwebble",
        "type": [
            "Bug",
            "Rock"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/557.png"
    },
    {
        "name": "Crustle",
        "type": [
            "Bug",
            "Rock"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/558.png"
    },
    {
        "name": "Scraggy",
        "type": [
            "Dark",
            "Fighting"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/559.png"
    },
    {
        "name": "Scrafty",
        "type": [
            "Dark",
            "Fighting"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/560.png"
    },
    {
        "name": "Sigilyph",
        "type": [
            "Psychic",
            "Flying"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/561.png"
    },
    {
        "name": "Yamask",
        "type": [
            "Ghost"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/562.png"
    },
    {
        "name": "Cofagrigus",
        "type": [
            "Ghost"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/563.png"
    },
    {
        "name": "Tirtouga",
        "type": [
            "Water",
            "Rock"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/564.png"
    },
    {
        "name": "Carracosta",
        "type": [
            "Water",
            "Rock"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/565.png"
    },
    {
        "name": "Archen",
        "type": [
            "Rock",
            "Flying"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/566.png"
    },
    {
        "name": "Archeops",
        "type": [
            "Rock",
            "Flying"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/567.png"
    },
    {
        "name": "Trubbish",
        "type": [
            "Poison"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/568.png"
    },
    {
        "name": "Garbodor",
        "type": [
            "Poison"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/569.png"
    },
    {
        "name": "Zorua",
        "type": [
            "Dark"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/570.png"
    },
    {
        "name": "Zoroark",
        "type": [
            "Dark"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/571.png"
    },
    {
        "name": "Minccino",
        "type": [
            "Normal"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/572.png"
    },
    {
        "name": "Cinccino",
        "type": [
            "Normal"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/573.png"
    },
    {
        "name": "Gothita",
        "type": [
            "Psychic"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/574.png"
    },
    {
        "name": "Gothorita",
        "type": [
            "Psychic"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/575.png"
    },
    {
        "name": "Gothitelle",
        "type": [
            "Psychic"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/576.png"
    },
    {
        "name": "Solosis",
        "type": [
            "Psychic"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/577.png"
    },
    {
        "name": "Duosion",
        "type": [
            "Psychic"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/578.png"
    },
    {
        "name": "Reuniclus",
        "type": [
            "Psychic"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/579.png"
    },
    {
        "name": "Ducklett",
        "type": [
            "Water",
            "Flying"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/580.png"
    },
    {
        "name": "Swanna",
        "type": [
            "Water",
            "Flying"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/581.png"
    },
    {
        "name": "Vanillite",
        "type": [
            "Ice"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/582.png"
    },
    {
        "name": "Vanillish",
        "type": [
            "Ice"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/583.png"
    },
    {
        "name": "Vanilluxe",
        "type": [
            "Ice"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/584.png"
    },
    {
        "name": "Deerling",
        "type": [
            "Normal",
            "Grass"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/585.png"
    },
    {
        "name": "Sawsbuck",
        "type": [
            "Normal",
            "Grass"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/586.png"
    },
    {
        "name": "Emolga",
        "type": [
            "Electric",
            "Flying"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/587.png"
    },
    {
        "name": "Karrablast",
        "type": [
            "Bug"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/588.png"
    },
    {
        "name": "Escavalier",
        "type": [
            "Bug",
            "Steel"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/589.png"
    },
    {
        "name": "Foongus",
        "type": [
            "Grass",
            "Poison"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/590.png"
    },
    {
        "name": "Amoonguss",
        "type": [
            "Grass",
            "Poison"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/591.png"
    },
    {
        "name": "Frillish",
        "type": [
            "Water",
            "Ghost"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/592.png"
    },
    {
        "name": "Jellicent",
        "type": [
            "Water",
            "Ghost"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/593.png"
    },
    {
        "name": "Alomomola",
        "type": [
            "Water"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/594.png"
    },
    {
        "name": "Joltik",
        "type": [
            "Bug",
            "Electric"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/595.png"
    },
    {
        "name": "Galvantula",
        "type": [
            "Bug",
            "Electric"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/596.png"
    },
    {
        "name": "Ferroseed",
        "type": [
            "Grass",
            "Steel"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/597.png"
    },
    {
        "name": "Ferrothorn",
        "type": [
            "Grass",
            "Steel"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/598.png"
    },
    {
        "name": "Klink",
        "type": [
            "Steel"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/599.png"
    },
    {
        "name": "Klang",
        "type": [
            "Steel"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/600.png"
    },
    {
        "name": "Klinklang",
        "type": [
            "Steel"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/601.png"
    },
    {
        "name": "Tynamo",
        "type": [
            "Electric"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/602.png"
    },
    {
        "name": "Eelektrik",
        "type": [
            "Electric"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/603.png"
    },
    {
        "name": "Eelektross",
        "type": [
            "Electric"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/604.png"
    },
    {
        "name": "Elgyem",
        "type": [
            "Psychic"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/605.png"
    },
    {
        "name": "Beheeyem",
        "type": [
            "Psychic"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/606.png"
    },
    {
        "name": "Litwick",
        "type": [
            "Ghost",
            "Fire"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/607.png"
    },
    {
        "name": "Lampent",
        "type": [
            "Ghost",
            "Fire"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/608.png"
    },
    {
        "name": "Chandelure",
        "type": [
            "Ghost",
            "Fire"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/609.png"
    },
    {
        "name": "Axew",
        "type": [
            "Dragon"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/610.png"
    },
    {
        "name": "Fraxure",
        "type": [
            "Dragon"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/611.png"
    },
    {
        "name": "Haxorus",
        "type": [
            "Dragon"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/612.png"
    },
    {
        "name": "Cubchoo",
        "type": [
            "Ice"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/613.png"
    },
    {
        "name": "Beartic",
        "type": [
            "Ice"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/614.png"
    },
    {
        "name": "Cryogonal",
        "type": [
            "Ice"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/615.png"
    },
    {
        "name": "Shelmet",
        "type": [
            "Bug"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/616.png"
    },
    {
        "name": "Accelgor",
        "type": [
            "Bug"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/617.png"
    },
    {
        "name": "Stunfisk",
        "type": [
            "Ground",
            "Electric"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/618.png"
    },
    {
        "name": "Mienfoo",
        "type": [
            "Fighting"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/619.png"
    },
    {
        "name": "Mienshao",
        "type": [
            "Fighting"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/620.png"
    },
    {
        "name": "Druddigon",
        "type": [
            "Dragon"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/621.png"
    },
    {
        "name": "Golett",
        "type": [
            "Ground",
            "Ghost"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/622.png"
    },
    {
        "name": "Golurk",
        "type": [
            "Ground",
            "Ghost"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/623.png"
    },
    {
        "name": "Pawniard",
        "type": [
            "Dark",
            "Steel"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/624.png"
    },
    {
        "name": "Bisharp",
        "type": [
            "Dark",
            "Steel"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/625.png"
    },
    {
        "name": "Bouffalant",
        "type": [
            "Normal"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/626.png"
    },
    {
        "name": "Rufflet",
        "type": [
            "Normal",
            "Flying"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/627.png"
    },
    {
        "name": "Braviary",
        "type": [
            "Normal",
            "Flying"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/628.png"
    },
    {
        "name": "Vullaby",
        "type": [
            "Dark",
            "Flying"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/629.png"
    },
    {
        "name": "Mandibuzz",
        "type": [
            "Dark",
            "Flying"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/630.png"
    },
    {
        "name": "Heatmor",
        "type": [
            "Fire"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/631.png"
    },
    {
        "name": "Durant",
        "type": [
            "Bug",
            "Steel"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/632.png"
    },
    {
        "name": "Deino",
        "type": [
            "Dark",
            "Dragon"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/633.png"
    },
    {
        "name": "Zweilous",
        "type": [
            "Dark",
            "Dragon"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/634.png"
    },
    {
        "name": "Hydreigon",
        "type": [
            "Dark",
            "Dragon"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/635.png"
    },
    {
        "name": "Larvesta",
        "type": [
            "Bug",
            "Fire"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/636.png"
    },
    {
        "name": "Volcarona",
        "type": [
            "Bug",
            "Fire"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/637.png"
    },
    {
        "name": "Cobalion",
        "type": [
            "Steel",
            "Fighting"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/638.png"
    },
    {
        "name": "Terrakion",
        "type": [
            "Rock",
            "Fighting"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/639.png"
    },
    {
        "name": "Virizion",
        "type": [
            "Grass",
            "Fighting"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/640.png"
    },
    {
        "name": "Tornadus",
        "type": [
            "Flying"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/641.png"
    },
    {
        "name": "Thundurus",
        "type": [
            "Electric",
            "Flying"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/642.png"
    },
    {
        "name": "Reshiram",
        "type": [
            "Dragon",
            "Fire"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/643.png"
    },
    {
        "name": "Zekrom",
        "type": [
            "Dragon",
            "Electric"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/644.png"
    },
    {
        "name": "Landorus",
        "type": [
            "Ground",
            "Flying"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/645.png"
    },
    {
        "name": "Kyurem",
        "type": [
            "Dragon",
            "Ice"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/646.png"
    },
    {
        "name": "Keldeo",
        "type": [
            "Water",
            "Fighting"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/647.png"
    },
    {
        "name": "Meloetta",
        "type": [
            "Normal",
            "Psychic"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/648.png"
    },
    {
        "name": "Genesect",
        "type": [
            "Bug",
            "Steel"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/649.png"
    },
    {
        "name": "Chespin",
        "type": [
            "Grass"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/650.png"
    },
    {
        "name": "Quilladin",
        "type": [
            "Grass"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/651.png"
    },
    {
        "name": "Chesnaught",
        "type": [
            "Grass",
            "Fighting"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/652.png"
    },
    {
        "name": "Fennekin",
        "type": [
            "Fire"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/653.png"
    },
    {
        "name": "Braixen",
        "type": [
            "Fire"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/654.png"
    },
    {
        "name": "Delphox",
        "type": [
            "Fire",
            "Psychic"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/655.png"
    },
    {
        "name": "Froakie",
        "type": [
            "Water"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/656.png"
    },
    {
        "name": "Frogadier",
        "type": [
            "Water"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/657.png"
    },
    {
        "name": "Greninja",
        "type": [
            "Water",
            "Dark"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/658.png"
    },
    {
        "name": "Bunnelby",
        "type": [
            "Normal"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/659.png"
    },
    {
        "name": "Diggersby",
        "type": [
            "Normal",
            "Ground"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/660.png"
    },
    {
        "name": "Fletchling",
        "type": [
            "Normal",
            "Flying"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/661.png"
    },
    {
        "name": "Fletchinder",
        "type": [
            "Fire",
            "Flying"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/662.png"
    },
    {
        "name": "Talonflame",
        "type": [
            "Fire",
            "Flying"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/663.png"
    },
    {
        "name": "Scatterbug",
        "type": [
            "Bug"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/664.png"
    },
    {
        "name": "Spewpa",
        "type": [
            "Bug"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/665.png"
    },
    {
        "name": "Vivillon",
        "type": [
            "Bug",
            "Flying"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/666.png"
    },
    {
        "name": "Litleo",
        "type": [
            "Fire",
            "Normal"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/667.png"
    },
    {
        "name": "Pyroar",
        "type": [
            "Fire",
            "Normal"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/668.png"
    },
    {
        "name": "Flabébé",
        "type": [
            "Fairy"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/669.png"
    },
    {
        "name": "Floette",
        "type": [
            "Fairy"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/670.png"
    },
    {
        "name": "Florges",
        "type": [
            "Fairy"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/671.png"
    },
    {
        "name": "Skiddo",
        "type": [
            "Grass"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/672.png"
    },
    {
        "name": "Gogoat",
        "type": [
            "Grass"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/673.png"
    },
    {
        "name": "Pancham",
        "type": [
            "Fighting"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/674.png"
    },
    {
        "name": "Pangoro",
        "type": [
            "Fighting",
            "Dark"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/675.png"
    },
    {
        "name": "Furfrou",
        "type": [
            "Normal"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/676.png"
    },
    {
        "name": "Espurr",
        "type": [
            "Psychic"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/677.png"
    },
    {
        "name": "Meowstic",
        "type": [
            "Psychic"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/678.png"
    },
    {
        "name": "Honedge",
        "type": [
            "Steel",
            "Ghost"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/679.png"
    },
    {
        "name": "Doublade",
        "type": [
            "Steel",
            "Ghost"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/680.png"
    },
    {
        "name": "Aegislash",
        "type": [
            "Steel",
            "Ghost"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/681.png"
    },
    {
        "name": "Spritzee",
        "type": [
            "Fairy"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/682.png"
    },
    {
        "name": "Aromatisse",
        "type": [
            "Fairy"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/683.png"
    },
    {
        "name": "Swirlix",
        "type": [
            "Fairy"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/684.png"
    },
    {
        "name": "Slurpuff",
        "type": [
            "Fairy"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/685.png"
    },
    {
        "name": "Inkay",
        "type": [
            "Dark",
            "Psychic"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/686.png"
    },
    {
        "name": "Malamar",
        "type": [
            "Dark",
            "Psychic"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/687.png"
    },
    {
        "name": "Binacle",
        "type": [
            "Rock",
            "Water"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/688.png"
    },
    {
        "name": "Barbaracle",
        "type": [
            "Rock",
            "Water"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/689.png"
    },
    {
        "name": "Skrelp",
        "type": [
            "Poison",
            "Water"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/690.png"
    },
    {
        "name": "Dragalge",
        "type": [
            "Poison",
            "Dragon"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/691.png"
    },
    {
        "name": "Clauncher",
        "type": [
            "Water"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/692.png"
    },
    {
        "name": "Clawitzer",
        "type": [
            "Water"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/693.png"
    },
    {
        "name": "Helioptile",
        "type": [
            "Electric",
            "Normal"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/694.png"
    },
    {
        "name": "Heliolisk",
        "type": [
            "Electric",
            "Normal"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/695.png"
    },
    {
        "name": "Tyrunt",
        "type": [
            "Rock",
            "Dragon"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/696.png"
    },
    {
        "name": "Tyrantrum",
        "type": [
            "Rock",
            "Dragon"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/697.png"
    },
    {
        "name": "Amaura",
        "type": [
            "Rock",
            "Ice"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/698.png"
    },
    {
        "name": "Aurorus",
        "type": [
            "Rock",
            "Ice"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/699.png"
    },
    {
        "name": "Sylveon",
        "type": [
            "Fairy"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/700.png"
    },
    {
        "name": "Hawlucha",
        "type": [
            "Fighting",
            "Flying"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/701.png"
    },
    {
        "name": "Dedenne",
        "type": [
            "Electric",
            "Fairy"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/702.png"
    },
    {
        "name": "Carbink",
        "type": [
            "Rock",
            "Fairy"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/703.png"
    },
    {
        "name": "Goomy",
        "type": [
            "Dragon"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/704.png"
    },
    {
        "name": "Sliggoo",
        "type": [
            "Dragon"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/705.png"
    },
    {
        "name": "Goodra",
        "type": [
            "Dragon"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/706.png"
    },
    {
        "name": "Klefki",
        "type": [
            "Steel",
            "Fairy"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/707.png"
    },
    {
        "name": "Phantump",
        "type": [
            "Ghost",
            "Grass"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/708.png"
    },
    {
        "name": "Trevenant",
        "type": [
            "Ghost",
            "Grass"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/709.png"
    },
    {
        "name": "Pumpkaboo",
        "type": [
            "Ghost",
            "Grass"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/710.png"
    },
    {
        "name": "Gourgeist",
        "type": [
            "Ghost",
            "Grass"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/711.png"
    },
    {
        "name": "Bergmite",
        "type": [
            "Ice"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/712.png"
    },
    {
        "name": "Avalugg",
        "type": [
            "Ice"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/713.png"
    },
    {
        "name": "Noibat",
        "type": [
            "Flying",
            "Dragon"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/714.png"
    },
    {
        "name": "Noivern",
        "type": [
            "Flying",
            "Dragon"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/715.png"
    },
    {
        "name": "Xerneas",
        "type": [
            "Fairy"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/716.png"
    },
    {
        "name": "Yveltal",
        "type": [
            "Dark",
            "Flying"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/717.png"
    },
    {
        "name": "Zygarde",
        "type": [
            "Dragon",
            "Ground"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/718.png"
    },
    {
        "name": "Diancie",
        "type": [
            "Rock",
            "Fairy"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/719.png"
    },
    {
        "name": "Hoopa",
        "type": [
            "Psychic",
            "Ghost"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/720.png"
    },
    {
        "name": "Volcanion",
        "type": [
            "Fire",
            "Water"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/721.png"
    },
    {
        "name": "Rowlet",
        "type": [
            "Grass",
            "Flying"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/722.png"
    },
    {
        "name": "Dartrix",
        "type": [
            "Grass",
            "Flying"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/723.png"
    },
    {
        "name": "Decidueye",
        "type": [
            "Grass",
            "Ghost"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/724.png"
    },
    {
        "name": "Litten",
        "type": [
            "Fire"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/725.png"
    },
    {
        "name": "Torracat",
        "type": [
            "Fire"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/726.png"
    },
    {
        "name": "Incineroar",
        "type": [
            "Fire",
            "Dark"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/727.png"
    },
    {
        "name": "Popplio",
        "type": [
            "Water"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/728.png"
    },
    {
        "name": "Brionne",
        "type": [
            "Water"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/729.png"
    },
    {
        "name": "Primarina",
        "type": [
            "Water",
            "Fairy"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/730.png"
    },
    {
        "name": "Pikipek",
        "type": [
            "Normal",
            "Flying"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/731.png"
    },
    {
        "name": "Trumbeak",
        "type": [
            "Normal",
            "Flying"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/732.png"
    },
    {
        "name": "Toucannon",
        "type": [
            "Normal",
            "Flying"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/733.png"
    },
    {
        "name": "Yungoos",
        "type": [
            "Normal"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/734.png"
    },
    {
        "name": "Gumshoos",
        "type": [
            "Normal"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/735.png"
    },
    {
        "name": "Grubbin",
        "type": [
            "Bug"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/736.png"
    },
    {
        "name": "Charjabug",
        "type": [
            "Bug",
            "Electric"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/737.png"
    },
    {
        "name": "Vikavolt",
        "type": [
            "Bug",
            "Electric"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/738.png"
    },
    {
        "name": "Crabrawler",
        "type": [
            "Fighting"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/739.png"
    },
    {
        "name": "Crabominable",
        "type": [
            "Fighting",
            "Ice"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/740.png"
    },
    {
        "name": "Oricorio",
        "type": [
            "Fire",
            "Flying"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/741.png"
    },
    {
        "name": "Cutiefly",
        "type": [
            "Bug",
            "Fairy"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/742.png"
    },
    {
        "name": "Ribombee",
        "type": [
            "Bug",
            "Fairy"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/743.png"
    },
    {
        "name": "Rockruff",
        "type": [
            "Rock"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/744.png"
    },
    {
        "name": "Lycanroc",
        "type": [
            "Rock"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/745.png"
    },
    {
        "name": "Wishiwashi",
        "type": [
            "Water"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/746.png"
    },
    {
        "name": "Mareanie",
        "type": [
            "Poison",
            "Water"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/747.png"
    },
    {
        "name": "Toxapex",
        "type": [
            "Poison",
            "Water"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/748.png"
    },
    {
        "name": "Mudbray",
        "type": [
            "Ground"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/749.png"
    },
    {
        "name": "Mudsdale",
        "type": [
            "Ground"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/750.png"
    },
    {
        "name": "Dewpider",
        "type": [
            "Water",
            "Bug"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/751.png"
    },
    {
        "name": "Araquanid",
        "type": [
            "Water",
            "Bug"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/752.png"
    },
    {
        "name": "Fomantis",
        "type": [
            "Grass"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/753.png"
    },
    {
        "name": "Lurantis",
        "type": [
            "Grass"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/754.png"
    },
    {
        "name": "Morelull",
        "type": [
            "Grass",
            "Fairy"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/755.png"
    },
    {
        "name": "Shiinotic",
        "type": [
            "Grass",
            "Fairy"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/756.png"
    },
    {
        "name": "Salandit",
        "type": [
            "Poison",
            "Fire"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/757.png"
    },
    {
        "name": "Salazzle",
        "type": [
            "Poison",
            "Fire"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/758.png"
    },
    {
        "name": "Stufful",
        "type": [
            "Normal",
            "Fighting"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/759.png"
    },
    {
        "name": "Bewear",
        "type": [
            "Normal",
            "Fighting"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/760.png"
    },
    {
        "name": "Bounsweet",
        "type": [
            "Grass"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/761.png"
    },
    {
        "name": "Steenee",
        "type": [
            "Grass"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/762.png"
    },
    {
        "name": "Tsareena",
        "type": [
            "Grass"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/763.png"
    },
    {
        "name": "Comfey",
        "type": [
            "Fairy"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/764.png"
    },
    {
        "name": "Oranguru",
        "type": [
            "Normal",
            "Psychic"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/765.png"
    },
    {
        "name": "Passimian",
        "type": [
            "Fighting"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/766.png"
    },
    {
        "name": "Wimpod",
        "type": [
            "Bug",
            "Water"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/767.png"
    },
    {
        "name": "Golisopod",
        "type": [
            "Bug",
            "Water"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/768.png"
    },
    {
        "name": "Sandygast",
        "type": [
            "Ghost",
            "Ground"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/769.png"
    },
    {
        "name": "Palossand",
        "type": [
            "Ghost",
            "Ground"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/770.png"
    },
    {
        "name": "Pyukumuku",
        "type": [
            "Water"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/771.png"
    },
    {
        "name": "Type: Null",
        "type": [
            "Normal"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/772.png"
    },
    {
        "name": "Silvally",
        "type": [
            "Normal"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/773.png"
    },
    {
        "name": "Minior",
        "type": [
            "Rock",
            "Flying"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/774.png"
    },
    {
        "name": "Komala",
        "type": [
            "Normal"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/775.png"
    },
    {
        "name": "Turtonator",
        "type": [
            "Fire",
            "Dragon"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/776.png"
    },
    {
        "name": "Togedemaru",
        "type": [
            "Electric",
            "Steel"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/777.png"
    },
    {
        "name": "Mimikyu",
        "type": [
            "Ghost",
            "Fairy"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/778.png"
    },
    {
        "name": "Bruxish",
        "type": [
            "Water",
            "Psychic"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/779.png"
    },
    {
        "name": "Drampa",
        "type": [
            "Normal",
            "Dragon"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/780.png"
    },
    {
        "name": "Dhelmise",
        "type": [
            "Ghost",
            "Grass"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/781.png"
    },
    {
        "name": "Jangmo-o",
        "type": [
            "Dragon"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/782.png"
    },
    {
        "name": "Hakamo-o",
        "type": [
            "Dragon",
            "Fighting"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/783.png"
    },
    {
        "name": "Kommo-o",
        "type": [
            "Dragon",
            "Fighting"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/784.png"
    },
    {
        "name": "Tapu Koko",
        "type": [
            "Electric",
            "Fairy"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/785.png"
    },
    {
        "name": "Tapu Lele",
        "type": [
            "Psychic",
            "Fairy"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/786.png"
    },
    {
        "name": "Tapu Bulu",
        "type": [
            "Grass",
            "Fairy"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/787.png"
    },
    {
        "name": "Tapu Fini",
        "type": [
            "Water",
            "Fairy"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/788.png"
    },
    {
        "name": "Cosmog",
        "type": [
            "Psychic"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/789.png"
    },
    {
        "name": "Cosmoem",
        "type": [
            "Psychic"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/790.png"
    },
    {
        "name": "Solgaleo",
        "type": [
            "Psychic",
            "Steel"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/791.png"
    },
    {
        "name": "Lunala",
        "type": [
            "Psychic",
            "Ghost"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/792.png"
    },
    {
        "name": "Nihilego",
        "type": [
            "Rock",
            "Poison"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/793.png"
    },
    {
        "name": "Buzzwole",
        "type": [
            "Bug",
            "Fighting"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/794.png"
    },
    {
        "name": "Pheromosa",
        "type": [
            "Bug",
            "Fighting"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/795.png"
    },
    {
        "name": "Xurkitree",
        "type": [
            "Electric"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/796.png"
    },
    {
        "name": "Celesteela",
        "type": [
            "Steel",
            "Flying"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/797.png"
    },
    {
        "name": "Kartana",
        "type": [
            "Grass",
            "Steel"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/798.png"
    },
    {
        "name": "Guzzlord",
        "type": [
            "Dark",
            "Dragon"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/799.png"
    },
    {
        "name": "Necrozma",
        "type": [
            "Psychic"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/800.png"
    },
    {
        "name": "Magearna",
        "type": [
            "Steel",
            "Fairy"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/801.png"
    },
    {
        "name": "Marshadow",
        "type": [
            "Fighting",
            "Ghost"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/802.png"
    },
    {
        "name": "Poipole",
        "type": [
            "Poison"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/803.png"
    },
    {
        "name": "Naganadel",
        "type": [
            "Poison",
            "Dragon"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/804.png"
    },
    {
        "name": "Stakataka",
        "type": [
            "Rock",
            "Steel"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/805.png"
    },
    {
        "name": "Blacephalon",
        "type": [
            "Fire",
            "Ghost"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/806.png"
    },
    {
        "name": "Zeraora",
        "type": [
            "Electric"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/807.png"
    },
    {
        "name": "Meltan",
        "type": [
            "Steel"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/808.png"
    },
    {
        "name": "Melmetal",
        "type": [
            "Steel"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/809.png"
    },
    {
        "name": "Grookey",
        "type": [
            "Grass"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/810.png"
    },
    {
        "name": "Thwackey",
        "type": [
            "Grass"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/811.png"
    },
    {
        "name": "Rillaboom",
        "type": [
            "Grass"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/812.png"
    },
    {
        "name": "Scorbunny",
        "type": [
            "Fire"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/813.png"
    },
    {
        "name": "Raboot",
        "type": [
            "Fire"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/814.png"
    },
    {
        "name": "Cinderace",
        "type": [
            "Fire"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/815.png"
    },
    {
        "name": "Sobble",
        "type": [
            "Water"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/816.png"
    },
    {
        "name": "Drizzile",
        "type": [
            "Water"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/817.png"
    },
    {
        "name": "Inteleon",
        "type": [
            "Water"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/818.png"
    },
    {
        "name": "Skwovet",
        "type": [
            "Normal"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/819.png"
    },
    {
        "name": "Greedent",
        "type": [
            "Normal"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/820.png"
    },
    {
        "name": "Rookidee",
        "type": [
            "Flying"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/821.png"
    },
    {
        "name": "Corvisquire",
        "type": [
            "Flying"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/822.png"
    },
    {
        "name": "Corviknight",
        "type": [
            "Flying",
            "Steel"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/823.png"
    },
    {
        "name": "Blipbug",
        "type": [
            "Bug"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/824.png"
    },
    {
        "name": "Dottler",
        "type": [
            "Bug",
            "Psychic"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/825.png"
    },
    {
        "name": "Orbeetle",
        "type": [
            "Bug",
            "Psychic"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/826.png"
    },
    {
        "name": "Nickit",
        "type": [
            "Dark"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/827.png"
    },
    {
        "name": "Thievul",
        "type": [
            "Dark"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/828.png"
    },
    {
        "name": "Gossifleur",
        "type": [
            "Grass"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/829.png"
    },
    {
        "name": "Eldegoss",
        "type": [
            "Grass"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/830.png"
    },
    {
        "name": "Wooloo",
        "type": [
            "Normal"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/831.png"
    },
    {
        "name": "Dubwool",
        "type": [
            "Normal"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/832.png"
    },
    {
        "name": "Chewtle",
        "type": [
            "Water"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/833.png"
    },
    {
        "name": "Drednaw",
        "type": [
            "Water",
            "Rock"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/834.png"
    },
    {
        "name": "Yamper",
        "type": [
            "Electric"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/835.png"
    },
    {
        "name": "Boltund",
        "type": [
            "Electric"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/836.png"
    },
    {
        "name": "Rolycoly",
        "type": [
            "Rock"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/837.png"
    },
    {
        "name": "Carkol",
        "type": [
            "Rock",
            "Fire"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/838.png"
    },
    {
        "name": "Coalossal",
        "type": [
            "Rock",
            "Fire"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/839.png"
    },
    {
        "name": "Applin",
        "type": [
            "Grass",
            "Dragon"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/840.png"
    },
    {
        "name": "Flapple",
        "type": [
            "Grass",
            "Dragon"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/841.png"
    },
    {
        "name": "Appletun",
        "type": [
            "Grass",
            "Dragon"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/842.png"
    },
    {
        "name": "Silicobra",
        "type": [
            "Ground"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/843.png"
    },
    {
        "name": "Sandaconda",
        "type": [
            "Ground"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/844.png"
    },
    {
        "name": "Cramorant",
        "type": [
            "Flying",
            "Water"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/845.png"
    },
    {
        "name": "Arrokuda",
        "type": [
            "Water"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/846.png"
    },
    {
        "name": "Barraskewda",
        "type": [
            "Water"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/847.png"
    },
    {
        "name": "Toxel",
        "type": [
            "Electric",
            "Poison"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/848.png"
    },
    {
        "name": "Toxtricity",
        "type": [
            "Electric",
            "Poison"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/849.png"
    },
    {
        "name": "Sizzlipede",
        "type": [
            "Fire",
            "Bug"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/850.png"
    },
    {
        "name": "Centiskorch",
        "type": [
            "Fire",
            "Bug"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/851.png"
    },
    {
        "name": "Clobbopus",
        "type": [
            "Fighting"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/852.png"
    },
    {
        "name": "Grapploct",
        "type": [
            "Fighting"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/853.png"
    },
    {
        "name": "Sinistea",
        "type": [
            "Ghost"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/854.png"
    },
    {
        "name": "Polteageist",
        "type": [
            "Ghost"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/855.png"
    },
    {
        "name": "Hatenna",
        "type": [
            "Psychic"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/856.png"
    },
    {
        "name": "Hattrem",
        "type": [
            "Psychic"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/857.png"
    },
    {
        "name": "Hatterene",
        "type": [
            "Psychic",
            "Fairy"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/858.png"
    },
    {
        "name": "Impidimp",
        "type": [
            "Dark",
            "Fairy"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/859.png"
    },
    {
        "name": "Morgrem",
        "type": [
            "Dark",
            "Fairy"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/860.png"
    },
    {
        "name": "Grimmsnarl",
        "type": [
            "Dark",
            "Fairy"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/861.png"
    },
    {
        "name": "Obstagoon",
        "type": [
            "Dark",
            "Normal"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/862.png"
    },
    {
        "name": "Perrserker",
        "type": [
            "Steel"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/863.png"
    },
    {
        "name": "Cursola",
        "type": [
            "Ghost"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/864.png"
    },
    {
        "name": "Sirfetch'd",
        "type": [
            "Fighting"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/865.png"
    },
    {
        "name": "Mr. Rime",
        "type": [
            "Ice",
            "Psychic"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/866.png"
    },
    {
        "name": "Runerigus",
        "type": [
            "Ground",
            "Ghost"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/867.png"
    },
    {
        "name": "Milcery",
        "type": [
            "Fairy"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/868.png"
    },
    {
        "name": "Alcremie",
        "type": [
            "Fairy"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/869.png"
    },
    {
        "name": "Falinks",
        "type": [
            "Fighting"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/870.png"
    },
    {
        "name": "Pincurchin",
        "type": [
            "Electric"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/871.png"
    },
    {
        "name": "Snom",
        "type": [
            "Ice",
            "Bug"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/872.png"
    },
    {
        "name": "Frosmoth",
        "type": [
            "Ice",
            "Bug"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/873.png"
    },
    {
        "name": "Stonjourner",
        "type": [
            "Rock"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/874.png"
    },
    {
        "name": "Eiscue",
        "type": [
            "Ice"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/875.png"
    },
    {
        "name": "Indeedee",
        "type": [
            "Psychic",
            "Normal"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/876.png"
    },
    {
        "name": "Morpeko",
        "type": [
            "Electric",
            "Dark"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/877.png"
    },
    {
        "name": "Cufant",
        "type": [
            "Steel"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/878.png"
    },
    {
        "name": "Copperajah",
        "type": [
            "Steel"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/879.png"
    },
    {
        "name": "Dracozolt",
        "type": [
            "Electric",
            "Dragon"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/880.png"
    },
    {
        "name": "Arctozolt",
        "type": [
            "Electric",
            "Ice"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/881.png"
    },
    {
        "name": "Dracovish",
        "type": [
            "Water",
            "Dragon"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/882.png"
    },
    {
        "name": "Arctovish",
        "type": [
            "Water",
            "Ice"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/883.png"
    },
    {
        "name": "Duraludon",
        "type": [
            "Steel",
            "Dragon"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/884.png"
    },
    {
        "name": "Dreepy",
        "type": [
            "Dragon",
            "Ghost"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/885.png"
    },
    {
        "name": "Drakloak",
        "type": [
            "Dragon",
            "Ghost"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/886.png"
    },
    {
        "name": "Dragapult",
        "type": [
            "Dragon",
            "Ghost"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/887.png"
    },
    {
        "name": "Zacian",
        "type": [
            "Fairy"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/888.png"
    },
    {
        "name": "Zamazenta",
        "type": [
            "Fighting"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/889.png"
    },
    {
        "name": "Eternatus",
        "type": [
            "Poison",
            "Dragon"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/890.png"
    },
    {
        "name": "Kubfu",
        "type": [
            "Fighting"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/891.png"
    },
    {
        "name": "Urshifu",
        "type": [
            "Fighting",
            "Dark"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/892.png"
    },
    {
        "name": "Zarude",
        "type": [
            "Dark",
            "Grass"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/893.png"
    },
    {
        "name": "Regieleki",
        "type": [
            "Electric"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/894.png"
    },
    {
        "name": "Regidrago",
        "type": [
            "Dragon"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/895.png"
    },
    {
        "name": "Glastrier",
        "type": [
            "Ice"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/896.png"
    },
    {
        "name": "Spectrier",
        "type": [
            "Ghost"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/897.png"
    },
    {
        "name": "Calyrex",
        "type": [
            "Psychic",
            "Grass"
        ],
        "img": "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/sprites/898.png"
    }
]

export { data, pokemon, pokemonio }