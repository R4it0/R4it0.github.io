import './hero.css';
import React from 'react';

const hero: React.FC = () => {
  return (
    <div className="content">
        <h1 className="logo-svg"><img src="img/Y2k_R.svg" alt="" />
            <div className="aurora">
            <div className="aurora__item"></div>
            <div className="aurora__item"></div>
            <div className="aurora__item"></div>
            <div className="aurora__item"></div>
            </div>
        </h1>
        <h1 className="title">Raito
            <div className="aurora">
            <div className="aurora__item"></div>
            <div className="aurora__item"></div>
            <div className="aurora__item"></div>
            <div className="aurora__item"></div>
            </div>
        </h1>
        <h2 className="title-2">3D Designer
            <div className="aurora">
            <div className="aurora__item"></div>
            <div className="aurora__item"></div>
            <div className="aurora__item"></div>
            <div className="aurora__item"></div>
            </div>
        </h2>
    </div>
  )
}

export default hero;