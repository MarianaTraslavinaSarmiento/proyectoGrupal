const calculateFileHash = require("../../utils/crypto")
const UserModel = require("./user.model")
const cloudinary = require("../../services/cloudinary")
const fs = require("fs")

class UserService {
    async getOneByQuery(query = {}) {
        return await UserModel.findOne(query)
    }


    async getOneById(id) {
        return await UserModel.findById(id)
    }

    async updateUserById(id, updatedUser, imageFile) {
        const existingUser = await this.getOneById(id)

        if (imageFile) {
            try {
                const fileHash = await calculateFileHash(imageFile.path)

                const duplicatedImage = await UserModel.findOne({ 'profile_pic.hash': fileHash })

                if (duplicatedImage) {
                    updatedUser.profile_pic = {
                        url: duplicatedImage.profile_pic.url,
                        hash: duplicatedImage.profile_pic.hash
                    }
                } else {
                    const newImage = await cloudinary.uploader.upload(imageFile.path)
                    updatedUser.profile_pic = {
                        url: newImage.secure_url,
                        hash: fileHash,
                        public_id: newImage.public_id
                    }
                }

                fs.unlinkSync(imageFile.path)

                if (existingUser.profile_pic && existingUser.profile_pic.public_id) {
                    try {
                        await cloudinary.uploader.destroy(existingUser.profile_pic.public_id)
                    } catch (error) {
                        console.error("Error deleting image from Cloudinary:", error)
                    }
                }
            } catch (error) {
                console.error("Error uploading image to Cloudinary:", error)
                throw new Error('Failed to process image');
            }
        }

        return await UserModel.findByIdAndUpdate(id, updatedUser, { new: true })
    }

    async addProductToFavorites(userId, productId) {
        const user = await UserModel.findById(userId)
        user.favorites.push(productId)
        return await user.save()
    }

    async getFavorites(userId) {
        const user = await UserModel.aggregate([
            {
                $match: {
                    _id: userId
                }
            },
            {
                $lookup: {
                    from: "products",
                    localField: "favorites",
                    foreignField: "_id",
                    as: "favorites"
                }
            },
            {
                $project: {
                    favorites: 1
                }
            }
        ])
        return user.favorites
    }
}

module.exports = UserService