import "./StyleNav.css";

function Nav({ children }) {
  return (
    <header className="navbar p-4">
      <div className="flex gap-2">
        {children}
        {/* <h1 className="text-2xl font-bold">Navbar</h1> */}
        <ul className="flex flex-row p-10 gap-5 text-base">
          <li>
            <a href="/">Dashboard</a>
          </li>
          <li>
            <a href="#aalumls">Alumni List</a>
          </li>
          <li>
            <a href="#astudls">Student List</a>
          </li>
          <li>
            <a href="#adonation">Donations</a>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Nav;
