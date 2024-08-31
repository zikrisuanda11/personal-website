import Button from "@/components/button";

export default function Project1() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center p-10 md:px-72 gap-10">
      <div className="flex flex-col items-center justify-center md:justify-start md:items-start py-10 px-10 gap-10">
        <p className="text-2xl md:text-4xl font-bold tracking-tight">
          Perpustakaan
        </p>
        <p className="text-md md:text-xl">
          The Modern Library Application is an innovative solution designed to
          optimize the management and access of information within library
          environments.
        </p>
        <Button classname="hidden md:block" title="Learn More" link="/" />
      </div>
      <div className="w-full rounded-md">
        <div
          className="bg-cover h-24 md:h-32 w-auto rounded-t-md rounded-x-md border-t-2 border-x-2 border-black "
          style={{ backgroundImage: `url('/perpustakaan1.png')` }}
        ></div>
        <div
          className="bg-cover h-24 md:h-32 w-auto border-2 border-black "
          style={{ backgroundImage: `url('/perpustakaan2.png')` }}
        ></div>
        <div
          className="bg-cover h-24 md:h-32 w-auto rounded-b-md rounded-x-md border-b-2 border-x-2 border-black relative"
          style={{ backgroundImage: `url('/perpustakaan3.png')` }}
        >
          <img
            src="/perpustakaan.png"
            // width={156}
            className="absolute right-1 w-40 md:w-52"
          />
        </div>
      </div>
      <Button classname="md:hidden" title="Learn More" link="/" />
    </div>
  );
}
