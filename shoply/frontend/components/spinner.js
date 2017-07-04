import React from 'react'

export default () => (
    <div className="spinner-wrapper">
        <div className="preloader-wrapper big active">
            <div className="spinner-layer spinner-blue-only">
            <div className="circle-clipper left">
                <div className="circle"></div>
            </div>
            <div className="gap-patch">
                <div className="circle"></div>
            </div>
            <div className="circle-clipper right">
                <div className="circle"></div>
            </div>
            </div>
        </div>
        <div className="spinner-label">Loading...</div>
    </div>
)