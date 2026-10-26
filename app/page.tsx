type Priority = "high" | "medium" | "low";
type Task = {
  id: number;
  title: string;
  done: boolean;
  priority: Priority;
};

const borderColor: Record<Priority,string> = {
  high: "border-red-500",
  medium: "border-yellow-500",
  low: "border-gray-500"
}

function Card({ title, done, priority }: Omit<Task,"id">) {
  return (  
    <div className={`border p-3 ${borderColor[priority]}`}>
      {done ? "✅" : "⬜"} {title}
    </div>
    )
}

const tasks:Task[] =[
  { id: 1 ,title: "เรียน React" ,done: false ,priority: "high"},
  { id: 2 ,title: "ทำ portfolio" ,done: false ,priority: "low"},
  { id: 3 ,title: "learn some NEXT.js" ,done: false ,priority: "medium"}
]


export default function Home() {
  return (
    <main className="p-8 space-y-2">
      {tasks.map((t) => (
        <Card key={t.id} title={t.title} done={t.done} priority={t.priority}/>
      ))}
    </main>
  )
}
