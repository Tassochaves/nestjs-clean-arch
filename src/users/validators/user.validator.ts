import { MaxLength, IsString, IsNotEmpty, IsNumber } from "class-validator";
import { UserProps } from "../domain/entities/user.entity";

class UserRules {

  @MaxLength(255)
  @IsString()
  @IsNotEmpty()
  name: string;

  email: string;
  password: string;
  createdAt: Date;

  constructor({email, name, password, createdAt}: UserProps){
    Object.assign(this, {email, name, password, createdAt});
  }
}
