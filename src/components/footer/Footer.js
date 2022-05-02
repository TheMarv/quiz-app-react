import './Footer.css';

export default function Footer({ onClick, active }) {
  return (
    <nav className="nav">
      <a
        aria-label="Home"
        className={`nav__link ${active === 'Home' ? 'nav__link--active' : ''}`}
        href="#home"
        onClick={() => onClick('Home')}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
          <path d="M575.8 255.5C575.8 273.5 560.8 287.6 543.8 287.6H511.8L512.5 447.7C512.5 450.5 512.3 453.1 512 455.8V472C512 494.1 494.1 512 472 512H456C454.9 512 453.8 511.1 452.7 511.9C451.3 511.1 449.9 512 448.5 512H392C369.9 512 352 494.1 352 472V384C352 366.3 337.7 352 320 352H256C238.3 352 224 366.3 224 384V472C224 494.1 206.1 512 184 512H128.1C126.6 512 125.1 511.9 123.6 511.8C122.4 511.9 121.2 512 120 512H104C81.91 512 64 494.1 64 472V360C64 359.1 64.03 358.1 64.09 357.2V287.6H32.05C14.02 287.6 0 273.5 0 255.5C0 246.5 3.004 238.5 10.01 231.5L266.4 8.016C273.4 1.002 281.4 0 288.4 0C295.4 0 303.4 2.004 309.5 7.014L564.8 231.5C572.8 238.5 576.9 246.5 575.8 255.5L575.8 255.5z" />
        </svg>
      </a>
      <a
        aria-label="Bookmarks"
        className={`nav__link ${
          active === 'Bookmarks' ? 'nav__link--active' : ''
        }`}
        href="#bookmarks"
        onClick={() => onClick('Bookmarks')}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
          <path d="M384 48V512l-192-112L0 512V48C0 21.5 21.5 0 48 0h288C362.5 0 384 21.5 384 48z" />
        </svg>
      </a>
      <a
        aria-label="Create"
        className={`nav__link ${
          active === 'Create' ? 'nav__link--active' : ''
        }`}
        href="#create"
        onClick={() => onClick('Create')}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <path d="M400 32h-352C21.49 32 0 53.49 0 80v352C0 458.5 21.49 480 48 480h245.5c16.97 0 33.25-6.744 45.26-18.75l90.51-90.51C441.3 358.7 448 342.5 448 325.5V80C448 53.49 426.5 32 400 32zM64 96h320l-.001 224H320c-17.67 0-32 14.33-32 32v64H64V96z" />
        </svg>
      </a>
      <a
        aria-label="User"
        className={`nav__link ${active === 'User' ? 'nav__link--active' : ''}`}
        href="#user"
        onClick={() => onClick('User')}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <path d="M224 256c70.7 0 128-57.31 128-128s-57.3-128-128-128C153.3 0 96 57.31 96 128S153.3 256 224 256zM274.7 304H173.3C77.61 304 0 381.6 0 477.3c0 19.14 15.52 34.67 34.66 34.67h378.7C432.5 512 448 496.5 448 477.3C448 381.6 370.4 304 274.7 304z" />
        </svg>
      </a>
    </nav>
  );
}
