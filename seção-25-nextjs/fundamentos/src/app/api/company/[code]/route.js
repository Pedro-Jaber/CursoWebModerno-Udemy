export async function GET(request, { params }) {
  const searchParamsMap = new URL(request.url).searchParams;
  const searchParams = Object.fromEntries(searchParamsMap);

  const paramsObj = await params;
  // await params;

  // console.log("request", request);
  console.log("searchParams", searchParams);
  console.log("params", paramsObj);

  return Response.json(
    { paramsObj, searchParams, method: request.method },
    {
      headers: {
        "Set-Cookie": "token=123",
      },
      status: 200,
    }
  );
}
