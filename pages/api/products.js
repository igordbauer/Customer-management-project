import dbConnect from "../../lib/dbAccess";
import Product from "../../models/Product";
export default async function handler(req, res) {
  await dbConnect();
  console.log(req.headers);
  switch (req.method) {
    case "GET": {
      try {
        const products = await Product.find({});
        res
          .status(200)
          .json({
            success: true,
            data: products.map((e) => e.toObject({ getters: true })),
          });
      } catch (error) {
        res.status(400).json({ success: false });
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
    default:
      return;
  }
}
