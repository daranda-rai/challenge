FROM mcr.microsoft.com/playwright:focal
COPY package.json ./
RUN npm install
COPY ./ ./
RUN npx playwright install