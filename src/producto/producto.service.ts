import { Injectable } from '@nestjs/common';
import ProductosRepo from "../repository/productos.repository.js";

@Injectable()
export class ProductoService {
    productRepo;

    constructor() {
        this.productRepo = new ProductosRepo();
    }

    async getAllProductsService() {
        return await this.productRepo.getAll();
    }
    
    async getProductoByIdService(id) {
        return await this.productRepo.getById(id);
    }
    
    async saveProductService(productToSave) {
        return await this.productRepo.save(productToSave);
    }
    
    async updateProductByIdService(id, productToUpdate) {
        return await this.productRepo.updateById(id, productToUpdate);
    }
    
    async deleteProductByIdService(id) {
        return await this.productRepo.deleteById(id);
    }
}
