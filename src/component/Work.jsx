import React from 'react'

function Work() {
  return (
    <div className='work'>
      <div className="container p-4">
        <h1 className='work-title'>/Work</h1>
        <div className='d-flex gap-2 mt-5 align-items-center'>
          <h5 className='filter'>Filter:</h5>
          <button className='btn'>All</button>
          <button className='btn'>E-commerce(3)</button>
          <button className='btn'>Chat App(2)</button>
          <button className='btn'>E-learning Platform</button>
          <button className='btn'>Dashboard(2)</button>
          <button className='btn'>Kanban Task Managment</button>
          <button className='btn'>Landing Page(14)</button>
        </div>
      </div>
    </div>
  )
}

export default Work;