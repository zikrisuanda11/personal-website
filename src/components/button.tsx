import Link from "next/link";

export default function Button({
  title,
  link,
  target = "_self",
}: {
  title: string;
  link: string;
  target?: string;
}) {
  return (
    <>
      <Link
        target={target}
        href={link}
        className="bg-[#69CF95] font-bold hover:shadow-none shadow-black border-2 border-black px-8 py-4 w-fit rounded-md duration-100 translate-x-0 translate-y-0 hover:translate-x-0.5 hover:translate-y-0.5 "
      >
        {title}
      </Link>
    </>
  );
}
