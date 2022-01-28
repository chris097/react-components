import React, { useState, useEffect } from 'react';

const users = [
  {id: 1, name: 'christian', age: '33', town: '02 villa', sex: 'male'},
  {id: 2, name: 'chimaka', age: '33', town: '02 villa', sex: 'female'},
  {id: 3, name: 'joy', age: '33', town: '02 villa', sex: 'female'},
  {id: 4, name: 'kingsley', age: '33', town: '02 villa', sex: 'male'},
  {id: 5, name: 'paul', age: '33', town: '02 villa', sex: 'male'},
]

const SearchData = () => {
  const [searchUser, setSearchUser] = useState('');
  // const [allUser, setAllUser] = useState([]);

  let arr = users?.map(user => user.name.toLowerCase())
  const searchData = arr.filter(data => data.includes(searchUser))
  console.log(searchData)
  return(
    <div>
      <div>Search user:</div>
      <input type="search" value={searchUser} onChange={e => setSearchUser(e.target.value)} placeholder="Search for a user" />
      { users?.map((user, index) => (
        <div key={index} style={{boxShadow: '1px 1px 5px rgba(0,0,0,.1)', width: '300px', height: '300px', borderRadius: '10px', display: 'flex'}}>
          <div>
            {searchData?.map((data) => data)}
          </div>
        </div>
      ))}
    </div>
  )
}

export default SearchData;