import Button from "@/components/button";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="bg-[#FFD700] flex items-center px-10 md:px-64 h-full">
      <div className="items-start justify-center flex-1 flex flex-col gap-6 h-full">
        <p className="text-md md:text-xl">Hi, my name is</p>
        <p className="text-2xl md:text-4xl font-bold tracking-tighter">
          Zikri Ahmad Suanda
        </p>
        <div className="space-y-2">
          <p className="text-4xl md:text-5xl font-extrabold tracking-tighter">
            I build
          </p>{" "}
          <p className="text-4xl md:text-5xl font-extrabold tracking-tighter">
            fast, secure
          </p>{" "}
          <p className="text-4xl md:text-5xl font-extrabold tracking-tighter">
            Web Application
          </p>
        </div>
        <Button
          title="Download My CV"
          link="/resume/resume.pdf"
          target="_blank"
        />
      </div>
      <Image
        width={400}
        height={100}
        alt="image"
        priority
        src="/hero.png"
        className="hidden md:block h-[32rem] w-auto "
      />
    </div>
  );
}
