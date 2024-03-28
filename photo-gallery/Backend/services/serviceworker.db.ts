// External Dependencies
import * as mongoDB from "mongodb";
import * as dotenv from "dotenv";


export const collections: { photos?: mongoDB.Collection } = {}

export async function connectToDatabase() {
     dotenv.config();
     // Check if DB connection string, DB name, and photo collection name are defined
     if(!process.env.DB_CONN_STRING || !process.env.DB_NAME || !process.env.PHOTO_COLLECTION_NAME) {
        throw new Error("One or more required enviroment variables are not defined")
     }
     const client: mongoDB.MongoClient = new mongoDB.MongoClient(process.env.DB_CONN_STRING);
     await client.connect()
     

     const db: mongoDB.Db = client.db(process.env.DB_NAME);

     const photosCollection: mongoDB.Collection = db.collection(process.env.PHOTO_COLLECTION_NAME);

     collections.photos = photosCollection;

     console.log(`Successfully connected to database: ${db.databaseName} and ${photosCollection.collectionName}`);
}