import React from 'react';
 export default ({name,description,img}) =>{
     return (
                <div className="team-member col-md-4">
                    <img className="team-member-img img-fluid rounded-circle p-4" src={img} alt={name} />
                    <ul className="team-member-caption list-unstyled text-center pt-4 text-muted light-300">
                        <li>{name}</li>
                        <li>{description}</li>
                    </ul>
                </div>
     );
 }