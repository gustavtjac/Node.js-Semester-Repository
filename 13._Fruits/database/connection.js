import { MongoClient } from 'mongodb';

const url = `mongodb+srv://mongotv:<db_password>@cluster0.1uxljzv.mongodb.net/?appName=Cluster0`;

const client = new MongoClient(url);

const dbName = "fruit_stand";

await client.connect();

const db = client.db(dbName);


export default {
    fruits: db.collection('fruits'),
    stands: db.collection('stands')
};