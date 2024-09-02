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

export default function Project3() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center py-10 px-10 gap-10 md:px-72">
      <div className="flex flex-col items-center  justify-center md:items-start p-10 md:pr-24  gap-10">
        <p className="text-2xl md:text-4xl font-bold tracking-tight">
          Smart Internship
        </p>
        <p className="md:text-xl">
          An innovative platform for managing interns at PT Garuda Cyber
          Indonesia, designed to monitor progress, streamline the selection
          process, and offer a variety of other powerful features.
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
                <DrawerTitle className="text-4xl ">Smartinternship</DrawerTitle>
                <DrawerDescription>
                  <button
                    disabled
                    className="disable disabled:bg-gray-500 flex gap-1 items-center border-2 border-black w-fit bg-[#FFD700] shadow-black text-black hover:shadow-none duration-100 px-3 py-1 rounded-xl translate-x-0 translate-y-0 hover:translate-x-0.5 hover:translate-y-0.5 "
                  >
                    <IoMdLink /> Private Repo
                  </button>
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
                  <img src="/smartinternship/1.png" className="" />
                  <img src="/smartinternship/2.png" className="" />
                  <img src="/smartinternship/3.png" className="" />
                  <img src="/smartinternship/4.png" className="" />
                  <img src="/smartinternship/5.png" className="" />
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
              <ScrollArea className=" basis-1/2 overflow-auto h-[80%] px-3">
                <p className="mb-3 text-xl">
                  An innovative platform for managing interns at PT Garuda Cyber
                  Indonesia, designed to monitor progress, streamline the
                  selection process, and offer a variety of other powerful
                  features.
                </p>
                <div className="space-x-2">
                  <Badge variant="yellow">Tailwind</Badge>
                  <Badge variant="yellow">MySQL</Badge>
                  <Badge variant="yellow">ExpressJS</Badge>
                  <Badge variant="yellow">React</Badge>
                  <Badge variant="yellow">Docker</Badge>
                  <Badge variant="yellow">CI/CD</Badge>
                </div>
              </ScrollArea>
            </div>
          </DrawerContent>
        </Drawer>
      </div>
      <div className="relative flex w-full h-96">
        <div className="md:z-10 absolute w-80 h-80 border-4 rounded-md border-black -left-24">
          <div
            className="bg-cover h-full bg-black"
            style={{ backgroundImage: `url('/smartinternship1.png')` }}
          ></div>
        </div>
        <div className="absolute w-80 h-80 -right-16 border-4 rounded-md border-black -rotate-3 top-10">
          <div
            className="bg-cover h-full bg-black"
            style={{ backgroundImage: `url('/smartinternship2.png')` }}
          ></div>
        </div>
        <img
          src="smart_internship.png"
          width={200}
          className="absolute right-4 z-20 -bottom-12"
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
              <DrawerTitle className="text-4xl ">Smartinternship</DrawerTitle>
              <DrawerDescription>
                <button
                  disabled
                  className="disable disabled:bg-gray-500 flex gap-1 items-center border-2 border-black w-fit bg-[#FFD700] shadow-black text-black hover:shadow-none duration-100 px-3 py-1 rounded-xl translate-x-0 translate-y-0 hover:translate-x-0.5 hover:translate-y-0.5 "
                >
                  <IoMdLink /> Private Repo
                </button>{" "}
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
                  <img src="/smartinternship/1.png" className="" />
                  <img src="/smartinternship/2.png" className="" />
                  <img src="/smartinternship/3.png" className="" />
                  <img src="/smartinternship/4.png" className="" />
                  <img src="/smartinternship/5.png" className="" />
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
              <div className="overflow-auto h-[80%] px-3 my-5">
                <div className="flex flex-wrap gap-3 mb-5">
                  <Badge variant="yellow">Tailwind</Badge>
                  <Badge variant="yellow">MySQL</Badge>
                  <Badge variant="yellow">ExpressJS</Badge>
                  <Badge variant="yellow">React</Badge>
                  <Badge variant="yellow">Docker</Badge>
                  <Badge variant="yellow">CI/CD</Badge>
                </div>
                <p className="mb-3">
                  An innovative platform for managing interns at PT Garuda Cyber
                  Indonesia, designed to monitor progress, streamline the
                  selection process, and offer a variety of other powerful
                  features.
                </p>
              </div>
            </ScrollArea>
          </div>
        </DrawerContent>
      </Drawer>{" "}
    </div>
  );
}
