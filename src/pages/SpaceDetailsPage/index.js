import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Space from "../../components/Space";
import StoryCarousel from "../../components/StoryCarousel";
import { fetchSpaceWithStories } from "../../store/space/actions";
import { selectSpaceWithStories } from "../../store/space/selectors";

export default function SpacesDetailsPage() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const spaceWithStories = useSelector(selectSpaceWithStories);
  console.log(spaceWithStories);

  useEffect(() => {
    dispatch(fetchSpaceWithStories(id));
  }, [dispatch, id]);

  if (!spaceWithStories) return <div>Loading..</div>;

  const stories = spaceWithStories.stories;

  // Logic to sort the stories "createdAt"
  const sortedStories = [...stories].sort(
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
  );

  return (
    <div className="container-spacedetails-stories">
      <div className="container-spacedetails" key={spaceWithStories.id}>
        <Space
          key={spaceWithStories.id}
          id={spaceWithStories.id}
          title={spaceWithStories.title}
          description={spaceWithStories.description}
          backgroundColor={spaceWithStories.backgroundColor}
          color={spaceWithStories.color}
        />
      </div>

      <div className="container-stories">
        <StoryCarousel stories={sortedStories} />
      </div>
    </div>
  );
}
