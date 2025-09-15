import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI as string;
if (!uri) throw new Error("Please add your Mongo URI to .env.local or Vercel Environment Variables");

declare global {
  // This is for TypeScript to recognize the global variable in dev
  // eslint-disable-next-line no-var
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

if (process.env.NODE_ENV === "development") {
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  client = new MongoClient(uri);
  clientPromise = client.connect();
}

export default clientPromise;
