import Header from "./components/Header";
import MainBooking from "./components/MainBooking";
import BookingList from "./components/BookingList";

export default function App() {
    return (
        <div id="wrap">
            <Header />

            <MainBooking />

            <BookingList />
        </div>
    );
}