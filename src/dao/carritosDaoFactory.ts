import CarritosDaoMongoDB from './carritos/CarritosDaoMongoDB';

class CarritosDaoFactory {
    create() {
        return CarritosDaoMongoDB.getInstance();
    }
}

export default CarritosDaoFactory;