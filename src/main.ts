import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import mongoose from 'mongoose';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const options = new DocumentBuilder()
    .setTitle('API rest')
    .setDescription('API ecommerce')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document)

  await connectToMongoDB();
  await app.listen(3000);
}
bootstrap();

async function connectToMongoDB() {
  await mongoose.connect("mongodb+srv://norber:CoderHouse33@cluster0.bpobi.mongodb.net/nestjs?retryWrites=true&w=majority");
  console.log(`Conectado a MongoDb`);
}