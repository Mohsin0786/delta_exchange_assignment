import React,{useState} from 'react'
import './table.css'
import trashIcon from './trash-icon.svg'
 const Table = () => {
     const [listData, setlistData] = useState([{
         Name:"Wayne Rooney",Company:"DC United",Status:"Active",LastUpdated:"7/07/2017",Notes:"ManUtd Highest scorer"
        },
        {Name:"Wayne Rooney",Company:"DC United",Status:"Inactive",LastUpdated:"7/07/2017",Notes:"ManUtd Highest scorer"}
    ,{Name:"Wayne Rooney",Company:"DC United",Status:"Active",LastUpdated:"7/07/2017",Notes:"ManUtd Highest scorer"},
    {Name:"Wayne Rooney",Company:"DC United",Status:"Active",LastUpdated:"7/07/2017",Notes:"ManUtd Highest scorer"}
])
  return (
    <div className="table-container">
        <div className="table-content">
            <ul className="table-heading-content">
                <li style={{flex: 0.2}}><input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/></li>
                <li>Name</li>
                <li>Company</li>
                <li>Status</li>
                <li>Last Updated</li>
                <li className="notes-list" style={{flex:2}}>Notes</li>
            </ul>
            {
                listData.map((data=>(
                    <TableList data = {data}/>
                )))
            }
         
        </div>
        </div>
  )
}
export default Table

const TableList = ({data})=>{
    console.log(data)
    return(
        <>
        <ul className="table-data-content">
                <li style={{flex: 0.2}}><input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/></li>
                <li>{data.Name}</li>
                <li>{data.Company}</li>
                <li>{data.Status}</li>
                <li>{data.LastUpdated}</li>
                <li className="notes-list" ><span>{data.Notes}</span><img src={trashIcon} alt="trash-icon"/></li>
            </ul>
        </>
    )
}