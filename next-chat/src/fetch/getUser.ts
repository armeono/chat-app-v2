import axios from "axios";

export async function getUser(name?: string) {
  try {
    const res = await axios.get(`/api/user/${name}`);
    return res.data;
  } catch (err) {
    console.log(err);
  }
}
