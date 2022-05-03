import { IsNotEmpty } from "class-validator"

export class CreateVideoDto {
    @IsNotEmpty()
    userId: Number;

    @IsNotEmpty()
    url: String;
}
