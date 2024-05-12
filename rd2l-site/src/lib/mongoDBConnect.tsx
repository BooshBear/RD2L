const MongoClient = require('mongodb').MongoClient;
let cachedDb: any = null;

export const connectToDatabase = async () => {
  if (cachedDb) {
    console.log('👌 Using existing connection');
    return Promise.resolve(cachedDb);
  }

  return MongoClient.connect(process.env.MONGODB_URI, {
    
  })
    .then((client:any) => {
      let db = client.db('test');
      console.log('🔥 New DB Connection');
      cachedDb = db;
      return cachedDb;
    })
    .catch((error:any) => {
      console.log('Mongo connect Error');
      console.log(error);
    });
};