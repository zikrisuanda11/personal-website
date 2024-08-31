import SocialMediaCard from "@/components/social-media-card";

export default function AboutMe() {
  return (
    <div className="flex flex-col items-center justify-center py-10 px-10 gap-10 bg-[#FFD700]">
      <p className="text-2xl font-bold tracking-tight">About Me</p>
      <p>
        Hi, I'm Zikri Ahmad Suanda, an active student at Universitas Mulia. I've
        made it through 7 semesters so far, and I've learned quite a lot along
        the way. I'm a full-stack developer who also knows the tools used by
        DevOps. Up until now, Laravel has been my go-to stack, but I'm slowly
        transitioning to more modern technologies like React and ExpressJS—what
        people call the ultimate "SIGMA Stack 😎". That's a bit about me!
      </p>
      <div className="flex flex-col">
        <SocialMediaCard
          title="Linkedin"
          link="/"
          image="/icon/linkedin.png"
          rotate="-rotate-6"
        />
        <SocialMediaCard
          rotate="rotate-6"
          title="Github"
          link="/"
          image="/icon/github.png"
        />
        <SocialMediaCard title="Email" link="/" image="/icon/email.png" />
        <SocialMediaCard
          rotate="-rotate-12"
          title="Instagram"
          link="/"
          image="/icon/instagram.png"
        />
        <SocialMediaCard
          rotate="rotate-6"
          title="GCSB Profile"
          link="/"
          image="/icon/google.png"
        />
      </div>
    </div>
  );
}
