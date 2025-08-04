
# Dockerfile for IBM Code Engine Deployment
FROM node:18
WORKDIR /app
COPY backend/ ./backend/
WORKDIR /app/backend
RUN npm install
CMD ["node", "app.js"]
