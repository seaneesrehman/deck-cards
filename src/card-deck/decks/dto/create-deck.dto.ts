import {IsNotEmpty } from 'class-validator';
export class CreateDeckDTO {
    @IsNotEmpty()
    readonly type:string ;
    @IsNotEmpty()
    readonly shuffled:boolean;
}


