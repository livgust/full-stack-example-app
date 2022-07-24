# STAGE 1
FROM node:16-alpine
WORKDIR /usr
COPY . .
RUN npm ci
RUN npm run build -w server
EXPOSE 3000
CMD ["node", "./server/build/src/index.js"]