// import { PreviewData } from "next/headers";
// import { PreviewData } from "next/headers";
import { PreviewData } from "next/headers";
import { groq } from "next-sanity";
import { client } from "../../sanity/lib/client";
import Previewbloglist from "../../Components/previewbloglist/previewbloglist";
import  PreviewSuspense from "../../Components/previewsuspensecomponent/Previewsuspence";
import BlogList from "../../Components/BlogList";

const query=groq`
*[_type=="post"]{
    ...,
    author->,
    categories[]->,
} |order(_createAt desc)
`


export default async function Homepage(){
    if (PreviewData()) {
        return(
            <div>

            <PreviewSuspense fallback={(
                <p>Loading preview Data....</p>
            )}>
<Previewbloglist query={query}/>
            </PreviewSuspense>

        </div>
        )
    }

    const posts=await client.fetch(query);
    console.log(posts);
    return(
        <div>
<BlogList posts={posts}/>
        </div>
    );
};