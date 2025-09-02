import { cookies, headers } from "next/headers";

export async function GET(request) {
  // const cookieStore = await cookies();
  // const headersList = await headers();

  const searchParamsMap = new URL(request.url).searchParams;
  const searchParams = Object.fromEntries(searchParamsMap);

  // console.log("request", request);
  // console.log("searchParams", searchParams);

  // console.log("cookieStore", cookieStore);
  // console.log("headersList (teste)", headersList.get("teste"));

  return Response.json(
    { name: "Hello World", searchParams, method: request.method },
    {
      headers: {
        "Set-Cookie": "token=123",
      },
      status: 200,
    }
  );
}
