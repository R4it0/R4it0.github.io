import HorizontalSplitter from '../splitter/splitter.tsx';
import './section-1.css';
import React from 'react';

const section1: React.FC = () => {
  return (
    <div className="section-1-container">

        <HorizontalSplitter />
    </div>
  )
}

export default section1

/**
      
        <h3>Section 1</h3>
        <div className="section-1-content">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec laoreet mi. In hac habitasse platea dictumst. Praesent volutpat consectetur enim nec pulvinar. Duis eget ornare magna, et fringilla lorem. Phasellus vulputate hendrerit placerat. Maecenas dignissim pulvinar ante nec pharetra. Quisque et nulla quis nunc vehicula accumsan vitae at sapien. Phasellus semper, ex id sollicitudin euismod, risus ligula lacinia arcu, id dapibus est sem vel quam. Sed nec tincidunt dui.</p>
        </div>
        
        <img className="section-1-bg" src="img/bg.svg" alt="" />
 */