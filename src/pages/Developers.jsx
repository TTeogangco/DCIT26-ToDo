
function Developers() {
  const developers = [
    {
      name: 'T-Jay Teogangco',
      role: 'Lead Developer & UI Designer',
    },
    {
      name: 'John Joseph Ivan',
      role: 'Qualiity Assurance Tester',
    },
    {
      name: 'Mary Kate Domingo',
      role: 'Frontend Developer',
    },
    {
      name: 'Regine Carla Sumagaysay',
      role: 'Documentation & Project',
    },

  ]

  return (
    <div>
      <h1 className="text-3xl font-bold">Developers</h1>

      <p className="mt-2 text-slate-500">
        Meet the people behind this Project.
      </p>

      <section className="mt-6 rounded-2xl bg-white p-6 shadow-sm">
        <h2 className="text-xl font-bold">
          Project Development Team
        </h2>

        <p className="mt-3 leading-7 text-slate-600">
          Developed as a laboratory project for
          DCIT 26: Application Development and Emerging Technologies.
        </p>

        <div className="mt-6 space-y-4">
          {developers.map((developer) => (
            <div
              key={developer.name}
              className="rounded-xl border border-slate-200 p-5"
            >
              <h3 className="font-bold">{developer.name}</h3>

              <p className="mt-1 text-sm text-slate-500">
                {developer.role}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Developers
