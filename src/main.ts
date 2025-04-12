import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import swaggerConfig from './config/swagger.config';
import appConfig from './config/app-config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  swaggerConfig(app);
  appConfig(app);

  await app.listen(3000);
}
bootstrap();
