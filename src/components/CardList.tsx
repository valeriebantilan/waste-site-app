import { SkipCard } from "@/types";
import {Card} from "@/components/Card"

interface Props {
    skipCards: SkipCard[];
    selectedCard?: SkipCard;
    handleSelectedCard: (card: SkipCard) => () => void;
  }

export const CardList = ({ skipCards, selectedCard, handleSelectedCard }: Props) => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {skipCards.length &&
          skipCards.map((card) => (
            <Card
              key={`card-${card.id}`}
              card={card}
              selectedCard={selectedCard}
              handleSelectedCard={handleSelectedCard}
            />
          ))}
      </div>
    );
  };
  