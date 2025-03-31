# Etapa 1: Construcción de la aplicación
FROM node:18-alpine AS builder
WORKDIR /app

# Copia los archivos de dependencias y los instala
COPY package*.json ./
RUN npm install

# Copia el resto del proyecto y genera la build
COPY . .
RUN npm run build

# Etapa 2: Servir la build con Nginx
FROM nginx:alpine
# Copia la carpeta de la build generada en la etapa anterior al directorio que Nginx usa para servir archivos
COPY --from=builder /app/dist /usr/share/nginx/html/portafolio

# Expone el puerto 80
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
