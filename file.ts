const data = "lorem ipsum dolor sit amet"

await Bun.write("index.txt", data)

const file = await Bun.file("index.html")
console.log(await file.text())
console.log(file.size)
console.log(await file.slice(0, 5))
console.log(await file.stream())
console.log(await file.arrayBuffer())