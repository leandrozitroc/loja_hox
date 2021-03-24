import { BuildOptions, DataTypes, Model, Sequelize } from "sequelize";

export interface CategoryAttributes {
    id: number;
    categoryId: string;
    createdAt?: Date;
    updatedAt?: Date;
}
export interface CategoryModel extends Model<CategoryAttributes>, CategoryAttributes {}
export class Categorys extends Model<CategoryModel, CategoryAttributes> {}

export type CategoryStatic = typeof Model & {
    new (values?: object, options?: BuildOptions): CategoryModel;
};

export function CategoryFactory (sequelize: Sequelize): CategoryStatic {
    return <CategoryStatic>sequelize.define("categorys", {
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
            defaultValue: Sequelize.fn('NOW'),
        },
    });
}
