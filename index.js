const connectDB = require("./setup.mongodb");
const { default: mongoose } = require("mongoose");
connectDB();

const userSchema = new mongoose.Schema({
  name: String,
  status: {
    type: Boolean,
    default: false,
  },
});
const mongoDB = mongoose.model(`mongoDB`, userSchema, "TaskManager");

// Create Task
const createTask = async (name, status) => {
  await mongoDB.create({
    name: name,
    status: status,
  });
  console.log("Added Successfully");
};

//Delete
const deleteTask = async (_id) => {
  await mongoDB.deleteOne({ _id: _id });
  console.log("Deleted Successfully");
};

//Display
const display = async () => {
  const result = await mongoDB.find();
  console.log(result);
};

//Dsiplay bu name
const dispplayByName = async(name)=>{
   const result = await mongoDB.findOne({name:name});
  console.log(result);
}
//Display by ID
const displayByID = async (_id) => {
  const result = await mongoDB.findOne({ _id: _id });
  console.log(result);
};

//Update
const updateTaskStatus = async (_id, newStatus) => {
  const update = await mongoDB.findOneAndUpdate(
    { _id: _id },
    { status: newStatus },
  );
  if (update) {
    console.log("Update Successfull");
  } else {
    console.log("Error :: Something went wrong");
  }
};
//======================================================================================================
module.exports = {
createTask,
display,
dispplayByName,
displayByID,
updateTaskStatus,
deleteTask,
connectDB
}