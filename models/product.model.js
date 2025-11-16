const mongose = require('mongoose');
const productSchema = new mongose.Schema({
  name: {
    type: String,
    required: [true, "Please enter product name"],
    },
    quantity: {
      type: Number,
      required: [true, "Please enter product quantity"],    
      default : 0
    },
    price: {
      type: Number,
      required: [true, "Please enter product price"],   
        default : 0
    },
    image:{
        type: String,
        required:false
    },
},
{  
    timestamps: true,
}
);   

const Product = mongose.model('Product', productSchema);
module.exports = Product;
