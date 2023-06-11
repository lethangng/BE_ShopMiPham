import { Request, Response } from "express";
import CRUDBillServices from "../services/CRUDBill.services";
import CRUDProductBillServices from "../services/CRUDProductBill.services";

const getBillCharts = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const year = req.params.year ? parseInt(req.params.year) : null;
  // console.log(req.params);
  if (!year || year <= 0) {
    return res.status(400).json({
      errCode: 400,
      message: null,
      error: "Error: Bad request!",
    });
  }
  try {
    const bills = await CRUDBillServices.getBills(year);
    const charts = new Array(12).fill(0);
    bills.forEach((bill) => {
      const month = bill.dataValues.purchaseDate.getMonth();
      charts[month]++;
    });
    // console.log(charts);
    return res.status(200).json({
      errCode: 0,
      message: "OK",
      errors: null,
      data: charts,
    });
  } catch (error: any) {
    return res.status(500).json({
      errCode: 500,
      message: null,
      errors: error.message,
    });
  }
};

const getBills = async (req: Request, res: Response): Promise<Response> => {
  // console.log(req.params.page);
  let page = req.params.page ? parseInt(req.params.page) : null;
  // console.log(page);
  const keyword = req.query.keyword ? String(req.query.keyword) : null;
  const pageSize = Number(process.env.PAGE_SIZE || 10);
  try {
    const productTypes = await CRUDBillServices.getListBills(
      page,
      keyword,
      pageSize
    );
    return res.status(200).json({
      errCode: 0,
      message: "OK",
      pageSize: pageSize,
      page: page === null ? null : page && page < 1 ? 1 : page,
      total: productTypes.count,
      data: productTypes.rows,
    });
  } catch (error: any) {
    return res.status(500).json({
      errCode: 500,
      message: null,
      errors: error.message,
    });
  }
};

const deleteBills = async (req: Request, res: Response): Promise<Response> => {
  try {
    const ids: string[] | number[] = req.body;
    if (!ids || ids.length <= 0) {
      return res.status(400).json({
        errCode: 400,
        message: null,
        error: "Error: Bad request!",
      });
    }
    await CRUDBillServices.deleteBills(ids);
    return res.status(200).json({
      errCode: 0,
      message: "Delete success!",
      data: [],
    });
  } catch (error: any) {
    return res.status(500).json({
      errCode: 500,
      message: null,
      errors: error.message,
    });
  }
};

const getBillById = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { id } = req.params;
    if (id) {
      const bill = await CRUDBillServices.getBillById(id);
      return res.status(200).json({
        errCode: 0,
        message: "Find ok!",
        data: bill,
      });
    }
    return res.status(400).json({
      errCode: 400,
      message: null,
      errors: "Error: Bad request!",
    });
  } catch (error: any) {
    return res.status(500).json({
      errCode: 500,
      message: null,
      errors: error.message,
    });
  }
};

const getBillDetailById = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { id } = req.params;
  // console.log(id);
  let page = req.params.page ? parseInt(req.params.page) : null;
  // console.log(page);
  const keyword = req.query.keyword ? String(req.query.keyword) : null;
  const pageSize = Number(process.env.PAGE_SIZE || 10);

  try {
    if (id) {
      // console.log(">>>check 1");
      const productBill = await CRUDProductBillServices.getProductBillById(
        id,
        page,
        keyword,
        pageSize
      );
      // console.log(">>>check 2");
      return res.status(200).json({
        errCode: 0,
        message: "OK",
        pageSize: pageSize,
        page: page === null ? null : page && page < 1 ? 1 : page,
        total: productBill.count,
        data: productBill.rows,
      });
    }
    return res.status(400).json({
      errCode: 400,
      message: null,
      errors: "Error: Bad request!",
    });
  } catch (error: any) {
    return res.status(500).json({
      errCode: 500,
      message: null,
      errors: error.message,
    });
  }
};

export default {
  getBillCharts,
  getBills,
  deleteBills,
  getBillById,
  getBillDetailById,
};
