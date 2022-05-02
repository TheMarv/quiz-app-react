import './Header.css';

export default function Header({ active }) {
  return (
    <header class="header header--main">
      <h1>Quiz-App - {active}</h1>
    </header>
  );
}
