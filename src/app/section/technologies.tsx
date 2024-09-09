import Image from "next/image";

const images = [
  {
    name: "git",
    url: "/icon/git.png",
  },
  {
    name: "linux",
    url: "/icon/linux.png",
  },
  {
    name: "docker",
    url: "/icon/docker.png",
  },
  {
    name: "js",
    url: "/icon/js.png",
  },
  {
    name: "laravel",
    url: "/icon/laravel.png",
  },
  {
    name: "mysql",
    url: "/icon/mysql.png",
  },
  {
    name: "next",
    url: "/icon/next.png",
  },
  {
    name: "php",
    url: "/icon/php.png",
  },
  {
    name: "postgre",
    url: "/icon/postgre.png",
  },
  {
    name: "react",
    url: "/icon/react.png",
  },
  {
    name: "tailwind",
    url: "/icon/tailwind.png",
  },
];

export default function Technologies() {
  return (
    <div className="bg-[#64DAEE] flex flex-col items-center justify-center py-20 px-10 gap-10 md:px-64">
      <p className="text-2xl md:text-4xl font-bold tracking-tight">
        Technologies that i use
      </p>
      <div className="flex flex-wrap items-center justify-center gap-5 md:gap-12 md:px-36">
        {images.map((item, index) => (
          <Image
            src={item.url}
            alt={item.name}
            key={index}
            className="w-12 md:w-20"
          />
        ))}
      </div>
    </div>
  );
}
