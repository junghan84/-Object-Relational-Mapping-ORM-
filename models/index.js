// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belingTo(Category,{
  foreignKey: "category_id",
});

// Categories have many Products
Product.hasMany(Product, {
  foreignKey: 'category_id',
});

// Products belongToMany Tags (through ProductTag)
Product.belingToMany(Tag, {
  through: ProductTag,
  foreignKey:'product_id',
});

// Tags belongToMany Products (through ProductTag)
Tag.belingToMany(Product,{
  through: ProductTag,
  foreignKey:'tag_id',
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
