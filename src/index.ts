import getUser from "./api";


(async () => {
    const user = await getUser();
    document.querySelector('h1').innerHTML = JSON.stringify(user);
})()
