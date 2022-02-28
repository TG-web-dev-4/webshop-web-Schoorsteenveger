const products = [

    {
        "id": 1,
        "name": "The Whaley House",
        "location": "San Diego",
        "img": ["Waley_House.jpeg"],
        "price": 1500000,
        "description": "Back in 1852, James Yankee Jim Robinson was hung by his neck for the crime of grand larceny. A few years later, Thomas and Anna Whaley built a house on the spot where Robinson died, and soon enough, Yankee Jim's ghost showed up, haunting the site. It's said that his footsteps can be heard clumping around the house.",
        "Rooms": 5,
        "Bathrooms": 2,
        "Category": ["Gosths"],
        // "Available": True
    },
    {
        "id": 2,
        "name": "House of Death",
        "location": "New York",
        "img": "house-of-death.jpg",
        "price": 1800000,
        "description": "New York's Greenwich Village has some of the most desirable real estate in the world — save for one brownstone on West 10th Street. Known as The House of Death.",
        "Rooms": 7,
        "Bathrooms": 2,
        "Category": ["Gosths"],
        // "Available": True
    },
    {
        "id": 3,
        "name": "Winchester Mystery House",
        "location": "California",
        "img": "winchesterhouse.jpeg",
        "price": 655000,
        "description": "According to legend, the rambling Victorian mansion that sits on a busy street in San Jose, California, is haunted by the ghosts of everyone killed by a Winchester rifle.",
        "Rooms": 0,
        "Bathrooms": 13,
        "Category": ["Demons"],
        // "Available": True
    },
    {
        "id": 4,
        "name": "Biltmore, Asheville",
        "location": "North Carolina",
        "img": "biltmorehotel_interior.jpeg",
        "price": 2500000,
        "description": "While nothing completely nefarious seems to have happened on the estate, the home's former owners seem to remain very active, even in the afterlife. After Vanderbilt died in 1914, his estate passed on to his children.",
        "Rooms": 5,
        "Bathrooms": 2,
        "Category": ["Gosths"],
        // "Available": True
    },
    {
        "id": 5,
        "name": "The Sallie House",
        "location": "Atchison, Kansas",
        "img": "salliehouse.png",
        "price": 457000,
        "description": "If you're into ghost hunting shows, you probably already know this famous haunted house. This unassuming home in Kansas is rumored to be the dark lair for a demon who takes on the form of a little girl because of a family's bizarre experiences there.",
        "Rooms": 5,
        "Bathrooms": 2,
        "Category": ["Witches"],
        // "Available": True
    },
    {
        "id": 6,
        "name": "Miami Biltmore Hotel",
        "location": "Coral Gables, Florida",
        "img": "biltmorehotel.jpeg",
        "price": 2000000,
        "description": "The house's haunted history is documented in author Jan Bryant Bartell's Spindrift: Spray from a Psychic Sea.",
        "Rooms": 5,
        "Bathrooms": 2,
        "Category": ["Gosths"],
        // "Available": True
    },
    {
        "id": 7,
        "name": "House am See",
        "location": "Germany",
        "img": "huisaanzee.jpg",
        "price": 100000,
        "description": "Boothouse. With a history reaching back to 1836, when it was first settled, it is not surprising that the City of Crystal Lake, Illinois, claims its fair share of ghost stories and reports of paranormal activity.",
        "Rooms": 5,
        "Bathrooms": 2,
        "Category": ["Demons"],
        // "Available": True
    },
    {
        "id": 8,
        "name": "Castle",
        "location": "Savannah, Georgia",
        "img": "castle.jpg",
        "price": 434000,
        "description": "Castle story. Savannah is widely known as the most haunted city in America. Walk into any historic building or cemetery in Savannah and you may catch sight of ghostly presences surrounding you.",
        "Rooms": 5,
        "Bathrooms": 2,
        "Category": ["Witches"],
        // "Available": True
    },
    {
        "id": 9,
        "name": "The Castle",
        "location": "Upstate New York",
        "img": "mansion_newyork.png",
        "price": 115000,
        "description": "Known around town as The Castle, this abandoned mansion looks straight out of a horror movie. ",
        "Rooms": 5,
        "Bathrooms": 2,
        "Category": ["Demons"],
        // "Available": True
    },
    {
        "id": 10,
        "name": "Come Home",
        "location": "San Diego",
        "img": "home.jpg",
        "price": 3500000,
        "description": "The child on the doorstep says enough. Children are creepy as are houses.",
        "Rooms": 5,
        "Bathrooms": 2,
        "Category": ["Witches"],
        // "Available": True
    },
    {
        "id": 11,
        "name": "Cahawba",
        "location": "Alabama",
        "img": "old-cahawba-alabama.png",
        "price": 666000,
        "description": "Alabama's first capital and famous ghost town takes its name from the state's longest river, situated at the confluence of the Cahaba and the Alabama. It was abandoned after the Civil War, and its empty buildings, slave burial ground, and eerie cemeteries are now popular settings for ghost tours and stories of paranormal activity.",
        "Rooms": 5,
        "Bathrooms": 2,
        "Category": ["Demons"],
        // "Available": True
    },
    {
        "id": 12,
        "name": "The Driskill",
        "location": "Austin, Texas",
        "img": "TheDriskill.png",
        "price": 3250000,
        "description": "The Driskill is a majestic Romanesque hotel with modern rooms and an iconic brick facade, drawing Europeans tourists and wedding parties since 1886. It's a true Austin landmark—and according to some, a true hot-spot for ghosts. Travelers have noted eerily abnormal sounds through its ornate corridors, as well as phantom sightings of the hotel’s namesake, Jesse Driskill, whose portrait still hangs in the lobby. They say Driskill never recovered from the heartbreak of losing his hotel in a high-stakes poker game, and honestly, we get it: This hotel is a hard one to say goodbye to.",
        "Rooms": 5,
        "Bathrooms": 2,
        "Category": ["Gosths"],
        // "Available": True
    },
    {
        "id": 13,
        "name": "The Blue mansion",
        "location": "Scotland",
        "img": "livingroom.jpg",
        "price": 3540000,
        "description": "The house's haunted history is documented in author Jan Bryant Bartell's Spindrift: Spray from a Psychic Sea.",
        "Rooms": 5,
        "Bathrooms": 2,
        "Category": ["Gosths", "Witches", "Demons"],
        // "Available": True
    },
    {
        "id": 14,
        "name": "Cairndhu House",
        "location": "Larne, Northern Ireland.",
        "img": "cairndhuhouse.png",
        "price": 3500000,
        "description": "Cairndhu House is a crumbling Victorian mansion located off the Coast Road in Carfunnock Country Park, Larne, Northern Ireland. It was built at some point after 1878, as a summer residence for the wealthy Scottish textile industrialist, Stewart Clark, who had married a young woman from Larne.",
        "Rooms": 5,
        "Bathrooms": 2,
        "Category": ["Witches"],
        // "Available": True
    },
    {
        "id": 15,
        "name": "Lost place",
        "location": "San Diego",
        "img": "livr7.jpg",
        "price": 3500000,
        "description": "The manor speaks greatly to the imagination, and there are several reasons for that. One is that it has been abandoned for a long time and there are rumours that’s because it’s a haunted house.",
        "Rooms": 5,
        "Bathrooms": 2,
        "Category": ["Demons"],
        // "Available": True
    },
    {
        "id": 16,
        "name": "Hotel Galvez ",
        "location": " Galveston",
        "img": "livingroom2.jpg",
        "price": 280000,
        "description": "The house's haunted history is documented in author Jan Bryant Bartell's Spindrift: Spray from a Psychic Sea.",
        "Rooms": 5,
        "Bathrooms": 2,
        "Category": ["Demons"],
        // "Available": True
    }
]

export default products

