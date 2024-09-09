import { forwardRef } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";

const ExperienceCard = forwardRef<
  HTMLButtonElement,
  {
    image: string;
    title: string;
    username: string;
    description: string;
    className?: string;
  }
>(({ image, title, username, description, className }) => {
  return (
    <div
      className={cn(
        `bg-white text-start border-2 border-black rounded-md p-4 space-y-3 shadow-black hover:shadow-none duration-100 translate-x-0 translate-y-0 hover:translate-x-0.5 hover:translate-y-0.5`,
        className,
      )}
    >
      <div className="flex items gap-4">
        <Image
          alt="image"
          src={image}
          className="rounded-full w-16 border-2 border-black"
        />
        <div>
          <p>{title}</p>
          <p className="text-gray-500">{username}</p>
        </div>
      </div>
      <p>{description}</p>
    </div>
  );
});

ExperienceCard.displayName = "ExperienceCard";

export default ExperienceCard;
