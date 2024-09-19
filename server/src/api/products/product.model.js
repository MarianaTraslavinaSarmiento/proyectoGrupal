const { Schema, model } = require("mongoose")

const productSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    size: {
        height: {
            type: Number,
            required: true
        },
        width: {
            type: Number,
            required: true
        },
        unit: {
            type: String,
            enum: ["cm", "m"],
            required: true
        },
    },
    weight: {
        type: String,
        required: false
    },
    category: {
        type: String,
        enum: [
          "Textileria",
          "Ceramica",
          "Orfebreria",
          "Talla en piedra",
          "Talla en madera",
          "Bordado",
          "Joyería",
          "Hojalatería",
          "Estampado",
          "Pintura tradicional"
        ],
        required: true,
    },
    images_url: {
        type: [String],
        required: false 
    },
    price: {
        type: Number,
        required: true
    },
    shop_id: {
        type: Schema.Types.ObjectId,
        ref: 'Shop',
        required: true
    },
    offer: {
        type: {
          type: String,
          enum: ["discount", "buyxgety", "freeshipping", "other"],
          required: false
        },
        details: {
          buyX: {
            type: Number,
            required: false
          },
          getY: {
            type: Number,
            required: false
          },
          description: {
            type: String,
            required: false
          }
        }
    },
    shipping_price: {
        type: Number,
        required: true
    }
}, {
    timestamps: true
})

const Product = model('Product', productSchema)

module.exports = Product