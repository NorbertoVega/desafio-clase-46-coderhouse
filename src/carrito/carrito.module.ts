import { Module } from '@nestjs/common';
import { ProductoService } from 'src/producto/producto.service';
import { CarritoController } from './carrito.controller';
import { CarritoService } from './carrito.service';

@Module({
  controllers: [CarritoController],
  providers: [CarritoService, ProductoService]
})
export class CarritoModule {}
