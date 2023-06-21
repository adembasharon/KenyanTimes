// import { PreviewData } from "next/headers";
import { PreviewData } from "next/headers";
import { groq } from "next-sanity";
import { client } from "../../sanity/lib/client";
import Previewsuspence from "../../Components/previewsuspensecomponent/previewsuspence"
import Previewbloglist from "../../Components/previewbloglist/previewbloglist";
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

            <Previewsuspence fallback={(
                <p>Loading preview Data....</p>
            )}>
<Previewbloglist query={query}/>
            </Previewsuspence>

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