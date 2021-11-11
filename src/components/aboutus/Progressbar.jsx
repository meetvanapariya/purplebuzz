import React from 'react';

export default ({title,progress_per}) =>{
   
    return(
    <>
        <div className="row mt-4 mt-sm-2">
        <div className="col-6">
            <h4 className="h5">{title}</h4>
        </div>
        <div className="col-6 text-right">{progress_per}%</div>
        </div>
        <div className="progress">
            <div className="progress-bar" role="progressbar"  style={{width:`${progress_per}%`}} aria-valuenow="66" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
    </>
    );
}