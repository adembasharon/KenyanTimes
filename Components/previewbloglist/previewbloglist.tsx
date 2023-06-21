"use client"
 import {usePreview} from "../../lib/sanity.preview"
import BlogList from "./BlogList"

type props={
    query: string;
};

export default function Previewbloglist({query}: props) {
    const posts= usePreview(null, query);

    console.log("LOADING POSTS ...");
    return(
        <BlogList posts={posts}/>
    )}