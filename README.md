## Bun Tutorial
![](https://cdn.discordapp.com/attachments/1127962694398509088/1157361463699177553/Ekran_Resmi_2023-09-29_18.57.10.png?ex=6518545b&is=651702db&hm=6a6cc230978eb800b23cb183af93ca8bbfd45dd72381dc1ab533203313b66bdd&)

### Installation
`  npm -g bun`
### Setup
`  bun init `

### Start
`  bun run index.ts `

### Create Server
```javascript
const server = Bun.serve({
    port: 3000,
    fetch(req) {
      return new Response("Bun bun hello!");
    },
  });

  console.log(`Listening on http://localhost:${server.port} ...`);
  ```
  ### Watch Mode
`    bun --watch index.ts `
  ## Hot Mode
  `   bun --hot index.ts`

  ### Enviroment Variables
  no need install dotenv packages

  ### Scripts
 
```javascript
  "scripts": {
    "dev": "bun --watch  index.ts",
    "start": "bun run index.ts"

  },

```
  ## simple route
      // return new Response("Bun bun dsklds!");
      const url= new URL(req.url);
      if(url.pathname === "/")   return new Response("Home page");

 ## node modules
 import path from 'path';


const filepath = path.join("src", "modules", "index.ts");
const filename = path.basename(filepath);
console.log(filename)

## file I/O
const data = "lorem ipsum dolor sit amet"

await Bun.write("index.html", data)

const file = await Bun.file("index.html")
console.log(await file.text())
console.log(file.size)
console.log(await file.slice(0, 5))
console.log(await file.stream())
console.log(await file.arrayBuffer())

## bun test
import {describe,expect,test,beforeAll} from "bun:test";

## bundler
bun build ./src/index.ts --outfile=./dist/bundle.js

## bundler watch mode
bun build ./src/index.ts --outfile=./dist/bundle.js --watch

## react & jsx 
app.tsx
bun install react  react-dom 
