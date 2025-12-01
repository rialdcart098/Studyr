import dotenv from "dotenv"
dotenv.config()

export const PORT = process.env.PORT || 3000
const uri: string | unknown = process.env.NODE_ENV === "test"
    ? process.env.TEST_MONGODB_URI
    : process.env.MONGODB_URI
if (!uri) throw new Error("MongoDB URI doesn't exist")
export const MONGODB_URI: string = uri as string