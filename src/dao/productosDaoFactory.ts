import ProductosDaoMongoDB from './productos/ProductosDaoMongoDB.js';

class ProductosDaoFactory {
    create() {
        return ProductosDaoMongoDB.getInstance();
    }
}

export default ProductosDaoFactory;