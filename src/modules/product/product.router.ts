import { Router } from "express";
import { ProductController } from "./product.controller";
import { UploaderMiddleware } from "../../middlewares/uploader.middleware";
import { validateBody } from "../../middlewares/validation.middleware";
import { CreateProductDTO } from "./dto/create-product.dto";

export class ProductRouter {
  router: Router;
  productController: ProductController;
  uploaderMiddleware: UploaderMiddleware;

  constructor() {
    this.router = Router();
    this.productController = new ProductController();
    this.uploaderMiddleware = new UploaderMiddleware();
    this.initRoutes();
  }

  private initRoutes = () => {
    this.router.get("/", this.productController.getProducts);
    this.router.post(
      "/",
      this.uploaderMiddleware.upload().fields([{ name: "image", maxCount: 1 }]),
      validateBody(CreateProductDTO),
      this.productController.createProduct
    );
  };

  getRouter = () => {
    return this.router;
  };
}
