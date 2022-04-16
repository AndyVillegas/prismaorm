FROM node:17-alpine

RUN mkdir /app
WORKDIR /app
COPY package.json ./package.json
COPY prisma ./prisma/
RUN npm install
RUN npx prisma generate
COPY . .

CMD ["npm", "start"]