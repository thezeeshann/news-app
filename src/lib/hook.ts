import { useEffect, useState } from "react";

export function useDebounce(value: string): string {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedValue(value);
    }, 500);

    return () => clearTimeout(timerId);
  }, [value]);

  return debouncedValue;
}
