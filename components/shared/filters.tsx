import { Input } from "../ui";
import { CheckboxFilterGroup } from "./checkbox-filters-group";
import { FilterCheckbox } from "./filter-checkbox";
import { RangeSlider } from "./range-slider";
import { Title } from "./title";
import React from "react";

type Props = {
  className?: string;
};

export const Filters: React.FC<Props> = ({ className }) => {
  return (
    <div className={className}>
      <Title text="Фільтрація" size="sm" className="mb-5 font-bold" />
      <div className="flex flex-col gap-4">
        <FilterCheckbox text="Можна зібрати" value={"1"} />
        <FilterCheckbox text="Новинки" value={"2"} />
      </div>
      <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
        <Title text="Ціна від і до:" size="sm" className="mb-5 font-bold" />
        <div className="flex mt-5 gap-3">
          <Input
            type="number"
            placeholder="0"
            min={0}
            max={1500}
            defaultValue={0}
          />
          <Input type="number" min={100} max={1500} placeholder="1500" />
        </div>
        <RangeSlider min={0} max={1000} step={10} value={[0, 1000]} />
        <div className="flex flex-col gap-4">
          <CheckboxFilterGroup
            title="Інгридієнти"
            className="mt-5"
            limit={6}
            defaultItems={[
              {
                text: "Сирний соус",
                value: "1",
              },
              {
                text: "Мацарела",
                value: "2",
              },
              {
                text: "Часник",
                value: "3",
              },
              {
                text: "Солені огірки",
                value: "4",
              },
              {
                text: "Цибуля",
                value: "5",
              },
              {
                text: "Томати",
                value: "6",
              },
            ]}
            items={[
              {
                text: "Сирний соус",
                value: "1",
              },
              {
                text: "Мацарела",
                value: "2",
              },
              {
                text: "Часник",
                value: "3",
              },
              {
                text: "Солені огірки",
                value: "4",
              },
              {
                text: "Цибуля",
                value: "5",
              },
              {
                text: "Томати",
                value: "6",
              },
              {
                text: "Томати",
                value: "7",
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
};
