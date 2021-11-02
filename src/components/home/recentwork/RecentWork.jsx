import React from 'react';
import WorkCard from './WorkCard';
import { ourWork } from '../../../data/initialState';
const RecentWork = () =>{
    return(
        <div className="recent-work-section">
            <div className="container">
                <div className="title-block"><h2>Recent Work</h2></div>
            <div className="service-section-fours">
                <div className="main-grid">
                    <WorkCard worksList={ourWork}/>
                </div>
            </div>
            </div>
        </div>
    )
}

export default RecentWork;