import { ApiProperty } from "@nestjs/swagger";

export class ProductDTO {
    @ApiProperty()
    readonly codigo: String;

    @ApiProperty()
    readonly descripcion: String;

    @ApiProperty()
    readonly nombre: String;

    @ApiProperty()
    readonly precio: Number;

    @ApiProperty()
    readonly stock: Number;

    @ApiProperty()
    timestamp: Number;

    @ApiProperty()
    readonly url: String;
}