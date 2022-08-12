import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ProductDTO } from 'src/dto/producto.dto';
import { Producto } from 'src/interfaces/producto.interface';
import { ProductoService } from './producto.service';

@Controller('producto')
export class ProductoController {
    constructor(private readonly productService: ProductoService) { }

    @Post()
    async create(@Body() productDto: ProductDTO) {
        productDto.timestamp = Date.now();
        const id = await this.productService.saveProductService(productDto);
        return { idProductoGuardado: id };
    }

    @Get()
    async findAll(): Promise<Producto> {
        return await this.productService.getAllProductsService();
    }

    @Get(':id')
    async findOne(@Param('id') id: string): Promise<Producto> {
        const productById = await this.productService.getProductoByIdService(id);
        return productById;
    }

    @Patch(':id')
    async update(@Param('id') id: string, @Body() productDto: ProductDTO) {
        productDto.timestamp = Date.now();
        const idUpdated = await this.productService.updateProductByIdService(id, productDto);
        if (idUpdated !== null)
            return { idProductoActualizado: idUpdated };

        return { error: -4, descripcion: 'Producto no encontrado. No se pudo actualizar.' };
    }

    @Delete(':id')
    async remove(@Param('id') id: string) {
        const idDeleted = await this.productService.deleteProductByIdService(id);
        if (idDeleted === null) {
            return { error: -4, descripcion: 'Producto no encontrado. No se pudo eliminar.' };
        }
        return { idProductoEliminado: idDeleted };
    }

}
