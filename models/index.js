// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

//a category can have many products but a product can only have one category

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey:'category_id'
});

// Categories have many Products
Category.hasMany(Product, {
  onDelete:'CASCADE'
});

//we use the 'through' property so the Product model and the Tag model will have a join table between them
//this join table we have defined in the ProductTag model
//join tables are necessary when tables have many-to-many relationships

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: ProductTag,
  //unsure yet if this is needed here or not
  onDelete:'CASCADE'
});

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through:ProductTag
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
