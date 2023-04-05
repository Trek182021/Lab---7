import React from 'react';
import './CreatePost.css'
import {supabase} from '../client'

const CreatePost = () => {

    const createPost = async (event) => {
        event.preventDefault();
        await supabase.from('Posts').insert({title: event.target.title.value, author: event.target.author.value, description: event.target.description.value}).select();

        window.location = "/";
    }
    return (
        <div>
            <form onSubmit={createPost}>
                <label htmlFor="title">Title</label> <br />
                <input type="text" id="title" name="title" /><br />
                <br/>

                <label htmlFor="author">Author</label><br />
                <input type="text" id="author" name="author" /><br />
                <br/>

                <label htmlFor="description">Description</label><br />
                <textarea rows="5" cols="50" id="description">
                </textarea>
                <br/>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default CreatePost