import BlogList from "./blogList";
import useFetch from "./useFetch";

const Home = () => {
    const {data, isPending} = useFetch('http://localhost:8081/api/v1/blogs/allBlog')


    return (
        <div className="home">
            {/*{ error && <div>{ error }</div> }*/}
            { isPending && <div>Loading....</div>}
            {data && <BlogList blogs={data} title="All Blogs!" />}
        </div>
    );
}

export default Home;