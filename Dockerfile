FROM node:latest
COPY . /app
WORKDIR /app
RUN npm ci && npm run build
CMD ["npm", "start"]