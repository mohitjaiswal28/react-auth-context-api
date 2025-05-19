import { useCallback } from "react";

export const useLocalStorage = <T>(key: string) => {
  const getItem = useCallback((): T | null => {
    try {
      const stored = localStorage.getItem(key);
      return stored ? (JSON.parse(stored) as T) : null;
    } catch (error) {
      console.error("Error getting item from localStorage:", error);
      return null;
    }
  }, [key]);

  const setItem = useCallback(
    (value: T) => {
      try {
        localStorage.setItem(key, JSON.stringify(value));
      } catch (error) {
        console.error("Error setting item in localStorage:", error);
      }
    },
    [key]
  );

  const removeItem = useCallback(() => {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.error("Error removing item from localStorage:", error);
    }
  }, [key]);

  return { getItem, setItem, removeItem };
};
