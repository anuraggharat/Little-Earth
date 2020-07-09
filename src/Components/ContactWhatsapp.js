import React from 'react'

export default function ContactWhatsapp() {

    return (
        <div className="parallax-box">
          <div className="container center white-text " >
            <h3 className="bold-text">Contact us</h3>
          </div>
            <div className="container">
              <div className="row center">
                <div className="col l4 s12">
                  <div className="card-panel">
                    <i className="material-icons teal-text display-2">sms</i>
                    <h6>Whatsapp us:</h6>
                    <a className="btn btn2" target="_blank" rel="noopener noreferrer"  href="https://api.whatsapp.com/send?phone=+91-8380032300">Whatsapp 
                    <i className="material-icons left">sms</i>
                    </a>
                  </div>
                </div>
                <div className=" col l4 s12">
                <div className="card-panel">
                    <i className="material-icons teal-text display-2">drafts</i>
                    <h6>Mail us:</h6>
                    <a className="btn" target="_blank" href="mailto:littleearthfarmsandnursery@gmail.com"   rel="noopener noreferrer">Mail Now
                    <i className="material-icons left">drafts</i>
                    </a>
                  </div>
                </div>
                <div className=" col l4 s12">
                <div className="card-panel">
                    <i className="material-icons teal-text display-2">location_on</i>
                    <h6>Find us:</h6>
                    <a className="btn" target="_blank" href="https://goo.gl/maps/aYpdtLWWL6s5LNmX6">Find in Map<i className="material-icons left">location_on</i>

                    </a>
                  </div>
                </div>
              </div>
            </div>
        </div>
    )
}
