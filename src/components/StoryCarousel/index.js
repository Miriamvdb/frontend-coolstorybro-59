// Feature 4: Delete story from My Space
import { useDispatch } from "react-redux";
import { deleteStory } from "../../store/user/actions";

export default function StoryCarousel(props) {
  // Feature 4: Delete story from My Space
  const dispatch = useDispatch();
  const onDelete = (id) => {
    console.log("Deleting story!", id);
    dispatch(deleteStory(id));
  };

  return (
    <div>
      {props.stories.map((story) => {
        return (
          <div key={story.id}>
            <h3>{story.name}</h3>
            <p>{story.content}</p>
            <img alt={story.name} src={story.imageUrl} />
            <br />
            <button onClick={() => onDelete(story.id)}>
              Delete this story
            </button>
          </div>
        );
      })}
    </div>
  );
}
