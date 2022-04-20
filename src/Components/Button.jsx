import React from 'react'

export default function Button(props) {
    return (
        <div>
            <a className="btn btn-sign-in d-flex justify-content-center ms-lg-2 rounded-pill" href={props.link} role="button">{props.konten}</a>
        </div>
    )
}
