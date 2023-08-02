import { BiSearch } from "react-icons/bi";
import { FaChevronDown } from "react-icons/fa";

export default function Search() {
    return (
        <div id="searchBox">
            <input type="text" />

            <p><BiSearch /></p>

            <div className="sortBtn">
                <p>날짜순<span><FaChevronDown /></span></p>

                <ul>
                    <li>날짜순</li>
                    <li>항목순</li>
                    <li>예약자명순</li>
                </ul>
            </div>
        </div>
    );
}