import { create } from 'zustand'
import { persist } from 'zustand/middleware'

const initialGroups = [
  { id: 'school', name: 'School Activities', tasks: [] },
  { id: 'personal', name: 'Personal Tasks', tasks: [] },
  { id: 'projects', name: 'Projects', tasks: [] },
  { id: 'daily', name: 'Daily Tasks', tasks: [] },
]

export const useTaskStore = create(
  persist(
    (set) => ({
      groups: initialGroups,
      addGroup: (name) => set((state) => ({
        groups: [...state.groups, { id: crypto.randomUUID(), name, tasks: [] }],
      })),
      addTask: (groupId, title) => set((state) => ({
        groups: state.groups.map((group) => group.id === groupId
          ? { ...group, tasks: [...group.tasks, { id: crypto.randomUUID(), title, completed: false }] }
          : group),
      })),
      toggleTask: (groupId, taskId) => set((state) => ({
        groups: state.groups.map((group) => group.id === groupId
          ? { ...group, tasks: group.tasks.map((task) => task.id === taskId
              ? { ...task, completed: !task.completed } : task) }
          : group),
      })),
      deleteTask: (groupId, taskId) => set((state) => ({
        groups: state.groups.map((group) => group.id === groupId
          ? { ...group, tasks: group.tasks.filter((task) => task.id !== taskId) }
          : group),
      })),
      clearGroupTasks: (groupId) => set((state) => ({
        groups: state.groups.map((group) => group.id === groupId
          ? { ...group, tasks: [] } : group),
      })),
    }),
    { name: 'project-store' }
  )
)
