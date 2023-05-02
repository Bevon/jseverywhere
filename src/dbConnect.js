import mongoose from "mongoose";

export function connectToDB(database) {
  // Database Connection
  mongoose.connect(database, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    family: 4,
  });
  mongoose.connection.on("error", () => {
    console.log("Database Connection Error! Oops i can't reach the database");
  });
  mongoose.connection.once("open", () => {
    console.log("Connected to Database Successfully");
  });
  //End of Database connection
}
