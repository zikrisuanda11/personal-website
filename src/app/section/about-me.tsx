import SocialMediaCard from "@/components/social-media-card";

export default function AboutMe() {
  return (
    <div className="flex flex-col items-center justify-center py-10 px-10 gap-10 bg-[#FFD700] md:px-72">
      <div className="flex flex-col items-center justify-center p-5 md:px-32 gap-10 ">
        <p className="text-2xl font-bold tracking-tight md:text-4xl">
          About Me
        </p>
        <p className="md:text-xl">
          Hi, I'm Zikri Ahmad Suanda, an active student at Universitas Mulia.
          I've made it through 7 semesters so far, and I've learned quite a lot
          along the way. I'm a full-stack developer who also knows the tools
          used by DevOps. Up until now, Laravel has been my go-to stack, but I'm
          slowly transitioning to more modern technologies like React and
          ExpressJS—what people call the ultimate "SIGMA Stack 😎". That's a bit
          about me!
        </p>
      </div>
      <div className="flex flex-col md:flex-row md:gap-5">
        <SocialMediaCard
          title="Linkedin"
          link="https://www.linkedin.com/in/zikri-suanda-61b19a225/"
          image="/icon/linkedin.png"
          classname="-rotate-6 md:rotate-0"
          target="_blank"
        />
        <SocialMediaCard
          classname="rotate-6 md:rotate-0"
          title="Github"
          link="https://github.com/zikrisuanda11"
          image="/icon/github.png"
          target="_blank"
        />
        <SocialMediaCard
          classname="-rotate-12 md:rotate-0"
          title="Instagram"
          link="https://www.instagram.com/zikrisuanda090/"
          image="/icon/instagram.png"
          target="_blank"
        />
        <SocialMediaCard
          classname="rotate-6 md:rotate-0"
          title="GCSB Profile"
          link="https://www.cloudskillsboost.google/public_profiles/75df7589-5200-43ec-ac8d-b6ac8ba60a56"
          image="/icon/google.png"
          target="_blank"
        />
      </div>
    </div>
  );
}
