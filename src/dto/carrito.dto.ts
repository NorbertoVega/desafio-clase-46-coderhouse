import { ApiProperty } from "@nestjs/swagger";
import { Producto } from "src/interfaces/producto.interface";

export class CartDTO {

    @ApiProperty()
    productos: Producto[];

    @ApiProperty()
    timestamp: Number;

}