"use client";
import React, { useState } from "react";
import { FilterChecboxProps, FilterCheckbox } from "./filter-checkbox";
import { Input, Skeleton } from "../ui";

type Item = FilterChecboxProps;
type Props = {
  title: string;
  items: Item[];
  defaultItems?: Item[];
  limit: number;
  searchInputPlaceholder?: string;
  onClickCheckbox?: (id: string) => void;
  defaultValue?: string;
  className?: string;
  selected?: Set<string>;
  loading?: boolean;
  name?: string;
};

export const CheckboxFilterGroup: React.FC<Props> = ({
  title,
  items,
  defaultItems,
  limit,
  searchInputPlaceholder = "Пошук...",
  className,
  onClickCheckbox,
  loading,
  selected,
  name,
}) => {
  const [showAll, setShowAll] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const list = showAll
    ? items.filter((item) =>
        item.text.toLowerCase().includes(searchValue.toLowerCase())
      )
    : (defaultItems || items).slice(0, limit);

  const onChangeSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };
  if (loading) {
    return (
      <div className={className}>
        <p className="font-bold mb-3">{title}</p>
        {...Array(limit)
          .fill(0)
          .map((_, i) => (
            <Skeleton key={i} className="h-6 mb-5 rounded-[8px]" />
          ))}
        <Skeleton className="h-6 mb-5 w-28 rounded-[8px]" />
      </div>
    );
  }
  return (
    <div className={className}>
      <p className="font-bold mb-3">{title}</p>
      {showAll && (
        <div className="mb-5">
          <Input
            onChange={onChangeSearchInput}
            placeholder={searchInputPlaceholder}
            className="bg-gray-50 border-none"
          />
        </div>
      )}
      <div className="flex flex-col gap-4 max-h-96 pr-2 overflow-auto scrollbar">
        {list.map((item, index) => (
          <FilterCheckbox
            key={index}
            // onCheckedChange={() => onChekedChange(item.value)}
            onCheckedChange={(e) => console.log(e)}
            // checked={selected.has(item.value)}
            checked={selected?.has(item.value)}
            value={item.value}
            text={item.text}
            endAdornment={item.endAdornment}
            onCheckedChange={() => onClickCheckbox?.(item.value)}
            name={name}
          />
        ))}
      </div>
      {items.length > limit && (
        <div className={showAll ? "border-t border-t-neutral-100 mt-4" : ""}>
          <button
            onClick={() => setShowAll(!showAll)}
            className="text-pretty mt-3"
          >
            {showAll ? "Сховати" : "+ Показати все"}
          </button>
        </div>
      )}
    </div>
  );
};
