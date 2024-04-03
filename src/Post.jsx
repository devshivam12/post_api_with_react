import React, { useState } from 'react'
import axios from 'axios';

const Post = () => {

    const [inputData, setInputData] = useState({ fname: "", lname: "" })

    const handleChange = (e) => {
        setInputData({ ...inputData, [e.target.name]:e.target.value })
    }
    const handleClick = (e) => {
        e.preventDefault()
        axios.post("https://jsonplaceholder.typicode.com/users", inputData)
            .then((response) => {
                console.log(response)
            })
    }
    return (
        <div>
            <input
                placeholder='Enter you name'
                name='fname'
                type="text"
                value={inputData.fname}
                onChange={handleChange}
            />
            <input
                placeholder='Enter you name'
                name='lname'
                type="text"
                value={inputData.lname}
                onChange={handleChange}
            />
            <button onClick={handleClick}>Submit</button>
        </div>
    )
}

export default Post
