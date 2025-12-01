import { Router } from "express";
import { SampleController } from "./sample.controller";

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
  };

  getRouter = () => {
    return this.router;
  };
}
