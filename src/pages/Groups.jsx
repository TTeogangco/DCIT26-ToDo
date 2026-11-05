import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useTaskStore } from '../store'

function Groups() {
  const groups = useTaskStore((state) => state.groups)
  const addGroup = useTaskStore((state) => state.addGroup)
  const [groupName, setGroupName] = useState('')
  const [error, setError] = useState('')

  function handleAddGroup(e) {
    e.preventDefault()
    const name = groupName.trim()
    if (!name) { setError('Please enter a category name.'); return }
    if (groups.some((group) => group.name.toLowerCase() === name.toLowerCase())) {
      setError('This category already exists.'); return
    }
    addGroup(name)
    setGroupName('')
    setError('')
  }

  return <div>
    <h1 className="text-3xl font-bold">Task Groups</h1>
    <p className="mt-2 text-slate-500">Create categories and organize your tasks.</p>
    <form onSubmit={handleAddGroup} className="mt-6 flex flex-col gap-3 rounded-2xl bg-white p-5 shadow-sm sm:flex-row">
      <input value={groupName} onChange={(e) => { setGroupName(e.target.value); setError('') }} placeholder="Enter a group name" className="min-w-0 flex-1 rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-500"/>
      <button type="submit" className="rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white hover:bg-blue-700">+ Create Group</button>
    </form>
    {error && <p className="mt-3 text-sm text-red-600">{error}</p>}
    <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {groups.map((group) => <Link key={group.id} to={`/groups/${group.id}`} className="rounded-2xl bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
        <h2 className="text-lg font-bold">{group.name}</h2>
        <p className="mt-2 text-sm text-slate-500">{group.tasks.length} {group.tasks.length === 1 ? 'task' : 'tasks'} · {group.tasks.filter(t=>!t.completed).length} pending</p>
        <p className="mt-4 font-semibold text-blue-600">Open Group →</p>
      </Link>)}
    </div>
    {groups.length === 0 && <p className="mt-8 text-center text-slate-500">No groups yet. Create your first group above.</p>}
  </div>
}
export default Groups
