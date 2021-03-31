Install firefox execution for your container:


```Dockerfile
FROM node:14

RUN apt-get update \
    && apt-get install -y wget gnupg fonts-ipafont-gothic fonts-freefont-ttf firefox-esr --no-install-recommends \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

RUN PUPPETEER_PRODUCT=firefox npm install puppeteer

COPY . .

CMD [ "node", "src/index.js" ]
```
