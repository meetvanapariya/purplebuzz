import React from 'react';

const WorkCard = ({worksList}) => {
    console.log(worksList);
    return (
        <>
        {worksList.map(work =>(
            <div key={work.title} className="custom-card-work">
            <img src={work.url} alt="" />
            <div className="card-content-work">
                <h3>{work.title}</h3>
                <p>{work.description}</p>
            </div>
            </div>
        ))}
        </>
    )
}
export default WorkCard;