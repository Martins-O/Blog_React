import { useState } from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

const Create = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [author, setAuthor] = useState('');
    const [isPending, setIsPending] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const baseUrl = 'http://localhost:8081/api/v1/blogs/';
        axios.post(baseUrl, {
            title: title,
            body: content,
            author: author,
            isPending: isPending,
        })
            .then((res) => {
                console.log(res);
                console.log(res.data.message);
                console.log(res.data)
                navigate("/")
            })
            .catch((err) => {
                console.log(err);
            })

        setIsPending(true);
    }

    return (
        <div className="create">
            <h2>Add a New Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog title:</label>
                <input
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label>Blog body:</label>
                <textarea
                    required
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                ></textarea>
                <label>Blog author:</label>
                {/*<select*/}
                {/*    value={author}*/}
                {/*    onChange={(e) => setAuthor(e.target.value)}*/}
                {/*>*/}
                {/*    <option value="mario">mario</option>*/}
                {/*    <option value="yoshi">yoshi</option>*/}
                {/*</select>*/}
                    <input
                        type="text"
                        required
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                    />
                { !isPending && <button>Add Blog</button>}
                { isPending && <button  onClick={handleSubmit} disabled>Adding Blog...</button>}
            </form>
        </div>
    );
}

export default Create;