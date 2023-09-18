const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model {}

//this model is considered a 'join table' which is needed when multiple tables have many-to-many relationships with each other
//sequelize will normally autocreate a join table, or we can create our own, which is what we are doing with this model

ProductTag.init(
  {
    // define columns
    id:{
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    product_id:{
      type:DataTypes.INTEGER,
      references:{
        model:'product',
        key:'id'
      }
    },
    tag_id:{
      type:DataTypes.INTEGER,
      references:{
        model:'tag',
        key:'id'
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;
