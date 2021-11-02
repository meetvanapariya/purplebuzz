import React , {useState , useEffect }from 'react';
import { services , serviceDetails} from '../../../data/initialState';
import ServiceCard from './ServiceCard';
const ServiceSort = () => {
    const [serviceList , setServiceList] = useState(serviceDetails);
    const [serviceListFiltered , setServiceListFiltered] = useState(serviceDetails);
    const [activeService , setActiveService] = useState('All');
    const selectService = (evt) =>{
        removeActive();
        if(evt.target.innerText){
            setActiveService(evt.target.innerText);
        }
        evt.target.classList.add('active');
    }
    const removeActive = () =>{
        const actClass= document.querySelectorAll('.service-menu li');
        actClass.forEach(act =>{
            act.classList.remove('active');
        });
    }
    useEffect( () =>{
        if(activeService != 'All'){
            const filterService = serviceList.filter(service => service.type == activeService);
            setServiceListFiltered(filterService);
        }else{
            setServiceListFiltered(serviceDetails);
        }
    },[activeService])
    return(
        <>
        <div className="service-tag py-2 theme-secondary service-section-two">
        <div className="col-md-12">
          <ul className="service-menu">
              {
                  services.map((service,idx) => (
                        <li key={idx} className={(idx==0)?'active' : ''} onClick={selectService}>{service}</li>
                  ))
              }
          </ul>
        </div>
        </div> 
        <div className="service-section-three container">
        <div className="main-grid">
              <ServiceCard serviceList={serviceListFiltered}/>
        </div>
        </div>
</>
    )
}
export default ServiceSort;