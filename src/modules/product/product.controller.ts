import { Request, Response } from "express";
import { ProductService } from "./product.service";
import { ApiError } from "../../utils/api-error";

export class ProductController {
  productService: ProductService;

  constructor() {
    this.productService = new ProductService();
  }

  getProducts = async (req: Request, res: Response) => {
    const result = await this.productService.getProducts();
    return res.status(200).send(result);
  };

  createProduct = async (req: Request, res: Response) => {
    const files = req.files as { [fieldname: string]: Express.Multer.File[] };
    const image = files.image?.[0];
    if (!image) throw new ApiError("Image is required", 400);
    const result = await this.productService.createProduct(req.body, image);
    return res.status(200).send(result);
  };
}
