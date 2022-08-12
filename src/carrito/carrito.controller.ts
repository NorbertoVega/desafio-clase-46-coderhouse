import { Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ProductoService } from 'src/producto/producto.service';
import { CarritoService } from './carrito.service';

@Controller('carrito')
export class CarritoController {

    constructor(private readonly cartService: CarritoService, private readonly productService: ProductoService) { }

    @Post()
    async create() {
        const cartToSave = { timestamp: Date.now(), productos: [] };
        const id = await this.cartService.guardarCarritoService(cartToSave);

        return { idCarritoGuardado: id };
    }

    @Post(':cartId/productos/:productId')
    async addProductToCart(@Param('cartId') cartId: string, @Param('productId') productId: string) {
        const productById = await this.productService.getProductoByIdService(productId);
        if (productById === null) {
            return { error: -4, descripcion: 'No se pudo agregar al carrito. Producto no encontrado.' };
        }

        const cartById = await this.cartService.getCarritoByIdService(cartId);
        if (cartById === null) {
            return { error: -4, descripcion: 'No se pudo agregar al carrito. Carrito no encontrado.' };
        }
        cartById.productos.push(productById);

        const idUpdated = await this.cartService.updateCarritoByIdService(cartId, cartById);
        if (idUpdated == null) {
            return { error: -5, descripcion: 'No se pudo agregar al carrito. Hubo un problema al actualizar el carrito.' };
        }
        return { idCarritoActualizado: idUpdated };
    }

    @Get(':cartId')
    async findOne(@Param('cartId') cartId: string) {
        const cartById = await this.cartService.getCarritoByIdService(cartId);
        if (cartById === null) {
            return { error: -4, descripcion: 'No se pudieron obtener los productos. Carrito no encontrado.' };
        }
        return { productos: cartById.productos };
    }

    @Delete(':id')
    async remove(@Param('id') id: string) {
        const idDeleted = await this.cartService.borrarCarritoService(id);
        if (idDeleted === null) {
            return { error: -4, descripcion: 'Carrito no encontrado. No se pudo eliminar.' };
        }
        return { idCarritoEliminado: idDeleted };
    }

    @Delete(':cartId/productos/:productId')
    async removeProductFromCart(@Param('cartId') cartId: string, @Param('productId') productId: string) {
        const cartById = await this.cartService.getCarritoByIdService(cartId);
        if (cartById === null) {
            return { error: -4, descripcion: 'No se pudo eliminar del carrito. Carrito no encontrado.' };
        }

        if (!this.cartService.productoExisteEnCarritoService(cartById, productId)) {
            return { error: -4, descripcion: 'No se pudo eliminar del carrito. Producto no encontrado.' };
        }

        const idUpdated = await this.cartService.borrarProductoDelCarritoService(cartById, cartId, productId);
        if (idUpdated == null) {
            return { error: -5, descripcion: 'No se pudo eliminar del carrito. Hubo un problema al actualizar el carrito.' };
        }
        return { idCarritoActualizado: idUpdated };
    }
}
