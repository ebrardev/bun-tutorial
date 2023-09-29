import axios from "axios";

async function getUser() {
  const response = await axios.get("https://jsonplaceholder.typicode.com/users");
  return response.data;
}
export default getUser;