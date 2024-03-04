import Image from "next/image";
import React from "react";
import { urlFor } from "../../../sanity/lib/image";
import { Image as ImageType } from "sanity";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
type Props = {
  image: ImageType;
  category: any;
  author: string;
  title: string;
};

const BlogCards: React.FC<Props> = ({ image, category, author, title }) => {
  return (
    <Card className="overflow-hidden h-[370px] hover:scale-105 duration-300 ease-in cursor-pointer">
      <CardHeader className="relative h-[65%] w-full overflow-hidden">
        <Image fill alt={title} src={image && urlFor(image).url()} />
      </CardHeader>
      <CardContent className="p-4">
        <div className="flex gap-3 mb-2">
          {category.map((cat: any, i: any) => (
            <div key={i} className="text-xs rounded-md bg-customGray px-2 py-1">
              <span>{cat.title}</span>
            </div>
          ))}
        </div>
        <p className="text-sm">{title}</p>
      </CardContent>
      <CardFooter>
        <span className="text-xs opacity-50">{author}</span>
      </CardFooter>
    </Card>
  );
};

export default BlogCards;
