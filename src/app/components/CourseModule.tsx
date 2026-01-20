import Image from "next/image";

interface Props {
  id: string;
  level: string;
  title: string;
  description: string;
  image: string;
}

export default function CourseModule({ id, level, title, description, image }: Props) {
  return (
    <div id={id} className="flex gap-4 p-4 border rounded-lg shadow-sm bg-white">
      <div className="flex-shrink-0 relative w-40 h-28">
        <Image src={image} alt={title} fill className="object-cover rounded-md" />
        <span className="absolute top-1 left-1 bg-red-600 text-white text-xs px-2 py-1 rounded">
          {level}
        </span>
      </div>
      <div>
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-gray-600 text-sm mt-2">{description}</p>
      </div>
    </div>
  );
}


