
function Guide() {
  const instructions = [
    {
      title: 'Create a task group',
      description:
        'Open Task Groups, enter a category name, and click Create Group.',
    },
    {
      title: 'Add a task',
      description:
        'Open your chosen group, enter a task in the input field, and click Add Task.',
    },
    {
      title: 'Mark a task as Done',
      description:
        'Check the box beside the task. Its status will change to Done.',
    },
    {
      title: 'Mark a task as Not Done',
      description:
        'Uncheck the box to change the task back to Not Done.',
    },
    {
      title: 'Delete a task',
      description:
        'Click Delete beside the task you want to remove.',
    },
    {
      title: 'Clear a group',
      description:
        'Click Clear All to remove every task from the selected group, then confirm the action.',
    },
    {
      title: 'View User Information',
      description: 'Open User Information to load sample profile details from an online API using Axios.',
    },
    {
      title: 'Navigate between pages',
      description:
        'Use the navigation bar to visit Home, Task Groups, User Guide, User Information, and Developers.',
    },
  ]

  return (
    <div>
      <h1 className="text-3xl font-bold">User Guide</h1>

      <p className="mt-2 text-slate-500">
        Learn how to use this project step by step.
      </p>

      <div className="mt-6 space-y-4">
        {instructions.map((item, index) => (
          <section
            key={item.title}
            className="rounded-2xl bg-white p-5 shadow-sm"
          >
            <h2 className="font-bold">
              {index + 1}. {item.title}
            </h2>

            <p className="mt-2 leading-7 text-slate-600">
              {item.description}
            </p>
          </section>
        ))}
      </div>
    </div>
  )
}

export default Guide
