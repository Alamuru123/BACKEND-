const mongoose = require('mongoose');
const { connect, connection } = mongoose;
const Table = require('../models/Table');

// Connect to MongoDB
const dbURI = "mongodb+srv://your_username:your_password@cluster0.2euzphu.mongodb.net/your_database";
connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(async () => {
    console.log("Connected to database");
    await seedDB();
    connection.close();
    console.log("Database connection closed");
  })
  .catch((err) => console.log(err));

const seedDB = async () => {
  await Table.deleteMany();
  console.log("Seeding the database...");

  // Loop for capacity 2
  for (let i = 1; i <= 3; i++) {
    const table = new Table({
      name: `Table ${i}`,
      capacity: 2,
      isAvailable: true,
    });
    await table.save();
  }

  // Loop for capacity 4
  for (let i = 4; i <= 6; i++) {
    const table = new Table({
      name: `Table ${i}`,
      capacity: 4,
      isAvailable: true,
    });
    await table.save();
  }

  // Loop for capacity 6
  for (let i = 7; i <= 9; i++) {
    const table = new Table({
      name: `Table ${i}`,
      capacity: 6,
      isAvailable: true,
    });
    await table.save();
  }

  console.log("Database seeded successfully");
};
