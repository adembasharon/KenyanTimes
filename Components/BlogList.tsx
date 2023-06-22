
type props={
    posts:Post[];
};

function BlogList({posts}:props){
    console.log(posts.length);
    return(
        <div>BlogList</div>
    )
}
export default BlogList