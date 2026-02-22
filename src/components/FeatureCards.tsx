interface FeatureCard {
  icon?: string;
  title: string;
  description: string;
}

interface FeatureCardsProps {
  cards: FeatureCard[];
  columns?: 2 | 3 | 4;
}

export default function FeatureCards({ cards, columns = 3 }: FeatureCardsProps) {
  const colClass = columns === 2 ? "md:grid-cols-2" : columns === 4 ? "md:grid-cols-4" : "md:grid-cols-3";
  return (
    <div className={`grid grid-cols-1 ${colClass} gap-6`}>
      {cards.map((card) => (
        <div
          key={card.title}
          className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6"
        >
          {card.icon && <div className="text-3xl mb-4">{card.icon}</div>}
          <h3 className="text-white font-semibold text-lg mb-2">{card.title}</h3>
          <p className="text-white/50 text-sm leading-relaxed">{card.description}</p>
        </div>
      ))}
    </div>
  );
}
