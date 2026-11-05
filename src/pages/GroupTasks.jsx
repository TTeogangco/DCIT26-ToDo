import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useTaskStore } from '../store'

function GroupTasks() {
  const { groupId } = useParams()
  const groups = useTaskStore((state) => state.groups)
  const addTask = useTaskStore((state) => state.addTask)
  const toggleTask = useTaskStore((state) => state.toggleTask)
  const deleteTask = useTaskStore((state) => state.deleteTask)
  const clearGroupTasks = useTaskStore((state) => state.clearGroupTasks)
  const [taskInput, setTaskInput] = useState('')
  const [error, setError] = useState('')
  const group = groups.find((item) => item.id === groupId)

  if (!group) return <div className="rounded-2xl bg-white p-8 text-center shadow-sm"><h1 className="text-2xl font-bold">Group Not Found</h1><Link to="/groups" className="mt-5 inline-block font-semibold text-blue-600">← Back to Task Groups</Link></div>

  function handleAddTask(e) {
    e.preventDefault()
    const title = taskInput.trim()
    if (!title) { setError('Please enter a task.'); return }
    addTask(groupId, title)
    setTaskInput(''); setError('')
  }
  function handleClear() {
    if (window.confirm('Are you sure you want to delete all tasks in this group?')) clearGroupTasks(groupId)
  }
  const completedCount = group.tasks.filter((task) => task.completed).length

  return <div>
    <Link to="/groups" className="font-semibold text-blue-600 hover:underline">← Back to Task Groups</Link>
    <div className="mb-6 mt-5"><h1 className="text-3xl font-bold">{group.name}</h1><p className="mt-2 text-slate-500">Manage the tasks in this category.</p><p className="mt-3 text-sm text-slate-500">{completedCount} of {group.tasks.length} tasks completed</p></div>
    <form onSubmit={handleAddTask} className="flex flex-col gap-3 rounded-2xl bg-white p-5 shadow-sm sm:flex-row"><input value={taskInput} onChange={(e) => { setTaskInput(e.target.value); setError('') }} placeholder="Enter a new task" className="min-w-0 flex-1 rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-500"/><button className="rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white hover:bg-blue-700">+ Add Task</button></form>
    {error && <p className="mt-3 text-sm text-red-600">{error}</p>}
    <section className="mt-6 rounded-2xl bg-white p-5 shadow-sm"><div className="mb-5 flex items-center justify-between gap-3"><h2 className="text-xl font-bold">Your Tasks</h2>{group.tasks.length > 0 && <button onClick={handleClear} className="text-sm font-semibold text-red-600 hover:underline">Clear All</button>}</div>
      {group.tasks.length === 0 ? <p className="py-8 text-center text-slate-500">No tasks in this group yet.</p> : <div className="space-y-3">{group.tasks.map((task) => <div key={task.id} className="flex items-center gap-3 rounded-xl border border-slate-200 p-4"><input type="checkbox" checked={task.completed} onChange={() => toggleTask(groupId, task.id)} aria-label={`Mark ${task.title}`} className="h-5 w-5 shrink-0 accent-green-600"/><div className="min-w-0 flex-1"><p className={`break-words font-medium ${task.completed ? 'text-slate-400 line-through' : 'text-slate-800'}`}>{task.title}</p><span className={`mt-1 inline-block rounded-full px-2 py-1 text-xs font-semibold ${task.completed ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'}`}>{task.completed ? 'Done' : 'Not Done'}</span></div><button onClick={() => deleteTask(groupId, task.id)} className="shrink-0 rounded-lg px-3 py-2 text-sm font-semibold text-red-600 hover:bg-red-50">Delete</button></div>)}</div>}
    </section>
  </div>
}
export default GroupTasks
