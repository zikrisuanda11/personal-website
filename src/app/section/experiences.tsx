import ExperienceCard from "@/components/experience-card";

export default function Experiences() {
  return (
    <div className="flex flex-col items-center justify-center p-10 gap-10 md:gap-20 bg-[#3E8DFF] md:px-72">
      <p className="text-2xl md:text-4xl font-bold tracking-tight">
        Experiences
      </p>
      <div className="md:flex gap-10">
        <ExperienceCard
          rotate="-rotate-3"
          image="/gci.jpeg"
          title="PT. Garuda Cyber"
          username="@garuda_cyber"
          description="PT. Garuda Cyber Indonesia is a Software-as-a-Service (SaaS) company that has been trusted by over 300 partners across Indonesia since 2010. PT. Garuda Cyber Indonesia has established its presence in several major cities in Indonesia"
        />
        <ExperienceCard
          image="/bangkit.jpeg"
          title="Bangkit Academy"
          username="@bangkit_academy"
          description="Bangkit is a unique career readiness program led by Google and delivered with support from industry experts from our industry partners like Gojek, GoTo and Google. The program is designed to provide the participants with first-hand exposure to real-world practitioners and prepare them with relevant skills for a successful career in leading tech companies."
        />
        <ExperienceCard
          rotate="rotate-3"
          image="/gdsc.jpeg"
          title="GDSC Univ Mulia"
          username="@GDSC_mulia"
          description="GDSC leads are passionate about helping their peers learn technology and connect. Leads pursue various degrees within undergraduate and graduate programs, but have foundational knowledge about software development."
        />
      </div>
    </div>
  );
}
