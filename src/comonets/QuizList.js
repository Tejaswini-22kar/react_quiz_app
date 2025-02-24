import React from 'react'

function QuizList({question , options}) {
  return (
    <>
     <h3>{question}</h3>
     <ul>
        {
             options.map((e) =>{
                return(
                    <li>{e}</li>
                )
             })
        }
    
     </ul>
    </>
  )
}

export default QuizList