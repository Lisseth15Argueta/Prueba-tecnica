#Etapa 1: Construccion
FROM node:18 AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

#Etapa 2 Produccion
FROM node:18

WORKDIR /app

COPY --from=builder /app/package*.json ./
RUN npm install --only=Produccion
COPY --from=builder /app/dist ./dist

CMD ["node",  "dist/index.js"]

EXPOSE 5500