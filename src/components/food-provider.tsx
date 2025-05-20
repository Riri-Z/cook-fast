'use client';

import { Meal } from '@/app/lib/types';
import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';

type Context = {
  listIngredient: string[];
  recipes: Meal[];
  updateRecipes: (recipes: Meal[]) => void;
  addIngredient: (ingredient: string) => void;
  deleteIngredient: (ingredient: string) => void;
  handleClearIngredients: () => void;
};

const FoodContext = createContext<Context>({} as Context);

export const FoodProvider = ({ children }: { children: React.ReactNode }) => {
  const [listIngredient, setListIngredient] = useState<string[]>([]);
  const [recipes, setRecipes] = useState<Meal[]>([]);

  const addIngredient = useCallback((ingredient: string) => {
    if (ingredient == '') return;

    setListIngredient((prev) => [...prev, ingredient]);
  }, []);

  const deleteIngredient = useCallback((ingredient: string) => {
    setListIngredient((prev) => prev.filter((e) => e !== ingredient));
  }, []);

  const handleClearIngredients = () => {
    setListIngredient([]);
  };

  const updateRecipes = useCallback((recipes: Meal[]) => {
    setRecipes(recipes);
  }, []);

  // Memoise fn and values to prevent rerender
  const value = useMemo(() => {
    return {
      listIngredient,
      recipes,
      updateRecipes,
      addIngredient,
      deleteIngredient,
      handleClearIngredients,
    };
  }, [listIngredient, recipes, updateRecipes, addIngredient, deleteIngredient]);

  return <FoodContext.Provider value={value}>{children}</FoodContext.Provider>;
};

export const useFood = () => useContext(FoodContext);
