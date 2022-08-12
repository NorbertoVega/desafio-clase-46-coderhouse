import ContenedorMongoDB from '../../db/ContenedorMongoDB';
import { CarritoModel } from '../../db/mongooseModels/CarritoModel';

let instance = null;

class CarritosDaoMongoDB extends ContenedorMongoDB {

    constructor() {
        super(CarritoModel);
    }

    static getInstance() {
        if (!instance) {
            instance = new CarritosDaoMongoDB();
        }

        return instance;
    }
}

export default CarritosDaoMongoDB;