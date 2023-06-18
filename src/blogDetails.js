import React from "react";
import {useNavigate, useParams} from "react-router-dom";
import useFetch from "./useFetch";



const BlogDetails = () => {
    const { author } = useParams();
    const {data, error, isPending} = useFetch('http://localhost:8081/api/v1/blogs/{author}'+author)
    // console.log(data)
    const navigate = useNavigate()
    const handleClick = () => {
        fetch('http://localhost:8081/ap1/v1/blogs/delete/{blogId}'+ data.id, {
            method: 'DELETE'
        })
            .then(() => {
                navigate('/');
            })
    }

  return(
      <div className="blog-details">
          {isPending && <div>Loading...</div>}
          {error && <div>{ error }</div>}
          {data && (
              <article>
                  <h2>{data.title}</h2>
                  <p>Written by {data.author} </p>
                  <div>{ data.body }</div>
                  <button onClick={handleClick}>Delete</button>
              </article>
          )}
      </div>
  )
}

export default BlogDetails;