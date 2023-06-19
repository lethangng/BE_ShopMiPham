import { DataTypes, Model } from "sequelize";
import connection from "../../config/connectDB";
import Product_Bill from "./Product_Bill";

class Bill extends Model {
  public id!: number;
  public purchaseDate!: Date;
  public totalMoney!: number;
  public userId!: number;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Bill.init(
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.BIGINT,
    },
    purchaseDate: {
      allowNull: true,
      type: DataTypes.DATE,
    },
    totalMoney: {
      allowNull: true,
      type: DataTypes.DOUBLE,
    },
    userId: {
      allowNull: true,
      type: DataTypes.BIGINT,
    },
  },
  {
    timestamps: true,
    sequelize: connection.sequelize,
    underscored: false,
    tableName: "bills",
  }
);

Bill.hasMany(Product_Bill, { foreignKey: "billId" });

export default Bill;
