import Link from "next/link";
import { cn } from "@/lib/utils";

export default function Button({
  title,
  link,
  target = "_self",
  classname,
}: {
  title: string;
  link: string;
  target?: string;
  classname?: string;
}) {
  return (
    <>
      <Link
        target={target}
        href={link}
        className={cn(
          " bg-[#69CF95] font-bold hover:shadow-none shadow-black border-2 border-black px-8 py-4 w-fit rounded-md duration-100 translate-x-0 translate-y-0 hover:translate-x-0.5 hover:translate-y-0.5 ",
          classname,
        )}
        // className=" bg-[#69CF95] font-bold hover:shadow-none shadow-black border-2 border-black px-8 py-4 w-fit rounded-md duration-100 translate-x-0 translate-y-0 hover:translate-x-0.5 hover:translate-y-0.5 "
      >
        {title}
      </Link>
    </>
  );
}
