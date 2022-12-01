import { useEffect,useState } from 'react';
import {Table,TableBody,TableHead,TableCell,TableRow,TextField} from '@mui/material'
import './App.css';

function App() {

  const[data,setData] = useState([])
  const[searchData,setSearchData] = useState([])
  const[filterVal,setFilterVal] = useState("")

  const getData = async() =>{
    const response = await fetch("https://www.ag-grid.com/example-assets/olympic-winners.json") 
    const results = await response.json()
    console.log(results)
    setData(results)
    setSearchData(results)
  }

  useEffect(()=>{getData()},[])

  const onChangeHandler = (e) =>{
    if(e.target.value === ""){
      setData(searchData)
    }
    else{
     const filteredData =  searchData.filter((item)=>item.athlete.toLowerCase().includes(e.target.value.toLowerCase()))
     setData(filteredData)
    }
    setFilterVal(e.target.value)
  }

  return (
    <div>
    <TextField variant='outlined' value={filterVal} fullWidth placeholder='search...' onChange={(e)=>onChangeHandler(e)}/>
    <Table>
    <TableHead>
    <TableRow>
    <TableCell>Age</TableCell>
    <TableCell>Athlete</TableCell>
    <TableCell>Bronze</TableCell>
    <TableCell>Country</TableCell>
    <TableCell>Date</TableCell>
    <TableCell>Gold</TableCell>
    <TableCell>Silver</TableCell>
    <TableCell>Sport</TableCell>
    <TableCell>Total</TableCell>
    <TableCell>Year</TableCell>
    </TableRow>
    </TableHead>
    <TableBody>
    {data.map(player=>{
      return(
        <TableRow>
        <TableCell>{player.age}</TableCell>
        <TableCell>{player.athlete}</TableCell>
        <TableCell>{player.bronze}</TableCell>
        <TableCell>{player.country}</TableCell>
        <TableCell>{player.date}</TableCell>
        <TableCell>{player.gold}</TableCell>
        <TableCell>{player.silver}</TableCell>
        <TableCell>{player.sport}</TableCell>
        <TableCell>{player.total}</TableCell>
        <TableCell>{player.year}</TableCell>
    </TableRow>
      )
    })}
    </TableBody>
    </Table>   
    </div>
  );
}

export default App;
