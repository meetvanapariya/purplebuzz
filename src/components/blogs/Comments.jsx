import React ,{ useState,useEffect,useRef }from 'react';
import axios from 'axios';

const baseURL = "https://13.232.49.119/wp-json/wp/v2/comments";
export default ({postId}) => {

    const refContainer = useRef(null);
    const [postComments, setPostComments] = useState(null);
    useEffect(() => {
        if(!postComments){
            let url = `${baseURL}`;
            axios.get(url).then((response) => {
                setPostComments(response.data);
              });
        }
    }, []);

    if (!postComments) return (
       <p>Loading....</p>
     );

   
    return(
        <section>
            {
                postComments.map(cmt => (
                <div className="comments">
                    <img src="https://secure.gravatar.com/avatar/b58996c504c5638798eb6b511e6f49af?s=24&d=mm&r=g" alt="" />
                    <div className="cmnt-content">
                    <p><b>{cmt.author_name}</b></p>
                    <div dangerouslySetInnerHTML={{__html:cmt.content["rendered"]}}></div>
                    </div>
                </div>
                ))
            }
        </section>
    );
}