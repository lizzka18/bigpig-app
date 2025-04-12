'use client';

import { useState } from "react";

type LotItemProps = {
  index: number; // текущая позиция в сортировке
  createdAt?: number; // номер добавления (#1)
  description: string;
  amount: number;
  onAdd?: (value: number) => void;
};

export default function LotItem({
  index,
  description,
  amount,
  createdAt,
  onAdd,
}: LotItemProps) {
  const [input, setInput] = useState("");

  // Определяем цвет по позиции
  const bgColor =
    index === 1 ? "bg-yellow-500/20" :
    index === 2 ? "bg-gray-300/20" :
    "bg-white/10";

  return (
    <div className={`${bgColor} p-3 rounded-xl flex justify-between items-center gap-4`}>
      <div className="flex-1">
        <div className="text-xs text-gray-400">#{createdAt ?? index}</div>
        <div className="font-semibold text-white">{index}. {description}</div>
      </div>
      <div className="text-right">
        <div className="text-lg font-bold text-yellow-400">{amount} ₽</div>
        {onAdd && (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const value = parseInt(input);
              if (!isNaN(value)) {
                onAdd(value);
                setInput("");
              }
            }}
            className="flex gap-1 mt-1"
          >
            <input
              type="number"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="w-16 text-sm px-1 rounded text-black"
              placeholder="+ ₽"
            />
            <button type="submit" className="bg-white text-black px-2 rounded text-sm">+</button>
          </form>
        )}
      </div>
    </div>
  );
}
