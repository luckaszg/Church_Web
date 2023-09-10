FROM node:18-alpine

WORKDIR /app

COPY package.json .

RUN npm install --legacy-peer-deps

RUN chown -R node:node /app/node_modules

COPY . .

CMD ["npm", "run", "dev"]