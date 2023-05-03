import { type RequestHandler } from "@builder.io/qwik-city";

export const onRequest: RequestHandler = async (requestEvent) => {
  requestEvent.headers.set("Content-Type", "text/event-stream");
  requestEvent.headers.set("Connection", "keep-alive");
  requestEvent.headers.set("Cache-Control", "no-cache");

  const count = Math.floor(Math.random() * 100);

  const data = `data: ${count}\n\n`;

  requestEvent.send(200, data);
};
