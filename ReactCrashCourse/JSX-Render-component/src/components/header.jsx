import reactLogo from "../assets/react.svg";
export default function Header() {
  return (
    <>
      <header className="header">
        <nav>
          <img className="nav-logo" src={reactLogo} alt="React logo" />
          <span>React Facts</span>
        </nav>
      </header>
    </>
  );
}
