import React from 'react'

function dataPage() {
     const[complinArr,setComplinArr] = useState("")
    async function getdata(){
        try{
        const response = await fetch("http://localhost:5000/data", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        
      });
      
      setComplinArr(response)
      



        }catch{

        }


    }
    return(
        <>
        {complinArr ? (
      <table>
        <thead>
      <tr>
         <th>kategory</th>
         <th>Komplain</th>
        <th>crietedAt</th>
      </tr>
      </thead>
       {complinArr.map((k) =>
       <>
       <tbody key={index}>
       <tr>
       
       <td>{k[0]}</td>
      <td>{k[1]}</td>
      <td>{k[2]}</td>
      <td>{k[3]}</td>
      <td>{k[4]}</td>
      <td>{k[5]}</td>
      <td>{k[5]}</td>
      <td>{k[7]}</td>
      <td>{k[8]}</td>
      <td>{k[9]}</td>
      <td>{k[10]}</td>
      <td>{k[11]}</td>
      <td>{k[12]}</td>
     </tr>
     </tbody>
       </>
)}
  </table>

        ):(
            <>
        <div>dataPage</div>
        <button onClick={()=>getdata()}>getdata</button>
</>
        )}
        </>

    )}

  
    



export default dataPage