import { CloudinaryService } from "../cloudinary/cloudinary.service";
import { PrismaService } from "../prisma/prisma.service";
import { CreateProductDTO } from "./dto/create-product.dto";

export class ProductService {
  prisma: PrismaService;
  cloudinaryService: CloudinaryService;

  constructor() {
    this.prisma = new PrismaService();
    this.cloudinaryService = new CloudinaryService();
  }

  getProducts = async () => {
    const products = await this.prisma.product.findMany();
    return products;
  };

  createProduct = async (
    body: CreateProductDTO,
    image: Express.Multer.File
  ) => {
    // 1. upload dlu ke cloudinary
    const { secure_url } = await this.cloudinaryService.upload(image);

    // 2. insert data ke db
    await this.prisma.product.create({
      data: { ...body, image: secure_url },
    });

    // 3. return message success
    return { message: "create product success" };
  };
}
