import React from "react";

import Linker from "@/components/navigations/Linker";

export default function Blog() {
  return (
    <React.Fragment>
      <h1 className="text-center">Blog</h1>

      <h2 className="text-center">Posts</h2>
      <div className="container d-flex flex-column gap-2">
        <Linker href="/blogTags/post/teste/1" title="Post teste 1" />
      </div>
    </React.Fragment>
  );
}
