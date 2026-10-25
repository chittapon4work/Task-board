type Priority = "high" | "low";
type Task = {
  id: number;
  title: string;
  done: boolean;
  priority: Priority;
};
function Card({ title, done, priority }: Omit<Task,"id">) {
  return (  
    <div className={priority === "high" ? "border border-red-500 p-3" : "border border-gray-500 p-3"}>
      {done ? "✅" : "⬜"} {title}
    </div>
    )
}
const tasks:Task[] =[
  { id: 1 ,title: "เรียน React" ,done: false ,priority: "high"},
  { id: 2 ,title: "ทำ portfolio" ,done: false ,priority: "low"},
  { id: 3 ,title: "learn some NEXT.js" ,done: false ,priority: "high"}
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
