import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';

const origins = '*';

export const corsOptions: CorsOptions = {
  origin: origins,
  credentials: true,
};
