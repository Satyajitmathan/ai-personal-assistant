import { v2 as cloudinary } from 'cloudinary';
import fs from "fs"

const uploadOnCloudinary = async (filePath) => {
    cloudinary.config({
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
        api_key: process.env.CLOUDINARY_API_KEY,
        api_secret: process.env.CLOUDINARY_API_SECRET
    });

    console.log("Full Config:", cloudinary.config())

    try {
        const pingResult = await cloudinary.api.ping()
        console.log("Ping Result:", pingResult)
    } catch (err) {
        console.log("Ping Error:", err)
    }

    try {
        const uploadResult = await cloudinary.uploader.upload(filePath, {
            resource_type: "auto",
        })
        fs.unlinkSync(filePath)
        return uploadResult.secure_url
    } catch (error) {
        console.log("Cloudinary Upload Error:", error)
        fs.unlinkSync(filePath)
        throw error
    }
}

export default uploadOnCloudinary