import dbConnect from "../../lib/dbAccess";
import Sale from "../../models/Sale";

export default async function handler(req, res) {
  await dbConnect();
  switch (req.method) {
    case "POST": {
      try {
        console.log(req.body);
        const sale = await Sale.create(req.body.cartObj);
        res.status(200).json({
          success: true,
          data: sale,
        });
      } catch (error) {
        res.status(400).json({ success: false });
      }
    }
  }
}
