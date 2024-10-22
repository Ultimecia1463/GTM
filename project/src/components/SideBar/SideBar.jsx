import "./StyleSide.css";

function SideBar() {
  return (
    <aside className="sidebar">
      {/* <h1 className="text-2xl font-bold p-4">SideBar</h1> */}
      <ul className="flex flex-col p-10 gap-5 text-lg">
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
        <li>
          <a href="#ablog">Blogs</a>
        </li>
        <li>
          <a href="#ablog">Events</a>
        </li>
        <li>
          <a href="#ajob">Job Board</a>
        </li>
      </ul>
    </aside>
  );
}

export default SideBar;
