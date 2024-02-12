// components/FavoritesPage.jsx
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const FavoritesPage = () => {
  const favorites = useSelector((state) => state.favorites);

  return (
    <div>
      <h1>Favorite Companies</h1>
      <ul>
        {favorites.map((favorite) => (
          <li key={favorite}>
            <Link to={`/${favorite}`}>{favorite}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default FavoritesPage;
