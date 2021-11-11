import React , {useState , useEffect } from 'react';
import { WorkServices , WorkServiceList } from '../../data/initialState';
import { useSelector, useDispatch } from 'react-redux';

import { getActiveWorkService, setActiveWorkService} from '../../reducers/eventReducer';

import WorkCard from './WorkCard';
const WorkSectionTwo = () =>{

    const [workList , setWorkList] = useState(WorkServiceList);
    const [workListFiltered , setWorkListFiltered] = useState(WorkServiceList);

    const dispatch = useDispatch();
    const activeServiceRed = useSelector(getActiveWorkService);
    const selectService = (evt) =>{
        removeActive();
        if(evt.target.innerText){
            dispatch(setActiveWorkService(evt.target.innerText));
        }
        evt.target.classList.add('active');
    }
    const removeActive = () =>{
        const actClass= document.querySelectorAll('.service-menu li');
        actClass.forEach(act =>{
            act.classList.remove('active');
        });
    }
      // us build relative links.
  
    useEffect( () =>{
        if(activeServiceRed != 'All'){
            const filterService = workList.filter(service => service.type == activeServiceRed);
            setWorkListFiltered(filterService);
        }else{
            setWorkListFiltered(WorkServiceList);
        }
    },[activeServiceRed])
  
    return(
        <section className="work-sesction-two">
            <div className="container">
                <div className="service-tag py-2 service-section-two">
                    <div className="col-md-12">
                    <ul className="service-menu">
                        {
                            WorkServices.map((service,idx) => (
                                    <li key={idx} className={(idx==0)?'active' : ''} onClick={selectService}>{service}</li>
                            ))
                        }
                    </ul>
                    </div>
                </div> 
                <div className="work-cards row">
                  <WorkCard services={workListFiltered}/>
                </div>
            </div>
           
        </section>
        
    );
}


export default WorkSectionTwo;