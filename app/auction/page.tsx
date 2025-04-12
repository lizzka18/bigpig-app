"use client"

import LotItem from "@/components/auction/LotItem";
import Timer from "@/components/auction/Timer";
import { useState } from "react";

type Lot = {
  id: number;
  description: string;
  amount: number;
};

export default function AuctionPage() {
  const [lots, setLots] = useState<Lot[]>([
    { id: 1, description: "Первая идея", amount: 100 },
    { id: 2, description: "Смотрим кино", amount: 50 },
    { id: 3, description: "Поёт гимн", amount: 10 },
  ]);

  const handleAddToLot = (id: number, value: number) => {
    const updated = lots.map((lot) =>
      lot.id === id ? { ...lot, amount: lot.amount + value } : lot
    );
    setLots(updated);
  };

  // Сортируем по сумме
  const sorted = [...lots].sort((a, b) => b.amount - a.amount);

  return (
    <div className="min-h-screen bg-green-800 text-white p-4 grid grid-cols-3 gap-4">
      {/* Лоты */}
      <div className="col-span-2 space-y-2">
        {sorted.map((lot, i) => (
          <LotItem
            key={lot.id}
            index={i + 1}
            createdAt={lot.id}
            description={lot.description}
            amount={lot.amount}
            onAdd={(value) => handleAddToLot(lot.id, value)}
          />
        ))}
      </div>

      {/* Таймер и чат */}
      <div className="space-y-4">
        <Timer />
        <div className="bg-black/20 p-2 rounded-xl h-48">🎥 Камера / Чат тут</div>
      </div>
    </div>
  );
}
