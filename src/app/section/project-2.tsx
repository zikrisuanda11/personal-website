import Button from "@/components/button";

export default function Project2() {
  return (
    <div className="flex flex-col md:flex-row md:px-72 items-center justify-center py-10 px-10 gap-10">
      <div className="flex flex-col items-center justify-center md:items-start py-10 px-10 gap-10">
        <p className="text-2xl md:text-4xl font-bold tracking-tight">
          Phikocat
        </p>
        <p className="md:text-xl">
          Phikocat is an innovative digital application designed to streamline
          the process of ordering various products and services for pets.
        </p>
        <Button title="Learn More" link="/" classname="hidden md:block" />
      </div>
      <div className="bg-contain relative w-62 h-62 py-12 bg-[#383A59] border-2 border-black rounded-md rotate-12 mb-12 md:rotate-0">
        <img src="/phikocat1.png" className="bg-auto" />
        <img
          src="/phikocat.png"
          className="absolute left-20 -rotate-12 w-40 md:w-44 md:rotate-0 md:-bottom-20"
          // width={156}
        />
      </div>
      <Button title="Learn More" link="/" classname="md:hidden" />
    </div>
  );
}
