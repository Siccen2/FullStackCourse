const Header = ({ course }) => <h1>{course}</h1>

const Total = ({ exercises }) => {
  const sum = exercises.reduce((total, part) => total + part)
  return (
    <div>
      <p> <b> Total of {sum} exercises</b> </p>
    </div>
  )
}

const Part = ({ name, exercises }) => {
  console.log(name, exercises)
  return(
    <p>
    {name} {exercises}
    </p>
  )
}
 

const Content = ({ parts }) =>
  <div>
    {parts.map(part =>
      <Part key={part.id} name={part.name} exercises={part.exercises} />)}
  </div>


const Course = ({ course }) => {
  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total exercises={course.parts.map(part => part.exercises)} />

    </div>
  )

}

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      },
      {
        name: 'Redux',
        exercises: 11,
        id: 4
      }
    ]
  }

  return <Course course={course} />
}

export default App