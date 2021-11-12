import React ,{ useState } from 'react';


const _baseFormFields = {
    name : '',
    email : '',
    number : '',
    company : '',
    subject : '',
    message : ''
};

const FormFields = ()=>{
    const [formFields , setFormFields] = useState(_baseFormFields);
    const [formSubmit , setFormSubmit] = useState(false);
    const handleOnChange = evt =>{
        setFormFields({
            ...formFields,
            [evt.target.id] : evt.target.value,
        });
    }
    const handleFormSubmit = evt => {
        evt.preventDefault();
        setFormSubmit(true);
        // dispatch(addEventAttendee(newEventAttendee));
        // setSignUpComplete(true);
    }
    return(
        <>
        <form className="row" onSubmit={handleFormSubmit}>
            <div className="col-lg-6 input-div">
                <input type="text" id="name" value={formFields.name} onChange={handleOnChange}/>
                <label for="name">Name</label>
            </div>
              <div className="col-lg-6 input-div">
                <input type="email" id="email" value={formFields.email} onChange={handleOnChange}/>
                <label for="name">Email</label>
            </div>
              <div className="col-lg-6 input-div">
                <input type="text" id="number" value={formFields.number} onChange={handleOnChange}/>
                <label for="name">Phone</label>
            </div>
              <div className="col-lg-6 input-div">
                <input type="text" id="company" value={formFields.company} onChange={handleOnChange}/>
                <label for="name">Company</label>
            </div>
            <div className="col-12 input-div">
                <input type="text" id="subject" value={formFields.subject} onChange={handleOnChange}/>
                <label for="name">Subject</label>
            </div>
            <div className="col-12 input-div">
                <textarea type="text" id="message" value={formFields.message} onChange={handleOnChange}>
                </textarea>
                <label for="name">Message</label>
            </div>
            <div className="col-12 btn-div">
                <button className="btn btn-secondary rounded-pill px-md-5 px-4 py-2 radius-0 text-light light-300">Send Message</button>
            </div>
        </form>
         {
            formSubmit && (
                <>
                <h2 className="title is-size-3">Thank You!!</h2>
                </>
            )
        }
        </>
    );
}

export default FormFields;