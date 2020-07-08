import React from 'react'

export default function SliderItem(props) {
    return (
        <div className="card ">
            <div className="card-image">
                <img src={props.img} alt="card" className="h-300" />
                <span className="card-title">{props.text}</span>
            </div>
        </div>
    )
}
