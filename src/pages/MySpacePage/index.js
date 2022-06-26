import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import StoryCarousel from "../../components/StoryCarousel";
import StoryForm from "../../components/StoryForm"; // Feature 5: Post a new story with corresponding id
import { getUserWithStoredToken } from "../../store/user/actions";
import { selectMySpace } from "../../store/user/selectors";

export default function MySpacePage() {
  const dispatch = useDispatch();
  const mySpace = useSelector(selectMySpace);
  // console.log("My space?", mySpace);

  useEffect(() => {
    dispatch(getUserWithStoredToken);
  }, [dispatch, mySpace]);

  if (!mySpace) return <div>Loading..</div>;

  // Feature 5: Add component
  return (
    <div>
      <h1>My Space</h1>
      <div
        className="container-myspace"
        style={{
          backgroundColor: mySpace.backgroundColor,
          color: mySpace.color,
        }}
      >
        <StoryForm />
        <h1>{mySpace.title}</h1>
        <p>{mySpace.description}</p>
        <div>
          <StoryCarousel stories={mySpace.stories} />
        </div>
      </div>
    </div>
  );
}
