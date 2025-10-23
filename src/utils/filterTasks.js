export function filterTasks(tasks, filter) {
  if (filter === 'active') return tasks.filter(t => !t.done)
  if (filter === 'completed') return tasks.filter(t => t.done)
  return tasks
}
