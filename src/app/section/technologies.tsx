const images = [
  {
    name: "git",
    url: "/icon/git.png",
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
    <div className="bg-[#64DAEE] flex flex-col items-center justify-center py-20 px-10 gap-10">
      <p className="text-2xl font-bold tracking-tight">
        Technologies that i use
      </p>
      <div className="flex flex-wrap items-center justify-center gap-5 ">
        {images.map((item, index) => (
          <img src={item.url} alt={item.name} key={index} width={46} />
        ))}
      </div>
    </div>
  );
}
