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
        require: true
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
    image_url: {
        type: String,
        require: true
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
    hasDiscount: {
        type: Boolean,
        require: true
    },
    discount: {
        percentage: {
            type: Number,
            require: true
        },
        new_price: {
            type: Number,
            require: true
        },
    },
    hasOffer: {
        type: Boolean,
        require: true
    },
    offer: {
        type: {
          type: String,
          enum: ["BuyXGetY", "FreeShipping", "Other"]
        },
        details: {
          buyX: {
            type: Number,
            require: true
          },
          getY: {
            type: Number,
            require: true
          },
          description: {
            type: String,
            require: true
          },
          freeShipping: {
            type: Boolean,
            require: true
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