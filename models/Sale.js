import { model, models, Schema, Types } from "mongoose";
import Product from "./Product";

const SaleSchema = Schema({
  products: [{ type: Types.ObjectId, required: true, ref: Product }],
  value: {
    type: Number,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
});
export default models.Sale || model("Sale", SaleSchema);
