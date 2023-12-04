import React from 'react'
import { useParams } from 'react-router-dom'

function Singal() {

    const id =useParams()

  return (
    <div>
      


      {id}
    </div>
  )
}

export default Singal
