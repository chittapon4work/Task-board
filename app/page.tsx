"use client";
import Card from "./components/Card"
import type { Task } from "./types"
import { useState } from "react"

export default function Home() {

  const [tasks, setTasks] = useState<Task[]>([
  { id: 1 ,title: "เรียน React" ,done: false ,priority: "high", note: "react"},
  { id: 2 ,title: "ทำ portfolio" ,done: false ,priority: "low", note: "เพิ่มรูป"},
  { id: 3 ,title: "learn some NEXT.js" ,done: false ,priority: "medium", note: "เพิ่มผลงาน"},
  { id: 4 ,title: "ทำงานบ้าน" ,done: true ,priority: "medium", note: "ล้างจาน"},
  ])

  function toggleTask(id: number) {
  setTasks(prev =>
    prev.map(t => (t.id === id ? { ...t, done: !t.done } : t))
  );
  }

  return (
    <main className="p-8 space-y-2">
      {tasks.map((t) => (
        <Card key={t.id} title={t.title} done={t.done} priority={t.priority} note={t.note} onToggle={() => toggleTask(t.id)} />
      ))}
    </main>
  )
}
