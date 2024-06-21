import React, { useState } from 'react'
import axios from 'axios'

function PostingData() {
    const [post, setPost] = useState({
        title : '',
        body : '',
    })

    const handleChange=(event)=>{
        setPost({...post, [event.target.name] : event.target.value})
    }

    const handleSubmit=(event)=>{
        console.log(post)
        event.preventDefault()  
        axios.post('http://localhost:8000/post', post )
        .then((res)=>{
            console.log(res)
        }) .catch((err)=>{
            console.log(err)
        })
    }

    return (
        <div>
            <form action="" onSubmit={handleSubmit}>
                title: 
                <input type="text" name="title" id="" onChange={handleChange} value={post.title}/>
                <br /> <br />
                post: 
                <input type="text" name="body" id="" onChange={handleChange} value={post.body}/>
                <br /> <br />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default PostingData
