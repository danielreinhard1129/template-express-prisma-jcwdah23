import { ApiError } from "../../utils/api-error";
import { PrismaService } from "../prisma/prisma.service";
import { CreateSampleDTO } from "./dto/create-sample.dto";

export class SampleService {
  prisma: PrismaService;

  constructor() {
    this.prisma = new PrismaService();
  }

  getSamples = async () => {
    const samples = await this.prisma.sample.findMany();
    return samples;
  };

  getSample = async (id: number) => {
    const sample = await this.prisma.sample.findFirst({
      where: { id: id },
    });

    if (!sample) throw new ApiError("sample not found", 404);

    return sample;
  };

  createSample = async (body: CreateSampleDTO) => {
    await this.prisma.sample.create({ data: body });
    return { message: "create sample success" };
  };
}
