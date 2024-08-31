import Link from "next/link";
import { cn } from "@/lib/utils";

export default function SocialMediaCard({
  title,
  link,
  image,
  rotate,
  classname,
}: {
  title: string;
  link: string;
  image: string;
  rotate?: string;
  classname?: string;
}) {
  return (
    <Link
      href={link}
      className={cn(
        "flex flex-col border-2 border-black bg-white p-10 rounded-md aspect-square shadow-black hover:shadow-none duration-100 translate-x-0 translate-y-0 hover:translate-x-0.5 hover:translate-y-0.5 ",
        classname,
      )}
    >
      <div className="flex flex-col items-center justify-center gap-2 ">
        <img src={image} className="w-16" />
        <p className="font-bold">{title}</p>
      </div>
      <div></div>
    </Link>
  );
}
