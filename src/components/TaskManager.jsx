import React, { useMemo, useState, useEffect } from 'react'
import useLocalStorage from '../hooks/useLocalStorage'
import Card from './Card'
import Button from './Button'
import { filterTasks } from '../utils/filterTasks'

export default function TaskManager() {
  const [tasks, setTasks] = useLocalStorage('tasks', [])
  const [input, setInput] = useState('')
  const [filter, setFilter] = useState('all')

  // add task
  const addTask = e => {
    e.preventDefault()
    const trimmed = input.trim()
    if (!trimmed) return
    setTasks(prev => [{ id: Date.now(), text: trimmed, done: false }, ...prev])
    setInput('')
  }

  // toggle done
  const toggle = id => setTasks(prev => prev.map(t => t.id === id ? { ...t, done: !t.done } : t))

  // remove
  const remove = id => setTasks(prev => prev.filter(t => t.id !== id))

  const filtered = useMemo(() => filterTasks(tasks, filter), [tasks, filter])

  // optional effect: keep page title in sync with number of tasks
  useEffect(() => {
    document.title = `Tasks (${tasks.length}) - TaskApp`
  }, [tasks.length])

  return (
    <Card>
      <h2 className="text-xl font-semibold mb-4">Tasks</h2>

      <form onSubmit={addTask} className="flex gap-2 mb-4">
        <input
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          className="flex-1 px-3 py-2 border rounded"
          placeholder="Add a task"
        />
        <Button type="submit">Add</Button>
      </form>

      <div className="flex gap-2 mb-4">
        <Button variant={filter === 'all' ? 'primary' : 'secondary'} onClick={() => setFilter('all')}>All</Button>
        <Button variant={filter === 'active' ? 'primary' : 'secondary'} onClick={() => setFilter('active')}>Active</Button>
        <Button variant={filter === 'completed' ? 'primary' : 'secondary'} onClick={() => setFilter('completed')}>Completed</Button>
      </div>

      <ul className="space-y-2">
        {filtered.length === 0 && <li className="text-sm text-gray-500">No tasks</li>}
        {filtered.map(t => (
          <li key={t.id} className="flex items-center justify-between bg-gray-50 dark:bg-gray-800 p-2 rounded">
            <div className="flex items-center gap-3">
              <input type="checkbox" checked={t.done} onChange={() => toggle(t.id)} />
              <span className={`${t.done ? 'line-through text-gray-500' : ''}`}>{t.text}</span>
            </div>
            <div>
              <Button variant="danger" onClick={() => remove(t.id)}>Delete</Button>
            </div>
          </li>
        ))}
      </ul>
    </Card>
  )
}
