export default function StoryCarousel(props) {
  return (
    <div>
      {props.stories.map((story) => {
        return (
          <div>
            <h1>{story.name}</h1>
            <p>{story.content}</p>
            <img alt={story.name} src={story.imageUrl} />
          </div>
        );
      })}
    </div>
  );
}
