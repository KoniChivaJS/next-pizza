"use client";
import { Api } from "@/services/api-client";
import { useEffect, useState } from "react";

type IngredientItem = {
  text: string;
  value: string;
};
interface ReturnProps {
  items: IngredientItem[];
}

export const useFilterIngredients = (): ReturnProps => {
  const [items, setItems] = useState<ReturnProps["items"]>([]);
  useEffect(() => {
    async function fetchIngredients() {
      try {
        const ingredients = await Api.ingredients.getAll();
        setItems(
          ingredients.map((ingredient) => ({
            value: String(ingredient.id),
            text: ingredient.name,
          }))
        );
      } catch (error) {
        console.error(error);
      }
    }

    fetchIngredients();
  }, []);
  return { items };
};
