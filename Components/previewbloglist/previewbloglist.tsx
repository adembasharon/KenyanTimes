"use client"
import { usePreview } from "../../sanity/lib/sanity.prieview";
import BlogList from "../BlogList";

type props={
    query: string;
};

export default function Previewbloglist({query}: props) {
    const posts= usePreview(null, query);

    console.log("LOADING POSTS ...");
    return(
        <BlogList posts={posts}/>
    )}