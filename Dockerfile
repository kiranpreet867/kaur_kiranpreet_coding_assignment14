FROM node:20-alpine AS build

WORKDIR /kaur_kiranpreet_final_site

COPY package.json ./

RUN npm install

COPY . .

RUN npm run build

FROM nginx:1.27-alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /kaur_kiranpreet_final_site/build /usr/share/nginx/html

EXPOSE 5575

CMD ["nginx", "-g", "daemon off;"]