import React from 'react'

export default function SliderItem(props) {
    return (
        <div className="card ">
            <div className="card-image">
                <img src={props.img} alt="card" className="h-300 " width="300" />
            </div>
            <div className="card-content">
                {props.text}
            </div>
        </div>
    )
}
