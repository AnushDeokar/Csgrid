import Link from "next/link";
import React from "react";
import { ThemeSwitcher } from "../ToggleTheme";
import { CropIcon } from "@radix-ui/react-icons";
import { footerData, me } from "@/config/layout";

function MainFooter(): React.ReactNode {
  return (
    <footer className="border-t mt-[100px] pt-10">
      <div className="grid lg:grid-cols-5 md:grid-cols-4 gap-y-8  gap-x-2 px-[2%] lg:px-[5%] grid-cols-1 sm:grid-cols-2">
        <Link href="/">
          <h1 className="font-semibold text-lg">
            <CropIcon height={45} width={45} />
            Csgrid
          </h1>
        </Link>
        {footerData.map((data, ind) => (
          <div
            className="flex flex-col text-muted-foreground gap-2 text-sm"
            key={ind}
          >
            <p className="font-semibold text-primary mb-4 text-base">
              {data.header}
            </p>
            {data.items.map((item, i) => (
              <Link key={i} href={item.href}>
                <p>{item.name}</p>
              </Link>
            ))}
          </div>
        ))}
      </div>
      <div className="w-full text-muted-foreground py-10 px-10 text-base flex justify-between items-center">
        <div>
          Developed by &nbsp;
          <Link href={me.github}>
            <span className="font-semibold underline-offset-2 underline cursor-pointer">
              Anush Deokar
            </span>
          </Link>
        </div>
        <div>
          <ThemeSwitcher isreverse={false} />
        </div>
      </div>
    </footer>
  );
}

export default MainFooter;
