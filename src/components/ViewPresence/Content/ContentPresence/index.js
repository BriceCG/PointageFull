import React,{Fragment} from 'react'

const ContentPresence = (props) => {

  return (
    <Fragment>
      <h6>Affichage de la presence de LAINGONIAINA Rheeda</h6>
            <div>
            <table className="table">
              <thead>
                <tr>
                  <th colSpan="5"></th>
                  <th colSpan="2" className="head_table">Cumul</th>
                  <th colSpan="2" className="head_table">Débit/Crédit</th>
                </tr>
              </thead>
              <tbody>
              <tr>
                <td>Jour</td>
                <td>1</td>
                <td>2</td>
                <td>3</td>
                <td>4</td>
                <td>Therorique</td>
                <td>Effectif</td>
                <td>Jour</td>
                <td>Total</td>
              </tr>
              <tr>
                <td>22/07/2020</td>
                <td>9:53</td>
                <td>13:20</td>
                <td>13:50</td>
                <td>17:20</td>
                <td>7:00</td>
                <td>7:57</td>
                <td>0:03</td>
                <td>3:24</td>
              </tr>
              </tbody>
            </table>
            </div>
    </Fragment>
  )
}

export default ContentPresence
