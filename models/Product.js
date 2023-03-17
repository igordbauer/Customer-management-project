import { model, models, Schema } from "mongoose";

const ProductSchema = Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});
export default models.Product || model("Product", ProductSchema);
