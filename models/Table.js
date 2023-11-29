// models/Table.js
const mongoose = require('mongoose');

const tableSchema = new mongoose.Schema({
  name: String,
  capacity: Number,
  isAvailable: Boolean,
});

const Table = mongoose.model('Table', tableSchema);

module.exports = Table;
