import Button from "@/components/button";

export default function Project2() {
  return (
    <div className="flex flex-col items-center justify-center py-10 px-10 gap-10">
      <p className="text-2xl font-bold tracking-tight">Phikocat</p>
      <p>
        Phikocat is an innovative digital application designed to streamline the
        process of ordering various products and services for pets.
      </p>
      <div className="bg-contain relative w-62 h-62 py-12 bg-[#383A59] border-2 border-black rounded-md rotate-12 mb-11">
        <img src="/phikocat1.png" className="bg-auto" />
        <img
          src="/phikocat.png"
          className="absolute left-20 -rotate-12"
          width={156}
        />
      </div>
      <Button title="Learn More" link="/" />
    </div>
  );
}
