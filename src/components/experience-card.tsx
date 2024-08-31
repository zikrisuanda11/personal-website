export default function ExperienceCard({
  image,
  title,
  username,
  description,
  rotate,
}: {
  image: string;
  title: string;
  username: string;
  description: string;
  rotate?: string;
}) {
  return (
    <div
      className={`bg-white border-2 border-black rounded-md p-4 space-y-3 ${rotate} shadow-black hover:shadow-none duration-100 translate-x-0 translate-y-0 hover:translate-x-0.5 hover:translate-y-0.5 `}
    >
      <div className="flex items-center gap-4">
        <img src={image} className="rounded-full w-16 border-2 border-black" />
        <div>
          <p>{title}</p>
          <p className="text-gray-500">{username}</p>
        </div>
      </div>
      <p>{description}</p>
    </div>
  );
}
