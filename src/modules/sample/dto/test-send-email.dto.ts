import { IsEmail, IsNotEmpty } from "class-validator";

export class TestSendEmailDTO {
  @IsNotEmpty()
  @IsEmail()
  email!: string;
}
