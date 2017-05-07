import React from 'react';
import styles from '../styles/App.css';

class Hotels extends React.Component {
  render() {
    const blue = require('../assets/hotellebleu.jpg');
    const holidayInn = require('../assets/holidayinn.jpg');
    const redLion = require('../assets/redlion.jpg');
    const fairfield = require('../assets/fairfield.jpg');
    return (

        <div className="content">
          <h1 className="title">Hotels!</h1>

          <div className="content-row">
            <img className="photo left" src={holidayInn} />
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


          <div className="content-row">
            <p className="hotel-info">
              <p className="subtitle">Red Lion Inn</p>
              <p className="description">The Red Lion Inn is also a 15 minute walk or 5 minute cab ride from
              the Bell House, also located near the Union Street R station. It is also a short walk from Brooklyn Boulders, and Threes Brewing Co. Rates are $199-219 per night.<br/><br/>
               To reserve a room,
              call the Red Lion Inn at (718) 855-9600 with the code EUB0818, or book online by
              visiting <a href="https://reservations.redlion.com/ibe/details.aspx?hotelID=14299&langID=1&group=eub0818&hgID=280&dt1=6439&nights=2&rooms=1&adults=2&child1=0"> reservations.redlion.com </a>
               and entering code EUB0818. <br/><br/>To get the discounted rate, reservations must be made by July 18th, 2017.</p>
            </p>
            <img className="photo right" src={redLion} />
          </div>



          <div className="content-row">
            <img className="photo right" src={fairfield} />
            <p className="hotel-info">
              <p className="subtitle">Fairfield Inn - Marriot</p>
              <p className="description">Also 15 minute walk or 5 minute cab ride from
              our venue, the Fairfield Inn is close to tons of great bars and restaurants in Gowanus & Park Slope, and
              within short walking distance of the first two hotels. Rates are $239-279 per night.<br/><br/>
               To reserve a room,
              call the Fairfield Inn at (718) 522-4000 with the code EKW, or book online by
              visiting <a href="http://cwp.marriott.com/nycbf/eubankklimnan/"> marriott.com </a>
               and entering code EKW. <br/><br/>To get the discounted rate, reservations must be made by June 18th, 2017.</p>
            </p>
          </div>

          <div className="content-row">
            <p className="hotel-info">
              <p className="subtitle">Hotel Le Bleu</p>
              <p className="description">The Hotel Le Bleu is the closest to our venue, just an 8 minute walk or very short car ride.
               Rates are $219-239 per night.<br/><br/>
               To book,
              call the Hotel Le Bleu at (718) 522-4000 and mention the Eubank-Klinman wedding. <br/><br/>To get the discounted rate, reservations must be made by July 18th, 2017.</p>
               <br/><br/><br/>
            </p>
            <img className="photo right" src={blue} />
          </div>

          <hr className="style15"></hr>
          <h1 className="title">Fun Things To Do!</h1>
            <ul>
              <li><span className="subsubtitle">ROYAL PALMS SHUFFLEBOARD CLUB</span> - fun restaurant/bar with shuffleboard courts</li>
              <li><span className="subsubtitle">BROOKLYN BOULDERS</span> - rock climbing gym that we have been to two or three times</li>
              <li><span className="subsubtitle">DIRTY PRECIOUS</span> - hip cocktail bar with great grilled cheese and rosé on tap</li>
              <li><span className="subsubtitle">BROOKLYN CRAB</span> - seafood restaurant with view of Manhattan and Statue of Liberty</li>
              <li><span className="subsubtitle">AMPLE HILLS GOWANUS</span> - delicious ice cream! (Mimo recommends the Salted Crack Caramel ice cream in a waffle cone and Nate recommends the Mexican Hot Chocolate ice cream)</li>
              <li><span className="subsubtitle">DINOSAUR BBQ</span> - our favorite BBQ place</li>
              <li><span className="subsubtitle">GORILLA COFFEE</span> - Nates favorite coffee spot in the neighborhood</li>
              <li><span className="subsubtitle">LAVENDER LAKE</span> - Miranda loves the big backyard at this cool bar</li>
            </ul>
            Let us know if youd like any other recommendations for specific food or activities in Manhattan or other parts of Brooklyn!
        </div>

    )
  }
}

export default Hotels;
