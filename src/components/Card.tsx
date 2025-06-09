import { SkipCard } from "../types";
import React from "react";
import Image from "next/image";

interface Props {
  card: SkipCard;
  selectedCard?: SkipCard;
  handleSelectedCard: (card: SkipCard) => () => void;
}

export const Card = ({ card, selectedCard, handleSelectedCard }: Props) => {
  const isSelected = selectedCard?.id === card.id;
  return (
    <div
    className={`
      bg-gradient-to-br from-gray-800 to-gray-900 rounded-md shadow-lg overflow-hidden
      transition-transform duration-300 hover:scale-[1.02] cursor-pointer
      border-2 ${
        isSelected ? "border-teal-400 scale-[1.02]" : "border-transparent"
      }
    `}
    onClick={handleSelectedCard(card)}
    role="button"
    tabIndex={0}
    aria-pressed={isSelected}
    aria-label={`Select ${card.size} skip`}
  >
    <div className="relative h-40 overflow-hidden">
      <Image
        src={card.imageUrl as string}
        alt={`${card.size} skip`}
        className="w-full h-full object-cover transition-transform duration-300 hover:scale-[1.1]"
        width={500}
        height={300}
        priority={false}
      />
      {isSelected && (
        <div className="absolute top-2 right-2 bg-teal-500 text-white rounded-full p-2 shadow-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      )}
    </div>
    <div className="p-4 flex flex-col h-full">
      <div>
        <h3 className="text-xl font-bold text-white mb-1">{card.size} Yard Skip</h3>
        <p className="text-sm text-gray-300 line-clamp-2 min-h-[3rem] leading-6">
          {/* {card.description} */}
        </p>
      </div>
      <div className="flex items-center justify-between gap-2 mt-4">
        <span className="bg-gray-700/50 text-gray-300 text-sm px-3 py-1 rounded-md flex items-center gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-teal-400"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 001.414-1.414L11 11.586V8z"
              clipRule="evenodd"
            />
          </svg>
          <span>{card.hire_period_days} day hire period</span>
        </span>
        <span className="text-lg font-bold text-black-400 bg-white px-2 py-1 rounded-md">
            £{card.price_before_vat}
        </span>
      </div>
    </div>
  </div>
  );
};
