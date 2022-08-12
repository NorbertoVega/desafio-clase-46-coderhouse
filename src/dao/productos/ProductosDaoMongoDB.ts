import ContenedorMongoDB from '../../db/ContenedorMongoDB';
import { ProductoModel } from '../../db/mongooseModels/ProductoModel';

let instance = null;

class ProductosDaoMongoDB extends ContenedorMongoDB {

    constructor() {
        super(ProductoModel);
    }

    static getInstance() {
        if (!instance) {
            instance = new ProductosDaoMongoDB();
        }

        return instance;
    }
}

export default ProductosDaoMongoDB;