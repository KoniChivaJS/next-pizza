"use client";
import { Api } from "@/services/api-client";
import { useEffect, useState } from "react";
import { useSet } from "react-use";

type IngredientItem = {
  text: string;
  value: string;
};
interface ReturnProps {
  items: IngredientItem[];
  loading: boolean;
  selectedIds: Set<string>;
  onAddId: (id: string) => void;
}

export const useFilterIngredients = (): ReturnProps => {
  const [items, setItems] = useState<ReturnProps["items"]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedIds, { toggle }] = useSet(new Set<string>([]));

  useEffect(() => {
    async function fetchIngredients() {
      try {
        setLoading(true);
        const ingredients = await Api.ingredients.getAll();
        setItems(
          ingredients.map((ingredient) => ({
            value: String(ingredient.id),
            text: ingredient.name,
          }))
        );
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    fetchIngredients();
  }, []);
  return { items, loading, selectedIds, onAddId: toggle };
};
