import React from 'react';
import { Typography } from '@mui/material';
import { Grid } from '@mui/material';
import { connect } from 'react-redux';
import Product from './Product/Product'; 

const products = [{
        "id": 1,
        "name": "The Whaley House",
        "location": "San Diego",
        "image": "./Waley_House.jpeg",
        "price": 1.500000,
        "description": "Back in 1852, James Yankee Jim Robinson was hung by his neck for the crime of grand larceny. A few years later, Thomas and Anna Whaley built a house on the spot where Robinson died, and soon enough, Yankee Jim's ghost showed up, haunting the site. It's said that his footsteps can be heard clumping around the house.",
        "Rooms": 5,
        "Bathrooms": 2,
        "Haunted": ["Gosths", "Witches", "Demons"],
        // "Available": True
    },
    {
        "id": 2,
        "name": "House of Death",
        "location": "New York",
        "image": "Waley_House.jpeg",
        "price": 1.800000,
        "description": "New York's Greenwich Village has some of the most desirable real estate in the world — save for one brownstone on West 10th Street. Known as The House of Death.",
        "Rooms": 7,
        "Bathrooms": 2,
        "Haunted": ["Gosths", "Witches", "Demons"],
        // "Available": True
    },
    {
        "id": 3,
        "name": "Winchester Mystery House",
        "location": "California",
        "image": "winchesterhouse.jpeg",
        "price": 60.000,
        "description": "According to legend, the rambling Victorian mansion that sits on a busy street in San Jose, California, is haunted by the ghosts of everyone killed by a Winchester rifle.",
        "Rooms": 0,
        "Bathrooms": 13,
        "Haunted": ["Gosths", "Witches", "Demons"],
        // "Available": True
    },
    {
        "id": 4,
        "name": "Biltmore, Asheville",
        "location": "North Carolina",
        "image": "biltmorehotel_interior.jpeg",
        "price": 2.500000,
        "description": "While nothing completely nefarious seems to have happened on the estate, the home's former owners seem to remain very active, even in the afterlife. After Vanderbilt died in 1914, his estate passed on to his children.",
        "Rooms": 5,
        "Bathrooms": 2,
        "Haunted": ["Gosths", "Witches", "Demons"],
        // "Available": True
    },
    {
        "id": 5,
        "name": "The Sallie House",
        "location": "Atchison, Kansas",
        "image": "salliehouse.jpeg",
        "price": 4.50000,
        "description": "If you're into ghost hunting shows, you probably already know this famous haunted house. This unassuming home in Kansas is rumored to be the dark lair for a demon who takes on the form of a little girl because of a family's bizarre experiences there.",
        "Rooms": 5,
        "Bathrooms": 2,
        "Haunted": ["Gosths", "Witches", "Demons"],
        // "Available": True
    },
    {
        "id": 6,
        "name": "Miami Biltmore Hotel",
        "location": "Coral Gables, Florida",
        "image": "biltmorehotel.jpeg",
        "price": 2.000000,
        "description": "The house's haunted history is documented in author Jan Bryant Bartell's Spindrift: Spray from a Psychic Sea.",
        "Rooms": 5,
        "Bathrooms": 2,
        "Haunted": ["Gosths", "Witches", "Demons"],
        // "Available": True
    },
    {
        "id": 7,
        "name": "House am See",
        "location": "Germany",
        "image": "huisaanzee.jpeg",
        "price": 10,
        "description": "Boothouse.",
        "Rooms": 5,
        "Bathrooms": 2,
        "Haunted": ["Gosths", "Witches", "Demons"],
        // "Available": True
    },
    {
        "id": 8,
        "name": "Castle",
        "location": "Savannah, Georgia",
        "image": "castle.jpeg",
        "price": 10,
        "description": "Castle story",
        "Rooms": 5,
        "Bathrooms": 2,
        "Haunted": ["Gosths", "Witches", "Demons"],
        // "Available": True
    },
    {
        "id": 9,
        "name": "The Whaley House",
        "location": "San Diego",
        "image": "Waley_House.jpeg",
        "price": 11.000,
        "description": "The house's haunted history is documented in author Jan Bryant Bartell's Spindrift: Spray from a Psychic Sea.",
        "Rooms": 5,
        "Bathrooms": 2,
        "Haunted": ["Gosths", "Witches", "Demons"],
        // "Available": True
    },
    {
        "id": 10,
        "name": "Come Home",
        "location": "San Diego",
        "image": "home.jpeg",
        "price": 3.500000,
        "description": "The child on the doorstep says enough. Children are creepy as are houses.",
        "Rooms": 5,
        "Bathrooms": 2,
        "Haunted": ["Gosths", "Witches", "Demons"],
        // "Available": True
    },
    {
        "id": 11,
        "name": "The Whaley House",
        "location": "San Diego",
        "image": "Waley_House.jpeg",
        "price": 7.500000,
        "description": "The house's haunted history is documented in author Jan Bryant Bartell's Spindrift: Spray from a Psychic Sea.",
        "Rooms": 5,
        "Bathrooms": 2,
        "Haunted": ["Gosths", "Witches", "Demons"],
        // "Available": True
    },
    {
        "id": 12,
        "name": "The Whaley House",
        "location": "San Diego",
        "image": "Waley_House.jpeg",
        "price": 3.200000,
        "description": "The house's haunted history is documented in author Jan Bryant Bartell's Spindrift: Spray from a Psychic Sea.",
        "Rooms": 5,
        "Bathrooms": 2,
        "Haunted": ["Gosths", "Witches", "Demons"],
        // "Available": True
    },
    {
        "id": 13,
        "name": "The Whaley House",
        "location": "San Diego",
        "image": "Waley_House.jpeg",
        "price": 3.540000,
        "description": "The house's haunted history is documented in author Jan Bryant Bartell's Spindrift: Spray from a Psychic Sea.",
        "Rooms": 5,
        "Bathrooms": 2,
        "Haunted": ["Gosths", "Witches", "Demons"],
        // "Available": True
    },
    {
        "id": 14,
        "name": "The Whaley House",
        "location": "San Diego",
        "image": "Waley_House.jpeg",
        "price": 3.500000,
        "description": "The house's haunted history is documented in author Jan Bryant Bartell's Spindrift: Spray from a Psychic Sea.",
        "Rooms": 5,
        "Bathrooms": 2,
        "Haunted": ["Gosths", "Witches", "Demons"],
        // "Available": True
    },
    {
        "id": 15,
        "name": "The Whaley House",
        "location": "San Diego",
        "image": "Waley_House.jpeg",
        "price": 3.500000,
        "description": "The house's haunted history is documented in author Jan Bryant Bartell's Spindrift: Spray from a Psychic Sea.",
        "Rooms": 5,
        "Bathrooms": 2,
        "Haunted": ["Gosths", "Witches", "Demons"],
        // "Available": True
    },
    {
        "id": 16,
        "name": "The Whaley House",
        "location": "San Diego",
        "image": "Waley_House.jpeg",
        "price": 2.80000,
        "description": "The house's haunted history is documented in author Jan Bryant Bartell's Spindrift: Spray from a Psychic Sea.",
        "Rooms": 5,
        "Bathrooms": 2,
        "Haunted": ["Gosths", "Witches", "Demons"],
        // "Available": True
    }
]

const Products = ({ product }) => {
  return (
    
    <main>
      <Typography variant="h3" color="secondary">Choose your forever home</Typography>
      <Grid container justify="center" spacing={4}>
        {products.map((product) => (
          <Grid item  xs={12} sm={6} md={4} lg={3}>
            <Product key={product.id} products={product} />
          </Grid>
        ))}

      </Grid>
      
    </main>
  )
};

const mapStateToProps = (state) => {
  return {
    products: state.shop.products,
  }
}

export default connect(mapStateToProps)(Products)