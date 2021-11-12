import React ,{ useState,useEffect,useRef }from 'react';
import { useParams } from 'react-router';
import Comments from './Comments';
import axios from 'axios';
import Loader from '../Loader';
const baseURL = "https://13.232.49.119//wp-json/wp/v2/posts";

const BlogInner = () =>{
    let { id } = useParams();
    const refContainer = useRef(null);
    const [postDetail, setPostDetail] = useState(null);
    useEffect(() => {
        if(!postDetail){
            let url = `${baseURL}/${id}`;
            axios.get(url).then((response) => {
                setPostDetail(response.data);
              });
        }
    }, []);
    if (!postDetail) return (
       <Loader />
    );
    return(
        <>
        <div className="container inner-content-main">
            <img src={postDetail.jetpack_featured_media_url} alt="" />
            <div className="inner-content">
                <h1>{postDetail.title["rendered"]}</h1>
               <div dangerouslySetInnerHTML={{__html:postDetail.content["rendered"]}}></div>
            </div>
            <Comments postId={postDetail.id}/>
        </div>
        </>
    );
}

export default BlogInner;