import React, {Component} from 'react'
//Style of table sturcture
let style = {
  tr: {
    border:'2px solid #000',
    width:'500px',
    margin:'auto'
  },
  th:{borderLeft:'1px solid',
  borderBottom: '1px solid #000'}
}

class Table extends Component {    
  render() {
    return <div className="">
       <br />    <br />
      <b> {this.props.label}</b>   <br />
      <table className="table" style={style.tr}>      
        <tr >
          <th style={style.th}> Str1 </th>
          <th style={style.th}> Str2 </th>
          <th style={style.th}> Opt1 </th>
          <th style={style.th}>  Opt2 </th>
        </tr>        
        <tr >
          <th style={style.th}> {this.props.input1} </th>
          <th  style={style.th}> {this.props.input2} </th>
          <th  style={style.th}> {this.props.opt1} </th>
          <th  style={style.th}> {this.props.opt2} </th>
        </tr>      
      </table>
    </div>
  }
}
export default Table;
