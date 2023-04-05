import React from 'react';
import { useParams } from 'react-router-dom';
import './EditPost.css'
import { supabase } from '../client';

const EditPost = ({data}) => {

    const {id} = useParams();
    const post = data.filter(item => id == item.id)[0];

    const updatePost = async (event) => {
        event.preventDefault();
        await supabase.from('Posts').update({title: event.target.title.value, author: event.target.author.value, description: event.target.description.value}).eq('id', id);

        window.location = "/";
        
    }

    const deletePost = async (event) => {
        event.preventDefault();
        await supabase.from('Posts').delete().eq('id', id);
        
        window.location = "/";
    }


    return (
        <div>
            {post &&
            <form onSubmit={updatePost}>
                <label htmlFor="title">Title</label> <br />
                <input type="text" id="title" name="title" value={post.title} /><br />
                <br/>

                <label htmlFor="author">Author</label><br />
                <input type="text" id="author" name="author" value={post.author} /><br />
                <br/>

                <label htmlFor="description">Description</label><br />
                <textarea rows="5" cols="50" id="description" value={post.description} >
                </textarea>
                <br/>
                <input type="submit" value="Submit" />
                <button className="deleteButton" onClick={deletePost}>Delete</button>
            </form>
        }
        </div>
    )
}

export default EditPost