import { ApiError } from "../../utils/api-error";
import { PrismaService } from "../prisma/prisma.service";

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
}
