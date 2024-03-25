# Usa una imagen base con Node.js instalado
FROM node:14-alpine 

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app 

# Copia el resto de los archivos de la aplicación
COPY . . 

# Construye la aplicación React
RUN npm install

# Comando para ejecutar la aplicación cuando se inicie el contenedor
CMD ["npm", "start"]