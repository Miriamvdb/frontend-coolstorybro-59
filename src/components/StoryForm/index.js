// Feature 5: Post a new story with corresponding id
import { useDispatch } from "react-redux";
import React, { useState } from "react";
import { postNewStory } from "../../store/user/actions";

export default function StoryForm() {
  const dispatch = useDispatch();
  //   const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState("");
  const [content, setContent] = useState("");
  const [imageUrl, setImageUrl] = useState(
    "https://media.s-bol.com/7pxRW7oWWn18/550x559.jpg"
  );

  function submitForm(event) {
    event.preventDefault();
    dispatch(postNewStory(name, content, imageUrl));
    // console.log(name, content, imageUrl);
  }

  return (
    <div>
      <form onSubmit={submitForm}>
        <h3>Post a cool story bro!</h3>

        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="Name of your new cool story"
          required
        />

        <label>Content:</label>
        <input
          type="text"
          value={content}
          onChange={(event) => setContent(event.target.value)}
          placeholder="Tell you're cool story here"
        />

        <label>Image:</label>
        <input
          type="text"
          value={imageUrl}
          onChange={(event) => setImageUrl(event.target.value)}
          placeholder="Paste url of you're awesome image here"
        />
        <br />
        <br />
        {imageUrl ? <img src={imageUrl} alt="preview" /> : null}
        <br />
        <button onClick={submitForm} type="submit">
          Post story!
        </button>
      </form>
    </div>
  );
}

// Later ff probereeeee
//   return showForm ? (
//     <div>
//       <form onSubmit={submitForm}>
//         <h3>Post a cool story bro!</h3>

//         <label>Name:</label>
//         <input
//           type="text"
//           value={name}
//           onChange={(event) => setName(event.target.value)}
//           placeholder="Name of your new cool story"
//           required
//         />

//         <label>Content:</label>
//         <input
//           type="text"
//           value={content}
//           onChange={(event) => setContent(event.target.value)}
//           placeholder="Tell you're cool story here"
//         />

//         <label>Image:</label>
//         <input
//           type="text"
//           value={imageUrl}
//           onChange={(event) => setImageUrl(event.target.value)}
//           placeholder="Paste url of you're awesome image here"
//         />
//         {imageUrl ? <img src={imageUrl} alt="preview" thumbnail /> : null}

//         <button onClick={submitForm} type="submit">
//           Post story!
//         </button>
//         <button onClick={setShowForm(false)}>Cancel</button>
//       </form>
//     </div>
//   ) : (
//     <button
//       onClick={() => {
//         setShowForm(true);
//       }}
//     >
//       Post a cool story bro
//     </button>
//   );
// }
