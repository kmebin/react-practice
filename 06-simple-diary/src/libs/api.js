import axios from "axios";

const client = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  headers: {
    "Content-Type": "application/json",
  },
});

export const getAllDiaries = async () => {
  try {
    const { data } = await client.get("/comments");

    return data.slice(0, 20).map((o) => {
      return {
        id: o.id,
        author: o.email,
        content: o.body,
        emotion: Math.floor(Math.random() * 5) + 1,
        date: new Date().toLocaleString(),
      };
    });
  } catch (err) {
    throw new Error(err);
  }
};
