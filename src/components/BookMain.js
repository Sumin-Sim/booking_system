import optionData from "../bookOption.json";

import { PiCalendarCheck } from "react-icons/pi";
import { FiChevronRight } from "react-icons/fi";

export default function BookMain() {
    return (
        <section id="bookMain">
            <h2><span><PiCalendarCheck /></span>예약하기</h2>
            
            <form name="booking" method="post">
                <BookStep01 />
                <BookStep02 />
            </form>
        </section>
    );
}

function BookStep01() {
    return (
        <fieldset>
            <legend>1단계. 예약 항목 선택</legend>

            <ul className="optionList">
                {
                optionData.map(item => {
                    return (
                        <li>
                            <input type="radio" name="bookOption" id={item.value} value={item.value} required />
                            <label htmlFor={item.value}>
                                <figure>
                                    <img src={item.imgsrc} alt={item.title}/>
                                    <figcaption>
                                        <dl>
                                            <dt>{item.title}</dt>

                                            <dd>
                                                {item.info} 
                                            </dd>
                                        </dl>
                                    </figcaption>
                                </figure>
                            </label>
                        </li>
                    )
                })
                }
            </ul>

            <button type="button" className="nextStep">다음 단계</button>
        </fieldset>
    );
}
function BookStep02() {
    return (
        <>
            <fieldset>
                <legend>2단계. 예약 정보 입력</legend>

                <ul>
                    <li>
                        <label htmlFor="bookDate">예약 날짜</label>
                        <input type="date" id="bookDate" name="bookDate" required />
                    </li>
                    <li><span></span></li>
                    <li>
                        <label htmlFor="bookTime">예약 시간</label>
                        <input type="time" id="bookTime" name="bookTime" required />
                    </li>
                </ul>

                <ul>
                    <li>
                        <label htmlFor="userName">예약자</label>
                        <input type="text" id="userName" name="userName" required />
                    </li>
                    <li><span></span></li>
                    <li>
                        <label htmlFor="bookNum">예약 인원</label>
                        <input type="number" id="bookNum" name="bookNum" required max={4}/>
                        <p>원데이 클래스는 최대 4인까지 동시 수강 가능합니다.</p>
                    </li>
                    <li><span></span></li>
                    <li>
                        <label htmlFor="userTel">연락처</label>
                        <input type="tel" id="userTel" name="userTel" required />
                    </li>
                </ul>

                <div>
                    <label htmlFor="userMemo">요청사항</label>
                    <textarea id="userMemo" name="userMemo" placeholder="추가 요청사항을 적어주세요."></textarea>
                </div>

                <ul>
                    <li>
                        <input type="checkbox" id="service01" required />
                        <label htmlFor="service01">
                            예약 서비스 이용을 위한 약관, 개인정보 수집 및 제3자 제공 규정을 확인하였으며 이에 동의합니다.
                        </label>
                    </li>
                    <li>
                        <input type="checkbox" id="service02"  required />
                        <label htmlFor="service02">
                            예약 후 영업일 기준 2일 이내로 예약 내용과 관련하여 사전 연락을 드립니다.<br />
                            사전 연락 이후에는 예약을 취소 및 변경할 수 없음을 확인합니다.
                        </label>
                    </li>
                </ul>

                <input type="submit" value="예약 완료"></input>
            </fieldset>
        </>
    );
}