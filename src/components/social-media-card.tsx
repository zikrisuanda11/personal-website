import Link from "next/link";

export default function SocialMediaCard({
  title,
  link,
  image,
  rotate,
}: {
  title: string;
  link: string;
  image: string;
  rotate?: string;
}) {
  return (
    <Link
      href={link}
      className={`flex flex-col border-2 border-black bg-white p-10 rounded-md aspect-square ${rotate} shadow-black hover:shadow-none duration-100 translate-x-0 translate-y-0 hover:translate-x-0.5 hover:translate-y-0.5 `}
    >
      <div className="flex flex-col items-center ">
        <img src={image} className="w-16" />
        <p className="font-bold">{title}</p>
      </div>
      <div></div>
    </Link>
  );
}
