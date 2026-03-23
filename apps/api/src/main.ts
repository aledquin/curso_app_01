import "reflect-metadata";
import { NestFactory } from "@nestjs/core";
import { FastifyAdapter, NestFastifyApplication } from "@nestjs/platform-fastify";
import { AppModule } from "./app.module";
import { EnvConfig } from "./config/env";

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter()
  );

  await app.listen(EnvConfig.port, "0.0.0.0");
}

bootstrap().catch((bootstrapError: unknown) => {
  console.error("API bootstrap failed", bootstrapError);
  process.exit(1);
});
