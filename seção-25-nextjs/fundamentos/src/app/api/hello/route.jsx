import { cookies, headers } from "next/headers";

export async function GET(request) {
  const cookieStore = await cookies();
  const headersList = await headers();

  console.log("request", request);
  console.log("cookieStore", cookieStore);
  console.log("headersList (teste)", headersList.get("teste"));

  return Response.json(
    { name: "Hello World", method: request.method },
    {
      headers: {
        "Set-Cookie": "token=123",
      },
      status: 200,
    }
  );
}
