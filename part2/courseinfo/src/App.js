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

  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
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
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }

  ]

  return (
    <div>
  {courses.map((course,id) => <Course key={id} course={course}/>)}
  </div>
  )
}

export default App