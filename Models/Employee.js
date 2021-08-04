const mongoose = require("mongoose");
const EmployeeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  created_at: { type: Date, default: Date.now() }
});
const Employee = mongoose.model("Employee", EmployeeSchema, "Employee");
module.exports = Employee ;