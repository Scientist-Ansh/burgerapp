import React from 'react';
import './layout.css';
import ToolBar from '../navigation/toolbar';

const layout = (props) =>(
  <>
    <ToolBar></ToolBar>
    <main className = "Content">
      {props.children}
    </main>
  </>
);

export default layout;
