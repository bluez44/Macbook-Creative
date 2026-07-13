import { navLinks } from "../constants";

const NavBar = () => {
  return (
    <header>
      <nav>
        <img src="/logo.svg" alt="Apple Logo" />

        <ul>
          {navLinks.map((item) => (
            <li key={item.label}>
              <a href={item.label.toLowerCase()}>{item.label}</a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <button>
            <img src="/search.svg" alt="Search" />
          </button>

          <button>
            <img src="/cart.svg" alt="Cart" />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
