import { Link } from 'react-router-dom';
import { menusRoutes } from '../../routes';

export function Menu() {
  function mountRoutes() {
    return menusRoutes.map((item) => (
      <li key={item.alias}>
        <Link to={item.path}>{item.alias}</Link>
      </li>
    ));
  }

  return <ul>{mountRoutes()}</ul>;
}
