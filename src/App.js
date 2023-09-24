import { useState } from "react";


function App() {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const submit = () => {
        console.log('submit');
        console.log('title', title);
        console.log('body', body);

    }
  return (
    <div className="container">
        <div className="mb-3">
            <label className="form-label">Title</label>
            <input className="form-control" value={title}
                   onChange={(event) => setTitle(event.target.value)}
            />
        </div>

        <div className="mb-3">
            <label className="form-label">Body</label>
            <textarea className="form-control" value={body}
                   onChange={(event) => setBody(event.target.value)}
            >
            </textarea>
        </div>

        <button className="btn btn-primary" onClick={submit}>
            Post
        </button>
    </div>
  );
}

export default App;
