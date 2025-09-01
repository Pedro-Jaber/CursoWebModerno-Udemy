"use client";

import { useParams } from "next/navigation";

export default function Post(props) {
  // const params = await props.params;
  // const postCode = params.postCode;
  // return <h1>Post {postCode}</h1>;

  const params = useParams();
  console.log("params", params);
  const postCode = params.postCode;
  return <h1>Post {postCode}</h1>;
}
