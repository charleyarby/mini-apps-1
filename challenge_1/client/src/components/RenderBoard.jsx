import React from 'react'
import Cell from './Cell.jsx'
const RenderBoard = (props) => {
  return(
    <div>
      <div>
        <Cell
        value={props.board[0][0]}
        handleChange={props.handleChange}
        state={props.state}
        whichCell={[0,0]}
        />
        <Cell value={props.board[0][1]}/>
        <Cell value={props.board[0][2]}/>
      </div>
      <div>
        <Cell value={props.board[1][0]}/>
        <Cell value={props.board[1][1]}/>
        <Cell value={props.board[1][2]}/>
      </div>
      <div>
        <Cell value={props.board[2][0]}/>
        <Cell value={props.board[2][1]}/>
        <Cell value={props.board[2][2]}/>
      </div>
    </div>
  )

}

export default RenderBoard;