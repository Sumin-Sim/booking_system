import MainBooking from "./components/MainBooking";
import BookingList from "./components/BookingList";

export default function App() {
    return (
        <div id="wrap">
            <header>
                <h1>Sweet Bakery</h1>
                <p>스위트 베이커리를 방문해주셔서 감사합니다.</p>
            </header>

            <MainBooking />

            <BookingList />
        </div>
    );
}