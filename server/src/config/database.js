const mongoose = require("mongoose");

class MongooseDB {
    static async connect() {
        try {
            if (!process.env.MONGODB_URI) {
                throw new Error('Missing MONGODB_URI environment variable');
            }
            await mongoose.connect(process.env.MONGODB_URI);
            console.log("Connected to the database sucessfully")
        } catch (error) {
            console.log("Error connecting to database: ", error);
        }
    }

    static async disconnect() {
        try {   
            await mongoose.disconnect();
            console.log("Disconnected from the database sucessfully")

        } catch (error) {
            console.log("Error disconnecting from database: ", error);

        }
    }
}

module.exports = MongooseDB