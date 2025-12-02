import { IsNotEmpty, IsNumber, IsString } from "class-validator";
import { Transform } from "class-transformer";

export class CreateProductDTO {
  @IsNotEmpty()
  @IsString()
  title!: string;

  @IsNotEmpty()
  @IsNumber()
  @Transform(({ value }) => parseInt(value))
  price!: number;
}
