import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchSpaces } from "../../store/space/actions";
import { selectSpace } from "../../store/space/selectors";
import Space from "../../components/Space";
import { Link } from "react-router-dom";

export default function SpacesPage() {
  const dispatch = useDispatch();
  const allSpaces = useSelector(selectSpace);

  useEffect(() => {
    dispatch(fetchSpaces());
  }, [dispatch]);

  return (
    <div>
      <h1>All Spaces</h1>
      <div className="container-allspaces">
        {allSpaces.map((space) => {
          return (
            <div
              key={space.id}
              style={{
                backgroundColor: space.backgroundColor,
                color: space.color,
              }}
            >
              <Space
                key={space.id}
                id={space.id}
                title={space.title}
                description={space.description}
              />
              <Link to={`/spaces/${space.id}`}>
                <button>Visit space</button>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
