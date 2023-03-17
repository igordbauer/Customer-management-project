// export default async function handler(req, res) {
//   const client = await connectToDatabase();

//   if (req.method === "POST") {
//     const data = req.body;
//     const result = await client.db().collection("users").insertOne(data);
//     client.close();
//     res.status(201).json(result);
//   }

//   if (req.method === "GET") {
//     const result = await client.db().collection("users").find({}).toArray();
//     res.status(201).json(result);
//     client.close();
//   }

//   if (req.method === "DELETE") {
//     const id = req.body._id;
//     const result = await client
//       .db()
//       .collection("users")
//       .deleteOne({ _id: new ObjectId(id) });
//     res.status(202).json(result);
//     client.close();
//   }
//   if (req.method === "PUT") {
//     const id = req.body._id;
//     const object = req.body.object;
//     const result = await client
//       .db()
//       .collection("users")
//       .replaceOne({ _id: new ObjectId(id) }, { ...object });
//     res.status(200).json(result);
//     client.close();
//   }
// }
