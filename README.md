# bun-tutorial
 ## installation
 npm -g bun
To install dependencies:
## Setup
bun init 

## Start
bun run index.ts

## create server
const server = Bun.serve({
    port: 3000,
    fetch(req) {
      return new Response("Bun bun bunnn!");
    },
  });
  
  console.log(`Listening on http://localhost:${server.port} ...`);
  ## watch mode

  bun --watch index.ts
  ## hot mmode
  bun --hot index.ts

  ## enviroment variables
  no need install dotenv packages