import mongoose from "mongoose";

const MONGODB_URI: string = "mongodb://localhost/Bag";
mongoose.connect(MONGODB_URI);
mongoose.connection
  .on("open", () => {
    console.log("Database Connected");
  })
  .once("error", (error) => {
    console.log(`Error Connecting to DataBase \t ${error}`);
  });

export default mongoose;
