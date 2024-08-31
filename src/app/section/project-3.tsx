import Button from "@/components/button";

export default function Project3() {
  return (
    <div className="flex flex-col items-center justify-center py-10 px-10 gap-10">
      <p className="text-2xl font-bold tracking-tight">Smart Internship</p>
      <p>
        An innovative platform for managing interns at PT Garuda Cyber
        Indonesia, designed to monitor progress, streamline the selection
        process, and offer a variety of other powerful features.
      </p>
      <div className="relative flex w-full h-96">
        <div className="absolute w-80 h-80 border-4 rounded-md border-black -left-24">
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
          className="absolute right-4 z-10 -bottom-12"
        />
      </div>
      <Button title="Learn More" link="/" />
    </div>
  );
}
