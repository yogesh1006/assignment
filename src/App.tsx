
import './App.css';
import {useEffect, useState} from 'react'
import { DataGrid, GridColDef } from '@mui/x-data-grid';

const api = "https://jsonplaceholder.typicode.com/posts"


interface FetchData {
  userId: number;
  id: number;
  title: string;
  body: string;
}



function App() {
  const [data, setData] = useState<FetchData[]>([])

  const columns: GridColDef<(typeof data)[number]>[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'userId',
      headerName: 'User Id',
      width: 150,
      // editable: true,
    },
    {
      field: 'title',
      headerName: 'Title',
      width: 150,
      editable: true,
    },
    {
      field: 'body',
      headerName: 'Body',
      type: 'string',
      width: 110,
      editable: true,
    },
  ];

  useEffect(() =>{
     const fetchData = async () => {
          try {
            const response =await fetch(api)
            const result = await response.json()
            console.log(result); 
            setData(result)  
          } catch (error: any) {
            console.log(error.message);
          }
     }
     fetchData()
  }, [])


  return (
    <div className="App">
  <DataGrid columns={columns}  rows={data}/> 
</div>
  );
}

export default App;
