FROM cypress/included:15.9.0

WORKDIR /e2e
COPY package*.json ./
RUN npm ci
COPY . .

CMD ["npm", "run", "cy:parallel"]
