import Link from "next/link";
import React from "react";
import { Title } from "./title";
import { Button } from "../ui";
import { Plus } from "lucide-react";

type Props = {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  className?: string;
};

export const ProductCard: React.FC<Props> = ({
  className,
  id,
  name,
  price,
  imageUrl,
}) => {
  return (
    <div className={className}>
      <Link href={`/product/${id}`}>
        <div className="flex justify-center p-6 bg-secondary rounded-lg h-[260px]">
          <img className="w-[215px] h-[215px]" src={imageUrl} alt={name} />
        </div>
        <Title text={name} size="sm" className="mb-1 mt-3 font-bold" />
        <p className="text-sm text-gray-400">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis
          nesciunt perspiciatis, eligendi labore quo deleniti, sequi quaerat
          sunt voluptas cum deserunt quis odit ullam corrupti repellendus eaque
          laudantium optio aliquam.
        </p>
        <div className="flex justify-between items-center mt-4">
          <span className="text-[20px]">
            від <b>{price} ₴</b>
          </span>
          <Button variant="secondary">
            <Plus size={20} className="w-5 h-5 mr-1" />
            Добавить
          </Button>
        </div>
      </Link>
    </div>
  );
};
