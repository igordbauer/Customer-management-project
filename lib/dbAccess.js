import mongoose from "mongoose";

const dbConnect = async () => {
  if (mongoose.connection.readyState >= 1) {
    // if it is not ready yet return
    return;
  }
  mongoose
    .connect(
      `mongodb+srv://${process.env.MONGODB_CREDENTIALS}@cluster0.mkk7l8p.mongodb.net/project-customer-manag?retryWrites=true&w=majority`
    )
    .catch((err) => console.log(err))
    .then(() => console.log("connected to db"));
};

export default dbConnect;
