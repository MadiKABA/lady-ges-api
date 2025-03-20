# Étape 1 : Builder l'application
FROM node:18 AS builder

# Définir le répertoire de travail dans le conteneur
WORKDIR /app

# Copier les fichiers package.json et package-lock.json
COPY package.json package-lock.json ./

# Installer uniquement les dépendances nécessaires pour la build
RUN npm ci --only=production --legacy-peer-deps

# Installer Nest CLI globalement
RUN npm install -g @nestjs/cli

# Copier le reste des fichiers de l'application
COPY . .

# Générer le client Prisma
RUN npx prisma generate

# Compiler l'application pour la production
RUN npm run build

# Étape 2 : Créer une image minimaliste pour l'exécution de l'application
FROM node:18.16

# Définir le répertoire de travail dans le conteneur
WORKDIR /app

# Copier les fichiers nécessaires depuis l'image builder
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/prisma ./prisma
COPY --from=builder /app/lang ./lang
COPY --from=builder /app/package.json ./package.json

# Copier le fichier de configuration .env
COPY .env .env

# Exposer le port sur lequel l'application va tourner
EXPOSE 3000

# Démarrer l'application en mode production
CMD ["sh", "-c", "npx prisma migrate deploy && node dist/main"]
