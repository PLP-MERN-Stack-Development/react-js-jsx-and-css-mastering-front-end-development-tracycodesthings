import React from 'react'
import TaskManager from '../components/TaskManager' // TaskManager placed in components for reuse

export default function TodosPage() {
  return (
    <div className="max-w-3xl mx-auto">
      <TaskManager />
    </div>
  )
}
