import React from 'react';
import styles from '../styles/App.css';

class Logistics extends React.Component {
  render() {
    const us = require('../assets/first_photo.jpg');

    return (

        <div className="content">
          <h1 className="title">The Wedding!</h1>


          <div className="content-row">
            <img className="photo left" src={us} />
            <p className="hotel-info">
              <p className="subtitle">Saturday</p>
              <p className="description">
                Hotel info
              </p>
            </p>
          </div>

          <div className="content-row">
            <img className="photo left" src={us} />
            <p className="hotel-info">
              <p className="subtitle">Holiday Inn Express</p>
              <p className="description">This hotel is a 15 minute walk or 5 minute cab ride from our venue.
              It's also right by Brooklyn's famous Dinosaur BBQ. Rates are $209-229 per night.<br/><br/> To book,
              call the Holiday Inn Express at (718-797-1133)
              and mention that you are a part of the "Eubank-Klinman Wedding" group with the code EKW, or book online by
              visiting <a href="https://www.hiexpress.com/hotels/us/en/brooklyn/bxyln/hoteldetail?qAdlt=1&qBrs=6c.hi.ex.rs.ic.cp.in.sb.cw.cv.ul.vn.ki.sp.nd.ct&qChld=0&qFRA=1&qGRM=0&qGrpCd=EKW&qIta=99801505&qPSt=0&qRRSrt=rt&qRef=df&qRms=1&qRpn=1&qRpp=20&qSHp=1&qSmP=3&qSrt=sBR&qWch=0&srb_u=1&icdv=99801505"> hiexpress.com </a>
               and entering code EKW. <br/><br/>To get the discounted rate, reservations must be made by July 18th, 2017.</p>
            </p>
          </div>




        </div>

    )
  }
}

export default Logistics;
