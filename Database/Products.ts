import { BuildOptions, DataTypes, Model, Sequelize } from "sequelize";

export interface ProductsInterface {
    id: number;
    categoryId: string;
    name: string;
    manufacturingDate: Date;
    perishableProduct: Boolean;
    expirationDate: Date;
    price: Number;
    createdAt?: Date;
    updatedAt?: Date;
}
export interface ProductsModel extends Model<ProductsInterface>, ProductsInterface {}
export class Prods extends Model<ProductsModel, ProductsInterface> {}

export type ProductsStatic = typeof Model & {
    new (values?: object, options?: BuildOptions): ProductsModel;
};

export function ProductsFactory (sequelize: Sequelize): ProductsStatic {
    return <ProductsStatic>sequelize.define("prods", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        CategoryId: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: false,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        manufacturingDate:{
            type: DataTypes.DATE,
            allowNull: false
        },
        perishableProduct:{
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        expirationDate: {
            type: DataTypes.DATE,
            allowNull: true

        },

        price:{
            type:DataTypes.DECIMAL(7,2),
            allowNull: false

        },
        
        createdAt: {
            field: 'created_at',
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: Sequelize.fn('NOW')
        },
        updatedAt: {
            field: 'updated_at',
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: Sequelize.fn('NOW')
        },
    });
}
