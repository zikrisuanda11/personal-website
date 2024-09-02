"use client";

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
        <Drawer>
          <DrawerTrigger asChild>
            <button className="hidden md:block bg-[#69CF95] font-bold hover:shadow-none shadow-black border-2 border-black px-8 py-4 w-fit rounded-md duration-100 translate-x-0 translate-y-0 hover:translate-x-0.5 hover:translate-y-0.5 ">
              Learn More
            </button>
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <div className="px-10 space-y-2 w-fit">
                <DrawerTitle className="text-4xl ">Perpustakaan</DrawerTitle>
                <DrawerDescription>
                  <Link
                    href="https://github.com/zikrisuanda11/perpustakaan"
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
                  <img src="/perpustakaan/1.png" className="" />
                  <img src="/perpustakaan/2.png" className="" />
                  <img src="/perpustakaan/3.png" className="" />
                  <img src="/perpustakaan/4.png" className="" />
                  <img src="/perpustakaan/5.png" className="" />
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
              <ScrollArea className=" basis-1/2 overflow-auto h-[80%] px-3">
                <p className="mb-3 text-xl">
                  Perpustakaan is an advanced, modern library application
                  designed to streamline and optimize the management,
                  organization, and accessibility of information within library
                  environments. This solution offers an intuitive and
                  user-friendly interface, making it easier for librarians and
                  users to search, catalog, and manage books, members, and
                  transactions efficiently. Whether for schools, universities,
                  or public libraries, Perpustakaan aims to elevate library
                  management into the digital age with robust features and a
                  scalable architecture.
                </p>
                <div className="space-x-2">
                  <Badge variant="yellow">Tailwind</Badge>
                  <Badge variant="yellow">MySQL</Badge>
                  <Badge variant="yellow">Inertia</Badge>
                  <Badge variant="yellow">React</Badge>
                  <Badge variant="yellow">Laravel</Badge>
                </div>
              </ScrollArea>
            </div>
          </DrawerContent>
        </Drawer>
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
            className="absolute right-1 w-40 md:w-52"
          />
        </div>
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
              <DrawerTitle className="text-4xl ">Perpustakaan</DrawerTitle>
              <DrawerDescription>
                <Link
                  href="https://github.com/zikrisuanda11/perpustakaan"
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
                  <img src="/perpustakaan/1.png" className="" />
                  <img src="/perpustakaan/2.png" className="" />
                  <img src="/perpustakaan/3.png" className="" />
                  <img src="/perpustakaan/4.png" className="" />
                  <img src="/perpustakaan/5.png" className="" />
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
              <div className="overflow-auto h-[80%] px-3 my-5">
                <div className="flex flex-wrap gap-3 mb-5">
                  <Badge variant="yellow">Tailwind</Badge>
                  <Badge variant="yellow">MySQL</Badge>
                  <Badge variant="yellow">Inertia</Badge>
                  <Badge variant="yellow">React</Badge>
                  <Badge variant="yellow">Laravel</Badge>
                </div>
                <p className="mb-3">
                  Perpustakaan is an advanced, modern library application
                  designed to streamline and optimize the management,
                  organization, and accessibility of information within library
                  environments. This solution offers an intuitive and
                  user-friendly interface, making it easier for librarians and
                  users to search, catalog, and manage books, members, and
                  transactions efficiently. Whether for schools, universities,
                  or public libraries, Perpustakaan aims to elevate library
                  management into the digital age with robust features and a
                  scalable architecture.
                </p>
              </div>
            </ScrollArea>
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
