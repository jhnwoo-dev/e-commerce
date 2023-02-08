const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection.js");
const Product = require("./Product.js");

class Tag extends Model {}

Tag.init(
    {
        // define columns
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        product_id: {
            type: DataTypes.INTEGER,
            references: {
                model: Product,
                key: "id",
            },
            onDelete: "CASCADE",
        },
        tag_id: {
            type: DataTypes.INTEGER,
            references: {
                model: Tag,
                key: "id",
            },
            onDelete: "CASCADE",
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: "tag",
    }
);

module.exports = Tag;
