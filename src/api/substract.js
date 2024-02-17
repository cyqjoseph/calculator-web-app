import querystring from "querystring";

export async function handler(event) {
  const parsedBody = querystring.parse(event.body);
  console.log(parsedBody);
  const num1 = parseFloat(parsedBody.num1) || 0;
  const num2 = parseFloat(parsedBody.num2) || 0;

  const result = num1 - num2;

  return {
    statusCode: 200,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify({ result }),
  };
}
