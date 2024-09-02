import PageContainer from "@/components/layout/page-container";
import Navbar from "./section/navbar";
import Hero from "./section/hero";
import Technologies from "./section/technologies";
import Project1 from "./section/project-1";
import Project2 from "./section/project-2";
import Project3 from "./section/project-3";
import AboutMe from "./section/about-me";
import Experiences from "./section/experiences";
import Footer from "./section/footer";
import Divider from "@/components/divider";
import DivierReverse from "@/components/divider-reverse";
import DividerOutlined from "@/components/divider-outlined";

export default function page() {
  return (
    <PageContainer scrollable={true}>
      <div className="flex flex-col h-dvh">
        <Navbar />
        <Hero />
      </div>
      <Divider color="#FFD700" />
      <DivierReverse color="#64DAEE" />
      <Technologies />
      <Divider color="#64DAEE" />
      <Project1 />
      <DividerOutlined />
      <Project2 />
      <DividerOutlined />
      <Project3 />
      <DivierReverse color="#FFD700" />
      <AboutMe />
      <Divider color="#FFD700" />
      <DivierReverse color="#3E8DFF" />
      <Experiences />
      <Divider color="#3E8DFF" />
      <DivierReverse color="#000" />
      <Footer />
    </PageContainer>
  );
}
