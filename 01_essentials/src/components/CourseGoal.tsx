// 1st approach
// type CourseGoalProps = {
//   title: string
//   children: React.ReactNode
// }

// 2nd approach
// type CourseGoalProps = React.PropsWithChildren<{ title: string }>

type CourseGoalProps = {
  id: number
  title: string
  children: React.ReactNode
  onDelete: (id: number) => void
}

const CourseGoal = ({ id, title, children, onDelete }: CourseGoalProps) => {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        {children}
      </div>
      <button onClick={() => onDelete(id)}>DELETE</button>
    </article>
  )
}

export default CourseGoal
