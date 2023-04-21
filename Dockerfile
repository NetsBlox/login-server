FROM node:lts-alpine
WORKDIR /netsblox-login
COPY . .
RUN npm ci
CMD ["npm", "start"]
