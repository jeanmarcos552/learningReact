import { Link } from 'react-router-dom';

export function Menu() {
  return (
    <ul>
      <li>
        <Link to="useState">UseState()</Link>
      </li>
      <li>
        <Link to="useEffect">UseEffect()</Link>
      </li>
      <li>
        <Link to="useRef">useRef()</Link>
      </li>
      <li>
        <Link to="useMemo">UseMemo()</Link>
      </li>
      <li>
        <Link to="useCallback">useCallback()</Link>
      </li>
      <li>
        <Link to="useContext">useContext()</Link>
      </li>
    </ul>
  );
}
