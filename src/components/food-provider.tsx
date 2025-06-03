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
  loading: boolean;
  hasSearched: boolean;
  updateRecipes: (recipes: Meal[]) => void;
  addIngredient: (ingredient: string) => void;
  deleteIngredient: (ingredient: string) => void;
  handleClearIngredients: () => void;
  updateLoading: (value: boolean) => void;
  updateHasSearched: (value: boolean) => void;
};

const FoodContext = createContext<Context>({} as Context);

export const FoodProvider = ({ children }: { children: React.ReactNode }) => {
  const [listIngredient, setListIngredient] = useState<string[]>([]);
  const [recipes, setRecipes] = useState<Meal[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [hasSearched, setHasSearched] = useState<boolean>(false);

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

  const updateHasSearched = useCallback((value: boolean) => {
    setHasSearched(value);
  }, []);

  const updateLoading = useCallback((value: boolean) => {
    setLoading(value);
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
      loading,
      hasSearched,
      updateLoading,
      updateHasSearched,
    };
  }, [
    listIngredient,
    recipes,
    updateRecipes,
    addIngredient,
    deleteIngredient,
    hasSearched,
    loading,
    updateLoading,
    updateHasSearched,
  ]);

  return <FoodContext.Provider value={value}>{children}</FoodContext.Provider>;
};

export const useFood = () => useContext(FoodContext);
