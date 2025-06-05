# ---------------------------
# Etapa 1: Build con Node.js
# ---------------------------
FROM node:18-alpine AS build

# 1.1) Directorio de trabajo dentro del contenedor
WORKDIR /app

# 1.2) Copiamos package.json y lockfile para aprovechar cache de dependencias
COPY package.json pnpm-lock.yaml* ./  
# (Si usas npm en lugar de pnpm, reemplaza pnpm-lock.yaml* por package-lock.json)

# 1.3) Instalamos pnpm y dependencias
RUN npm install -g pnpm && pnpm install --frozen-lockfile

# 1.4) Copiamos el resto del código fuente
COPY . .

# 1.5) Generamos el build estático de Astro
RUN pnpm build

# ------------------------------------------------
# Etapa 2: Servir con Nginx (imagen final muy ligera)
# ------------------------------------------------
FROM nginx:alpine AS production

# 2.1) Eliminamos el contenido que trae Nginx por defecto
RUN rm -rf /usr/share/nginx/html/*

# 2.2) Copiamos el contenido generado (dist/) desde la etapa de build
COPY --from=build /app/dist/ /usr/share/nginx/html/

# 2.3) (Opcional) Si tu sitio necesita configuración adicional de Nginx,
# podrías copiar un default.conf personalizado, pero en este caso
# el Nginx por defecto con root=/usr/share/nginx/html funciona bien.
# Ejemplo:
# COPY nginx.conf /etc/nginx/conf.d/default.conf

# 2.4) Exponemos el puerto 80 (por donde Nginx escuchará)
EXPOSE 80

# 2.5) Arrancamos nginx en primer plano
CMD ["nginx", "-g", "daemon off;"]
