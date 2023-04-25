const env = process.env;

console.log("Config...");

export const PORT = env.PORT ?? "8080";
export const HOST = env.HOST ?? "localhost";
export const SERVER_URL = `http://${HOST}:${PORT}`;
