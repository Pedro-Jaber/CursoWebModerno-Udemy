import React from "react";

import Linker from "@/components/navigations/Linker";

export default function Blog() {
  return (
    <React.Fragment>
      <h1 className="text-center">Blog</h1>

      <h2 className="text-center">Posts</h2>

      <div className="container d-flex flex-column gap-2">
        <Linker href="/blog/post/1" title="Post 1" />
        <Linker href="/blog/post/2" title="Post 2" />
        <Linker href="/blog/post/3" title="Post 3" />
        <Linker href="/blog/post/4" title="Post 4" />
      </div>
    </React.Fragment>
  );
}
