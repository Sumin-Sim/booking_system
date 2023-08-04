import { useState } from "react";
import { PiCalendarXDuotone } from "react-icons/pi";
import { AiOutlineClose } from "react-icons/ai";

import { BsExclamationCircleFill } from "react-icons/bs";

export default function BookList(props) {
    // 외 n명
    function numWithout() {
        if(props.data.bookNum > 1) {
            return (` 외 ${props.data.bookNum - 1}명`);
        }
    }
    

    // bookOption을 text로 바꾸기
    function optionText() {
        const option = props.data.bookOption;
        switch(option) {
            case "order_01": {
                let optionText = '주문 제작 컵케이크';
                return optionText;
            };
                break;
            case "order_02": {
                let optionText = '주문 제작 3단 케이크';
                return optionText;
            };
                break;
            case "order_03": {
                let optionText = '주문 제작 과일 쿠키';
                return optionText;
            };
                break;
            case "order_04": {
                let optionText = '주문 제작 플라워 케이크';
                return optionText;
            };
                break;
            case "class_01": {
                let optionText = '마카롱 원데이 클래스';
                return optionText;
            }
                break;
            case "class_02": {
                let optionText = '레몬 마들렌 원데이 클래스';
                return optionText;
            }
                break;
            case "class_03": {
                let optionText = '머핀 원데이 클래스';
                return optionText;
            }
                break;
            case "class_04": {
                let optionText = '아이싱 쿠키 원데이 클래스';
                return optionText;
            }
        }
    }


    // tel 암호화
    function telHide() {
        const tel = props.data.userTel;
        const telArr = tel.split("");
        for(let i in telArr) {
            if(telArr[i] === '-') {
                continue;
            } else if (telArr[i] !== '-') {
                telArr.splice(i,1,'*');
            }
            if((telArr.length - i) <= 6) {
                const telNum = telArr.join('');
                return telNum;
            } 
        }
    }


    // delete
    const [delPw,setDelPw] = useState('')

    function deleteBtn() {
        const deleteModal = document.querySelector('div#deleteModal');
        deleteModal?.classList.add('show');
    }
    function deleteData() {
        if(delPw === props.data.userPw) {
            alert('예약이 취소되었습니다!');
            props.onDelete(props.data.id);
        } else {
            alert('비밀번호가 일치하지 않습니다.');
            console.log(delPw);
        }
    }


    // export
    return (
        <>
        <li>
            <dl>
                <dt>{props.data.userName}{numWithout()}</dt>

                <dd>{props.data.bookDate}</dd>
                <dd>{props.data.bookTime}</dd>
                <dd>{optionText()}</dd>
                <dd>{telHide()}</dd>
                <dd>{props.data.userMemo}</dd>
            </dl>

            <p>
                <button type="button" onClick={() => deleteBtn()}>예약 취소</button>
            </p>
        </li>

        <DeleteModal
            deleteData = {deleteData}
            setDelPw = {setDelPw}
        />
        </>
    );
}


function DeleteModal(props) {
    // modal close
    const modal = document.querySelector('div#deleteModal');
    function modalClose() {
        modal?.classList.remove('show');
    }

    return (
        <div id="deleteModal">
            <div className="deleteModal">
                <h4><span><PiCalendarXDuotone /></span>예약 취소</h4>

                <div>
                    <label htmlFor="deletePw">예약을 취소하시려면 예약 시 입력하셨던 <b>본인확인용 암호</b>를 입력해주세요.</label>
                    <input type="password" id="deletePw" name="deletePw"
                    onChange={(e) => props.setDelPw(e.target.value)} />
                    <p><span><BsExclamationCircleFill /></span>예약 취소는 되돌릴 수 없습니다.</p>
                </div>

                <button type="button" onClick={props.deleteData}>예약 취소</button>
                <p onClick={() => modalClose()}><AiOutlineClose /></p>
            </div>
        </div>
    );
}