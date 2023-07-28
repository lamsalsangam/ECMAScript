// Who actually is capable of connecting and communicating with mongodb. It's mongoose
import mongoose from "mongoose";

// While talking to the database the method always need to be async
export async function connect() {
  // Now initialize the try catch block for handling the connection with the database
  try {
    // Now it will try to resolve the connect to the mongo_uri provided. For typescript purpose the "!" is provided
    mongoose.connect(process.env.MONGO_URI!);
    // After the above method is resolved  we will be getting the connection from the mongodb
    // Which in after will give us the access to the variety of the event.
    const connection = mongoose.connection;
    // Every even is listned by the ".on()"
    connection.on("connected", () => {
      console.log("MongoDB connected successfully.");
    });
    connection.on("error", (err) => {
      console.log(
        "MongoDB connection error. Please Make sure MongoDB is running." + err
      );
      process.exit();
    });
  } catch (error) {
    console.log("Something went wrong");
    console.log(error);
  }
}
