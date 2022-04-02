import mysql from 'serverless-mysql';
const db = mysql({
  config: {
    host: "127.0.0.1",
    port: "3308",
    database: "laravel_test",
    user: "root",
    password: ""
  }
});

export default async function excuteQuery({ query, values }) {
  try {
    const results = await db.query(query, values);
    await db.end();
    return results;
  } catch (error) {
    return { error };
  }
}