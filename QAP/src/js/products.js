/**
 * products.js
 *
 * The store's products are defined as an Array of product Objects.
 * Each product Object includes the following properties:
 *
 *  - id: String, a unique product identifier (e.g., "P1", "P2")
 *  - name: String, a short name for the product (e.g., "Gingerbread Cookie")
 *  - description: String, a description of the product
 *  - price: Number, the unit price of the item in whole cents (e.g., 100 = $1.00, 5379 = $53.79)
 *  - discontinued: Boolean, whether or not the product has been discontinued
 *  - categories: Array, the category id or ids to which this product belongs (e.g., ["c1"] or ["c1", "c2"])
 */

window.products = [
    /*
      {
        id: "P1",
        name: "Name 1",
        description: "Description 1...",
        price: 199,
        discontinued: false,
        categories: ["c1"]
      },
    */
   {
    id: "AP1",
    name: "Call of Duty: Modern Warfare",
    description: "Engage in high-octane military combat as you join a team of elite soldiers in heart-pounding missions across the globe. Experience intense gunfights, explosive set-pieces, and a gripping storyline that keeps you on the edge of your seat.",
    price: 7999,
    discontinued: false,
    categories: ["c1"]
  },

   {
    id: "AP2",
    name: "Assassin's Creed Valhalla",
    description: "Step into the shoes of Eivor, a fierce Viking warrior, and embark on a massive open-world adventure set in the Viking Age. Engage in epic battles, explore lush landscapes, and unravel a captivating tale of honor, betrayal, and destiny.",
    price: 7999,
    discontinued: false,
    categories: ["c1"]
  },

  {
    id: "AP3",
    name: "Doom Eternal",
    description: "Prepare to unleash hell as the iconic Doom Slayer in this fast-paced, demon-slaying extravaganza. Armed with an arsenal of powerful weapons, navigate through treacherous environments, and obliterate hordes of demons in your quest to save humanity from the forces of Hell.",
    price: 7999,
    discontinued: false,
    categories: ["c1"]
  },

  {
    id: "AP4",
    name: "Max Payne 3",
    description: "Immerse yourself in the dark and gritty world of Max Payne, a troubled former cop seeking vengeance. With its cinematic storytelling, intense gun battles, and a unique bullet-time mechanic, this action-packed shooter delivers a thrilling noir experience that will keep you hooked until the end.",
    price: 4500,
    discontinued: true,
    categories: ["c1"]
  },

  {
    id: "AP5",
    name: "Marvel's Spider-Man",
    description: "Swing through the bustling streets of New York City as the legendary web-slinger, Spider-Man. Experience the thrill of high-flying acrobatics, exhilarating combat, and a rich narrative that showcases Peter Parker's struggles as both a hero and an ordinary person.",
    price: 5299,
    discontinued: false,
    categories: ["c1"]
  },

  {
    id: "EA1",
    name: "The Legend of Zelda: Breath of the Wild",
    description: "Embark on an unforgettable adventure as Link in a vast open world filled with mystery and danger. Explore breathtaking landscapes, solve intricate puzzles, and unravel the secrets of Hyrule while battling formidable creatures. With its captivating storyline and innovative gameplay, this game sets a new standard for immersive adventure.",
    price: 7999,
    discontinued: false,
    categories: ["c2"]
  },

  {
    id: "EA2",
    name: "Uncharted 4: A Thief's End",
    description: "Join Nathan Drake, the charming treasure hunter, on his final thrilling adventure. Traverse exotic locations, uncover hidden treasures, and overcome dangerous obstacles in a quest filled with action, suspense, and emotional depth. With stunning visuals, cinematic storytelling, and exhilarating gameplay, this game delivers an unmatched adventure experience.",
    price: 2999,
    discontinued: false,
    categories: ["c2"]
  },

  {
    id: "EA3",
    name: "Alan Wake",
    description: "Dive into a psychological thriller as the eponymous character, a writer haunted by supernatural forces. Set in a small town shrouded in darkness, unravel the mysteries of an eerie presence that lurks in the shadows. With its gripping narrative, intense atmosphere, and psychological twists, this game will keep you on the edge of your seat in this enigmatic adventure.",
    price: 3000,
    discontinued: true,
    categories: ["c2"]
  },

  {
    id: "EA4",
    name: "Horizon Zero Dawn",
    description: "Step into a post-apocalyptic world where mankind has regressed, and nature has reclaimed the land. Play as Aloy, a skilled hunter, and unravel the mysteries of a lost civilization while battling robotic creatures in intense combat. With a captivating story, a richly detailed world, and strategic gameplay, this game offers an engrossing and enigmatic adventure.",
    price: 1999,
    discontinued: false,
    categories: ["c2"]
  },

  {
    id: "EA5",
    name: "The Witcher 3: Wild Hunt",
    description: "Embark on a sprawling and immersive journey as Geralt of Rivia, a legendary monster hunter. Navigate a morally gray world filled with captivating characters, engaging quests, and breathtaking landscapes. With its deep storytelling, impactful choices, and a vast open world, this game offers an epic adventure that will test your wits and shape the course of the narrative.",
    price: 4999,
    discontinued: false,
    categories: ["c2"]
  },

  {
    id: "VR1",
    name: "Beat Saber",
    description: "Step into a pulsating virtual world and unleash your rhythmic prowess in this immersive virtual reality music game. Slice through beats and blocks with precision using your virtual lightsabers, while grooving to an electrifying soundtrack.",
    price: 2999,
    discontinued: false,
    categories: ["c3"]
  },

  {
    id: "VR2",
    name: "Half-Life: Alyx",
    description: "Immerse yourself in the award-winning world of Half-Life like never before. Set in the gripping VR universe, embark on a thrilling journey as Alyx Vance, fighting off alien forces in a beautifully detailed environment.",
    price: 5999,
    discontinued: false,
    categories: ["c3"]
  },

  {
    id: "VR3",
    name: "Astro Bot Rescue Mission",
    description: "Embark on an adorable and captivating adventure as you guide Astro through vibrant and inventive platforming levels. With innovative use of VR, you'll be transported into a delightful world, interacting with the environment and helping Astro on his mission.",
    price: 3999,
    discontinued: false,
    categories: ["c3"]
  },

  {
    id: "VR4",
    name: "Superhot VR",
    description: "Experience a unique blend of action and puzzle-solving in this mind-bending virtual reality game. Time only moves when you move, allowing you to dodge bullets, take down enemies, and plan your every move with precision.",
    price: 2499,
    discontinued: false,
    categories: ["c3"]
  },

  {
    id: "VR5",
    name: "Moss",
    description: "Enter a charming fairy tale world and join Quill, a courageous mouse, on her heroic quest. Solve puzzles, engage in combat, and form a heartwarming bond with Quill as you navigate through stunning environments in this enchanting VR adventure.",
    price: 2999,
    discontinued: false,
    categories: ["c3"]
  },

  {
    id: "SM1",
    name: "Civilization VI",
    description: "Lead your civilization from the dawn of time to the space age in this epic turn-based strategy game. Expand your empire, develop technologies, engage in diplomacy, and wage wars in a quest for global dominance.",
    price: 5999,
    discontinued: false,
    categories: ["c4"]
  },

  {
    id: "SM2",
    name: "XCOM 2",
    description: "Assume the role of the commander in a desperate fight against an alien occupation. Recruit and train a team of skilled soldiers, manage resources, and strategize in tactical turn-based battles to save humanity.",
    price: 4999,
    discontinued: false,
    categories: ["c4"]
  },

  {
    id: "SM3",
    name: "Total War: Warhammer II",
    description: "Immerse yourself in the fantasy world of Warhammer and command mighty armies in massive real-time battles. Engage in strategic warfare, conquer territories, and unleash powerful spells and legendary creatures in this captivating strategy game.",
    price: 5999,
    discontinued: false,
    categories: ["c4"]
  },

  {
    id: "SM4",
    name: "Stellaris",
    description: "Explore the depths of space and shape the destiny of your interstellar empire in this grand strategy game. Expand your reach, form alliances, research technologies, and engage in diplomatic negotiations or epic space battles in an ever-evolving galaxy.",
    price: 3999,
    discontinued: false,
    categories: ["c4"]
  },

  {
    id: "SM5",
    name: "Fire Emblem: Three Houses",
    description: "Become a professor at the prestigious Officer's Academy and guide a group of students through their academic and tactical training. Make critical choices, develop relationships, and lead your chosen house to victory in strategic turn-based battles.",
    price: 7999,
    discontinued: false,
    categories: ["c4"]
  },

];

