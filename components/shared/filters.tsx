"use client";
import { useFilterIngredients } from "@/hooks/useFilterIngredients";
import { Input } from "../ui";
import { CheckboxFilterGroup } from "./checkbox-filters-group";
import { FilterCheckbox } from "./filter-checkbox";
import { RangeSlider } from "./range-slider";
import { Title } from "./title";
import React, { useEffect, useState } from "react";
import { useSet } from "react-use";
import qs from "qs";
import { useRouter } from "next/navigation";
type Props = {
  className?: string;
};
interface PriceProps {
  priceFrom?: number;
  priceTo?: number;
}

export const Filters: React.FC<Props> = ({ className }) => {
  const router = useRouter();
  const { items, loading, onAddId, selectedIds } = useFilterIngredients();
  const [sizes, { toggle: toggleSizes }] = useSet(new Set<string>([]));
  const [pizzaTypes, { toggle: togglePizzaTypes }] = useSet(
    new Set<string>([])
  );
  const [price, setPrice] = useState<PriceProps>({});
  const updatePrice = (name: keyof PriceProps, value: number) => {
    setPrice({
      ...price,
      [name]: value,
    });
  };

  useEffect(() => {
    const filters = {
      ...price,
      pizzaTypes: Array.from(pizzaTypes),
      sizes: Array.from(sizes),
      ingredients: Array.from(selectedIds),
    };
    const query = qs.stringify(filters, {
      arrayFormat: "comma",
    });
    router.push(`?${query}`);
  }, [price, sizes, pizzaTypes, selectedIds]);

  return (
    <div className={className}>
      <Title text="Фільтрація" size="sm" className="mb-5 font-bold" />
      <div className="flex flex-col gap-4">
        <CheckboxFilterGroup
          title="Тип теста"
          name="pizzaTypes"
          className="mb-5"
          onClickCheckbox={togglePizzaTypes}
          selected={pizzaTypes}
          items={[
            { text: "Тонкое", value: "1" },
            { text: "Традиционное", value: "2" },
          ]}
          limit={2}
        />
        <CheckboxFilterGroup
          title="Размеры"
          name="sizes"
          className="mb-5"
          onClickCheckbox={toggleSizes}
          selected={sizes}
          items={[
            { text: "20 см", value: "20" },
            { text: "30 см", value: "30" },
            { text: "40 см", value: "40" },
          ]}
          limit={3}
        />
      </div>
      <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
        <Title text="Ціна від і до:" size="sm" className="mb-5 font-bold" />
        <div className="flex mt-5 gap-3">
          <Input
            type="number"
            placeholder="0"
            min={0}
            max={1000}
            value={String(price.priceFrom)}
            onChange={(e) => updatePrice("priceFrom", Number(e.target.value))}
          />
          <Input
            type="number"
            min={0}
            max={1000}
            placeholder="1000"
            value={String(price.priceTo)}
            onChange={(e) => updatePrice("priceTo", Number(e.target.value))}
          />
        </div>
        <RangeSlider
          min={0}
          max={1000}
          step={10}
          value={[price.priceFrom || 0, price.priceTo || 1000]}
          onValueChange={([priceFrom, priceTo]) =>
            setPrice({ priceFrom, priceTo })
          }
        />
        <div className="flex flex-col gap-4">
          <CheckboxFilterGroup
            title="Інгридієнти"
            className="mt-5"
            limit={6}
            defaultItems={items.slice(0, 5)}
            items={items}
            loading={loading}
            onClickCheckbox={onAddId}
            selected={selectedIds}
            name="ingredients"
          />
        </div>
      </div>
    </div>
  );
};
