import { BiSearch } from "react-icons/bi";
import { FaChevronDown } from "react-icons/fa";

export default function Search(props) {
    // sort list show and hide
    const sortList = document.querySelector('div.sortBtn>ul');

    function sortListShow() {
        sortList?.classList.add('show');
    }
    // sort list hide
    function sortListHide() {
        sortList?.classList.remove('show');
    }


    // sortBy text
    function sortByText() {
        const sortBy = props.sortBy;
        switch(sortBy) {
            case "bookDate": {
                let sortByText = "날짜순";
                return sortByText;
            }
                break;
            case "bookOption": {
                let sortByText = "항목순";
                return sortByText;
            }
                break;
            case "userName": {
                let sortByText = "예약자명순";
                return sortByText;
            }
        }
    }


    // export
    return (
        <div id="searchBox">
            <input type="text" placeholder="예약자명 혹은 전화번호 뒷 4자리 입력" onChange={(e) => props.setSearchText(e.target.value)}/>

            <p><BiSearch /></p>

            <div className="sortBtn">
                <p onClick={() => sortListShow()}>{sortByText()}<span><FaChevronDown /></span></p>

                <ul>
                    <li onClick={() => {
                        props.setSortBy('bookDate');
                        sortListHide();
                    }}>날짜순</li>
                    <li onClick={() => {
                        props.setSortBy('bookOption');
                        sortListHide();
                    }}>항목순</li>
                    <li onClick={() => {
                        props.setSortBy('userName');
                        sortListHide();
                    }}>예약자명순</li>
                </ul>
            </div>
        </div>
    );
}