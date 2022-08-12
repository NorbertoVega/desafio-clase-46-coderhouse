import { Injectable } from '@nestjs/common';
import CarritosRepo from '../repository/carritos.repository';

@Injectable()
export class CarritoService {
    cartRepo;

    constructor() {
        this.cartRepo = new CarritosRepo();
    }

    async guardarCarritoService(cartToSave) {
        return await this.cartRepo.save(cartToSave);
    }

    async borrarCarritoService(id) {
        return await this.cartRepo.deleteById(id);
    }

    async getCarritoByIdService(cartId) {
        return await this.cartRepo.getById(cartId);
    }

    async updateCarritoByIdService(cartId, cart) {
        return await this.cartRepo.updateById(cartId, cart);
    }

    async productoExisteEnCarritoService(cart, productId) {
        const filtered = cart.productos.filter(p => p._id.toString() == productId);

        if (filtered.length === 0)
            return false;
        return true;
    }

    async borrarProductoDelCarritoService(cart, cartId, productId) {
        cart.productos = cart.productos.filter(p => p._id.toString() != productId);
        return await this.cartRepo.updateById(cartId, cart);
    }
}
