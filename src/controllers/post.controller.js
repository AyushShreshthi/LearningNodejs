import {Post } from '../models/post.model.js';

const createPost = async (req, res) => {
    try 
    {
        const {name, description, age} = req.body;

        if(!name || !description || !age){
            return res.status(400).json({message: "All fields are important"})
        }
        const post = await Post.create({
            name,
            description,
            age
        });
        res.status(201).json({message: "Post created successfully", post});
    } 
    
    catch (error) 
    {
        res.status(500).json({message: "Error creating post", error});
    }
};

const getAllPosts = async (req, res) => {
    try 
    {
        const posts = await Post.find();
        res.status(200).json({message: "Posts retrieved successfully", posts});
    } 
    catch (error) 
    {
        res.status(500).json({message: "Error retrieving posts", error});
    }
};

const updatePost = async (req, res) => {
    try 
    {
        // Check if request body is empty
        if(Object.keys(req.body).length === 0){
            return res.status(400).json({message: "At least one field is required to update"})
        }

        const {id} = req.params;
        const {name, description, age} = req.body;
        const post = await Post.findByIdAndUpdate(id, {name, description, age}, {new: true});
        if(!post){
            return res.status(404).json({message: "Post not found"});
        }
        res.status(200).json({message: "Post updated successfully", post});
    } 
    catch (error) 
    {
        res.status(500).json({message: "Error updating post", error});
    }
};

const deletePost = async (req, res) => {
    try 
    {
        const {id} = req.params;
        const post = await Post.findByIdAndDelete(id);
        if(!post){
            return res.status(404).json({message: "Post not found"});
        }
        res.status(200).json({message: "Post deleted successfully"});
    }
    catch (error) 
    {
        res.status(500).json({message: "Error deleting post", error});
    }   
};

export {createPost, getAllPosts, updatePost, deletePost};