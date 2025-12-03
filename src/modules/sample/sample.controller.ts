import { Request, Response } from "express";
import { SampleService } from "./sample.service";

export class SampleController {
  sampleService: SampleService;

  constructor() {
    this.sampleService = new SampleService();
  }

  getSamples = async (req: Request, res: Response) => {
    const result = await this.sampleService.getSamples();
    return res.status(200).send(result);
  };

  getSample = async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const result = await this.sampleService.getSample(id);
    return res.status(200).send(result);
  };

  createSample = async (req: Request, res: Response) => {
    const result = await this.sampleService.createSample(req.body);
    return res.status(200).send(result);
  };

  testSendEmail = async (req: Request, res: Response) => {
    const result = await this.sampleService.testSendEmail(req.body);
    return res.status(200).send(result);
  };
}
