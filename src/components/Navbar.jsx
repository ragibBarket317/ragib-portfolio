const Navbar = () => {
  return (
    <header>
      <div>
        <div className="flex h-16 items-center justify-between">
          <div className="flex-1 md:flex md:items-center md:gap-12">
            <h2 className="text-2xl font-bold text-white">Ragib Barket</h2>
          </div>

          <div className="md:flex md:items-center md:gap-12">
            <nav aria-label="Global" className="hidden md:block">
              <ul className="flex items-center gap-6 text-sm">
                <li>
                  <a
                    className="text-gray-200 transition hover:text-gray-200/75"
                    href="#"
                  >
                    {' '}
                    About{' '}
                  </a>
                </li>

                <li>
                  <a
                    className="text-gray-200 transition hover:text-gray-200/75"
                    href="#"
                  >
                    {' '}
                    Careers{' '}
                  </a>
                </li>

                <li>
                  <a
                    className="text-gray-200 transition hover:text-gray-200/75"
                    href="#"
                  >
                    {' '}
                    History{' '}
                  </a>
                </li>

                <li>
                  <a
                    className="text-gray-200 transition hover:text-gray-200/75"
                    href="#"
                  >
                    {' '}
                    Services{' '}
                  </a>
                </li>

                <li>
                  <a
                    className="text-gray-200 transition hover:text-gray-200/75"
                    href="#"
                  >
                    {' '}
                    Projects{' '}
                  </a>
                </li>

                <li>
                  <a
                    className="text-gray-200 transition hover:text-gray-500/75"
                    href="#"
                  >
                    {' '}
                    Blog{' '}
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar
