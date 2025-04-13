import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import swaggerConfig from './config/swagger.config';
import appConfig from './config/app-config';
import { EnvironmentService } from './common/environment/environment.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  swaggerConfig(app);
  appConfig(app);

  const configService = app.get(EnvironmentService);

  await app.listen(configService.getPort());
}
bootstrap();
