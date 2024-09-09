"use client";

import Image from "next/image";
import { IoMdLink } from "react-icons/io";
import Autoplay from "embla-carousel-autoplay";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ScrollArea } from "@/components/ui/scroll-area";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

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
        <Drawer>
          <DrawerTrigger asChild>
            <button className="hidden md:block bg-[#69CF95] font-bold hover:shadow-none shadow-black border-2 border-black px-8 py-4 w-fit rounded-md duration-100 translate-x-0 translate-y-0 hover:translate-x-0.5 hover:translate-y-0.5 ">
              Learn More
            </button>
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <div className="px-10 space-y-2 w-fit">
                <DrawerTitle className="text-4xl ">Phikocat</DrawerTitle>
                <DrawerDescription>
                  <Link
                    href="https://github.com/zikrisuanda11/phikocat"
                    target="_blank"
                    className="flex gap-1 items-center border-2 border-black w-fit bg-[#FFD700] shadow-black text-black hover:shadow-none duration-100 px-3 py-1 rounded-xl translate-x-0 translate-y-0 hover:translate-x-0.5 hover:translate-y-0.5 "
                  >
                    <IoMdLink /> link
                  </Link>
                </DrawerDescription>
              </div>
            </DrawerHeader>
            <div className="flex gap-20 w-full justify-center items-center h-96">
              <Carousel
                plugins={[
                  Autoplay({
                    delay: 2000,
                  }),
                ]}
                className="basis-1/2 max-w-xl"
                opts={{ loop: true }}
              >
                <CarouselContent>
                  <Image alt="image" src="/phikocat/1.png" className="" />
                  <Image alt="image" src="/phikocat/2.png" className="" />
                  <Image alt="image" src="/phikocat/3.png" className="" />
                  <Image alt="image" src="/phikocat/4.png" className="" />
                  <Image alt="image" src="/phikocat/5.png" className="" />
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
              <ScrollArea className=" basis-1/2 overflow-auto h-[80%] px-3">
                <p className="mb-3 text-xl">
                  Phikocat is a cutting-edge digital platform tailored to
                  simplify and enhance the ordering process for pet-related
                  products and services. Whether you&apos;re a pet owner looking
                  for grooming, food, or medical services, Phikocat provides an
                  intuitive, seamless experience to ensure your pets get the
                  care and supplies they need. This solution offers convenience
                  and efficiency, making it easy to access a wide range of
                  offerings from trusted providers in the pet industry.
                </p>
                <div className="space-x-2">
                  <Badge variant="yellow">Payment Gateway (Midtrans)</Badge>
                  <Badge variant="yellow">Tailwind</Badge>
                  <Badge variant="yellow">PostgreSQL</Badge>
                  <Badge variant="yellow">Inertia</Badge>
                  <Badge variant="yellow">React</Badge>
                  <Badge variant="yellow">Laravel</Badge>
                </div>
              </ScrollArea>
            </div>
          </DrawerContent>
        </Drawer>
      </div>
      <div className="bg-contain relative w-62 h-62 py-12 bg-[#383A59] border-2 border-black rounded-md rotate-12 mb-12 md:rotate-0">
        <Image alt="image" src="/phikocat1.png" className="bg-auto" />
        <Image
          alt="image"
          src="/phikocat.png"
          className="absolute left-20 -rotate-12 w-40 md:w-44 md:rotate-0 md:-bottom-20"
        />
      </div>
      <Drawer>
        <DrawerTrigger asChild>
          <button className="md:hidden bg-[#69CF95] font-bold hover:shadow-none shadow-black border-2 border-black px-8 py-4 w-fit rounded-md duration-100 translate-x-0 translate-y-0 hover:translate-x-0.5 hover:translate-y-0.5 ">
            Learn More
          </button>
        </DrawerTrigger>
        <DrawerContent className="px-5">
          <DrawerHeader>
            <div className=" space-y-2 w-fit">
              <DrawerTitle className="text-4xl ">Phikocat</DrawerTitle>
              <DrawerDescription>
                <Link
                  href="https://github.com/zikrisuanda11/phikocat"
                  target="_blank"
                  className="flex gap-1 items-center border-2 border-black w-fit bg-[#FFD700] shadow-black text-black hover:shadow-none duration-100 px-3 py-1 rounded-xl translate-x-0 translate-y-0 hover:translate-x-0.5 hover:translate-y-0.5 "
                >
                  <IoMdLink /> link
                </Link>
              </DrawerDescription>
            </div>
          </DrawerHeader>
          <div className="flex flex-col h-96">
            <ScrollArea className="space-y-5">
              <Carousel
                plugins={[
                  Autoplay({
                    delay: 2000,
                  }),
                ]}
                className="max-w-md"
                opts={{ loop: true }}
              >
                <CarouselContent>
                  <Image alt="image" src="/phikocat/1.png" className="" />
                  <Image alt="image" src="/phikocat/2.png" className="" />
                  <Image alt="image" src="/phikocat/3.png" className="" />
                  <Image alt="image" src="/phikocat/4.png" className="" />
                  <Image alt="image" src="/phikocat/5.png" className="" />
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
              <div className="overflow-auto h-[80%] px-3 my-5">
                <div className="flex flex-wrap gap-3 mb-5">
                  <Badge variant="yellow">Payment Gateway (Midtrans)</Badge>
                  <Badge variant="yellow">Tailwind</Badge>
                  <Badge variant="yellow">PostgreSQL</Badge>
                  <Badge variant="yellow">Inertia</Badge>
                  <Badge variant="yellow">React</Badge>
                  <Badge variant="yellow">Laravel</Badge>
                </div>
                <p className="mb-3">
                  Phikocat is a cutting-edge digital platform tailored to
                  simplify and enhance the ordering process for pet-related
                  products and services. Whether you&apos;re a pet owner looking
                  for grooming, food, or medical services, Phikocat provides an
                  intuitive, seamless experience to ensure your pets get the
                  care and supplies they need. This solution offers convenience
                  and efficiency, making it easy to access a wide range of
                  offerings from trusted providers in the pet industry.
                </p>
              </div>
            </ScrollArea>
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
