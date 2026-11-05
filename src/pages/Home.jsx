import { Link } from 'react-router-dom'
import { useTaskStore } from '../store'

function Home() {
  const groups = useTaskStore((state) => state.groups)
  const allTasks = groups.flatMap((group) => group.tasks)
  const totalTasks = allTasks.length
  const completedTasks = allTasks.filter((task) => task.completed).length
  const pendingTasks = totalTasks - completedTasks

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Welcome!</h1>
        <p className="mt-2 text-slate-500">Organize your tasks and keep track of your progress.</p>
        <Link to="/users" className="mt-4 inline-block rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700">
          View Sample User Information →
        </Link>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <div className="rounded-2xl bg-white p-6 shadow-sm"><p className="text-sm text-slate-500">Total Tasks</p><h2 className="mt-2 text-3xl font-bold">{totalTasks}</h2></div>
        <div className="rounded-2xl bg-white p-6 shadow-sm"><p className="text-sm text-green-600">Completed Tasks</p><h2 className="mt-2 text-3xl font-bold text-green-600">{completedTasks}</h2></div>
        <div className="rounded-2xl bg-white p-6 shadow-sm"><p className="text-sm text-orange-600">Pending Tasks</p><h2 className="mt-2 text-3xl font-bold text-orange-600">{pendingTasks}</h2></div>
      </div>
      <section className="mt-8 rounded-2xl bg-white p-6 shadow-sm">
        <h2 className="text-xl font-bold">Getting Started</h2>
        <p className="mt-3 leading-7 text-slate-600">Create task groups for your school activities, personal tasks, projects, and daily responsibilities. Open a group to add tasks and update their status.</p>
        <p className="mt-3 text-sm font-bold text-slate-500">You currently have {groups.length} task group(s).</p>
        <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
          {groups.map((group) => <Link key={group.id} to={`/groups/${group.id}`} className="rounded-xl border border-slate-200 p-4 hover:border-blue-400">
            <b>{group.name}</b><p className="mt-1 text-sm text-slate-500">{group.tasks.filter((task) => !task.completed).length} pending · {group.tasks.length} total</p>
          </Link>)}
        </div>
      </section>
    </div>
  )
}
export default Home
