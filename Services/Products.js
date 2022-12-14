const Product = require('../Model/Products');

module.exports = {
async createProduct (product) {
  console.log("test here")
  let result = await Product.create(product);
  if(result) {
    return {
      data: product,
      message: "Product successfully created!"
};
  }
return "Error creating new product"
},

async getAllProduct()  {
  let product = await Product.find();
  if(product)  return product;
  return "Error fetching products from db"
},

async getProductById(productId)  {
  let product = await Product.findOne(productId);
  if(product) return product;
  return "Error fetching product from db";
},
};