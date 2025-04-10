import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class EnvironmentService {
  constructor(private readonly configService: ConfigService) {}

  private getEnvVariable<T>(key: string): T {
    const value = this.configService.get<T>(key);
    if (value === undefined || value === null) {
      throw new Error(`Environment variable ${key} is not set`);
    }
    return value;
  }

  getNodeEnv(): string {
    return this.getEnvVariable<string>('NODE_ENV');
  }
  getPort(): string {
    return this.getEnvVariable<string>('PORT');
  }
  getDatabaseUrl(): string {
    return this.getEnvVariable<string>('DATABASE_URL');
  }
}
