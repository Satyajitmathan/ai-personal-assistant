import { v2 as cloudinary } from 'cloudinary';
import fs from "fs"

const uploadOnCloudinary = async (filePath) => {
    console.log("Cloud Name:", JSON.stringify(process.env.CLOUDINARY_CLOUD_NAME))
    console.log("API Key:", JSON.stringify(process.env.CLOUDINARY_API_KEY))
    console.log("API Secret length:", process.env.CLOUDINARY_API_SECRET?.length)

    cloudinary.config({
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
        api_key: process.env.CLOUDINARY_API_KEY,
        api_secret: process.env.CLOUDINARY_API_SECRET
    });

    try {
        const uploadResult = await cloudinary.uploader.upload(filePath)
        fs.unlinkSync(filePath)
        return uploadResult.secure_url
    } catch (error) {
        console.log("Cloudinary Upload Error:", error)
        fs.unlinkSync(filePath)
        throw error
    }
}

export default uploadOnCloudinary