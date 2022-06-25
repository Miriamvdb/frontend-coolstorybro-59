export default function StoryCarousel(props) {
  return (
    <div>
      {props.stories.map((story) => {
        return (
          <div key={story.id}>
            <h3>{story.name}</h3>
            <p>{story.content}</p>
            <img alt={story.name} src={story.imageUrl} />
          </div>
        );
      })}
    </div>
  );
}
