// import Link from 'next/link'
import React from "react";

function NotfoundPage() {
  return (
    <div className="h-[400px] flex flex-col items-center m-auto justify-center">
      <p>404</p>
      <h1>The blog you requested was not found</h1>
      {/* <Link href="/blogs">
            Checkout Other Blogs
        </Link> */}
    </div>
  );
}

export default NotfoundPage;
