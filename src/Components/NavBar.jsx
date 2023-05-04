import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
export default function NavBar({ linkTo, linkText }) {
  return (
    <header>
      <nav>
        <h1>Find your film</h1>
        <h3>
          <Link to={linkTo}>{linkText}</Link>
        </h3>
      </nav>
    </header>
  );
}
