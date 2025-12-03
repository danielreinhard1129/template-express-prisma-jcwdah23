import { Router } from "express";
import { SampleController } from "./sample.controller";
import { validateBody } from "../../middlewares/validation.middleware";
import { CreateSampleDTO } from "./dto/create-sample.dto";
import { TestSendEmailDTO } from "./dto/test-send-email.dto";

export class SampleRouter {
  router: Router;
  sampleController: SampleController;

  constructor() {
    this.router = Router();
    this.sampleController = new SampleController();
    this.initRoutes();
  }

  private initRoutes = () => {
    this.router.get("/", this.sampleController.getSamples);
    this.router.get("/:id", this.sampleController.getSample);
    this.router.post(
      "/",
      validateBody(CreateSampleDTO),
      this.sampleController.createSample
    );
    this.router.post(
      "/test-send-email",
      validateBody(TestSendEmailDTO),
      this.sampleController.testSendEmail
    );
  };

  getRouter = () => {
    return this.router;
  };
}
