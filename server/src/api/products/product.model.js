import { Schema, model } from "mongoose";

const productSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    size: {
        height: {
            type: Number,
            require: true
        },
        width: {
            type: Number,
            require: true
        },
        unit: {
            type: String,
            enum: ["cm", "m"],
            require: true
        },
    },
    weight: {
        type: String,
        require: false
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
        require: true,
    },
    images_url: {
        type: [String],
        required: false 
    },
    price: {
        type: Number,
        require: true
    },
    shop_id: {
        type: Schema.Types.ObjectId,
        ref: 'Shop',
        require: true
    },
    offer: {
        type: {
          type: String,
          enum: ["discount", "buyxgety", "freeshipping", "other"],
          require: false
        },
        details: {
          buyX: {
            type: Number,
            require: false
          },
          getY: {
            type: Number,
            require: false
          },
          description: {
            type: String,
            require: false
          }
        }
    },
    shipping_price: {
        type: Number,
        require: true
    }
}, {
    timestamps: true
})

export default model('Product', productSchema)