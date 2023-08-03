import AddAppointment from './component/AddAppointment';
import Search from './component/Search';
import AddInfo from './component/AddInfo';

// import data from './data.json';

import { BiArchive } from "react-icons/bi";
import { useCallback, useEffect, useState } from 'react';

export default function App() {
    // data setting
    const [data,setData] = useState([]);
    const fetchData = useCallback(() => {
        fetch('./data.json')
        .then(response => response.json())
        .then(data => setData(data))
    },[])

    useEffect(fetchData,[fetchData]);

    // sort
    const [sortBy,setSortBy] = useState('petName');
    const [query,setQuery] = useState('');
    const sortList = data.filter((item) => {
        return (item.petName.toLowerCase().includes(query.toLowerCase()) || item.ownerName.toLowerCase().includes(query.toLowerCase()));
    }).sort((a,b) => {
        return (a[sortBy].toLowerCase() > b[sortBy].toLowerCase() ? 1 : -1);
    })


    return (
        <article>
            <h3><BiArchive />예약 시스템</h3>

            <AddAppointment
                data = {data}
                aptId = {data.reduce((max,item) => {
                        return max > Number(item.id) ? max : Number(item.id)
                },0)}
                onSendAppoint = {myAppoint => setData([...data,myAppoint])}
            />
            <Search
                sortBy = {sortBy}
                setSortBy = {setSortBy}
                query = {query}
                onQueryChange = {myQuery => setQuery(myQuery)}
            />

            <div id="list">
                <ul>
                    {
                    sortList.map(item => (
                        <AddInfo
                            key = {item.id}
                            data = {item}
                            onDelete = {(id) => setData(data.filter(item => item.id !== id))}
                        />
                    ))
                    }
                </ul>
            </div>
        </article>
    );
}