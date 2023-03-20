import dbConnect from "../../lib/dbAccess";
import Product from "../../models/Product";
export default async function handler(req, res) {
  await dbConnect();
  switch (req.method) {
    case "GET": {
      try {
        const products = await Product.find({});
        res.status(200).json({
          success: true,
          data: products.map((e) => e.toObject({ getters: true })),
        });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    }
    case "PUT": {
      let product;
      const newObj = req.body.updatedObj;
      const { id } = req.body;

      try {
        product = await Product.findById(id);
        product.name = newObj.name;
        product.price = newObj.price;
        product.save();
        res.status(200).json({ product });
      } catch (e) {
        throw new Error("Could not update the product");
      }
      break;
    }
    case "POST": {
      try {
        const product = await Product.create(req.body);
        res.status(200).json({
          success: true,
          data: product,
        });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    }
    case "DELETE": {
      let product;
      const productId = req.body.id;
      try {
        product = await Product.findByIdAndDelete(productId);
        res.status(200).json({ product });
      } catch (e) {
        throw new Error("Could not find the specified product");
      }
      break;
    }
    default:
      return;
  }
}
