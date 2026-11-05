
import { useEffect, useState } from 'react'
import axios from 'axios'

function UsersPage() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const loadUsers = async () => {
      try {
        const response = await axios.get(
          'https://dummyjson.com/users?limit=4'
        )
        setUsers(response.data.users)
      } catch {
        setError('Could not load users. Please check your internet.')
      } finally {
        setLoading(false)
      }
    }

    loadUsers()
  }, [])

  return (
    <section className="mx-auto max-w-5xl rounded-2xl bg-white p-6 shadow-sm">
      <h1 className="text-3xl font-bold">User Information</h1>
      <p className="mt-2 text-slate-500">
        Four sample users loaded using Axios.
      </p>

      {loading && <p className="mt-6">Loading users...</p>}

      {error && <p className="mt-6 text-red-600">{error}</p>}

      {!loading && !error && (
        <div className="mt-6 grid gap-5 sm:grid-cols-2">
          {users.map((user) => (
            <div
              key={user.id}
              className="flex gap-4 rounded-xl border p-4"
            >
              <img
                src={user.image}
                alt={`${user.firstName} ${user.lastName}`}
                className="h-20 w-20 rounded-full bg-slate-100"
              />

              <div className="min-w-0 space-y-1">
                <h2 className="text-lg font-bold">
                  {user.firstName} {user.lastName}
                </h2>

                <p><b>Age:</b> {user.age}</p>
                <p className="break-all">
                  <b>Email:</b> {user.email}
                </p>
                <p><b>Phone:</b> {user.phone}</p>
                <p><b>University:</b> {user.university}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      <p className="mt-5 text-xs text-slate-400">
        Demo data from DummyJSON API.
      </p>
    </section>
  )
}

export default UsersPage
