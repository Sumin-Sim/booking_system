import Header from "./components/Header";
import Search from "./components/Search";
import BookMain from "./components/BookMain";
import BookList from "./components/BookList";

import optionData from "./bookOption.json";

import { PiCalendarDuotone } from "react-icons/pi";
import { useCallback, useEffect, useState } from "react";

export default function App() {
    // data setting
    const [data,setData] = useState([]);
    const fetchData = useCallback(() => {
        fetch('./data.json')
        .then(response => response.json())
        .then(data => setData(data))
    },[])
    useEffect(fetchData,[fetchData]);


    // list sort and search
    const [sortBy,setSortBy] = useState('bookDate');
    const [searchText,setSearchText] = useState('');

    const dataList = data.filter((item,index) => {
        // tel 뒷 네 자리만 남기기
        const tel = item.userTel;
        const telArr = tel.split("");
        const telNum = telArr.slice((telArr.length - 4),tel.length).join('');

        return (item.userName.includes(searchText) || telNum.includes(searchText));
        }).sort((a,b) => {
        return a[sortBy] > b[sortBy] ? 1 : -1;
    });


    // Delete
    function onDelete(id) {
        setData(data.filter(item => item.id !== id));
    }


    // export
    return (
        <div id="wrap">
            <Header />

            <BookMain
                optionData = {optionData}
                formIdSet = {data.reduce((max,item) => {
                    return max > Number(item.id) ? max : Number(item.id);
                },0)}
                newForm = {formInfo => setData([...data,formInfo])}
            />
            <section id="bookList">
                <div>
                    <h2><span><PiCalendarDuotone /></span>예약 조회하기</h2>
                    <Search
                        setSortBy = {setSortBy}
                        sortBy = {sortBy}
                        setSearchText = {setSearchText}
                    />
                    <ul className="listEach">
                        {
                        dataList.map(item => (
                            <BookList
                                key = {item.id}
                                data = {item}
                                optionData = {optionData}
                                onDelete = {onDelete}
                            />
                        ))
                        }
                    </ul>
                </div>
            </section>
        </div>
    );
}