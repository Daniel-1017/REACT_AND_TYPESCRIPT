import { useState } from "react"
import goalsImg from "./assets/goals.jpg"
import Header from "./components/Header"
import CourseGoalList from "./components/CourseGoalList"
import NewGoal from "./components/NewGoal"

export type CourseGoal = {
  id: number
  title: string
  description: string
}

export default function App() {
  const [goals, setGoals] = useState<CourseGoal[]>([])

  const handleAddGoal = (goal: string, summary: string) => {
    setGoals(prevGoals => {
      const newGoal: CourseGoal = {
        id: Math.random(),
        title: goal,
        description: summary,
      }
      return [...prevGoals, newGoal]
    })
  }

  const handleDeleteGoal = (id: number) => {
    setGoals(prevGoals => {
      return prevGoals.filter(goal => goal.id !== id)
    })
  }

  return (
    <main>
      <Header image={{ src: goalsImg, alt: "A list of goals" }}>
        <h1>Your Course Goals</h1>
      </Header>
      <NewGoal onAddGoal={handleAddGoal} />
      <CourseGoalList goals={goals} onDelete={handleDeleteGoal} />
    </main>
  )
}
