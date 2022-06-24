import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchSpaceWithStories } from "../../store/space/actions";

export default function SpacesDetailsPage() {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchSpaceWithStories(id));
  }, []);

  return <div></div>;
}
