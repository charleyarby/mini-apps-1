import React from 'react';
//import MovieList from './MovieList.jsx'
//import Axios from 'axios';
import RenderBoard from './RenderBoard.jsx'
import Cell from './Cell.jsx'
//import updateBoard from './updateBoard.jsx'

class App extends React.Component {
  constructor(props) {
    super(props); //attaches props to this. so now its this.props
    this.state = {
      column: 0,
      row: 0,
      turn:0,
      win:false,
      board : [['[ ]','[ ]','[ ]'],
               ['[ ]','[ ]','[ ]'],
               ['[ ]','[ ]','[ ]']]
    }
   // this.getMovies = this.getMovies.bind(this);
   this.handleChange = this.handleChange.bind(this);

  }

  handleChange() {

    const newBoard = this.state.board.slice();
    if(this.state.board[this.state.row][this.state.column]!= "O" && this.state.board[this.state.row][this.state.column]!= "X" && this.state.win===false) {
      if(this.state.turn%2===0) {
        newBoard[this.state.row][this.state.column] = 'X';
      }else if(this.state.turn%2===1) {
        newBoard[this.state.row][this.state.column] = 'O';
      }



      this.setState(
        {board: newBoard,
        turn: this.state.turn + 1}
      )
    }

    for(var i=0; i<3; i++) {
      var numX=0;
      var numO=0;
      for(var j=0; j<3; j++){
        if(this.state.board[i][j]==="X"){numX++;}
        if(this.state.board[i][j]==="O"){numO++;}
      }
      if(numX===3 ) {
        this.setState({
          win:true
        })
        console.log('winner is X')
      }
      if(numO===3 ) {
        this.setState({
          win:true
        })
        console.log('winner is O')
      }
    }
    var numO=0;
    var numX=0;
    if(this.state.board[0][0]==="X" && this.state.board[1][1]==="X" && this.state.board[2][2]==="X") {
      this.setState({win:true})
      console.log('winner is X')
    }
    if(this.state.board[0][0]==="O" && this.state.board[1][1]==="O" && this.state.board[2][2]==="O") {
      this.setState({win:true})
      console.log('winner is O')
    }
    if(this.state.board[0][2]==="X" && this.state.board[1][1]==="X" && this.state.board[2][0]==="X") {
      this.setState({win:true})
      console.log('winner is X')
    }
    if(this.state.board[0][2]==="O" && this.state.board[1][1]==="O" && this.state.board[2][0]==="O") {
      this.setState({win:true})
      console.log('winner is O')
    }
    for(var i=0; i<3; i++) {
      var numO=0;
      var numX=0;
      for(var j=0; j<3; j++) {
        if(this.state.board[j][i]==="X"){numX++;}
        if(this.state.board[j][i]==="O"){numO++;}
      }
      if(numX===3 ) {
        this.setState({
          win:true
        })
        console.log('winner is X')
      }
      if(numO===3 ) {
        this.setState({
          win:true
        })
        console.log('winner is O')
      }
    }


  }

  render() {
    return (
      <div>
        <div>
        <button onClick={(e) => {
          this.state.row = 0;
          this.state.column=0;
          this.handleChange();
          console.log('hello')
        }}>{this.state.board[0][0]}</button>

         <button onClick={(e) => {
          this.state.row = 0;
          this.state.column=1;
          this.handleChange();
          console.log('hello')
        }}>{this.state.board[0][1]}</button>
         <button onClick={(e) => {
          this.state.row = 0;
          this.state.column=2;
          this.handleChange();
          console.log('hello')
        }}>{this.state.board[0][2]}</button>
        </div>
        <div>
        <button onClick={(e) => {
          this.state.row = 1;
          this.state.column=0;
          this.handleChange();
          console.log('hello')
        }}>{this.state.board[1][0]}</button>

         <button onClick={(e) => {
          this.state.row = 1;
          this.state.column=1;
          this.handleChange();
          console.log('hello')
        }}>{this.state.board[1][1]}</button>
         <button onClick={(e) => {
          this.state.row = 1;
          this.state.column=2;
          this.handleChange();
          console.log('hello')
        }}>{this.state.board[1][2]}</button>
        </div>
        <div>
        <button onClick={(e) => {
          this.state.row = 2;
          this.state.column=0;
          this.handleChange();
          console.log('hello')
        }}>{this.state.board[2][0]}</button>

         <button onClick={(e) => {
          this.state.row = 2;
          this.state.column=1;
          this.handleChange();
          console.log('hello')
        }}>{this.state.board[2][1]}</button>
         <button onClick={(e) => {
          this.state.row = 2;
          this.state.column=2;
          this.handleChange();
          console.log('hello')
        }}>{this.state.board[2][2]}</button>
        </div>
        <button onClick={(e) =>{
          this.setState({
            column: 0,
            row: 0,
            turn:0,
            win:false,
            board : [['[ ]','[ ]','[ ]'],
                     ['[ ]','[ ]','[ ]'],
                     ['[ ]','[ ]','[ ]']]
          })
        }}>Reset</button>
      </div>
    )
  }
}

export default App;