export const configEnv = (NODE_ENV?: string): string => {
  switch (NODE_ENV) {
    case 'development':
      return '.env.development';
    case 'production':
      return '.env.production';
    default:
      return '.env';
  }
};
