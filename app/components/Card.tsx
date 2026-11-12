import type { Priority, Task } from "../types";

const borderColor: Record<Priority,string> = {
  high: "border-red-500",
  medium: "border-yellow-500",
  low: "border-gray-500"
}

type CardProps = Omit<Task,"id"> & {onToggle: () => void}

export default function Card({ title, done, priority, note, onToggle }: CardProps) {
  return (
    <div
      onClick={onToggle}
      className={`border p-3 cursor-pointer ${borderColor[priority]}`}
    >
      {done ? "✅" : "⬜"} {title}
      {note && <p className="text-gray-500 mt-2">{note}</p>}
    </div>
  );
}