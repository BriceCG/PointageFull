import React,{useEffect} from 'react'
import Header from '../Header';

const Home = () => {
  useEffect(() => {
    document.body.style.background="#ebebeb";
  }, [])
  return (<>

<Header />
    <div className="container" style={{marginTop: '50px'}}>
      <div className="mainAside">
        <div className="aside1">
          <div className="asideTop left">
            <div>Snide FC</div>
            <div style={{textAlign: 'center'}}>
              <span style={{borderBottom: '10px solid #1d71b8',color: '#1d71b8'}}>291</span>
            </div>
          </div>
          <div className="asideTop right">
            <div>Snide FC</div>
             <div className="childAsideTop">
               <div>03:26h</div>
               <div>10:02h</div>
             </div>

          </div>
        </div>
        <div className="aside2">
          <div className="asideBottom">
            <div className="calDate" style={{padding: '7px',background:"#1d71b8"}}>DIMACHE</div>
            
            <div className="calMouth" >
              <div style={{fontSize: '50px'}}>
                05
              </div>
              <div style={{fontSize: '30px'}}>
                Juillet
              </div>
            
            </div>
          </div>
          <div className="asideBottom">
          <div className="calDate">Heur officielle</div>
            
            <div className="calMouth" >
              <div style={{fontSize: '50px'}}>
                01:29
              </div>
             
            
            </div>
          </div>
        </div>
      </div>
      
      {/* actions and informations */}

      <div className="mainNavigation">
    
        <h4>Mes actions</h4>
        <div className="navigationsActions">

          <div className="action">

          </div>
          <div className="action">

          </div>
          <div className="action">

          </div>

        </div>
        <h4>Mes informations</h4>
        <div className="navigationsInformations">
          <legend className="navPresence">Nos activité</legend>
          <div style={{padding: '10px'}}>
            <input type="text" className="form-control" />
          </div>
          <ul className="listPresence">
            <li>
              <span>
                Declaration de presene
              </span>
              <span>
                icon
              </span>
            </li>
            <li>
              <span>
              Demande absscence
              </span>
              <span>
                icon
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </>
  )
}

export default Home
