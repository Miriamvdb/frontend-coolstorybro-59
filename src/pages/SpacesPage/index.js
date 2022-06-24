import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchSpaces } from "../../store/space/actions";
import { selectSpace } from "../../store/space/selectors";
import Space from "../../components/Space";

export default function SpacesPage() {
  const dispatch = useDispatch();
  const allSpaces = useSelector(selectSpace);

  useEffect(() => {
    dispatch(fetchSpaces());
  }, []);

  return (
    <div>
      <h1>All Spaces</h1>
      <div className="container-allspaces">
        {allSpaces.map((space) => {
          return (
            <Space
              key={space.id}
              id={space.id}
              title={space.title}
              description={space.description}
              backgroundColor={space.backgroundColor}
              color={space.color}
            />
          );
        })}
      </div>
    </div>
  );
}
