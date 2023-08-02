import Header from "./components/Header";
import Search from "./components/Search";
import BookMain from "./components/BookMain";
import BookList from "./components/BookList";

import { PiCalendarCheck } from "react-icons/pi";

export default function App() {
    return (
        <div id="wrap">
            <Header />

            <BookMain />
            <section id="bookList">
                <h2><span><PiCalendarCheck /></span>예약 조회하기</h2>
                <Search />
                <BookList />
            </section>
        </div>
    );
}