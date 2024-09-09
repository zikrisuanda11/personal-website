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

import ExperienceCard from "@/components/experience-card";

export default function Experiences() {
  return (
    <div className="flex flex-col items-center justify-center p-10 gap-10 md:gap-20 bg-[#3E8DFF] md:px-72">
      <p className="text-2xl md:text-4xl font-bold tracking-tight">
        Experiences
      </p>
      <div className="md:flex gap-10">
        <Drawer>
          <DrawerTrigger>
            <ExperienceCard
              className="-rotate-3"
              image="/gci.jpeg"
              title="PT. Garuda Cyber"
              username="@garuda_cyber"
              description="PT. Garuda Cyber Indonesia is a Software-as-a-Service (SaaS) company that has been trusted by over 300 partners across Indonesia since 2010. PT. Garuda Cyber Indonesia has established its presence in several major cities in Indonesia"
            />
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <div className="px-5 md:px-14 space-y-2 w-fit">
                <DrawerTitle className="text-2xl md:text-4xl ">
                  PT. Garuda Cyber
                </DrawerTitle>
                <DrawerDescription>
                  <div className="flex gap-1 items-center border-2 border-black w-fit bg-[#FFD700] shadow-black text-black hover:shadow-none duration-100 px-3 py-1 rounded-xl translate-x-0 translate-y-0 hover:translate-x-0.5 hover:translate-y-0.5 ">
                    May 2024 - June 2024
                  </div>
                </DrawerDescription>
              </div>
            </DrawerHeader>
            <div className=" md:flex md:flex-row overflow-auto px-6 md:gap-20 w-full justify-center items-center h-96">
              <Carousel
                plugins={[
                  Autoplay({
                    delay: 2000,
                  }),
                ]}
                className="md:basis-1/2 max-w-xl border-4 border-black shadow-black rounded-md"
                opts={{ loop: true }}
              >
                <CarouselContent className="">
                  <Image alt="image" src="/garuda/1.jpeg" className="" />
                  <Image alt="image" src="/garuda/2.jpg" className="" />
                  <Image alt="image" src="/garuda/3.jpeg" className="" />
                  <Image alt="image" src="/garuda/4.png" className="" />
                  <Image alt="image" src="/garuda/5.jpg" className="" />
                </CarouselContent>
              </Carousel>
              <div className="py-5 md:px-3 md:basis-1/2 ">
                {/* ceritakan tentang pengalaman selama masa magang */}
                <p className="list-disc p-3 border-2 border-black rounded-md list-inside shadow-black">
                  During my internship at GCI, I gained so many valuable
                  experiences—new knowledge, new friends, and fresh insights. I
                  was also given the opportunity to apply everything I had
                  learned. Collaboration was one of the most impactful aspects
                  of my time at GCI, as I improved my communication skills,
                  listened to the perspectives of team members, and worked
                  together to combine our ideas. It was a truly rewarding
                  experience. Beyond the professional growth, the close bonds of
                  friendship that formed among team members and fellow interns
                  left a lasting impression. We shared moments of joy,
                  challenges, and everything in between throughout the
                  internship.
                </p>
              </div>
            </div>
          </DrawerContent>
        </Drawer>

        <Drawer>
          <DrawerTrigger>
            <ExperienceCard
              image="/bangkit.jpeg"
              title="Bangkit Academy"
              username="@bangkit_academy"
              description="Bangkit is a unique career readiness program led by Google and delivered with support from industry experts from our industry partners like Gojek, GoTo and Google. The program is designed to provide the participants with first-hand exposure to real-world practitioners and prepare them with relevant skills for a successful career in leading tech companies."
            />
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <div className="px-5 md:px-14 space-y-2 w-fit">
                <DrawerTitle className="text-2xl md:text-4xl text-start ">
                  Bangkit Academy led by Google, Tokopedia, Gojek, & Traveloka
                </DrawerTitle>
                <DrawerDescription>
                  <div className="flex gap-1 items-center border-2 border-black w-fit bg-[#FFD700] shadow-black text-black hover:shadow-none duration-100 px-3 py-1 rounded-xl translate-x-0 translate-y-0 hover:translate-x-0.5 hover:translate-y-0.5 ">
                    August 2023 - Jan 2024
                  </div>
                </DrawerDescription>
              </div>
            </DrawerHeader>
            <div className=" md:flex md:flex-row overflow-auto px-6 md:gap-20 w-full justify-center items-center h-96">
              <Carousel
                plugins={[
                  Autoplay({
                    delay: 2000,
                  }),
                ]}
                className="md:basis-1/2 max-w-xl border-4 border-black shadow-black rounded-md"
                opts={{ loop: true }}
              >
                <CarouselContent className="aspect-video">
                  <Image alt="image" src="/bangkit/1.jpg" className="w-full" />
                  <Image alt="image" src="/bangkit/2.png" className="" />
                  <Image alt="image" src="/bangkit/3.png" className="" />
                  <Image alt="image" src="/bangkit/4.png" className="" />
                  <Image alt="image" src="/bangkit/5.png" className="" />
                </CarouselContent>
              </Carousel>
              <div className="py-5 md:px-3 md:basis-1/2 ">
                {/* ceritakan tentang pengalaman selama masa magang */}
                <p className="list-disc p-3 border-2 border-black rounded-md list-inside shadow-black">
                  During my participation in the Bangkit program organized by
                  Google, GOTO, and Traveloka, I gained a wealth of new
                  knowledge. While I had a foundational understanding of
                  Networking, Linux, and Web Development, particularly in
                  backend, the program allowed me to deepen my expertise in
                  these areas. Along the way, I connected with like-minded
                  peers, and we frequently held study groups together. It was an
                  enjoyable experience to have nightly discussions about
                  technical topics and other things. when The capstone phase,
                  though challenging, was particularly rewarding. We faced
                  numerous problems, but the process of finding solutions was
                  thrilling, even if it pushed us to our limits. In the end,
                  everything worked out, and finally I graduated with
                  Distinction.
                </p>
              </div>
            </div>
          </DrawerContent>
        </Drawer>

        <Drawer>
          <DrawerTrigger>
            <ExperienceCard
              className="rotate-3"
              image="/gdsc.jpeg"
              title="GDSC Univ Mulia"
              username="@GDSC_mulia"
              description="GDSC leads are passionate about helping their peers learn technology and connect. Leads pursue various degrees within undergraduate and graduate programs, but have foundational knowledge about software development."
            />
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <div className="px-5 md:px-14 space-y-2 w-fit">
                <DrawerTitle className="text-2xl md:text-4xl text-start ">
                  GDSC Universitas Mulia
                </DrawerTitle>
                <DrawerDescription>
                  <div className="flex gap-1 items-center border-2 border-black w-fit bg-[#FFD700] shadow-black text-black hover:shadow-none duration-100 px-3 py-1 rounded-xl translate-x-0 translate-y-0 hover:translate-x-0.5 hover:translate-y-0.5 ">
                    October 2021 - July 2023
                  </div>
                </DrawerDescription>
              </div>
            </DrawerHeader>
            <div className=" md:flex md:flex-row overflow-auto px-6 md:gap-20 w-full justify-center items-center h-96">
              <Carousel
                plugins={[
                  Autoplay({
                    delay: 2000,
                  }),
                ]}
                className="md:basis-1/2 max-w-xl border-4 border-black shadow-black rounded-md"
                opts={{ loop: true }}
              >
                <CarouselContent className="aspect-video">
                  <Image alt="image" src="/gdsc/1.jpg" className="w-full" />
                  <Image alt="image" src="/gdsc/2.jpg" className="" />
                  <Image alt="image" src="/gdsc/3.jpeg" className="" />
                  <Image alt="image" src="/gdsc/4.jpg" className="" />
                  {/* <Image alt="image" src="/gdsc/5.png" className="" /> */}
                </CarouselContent>
              </Carousel>
              <div className="py-5 md:px-3 md:basis-1/2 ">
                {/* ceritakan tentang pengalaman selama masa magang */}
                <p className="list-disc p-3 border-2 border-black rounded-md list-inside shadow-black">
                  During my time at university, I was actively involved in
                  various organizations, one of which was GDSC. I organized
                  numerous events, including the annual GB JuaraGCP event held
                  by GDE Indonesia. Additionally, I collaborated with HIMATIKA
                  Universitas Mulia to host a Study Jam. This event aimed to
                  teach the fundamentals of Web Development, covering topics
                  like HTML, CSS, and basic JavaScript, all delivered over a
                  span of three weeks. These are just a few examples of the
                  types of events I frequently conducted.
                </p>
              </div>
            </div>
          </DrawerContent>
        </Drawer>
      </div>
    </div>
  );
}
