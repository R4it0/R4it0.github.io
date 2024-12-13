import './splitter.css';
import React from 'react'; 
import { Splitter, SplitterPanel } from 'primereact/splitter';

export default function HorizontalSplitter() {
    return (
        <Splitter style={{ height: '300px' }}>
            <SplitterPanel className="flex align-items-center justify-content-center">
                <img className="splitter-img" src="../img/knif/render.png" alt="Render View" />
            </SplitterPanel>
            <SplitterPanel className="flex align-items-center justify-content-center">
                <img className="splitter-img" src="../img/knif/wireframe.png" alt="Wireframe View" />
            </SplitterPanel>
        </Splitter>
    );
}
