const server = Bun.serve({
    port: process.env.PORT ,
    fetch(req) {
      return new Response("Bun bun dsklds!");
    },
  });
  
  console.log(`Listening on http://localhost:${server.port} ...`);
  