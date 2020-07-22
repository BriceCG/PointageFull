import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import icon from '../../../assets/img/logo.png'

const Navigation = (props) => {
  
  const baseUrl ="/dashboard/view-presence-and-cumuls"
  const nav = [
    'Presence','Abcences','Abcences autres salarié',"Cumuls d' abcence",
    "Prevision d'abcence",'Soldes','Anomalie','Cumuls','Retards','Editions'
  ]
  let link =[`${baseUrl}/presence`,`${baseUrl}/abcence`,`${baseUrl}/abcence-other-employe`,`${baseUrl}/abcence`,`${baseUrl}/abcence-other-employe`,`${baseUrl}/#`,`${baseUrl}/#`,`${baseUrl}/#`, `${baseUrl}/#`,`${baseUrl}/#`]

  const setClassActive = (e)=>{
  if(document.querySelectorAll('.active_border').length>0){
    document.querySelectorAll('.active_border')[0].classList.remove('active_border')
  }
    if(e.target.classList.contains('active_border')){
      // e.target.classList.remove('active_border')
      console.log("la classe existe")
    }else{
      console.log("nexiste pase")
      e.target.classList.add('active_border')
    }
    
    // const linkActive = props.match.path
// console.log(props.path)
  }
  // const [link, setLink] = useState(data)
  // let [showNav, setShowNav] = useState('')

  const showNav = nav.map((val,key)=>
  <Link to={link[key]} className="link_nav" key={val} onClick={e=>setClassActive(e)}>
    <li  className="">
    
    {val}
    
    </li>
  </Link>
  )
// active_borde


  return (
    <div className="col-md-3" >
    <div className="head_nav">
      <img src={icon} className="icon" /> Visualiser la Presences et la Cumuls
    </div>
          <ul className="list_nav_presence">
          {showNav}
          

{/* 
         
           <Link to="" className="link_nav">
              <li  className="active_border">Presences</li>
            </Link>
            <Link to="" className="link_nav">
            <li>Abcences</li>
            </Link>
            <li>Abcences autres salarié</li>
            <li>Cumuls d'abcence</li>
            <li>Prevision d'abcence</li>
            <li>Soldes</li>
            <li>Anomalie</li>
            <li>Cumuls</li>
            <li>Retards</li>
            <li>Editions</li>  */}
          </ul>
       </div>
  )
}

export default Navigation
