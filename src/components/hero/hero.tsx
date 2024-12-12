import './hero.css';
import React from 'react';

const hero: React.FC = () => {
  return (
    <div class="content">
        <h1 class="title">Raito
            <div class="aurora">
            <div class="aurora__item"></div>
            <div class="aurora__item"></div>
            <div class="aurora__item"></div>
            <div class="aurora__item"></div>
            </div>
        </h1>
        <h2 class="title-2">3D Designer
            <div class="aurora">
            <div class="aurora__item"></div>
            <div class="aurora__item"></div>
            <div class="aurora__item"></div>
            <div class="aurora__item"></div>
            </div>
        </h2>
    </div>
  )
}

export default hero;