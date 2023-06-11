import Bill from "../db/models/Bill";
import { Op } from "sequelize";
import Product_Bill from "../db/models/Product_Bill";

const getBills = async (year: number) => {
  try {
    const startDate = new Date(year, 0, 1);
    const endDate = new Date(year, 11, 31);

    const bills = Bill.findAll({
      where: {
        purchaseDate: {
          [Op.gte]: startDate,
          [Op.lte]: endDate,
        },
      },
    });
    return bills;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

const getListBills = async (
  page: number | null,
  keyword: string | null,
  pageSize: number
) => {
  try {
    const whereCondition = keyword
      ? {
          // Điều kiện tìm kiếm
          userId: {
            [Op.like]: `%${keyword}%`,
          },
        }
      : {};
    if (page) {
      // console.log(">>> check page");
      if (page < 1) page = 1;
      // Vị trí bắt đầu truy vấn
      const offset = (page - 1) * pageSize;
      const bills = await Bill.findAndCountAll({
        where: whereCondition,
        limit: pageSize,
        offset,
        attributes: ["id", "purchaseDate", "totalMoney", "userId"],
      });
      return bills;
    } else {
      const bills = await Bill.findAndCountAll({
        where: whereCondition,
        attributes: ["id", "purchaseDate", "totalMoney", "userId"],
      });
      return bills;
    }
  } catch (error: any) {
    throw new Error(error.message);
  }
};

const deleteBills = async (ids: string[] | number[]) => {
  // console.log(">>> check:", ids);
  try {
    const result = await Bill.destroy({
      where: {
        id: ids,
      },
    });
    const resultProductBill = await Product_Bill.destroy({
      where: {
        productId: ids,
      },
    });
    if (result === 0 || resultProductBill == 0) {
      throw new Error("Delete bills fail!");
    }
  } catch (error: any) {
    throw new Error(error.message);
  }
};

const getBillById = async (id: string) => {
  try {
    const bill = await Bill.findByPk(id);

    if (!bill) {
      throw new Error("Bill not found!");
    }

    return bill;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export default {
  getBills,
  getListBills,
  deleteBills,
  getBillById,
};
