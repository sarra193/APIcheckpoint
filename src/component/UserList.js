import axios from 'axios'
import React, { useEffect, useState } from 'react'

const UserList = () => {
    const [data, setData] = useState()
     /*    useEffect(() => {
            function fetchData() {
                  fetch("https://jsonplaceholder.typicode.com/users")
                  .then(res => setData(res))
                  .catch(err=>setError(err))

            }
            fetchData();
      }, []) */
    /*   fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
            .then(json => console.log(json)) */
      

      axios({
            url:'https://jsonplaceholder.typicode.com/users'
      }) 
            .then((response) => {
                  setData(response.data )
            console.log(response)
      })

      return (
            <div>
                  
            </div>
      )
}

export default UserList
