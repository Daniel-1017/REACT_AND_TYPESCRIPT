import { useRef } from "react"

type NewGoalProps = {
  onAddGoal: (goal: string, summary: string) => void
}

const NewGoal = ({ onAddGoal }: NewGoalProps) => {
  const goalRef = useRef<HTMLInputElement>(null)
  const summaryRef = useRef<HTMLInputElement>(null)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const enteredGoal = goalRef.current!.value
    const enteredSummary = summaryRef.current!.value
    onAddGoal(enteredGoal, enteredSummary)

    e.currentTarget.reset()
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>
        <label htmlFor="goal">Your goal</label>
        <input type="text" id="goal" ref={goalRef} />
      </p>
      <p>
        <label htmlFor="summary">Short summary</label>
        <input type="text" id="summary" ref={summaryRef} />
      </p>
      <p>
        <button>Add Goal</button>
      </p>
    </form>
  )
}

export default NewGoal
