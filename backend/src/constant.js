const DB_NAME = "thesisflow";

const MONGO_USERNAME = process.env.MONGO_USERNAME;
const MONGO_PASSWORD = process.env.MONGO_PASSWORD;
const DB_URL = `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@cluster0.ph64s8n.mongodb.net/`;
// const DB_URL = process.env.MONGO_DB_URL
export { DB_NAME, DB_URL };