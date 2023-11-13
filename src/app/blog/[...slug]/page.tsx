import React from "react";

function BlogPage(): React.ReactNode {
  return (
    <div className="lg:px-[25%] xl:px-[27%] md:px-[10%] px-[2%] leading-7 flex flex-col gap-4">
      <p className="text-muted-foreground mt-4">
        Published on July 4, 2023 - 4min
      </p>
      <h1 className="md:text-5xl text-3xl font-bold">
        The Art and Thrills of Computer Science
      </h1>

      <div className="flex h-10 my-4 items-center gap-2">
        <img
          src="https://api.dicebear.com/avatar.svg"
          className="h-full rounded-full"
        />
        <div className="flex flex-col justify-center gap-0">
          <h3 className="font-semibold">Anush Deokar</h3>
          <p className="text-muted-foreground text-sm">
            Software developer | Tech Enthusisast
          </p>
        </div>
      </div>
      <img src="/cs2.png" className="rounded-md w-full" />
      <h3 className="text-2xl border-b font-bold py-4">Introduction</h3>
      <p className="mt-4">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos enim rem
        labore, dolore quos libero neque amet quam dolorem, aut similique
        adipisci iure deserunt commodi quis magni maiores nam provident.
      </p>
    </div>
  );
}

export default BlogPage;
