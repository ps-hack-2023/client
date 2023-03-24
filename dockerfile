FROM node:lts AS react
WORKDIR /app
COPY package*.json .
RUN npm install
COPY . .
ENV NODE_OPTIONS=--openssl-legacy-provider
RUN npm run build

FROM nginx
COPY --from=react /app/build /usr/share/nginx/html
COPY nginx/nginx.conf /etc/nginx/nginx.conf
# Base image includes a useful CMD