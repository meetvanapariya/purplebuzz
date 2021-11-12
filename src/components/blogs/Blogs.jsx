import React ,{ useState,useEffect }from 'react';
import axios from 'axios';
import BlogCard from './BlogCard';

import { useSelector, useDispatch } from 'react-redux';

import { getPostData , setPostData } from '../../reducers/eventReducer';

import Loader from '../Loader';

const baseURL = "https://13.232.49.119//wp-json/wp/v2/posts";
const Blogs = () =>{
    const dispatch = useDispatch();
    const getStatePostData = useSelector(getPostData);
    useEffect(() => {
        if(!getStatePostData){
            axios.get(baseURL).then((response) => {
                dispatch(setPostData(response.data));
              });
        }
    }, []);

    if (!getStatePostData) return (
      <Loader />
    );
    return(
        <>
        <section className="work-section-one">
            <div className="container">
            <h1>
                Blog
            </h1>
            <h4>Elit, sed do eiusmod tempor incididunt</h4>
            <p>Vector illustration Freepik. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus.</p>
            </div>
        </section>
        <section className="blog-section">
            <div className="container">
                <div className="row">
                    <BlogCard postData={getStatePostData}/>
                </div>
            </div>
        </section>
        </>
    )
}
export default Blogs;