import NavBar from '../Components/NavBar';

export default function Home() {
  return (
    <div className="app-container">
      <NavBar linkTo="watchList" linkText="WatchList" />
    </div>
  );
}
