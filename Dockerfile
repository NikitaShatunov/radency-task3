FROM node

WORKDIR /app

COPY package.json /app

RUN npm isntall

COPY . .

EXPOSE 4000 

CMD ["npm", "start"]

