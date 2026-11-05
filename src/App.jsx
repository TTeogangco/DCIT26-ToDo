import {
  BrowserRouter, Routes, Route, Navigate,
} from 'react-router-dom'

import Navbar from './components/Navbar'
import Home from './pages/Home'
import Groups from './pages/Groups'
import GroupTasks from './pages/GroupTasks'
import Guide from './pages/Guide'
import Developers from './pages/Developers'
import UsersPage from './pages/UsersPage'

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-slate-100 text-slate-800">
        <Navbar />
        <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
          <Routes>
            <Route path="/" element={<Navigate to="/home" replace />} />
            <Route path="/home" element={<Home />} />
            <Route path="/groups" element={<Groups />} />
            <Route path="/groups/:groupId" element={<GroupTasks />} />
            <Route path="/guide" element={<Guide />} />
            <Route path="/users" element={<UsersPage />} />
            <Route path="/developers" element={<Developers />} />
            <Route path="*" element={<Navigate to="/home" replace />} />
          </Routes>
        </main>
        <footer className="border-t border-slate-200 bg-white px-4 py-5 text-center text-sm text-slate-500">
          Project | DCIT 26 | Laboratory 4
        </footer>
      </div>
    </BrowserRouter>
  )
}

export default App
