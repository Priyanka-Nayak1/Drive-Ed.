import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({
  userId: String,
  userName: String,
  userEmail: String,
  orderStatus: String,
  orderDate: Date,
  instructorId: String,
  instructorName: String,
  courseImage: String,
  courseTitle: String,
  courseId: String,
});

const Order = mongoose.model("Order", OrderSchema);
export default Order;

