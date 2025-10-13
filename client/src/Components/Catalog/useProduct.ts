import { useEffect, useState } from "react";
import type { ProductCard, CheckProductProps } from "../Types/Types";

export const useProduct = () => {
  const [allProducts, setAllProducts] = useState<ProductCard[]>([]);
  const [products, setProducts] = useState<ProductCard[]>([]);
  const [countCheck, setCountCheck] = useState<CheckProductProps[]>([]);
  const [sortType, setSortType] = useState("price-min");
  const [filterInStock, setFilterInStock] = useState(false);
  const [typeChecked, setTypeChecked] = useState<string[]>([]);

  useEffect(() => {
    fetch("http://localhost:3001/lamps")
      .then((res) => res.json())
      .then((data: ProductCard[]) => {
        setAllProducts(data);
        setProducts(data);

        const allTypes = Array.from(data.flatMap((p) => p.type ?? []));
        const typeCounts: Record<string, number> = {};

        allTypes.forEach((t) => {
          if (t) {
            typeCounts[t] = (typeCounts[t] || 0) + 1;
          }
        });

        const checkData: CheckProductProps[] = Object.entries(typeCounts).map(
          ([type, count], id) => ({
            id,
            name: type,
            type: [type],
            count,
          })
        );

        setCountCheck(checkData);
      })
      .catch((err) => console.error("Ошибка:", err));
  }, [sortType]);

  useEffect(() => {
    let filteredData = [...allProducts];

    // фильтр "в наличии"
    if (filterInStock) {
      filteredData = filteredData.filter(
        (p) =>
          p.availability.moscow > 0 ||
          p.availability.orenburg > 0 ||
          p.availability.saintPetersburg > 0
      );
    }

    // сортировка
    if (sortType === "price-min") {
      filteredData.sort((a, b) => a.price.new - b.price.new);
    } else if (sortType === "price-max") {
      filteredData.sort((a, b) => b.price.new - a.price.new);
    } else if (sortType === "rating-max") {
      filteredData.sort((a, b) => b.rating - a.rating);
    }

    // Сортировка по типу
    if (typeChecked.length > 0) {
      filteredData = filteredData.filter((p) =>
        p.type?.some((t) => typeChecked.includes(t))
      );
    }

    setProducts(filteredData);
  }, [sortType, filterInStock, allProducts, typeChecked]);

  const handleTypeChange = (value: string) => {
    setTypeChecked((prev) =>
      prev.includes(value) ? prev.filter((t) => t !== value) : [...prev, value]
    );
  };

  return {
    products,
    countCheck,
    sortType,
    setSortType,
    filterInStock,
    setFilterInStock,
    handleTypeChange,
  };
};
