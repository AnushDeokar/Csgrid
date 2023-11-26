"use client";
import React, { useState } from "react";
import Image from "next/image";
import { ImageIcon } from "@radix-ui/react-icons";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.bubble.css";

// eslint-disable-next-line
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

function WritePage() {
  const [open, setOpen] = useState<boolean>(false);
  const [rotation, setRotation] = useState<number>(0);
  const [file, setFile] = useState<string | null>(null);
  const [value, setValue] = useState("");

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

  return (
    <div className="flex flex-col w-full px-[3%]">
      <div className="lg:px-[25%] xl:px-[27%] md:px-[10%] px-[2%] leading-7 flex flex-col gap-4 pt-10">
        <textarea
          onInput={handleInput}
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
              <button className="">
                <label htmlFor="image">
                  <ImageIcon width={20} height={20} />
                </label>
              </button>
              <button className="">
                <Image src="/external.png" alt="" width={16} height={16} />
              </button>
              <button className="">
                <Image src="/video.png" alt="" width={16} height={16} />
              </button>
            </div>
          )}
        </div>
      </div>
      <div className="lg:px-[25%] xl:px-[27%] md:px-[10%] px-[2%] leading-7">
        <ReactQuill
          className="w-full outline-none border-0 text-lg"
          theme="bubble"
          value={value}
          onChange={setValue}
          placeholder="Start Writing your Blog ..."
          style={{ outline: "none", padding: "0" }}
        />
      </div>
    </div>
  );
}

export default WritePage;
