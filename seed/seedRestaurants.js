const Restaurant = require("./models/Restaurant"); // Adjust the path as needed

const restaurantsData = [
  { name: "Restaurant A" },
  { name: "Restaurant B" },
  // Add more restaurant data as needed
];

async function seedRestaurants() {
  try {
    await Restaurant.deleteMany(); // Clear existing data
    await Restaurant.insertMany(restaurantsData);
    console.log("Restaurants seeded successfully");
  } catch (error) {
    console.error("Error seeding restaurants:", error);
  }
}

// Call the function to seed restaurants
seedRestaurants();
