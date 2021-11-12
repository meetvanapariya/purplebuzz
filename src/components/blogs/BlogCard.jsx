import React from 'react';
import { BrowserRouter as Router, Link, useRouteMatch } from "react-router-dom";

const BlogCard = ({postData}) =>{
    // console.log(postData);
    function formatDate(d){
        let date = new Date(d)
        var dd = date.getDate(); 
        var mm = date.getMonth()+1;
        var yyyy = date.getFullYear(); 
        if(dd<10){dd='0'+dd} 
        if(mm<10){mm='0'+mm};
        return d = dd+'/'+mm+'/'+yyyy
    }
    function removeTags(str) {
        if ((str===null) || (str===''))
            return false;
        else
            str = str.toString();
      
        let output = str.replace( /(<([^>]+)>)/ig, '');    
        return output.slice(0,100);
    }
    let { path, url } = useRouteMatch();
    return(
        <>
        {
            postData.map(post => {
                // console.log(post)
                return(
                    <div className="col-md-6" key={post.id}>
                    <div className="blog-card">
                        <img classname="blog-img" src={post.jetpack_featured_media_url} alt="" />
                        <div className="blog-content">
                        <h3>{post.title["rendered"]}</h3>
                        <span><i className="fa fa-clock"></i> {formatDate(post.date)}</span>
                        <span><i className="fa fa-user"></i> admin</span>
                        <p>{removeTags(post.excerpt["rendered"])}</p>
                        <Link to={`${url}/${post.id}`} >View more <i className="fa fa-angle-double-right"></i></Link>
                        </div>
                     </div>   
                </div>
                );
            })
        }
       </>             
    );
}
export default BlogCard;