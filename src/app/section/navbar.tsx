import Image from "next/image";

export default function Navbar() {
  return (
    <div className="flex items-end bg-[#FFD700] px-10 py-6">
      <Image
        width={100}
        height={100}
        alt="image"
        src="/logo.png"
        className="w-16 h-auto"
      />
      <p className="font-extrabold text-2xl tracking-tighter">Zikri</p>
    </div>
  );
}
