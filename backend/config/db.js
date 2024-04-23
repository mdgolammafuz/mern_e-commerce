import { connect, disconnect } from "mongoose";

async function connectToDatabase() {
  try {
    await connect( process.env.MONGODB_URL );
    console.log("Succesfully connected to MongoDB")
  } catch (error) {
    console.error(`Couldnot connect to MongoDB. ERROR:${error.message}`);
  }
}

async function disconnectFromDatabase() {
  try {
    disconnect;
  } catch (error) {
    console.log(error);
    throw new Error("Could not disconnect from MongoDB");
  }
}

export { connectToDatabase, disconnectFromDatabase };
