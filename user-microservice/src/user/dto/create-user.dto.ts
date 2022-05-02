import { IsNotEmpty, IsNumber } from "class-validator";


export class CreateUserDto {
    
    @IsNotEmpty()
    name: string;
  
    @IsNotEmpty()
    last_name: string;
  
    @IsNumber()  
    @IsNotEmpty()
    quantity_videos: number;
}
