const server = Bun.serve({
    port: Bun.env.PORT || 8080,
    fetch(req) {
      // return new Response("Bun bun world!");
      const url= new URL(req.url);
      if(url.pathname === "/")   return new Response("Home page");
      
  if(url.pathname === "/blog") return new Response("blog page");
  if(url.pathname === "/ebrardev") return new Response("ebrardev page");
  return new Response("404 not found", {status: 404});


    },
    
  });
  
  console.log(`Listening on http://localhost:${server.port} ...`);
  