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

    return (
        <div id="wrap">
            <Header />

            <BookMain
                optionData = {optionData}
            />
            <section id="bookList">
                <div>
                    <h2><span><PiCalendarDuotone /></span>예약 조회하기</h2>
                    <Search />
                    <ul className="listEach">
                        {
                        data.map(item => (
                            <BookList
                                key = {item.id}
                                data = {item}
                                optionData = {optionData}
                            />
                        ))
                        }
                    </ul>
                </div>
            </section>
        </div>
    );
}