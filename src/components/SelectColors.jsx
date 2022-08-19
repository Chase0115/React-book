import React from 'react';
import { ColorConsumer } from '../context/color';

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']

const SelectColors = () => {
  return (
    <div>
      <h2>Choose a color</h2>
      <ColorConsumer>
        {({actions}) => (
          <div style={{display: 'flex'}}>
            {colors.map((color) => (
              <div 
                key={color} 
                style={{width: '24px', height: '24px', background: color, cursor: 'pointer'}}
                onClick={() => actions.setColor(color)}
                onContextMenu={e => {
                  e.preventDefault();
                  actions.setSubcolor(color);
                }}
              >
              </div>
          ))}
        </div>)}
      </ColorConsumer>
      <hr/>
    </div>
  )
}

export default SelectColors;