import Button from "@/components/button";

export default function Hero() {
  return (
    <div className="bg-[#FFD700] flex items-center px-10 md:px-56 h-full">
      <div className="items-start justify-center flex-1 flex flex-col gap-10 h-full">
        <p>Hi, my name is</p>
        <p className="text-2xl font-bold tracking-tight">Zikri Ahmad Suanda</p>
        <div className="space-y-2">
          <p className="text-4xl font-extrabold tracking-tighter">I build</p>{" "}
          <p className="text-4xl font-extrabold tracking-tighter">
            fast, secure
          </p>{" "}
          <p className="text-4xl font-extrabold tracking-tighter">
            Web Application
          </p>
        </div>
        <Button
          title="Download My CV"
          link="/resume/resume.pdf"
          target="_blank"
        />
      </div>
      <img src="/hero.png" className="hidden md:block h-[32rem] w-auto " />
    </div>
  );
}
