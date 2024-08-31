import Button from "@/components/button";

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
        <Button title="Learn More" link="/" classname="md:block hidden" />
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
      <Button title="Learn More" link="/" classname="md:hidden" />
    </div>
  );
}
