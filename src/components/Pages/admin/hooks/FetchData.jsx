import React, { useEffect, useState } from 'react'

const FetchData = () => {
    let  [posts, setposts]=useState([])

 const fetch_data = ()=>{
    fetch('https://jsonplaceholder.typicode.com/posts',{method:"GET"
})
// fetch बात data aauxa tesbata post ma set garna .then lene j response aauxa json ma convert garne
 .then(response=>{return response.json()})
 .then(data=>{return setPosts(data)})
}


useEffect(fetch_data,[])

  return (
    <div>

FatchData

    </div>
  )
}

export default FetchData