import { Separator } from "@radix-ui/react-separator";

type TaskCard = {
  label: string;
  value: number;
};

const TaskStats = () => {
  const statisticCards: TaskCard[] = [
    { label: "total", value: 23 },
    { label: "in progress", value: 231 },
    { label: "waiting", value: 342 },
    { label: "completed", value: 239 },
  ];
  return (
    <div className="flex flex-col gap-2">
      <span className="font-bold text-xl">Tasks</span>
      <div className="grid grid-cols-2 gap-3 mt-3">
        {statisticCards.map((card, index) => (
          <SingleCard key={index} card={card} />
        ))}
      </div>
    </div>
  );
};

export default TaskStats;

export const SingleCard = ({ card }: { card: TaskCard }) => {
  return (
    <div className="p-3 bg-gray-100 rounded-xl">
      <span className="text-gray-600 text-xs">{card.label.toUpperCase()}</span>

      <div className="flex gap-2 mt-1 items-center">
        <Separator className="w-1 h-4 bg-primary" orientation="vertical" />
        <span className="font-bold text-lg">{card.value}</span>
      </div>
    </div>
  );
};
