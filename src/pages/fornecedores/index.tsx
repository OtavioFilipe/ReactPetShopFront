import React, { useEffect, useState } from "react"
import { api } from "../../service/api";

function Fornecedores ( { children }: any ) {
  const [data,setData]: any = useState()
  console.log(data);
  
    useEffect(() => {
        async function getData () {
          const data: any = await api.get("https://api.github.com/users/yalc1")
          setData(data.data);
        }
        getData();
    }, []
  )

  return  (
    <div>
        {data && (
          <>
            <h1>{ data.login }</h1>
            <img src={ data.avatar_url } />
          </>
        )
      }  
    </div>
  )
}

export { Fornecedores }