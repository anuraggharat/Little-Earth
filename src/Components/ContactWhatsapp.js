import React from 'react'

export default function ContactWhatsapp() {

    return (
        <div className="parallax-box">
          <div className="container center white-text " >
            <h3 className="bold-text">Contact Us!</h3>
          </div>
            <div className="container">
              <div className="row center">
                <div className="col l4 s12">
                  <div className="card-panel">
                    <i className="material-icons teal-text display-2">sms</i>
                    <h6>Whatsapp us at:</h6>
                    <p>7745050822</p>
                    <a className="btn btn2" href="#">Whatsapp us? 
                    <i className="material-icons left">sms</i>
                    </a>
                  </div>
                </div>
                <div className=" col l4 s12">
                <div className="card-panel">
                    <i className="material-icons teal-text display-2">drafts</i>
                    <h6>Mail us at:</h6>
                    <p>Email</p>
                    <a className="btn" href="#">Mail Now
                    <i className="material-icons left">drafts</i>
                    </a>
                  </div>
                </div>
                <div className=" col l4 s12">
                <div className="card-panel">
                    <i className="material-icons teal-text display-2">location_on</i>
                    <h6>Find us at:</h6>
                    <p>Little Earth , Varsoli Alibag</p>
                    <a className="btn" href="#">Find in Map<i className="material-icons left">location_on</i>

                    </a>
                  </div>
                </div>
              </div>
            </div>
        </div>
    )
}
