// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey:'id'
});

// Categories have many Products
Category.hasMany(Product, {
  onDelete:'CASCADE'
});

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag);

// Tags belongToMany Products (through ProductTag)
Tag/Product.belongsToMany(Product);

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
