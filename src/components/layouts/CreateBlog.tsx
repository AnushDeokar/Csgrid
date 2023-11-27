"use client";
import React, { useState } from "react";
import { ImageIcon } from "@radix-ui/react-icons";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.bubble.css";
import { Button } from "@/components/ui/Button";
import { Icons } from "@/components/Icons";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import axios from "axios";

// eslint-disable-next-line
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
function CreateBlog({ userId }: { userId: string }): React.ReactNode {
  const router = useRouter();
  const [open, setOpen] = useState<boolean>(false);
  const [title, setTitle] = useState<string>("");
  const [rotation, setRotation] = useState<number>(0);
  const [file, setFile] = useState<string | null>(null);
  const [content, setContent] = useState("");
  const [isPending, setIsPending] = useState<boolean>(false);

  const handleClick = () => {
    setRotation(rotation + 45);
    setOpen(!open);
  };

  const handleInput = (event: any) => {
    event.target.style.height = "auto";
    event.target.style.height = event.target.scrollHeight + "px";
  };

  const handleFileChange = (event: any) => {
    const file = event.target.files[0];

    if (file !== null) {
      const imageUrl = URL.createObjectURL(file);
      setFile(imageUrl);
    }
  };

  const slugify = (str: string) =>
    str
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_-]+/g, "-")
      .replace(/^-+|-+$/g, "");

  const handlePublish = (event: React.MouseEvent<HTMLButtonElement>) => {
    try {
      if (userId && file) {
        setIsPending(true);
        const data = {
          title: title,
          slug: slugify(title),
          content: content,
          category: "Frontend Development",
          image: "",
          userId: userId,
        };
        axios
          .post("/api/post", data)
          .then((res) => {
            toast.success("Blog successfully created!");
            setIsPending(false);
            router.push("/");
          })
          .catch((err) => {
            console.log(err);
          });
      } else if (!file) {
        toast.error("Kindly Upload a Blog Cover Image!");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <React.Fragment>
      <div className="lg:px-[25%] xl:px-[27%] md:px-[10%] px-[2%] leading-7 flex flex-col gap-4 pt-10">
        <div className="flex justify-between mb-4">
          <Button className="w-fit" variant="destructive">
            Discard
            <span className="sr-only">Publish</span>
          </Button>
          <Button
            className="w-fit"
            onClick={(e: any) => {
              handlePublish(e);
            }}
          >
            {isPending && (
              <Icons.spinner
                className="mr-2 h-4 w-4 animate-spin"
                aria-hidden="true"
              />
            )}
            Publish
            <span className="sr-only">Publish</span>
          </Button>
        </div>
        <textarea
          onInput={handleInput}
          value={title}
          onChange={(e: any) => setTitle(e.target.value)}
          placeholder="Title"
          className="md:text-5xl text-3xl font-bold bg-transparent outline-none h-auto w-full"
          style={{ resize: "none" }}
        />
        {file !== null && (
          <img src={file} alt="Selected" className="rounded-md w-full" />
        )}
      </div>
      <div className="lg:px-[22%] xl:px-[23%] md:px-[7%] px-[1%] leading-7 flex gap-4">
        <div className="flex gap-4 mb-4">
          <img
            src="plus.png"
            className="border rounded-full p-2 h-10 w-10 mr-auto cursor-pointer transition-transform duration-200 ease-in-out"
            // alt='Cross Icon'
            onClick={handleClick}
            style={{ transform: `rotate(${rotation}deg)` }}
          />
          {open && (
            <div className="flex gap-4">
              <input
                type="file"
                id="image"
                onChange={handleFileChange}
                style={{ display: "none" }}
              />
              <button>
                <label htmlFor="image" className="flex gap-2 items-center">
                  <ImageIcon width={20} height={20} />
                  <span className="text-sm">Upload Cover Image</span>
                </label>
              </button>
            </div>
          )}
        </div>
      </div>
      <div className="lg:px-[25%] xl:px-[27%] md:px-[10%] px-[2%] leading-7">
        <ReactQuill
          className="w-full outline-none border-0 text-lg"
          theme="bubble"
          value={content}
          onChange={setContent}
          placeholder="Start Writing your Blog ..."
          style={{ outline: "none", padding: "0" }}
        />
      </div>
    </React.Fragment>
  );
}

export default CreateBlog;
