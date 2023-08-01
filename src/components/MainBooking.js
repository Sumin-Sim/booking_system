import { PiCalendarCheck } from "react-icons/pi";
import { FaChevronCircleDown } from "react-icons/fa";

export default function MainBooking() {
    return (
        <section id="mainBooking">
            <h2><span><PiCalendarCheck /></span>예약하기</h2>

            <form name="booking" method="post">

                <fieldset>
                    <legend>예약 정보</legend>

                    <p><b>01. 예약 항목</b></p>
                    <ul className="optionList">
                        <li>
                            <input type="radio" name="bookOption" id="order_01" value="order_01" required />
                            <label htmlFor="order_01">
                                <figure>
                                    <img src="./img/order_01.png" alt="주문 제작 컵케이크"/>
                                    <figcaption>
                                        <dl>
                                            <dt>컵케이크</dt>

                                            <dd>
                                                손에 쏙 들어가는 작은 크기의 컵케이크로, 어린 아이들이나 젊은 연령대에게 인기가 많은 상품입니다.<br />
                                                <br />
                                                빵은 플레인으로 고정되며 케이크 위에 올라가는 크림, 데코레이션 등은 자유롭게 선택이 가능합니다. 
                                            </dd>
                                        </dl>
                                    </figcaption>
                                </figure>
                            </label>
                        </li>

                        <li>
                            <input type="radio" name="bookOption" id="order_02" value="order_02" />
                            <label htmlFor="order_02">
                                <figure>
                                    <img src="./img/order_02.png" alt="주문 제작 3단 케이크"/>
                                    <figcaption>
                                        <dl>
                                            <dt>3단 케이크</dt>

                                            <dd>
                                                행사나 파티, 이벤트를 화려하게 장식할 수 있는 3단 케이크입니다.<br />
                                                <br />
                                                기본적으로 생크림과 제철 과일로 장식되며 크림 종류, 과일 종류는 변경이 가능합니다.
                                            </dd>
                                        </dl>
                                    </figcaption>
                                </figure>
                            </label>
                        </li>

                        <li>
                            <input type="radio" name="bookOption" id="order_03" value="order_03" />
                            <label htmlFor="order_03">
                                <figure>
                                    <img src="./img/order_03.png" alt="주문 제작 과일 쿠키"/>
                                    <figcaption>
                                        <dl>
                                            <dt>과일 쿠키</dt>

                                            <dd>
                                                크림과 과일, 꽃으로 장식되어 눈과 입 모두가 즐거운 쿠키입니다.<br />
                                                <br />
                                                쿠키 종류, 크림, 장식에 사용되는 과일을 선택할 수 있으며 꽃은 선택하신 항목에 어울리는 종류로 임의 진행해드립니다.
                                            </dd>
                                        </dl>
                                    </figcaption>
                                </figure>
                            </label>
                        </li>

                        <li>
                            <input type="radio" name="bookOption" id="order_04" value="order_04" />
                            <label htmlFor="order_04">
                                <figure>
                                    <img src="./img/order_04.png" alt="주문 제작 생화 플라워 케이크"/>
                                    <figcaption>
                                        <dl>
                                            <dt>생화 플라워 케이크</dt>

                                            <dd>
                                                생화를 사용하여 고급스럽게 디자인되는 플라워 케이크입니다.<br />
                                                <br />
                                                크림 종류와 꽃 종류는 선택이 가능하나, 꽃은 사전에 소독이 필요하므로 계절 및 재고 상황에 따라 원하시는 꽃을 사용하기 어려울 수 있습니다. 
                                            </dd>
                                        </dl>
                                    </figcaption>
                                </figure>
                            </label>
                        </li>

                        <li>
                            <input type="radio" name="bookOption" id="class_01" value="class_01" />
                            <label htmlFor="class_01">
                                <figure>
                                    <img src="./img/class_01.png" alt="마카롱 원데이 클래스"/>
                                    <figcaption>
                                        <dl>
                                            <dt>마카롱 원데이 클래스</dt>

                                            <dd>
                                                120분 과정의 마카롱 만들기 클래스입니다.<br />
                                                <br />
                                                마카롱 색상과 필링 맛은 자유롭게 선택이 가능하며 아이싱으로 간단한 데코를 할 수 있습니다.
                                            </dd>
                                        </dl>
                                    </figcaption>
                                </figure>
                            </label>
                        </li>
                        
                        <li>
                            <input type="radio" name="bookOption" id="class_02" value="class_02" />
                            <label htmlFor="class_02">
                                <figure>
                                    <img src="./img/class_02.png" alt="레몬 마들렌 원데이 클래스"/>
                                    <figcaption>
                                        <dl>
                                            <dt>레몬 마들렌 원데이 클래스</dt>

                                            <dd>
                                                90분 과정의 레몬 마들렌 만들기 클래스입니다.<br />
                                                <br />
                                                레몬의 상큼한 향이 고소한 빵과 합쳐져 맛을 한층 더 화려하게 만들어줍니다.
                                            </dd>
                                        </dl>
                                    </figcaption>
                                </figure>
                            </label>
                        </li>

                        <li>
                            <input type="radio" name="bookOption" id="class_03" value="class_03" />
                            <label htmlFor="class_03">
                                <figure>
                                    <img src="./img/class_03.png" alt="머핀 원데이 클래스"/>
                                    <figcaption>
                                        <dl>
                                            <dt>머핀 원데이 클래스</dt>

                                            <dd>
                                            90분 과정의 머핀 마들렌 만들기 클래스입니다.<br />
                                            <br />
                                            초코 머핀, 플레인 머핀 중에 선택할 수 있으며 두 개를 모두 만드는 것도 가능합니다.
                                            </dd>
                                        </dl>
                                    </figcaption>
                                </figure>
                            </label>
                        </li>

                        <li>
                            <input type="radio" name="bookOption" id="class_04" value="class_04" />
                            <label htmlFor="class_04">
                                <figure>
                                    <img src="./img/class_04.png" alt="아이싱 쿠키 원데이 클래스"/>
                                    <figcaption>
                                        <dl>
                                            <dt>아이싱 쿠키 원데이 클래스</dt>

                                            <dd>
                                                120분 과정의 아이싱 쿠키 만들기 클래스입니다.<br />
                                                <br />
                                                쿠키 모양부터 쿠키 위의 아이싱까지 자유롭게 상상하며 진행할 수 있습니다.
                                            </dd>
                                        </dl>
                                    </figcaption>
                                </figure>
                            </label>
                        </li>
                    </ul>

                    <div>
                        <label htmlFor="bookDate">예약 날짜</label>
                        <input type="date" id="bookDate" name="bookDate" required />

                        <label htmlFor="bookTime">예약 시간</label>
                        <input type="time" id="bookTime" name="bookTime" required />

                        <label htmlFor="bookNum">예약 인원</label>
                        <input type="number" id="bookNum" name="bookNum" required max={4}/>
                        <p>원데이 클래스는 최대 4인까지 동시 수강 가능합니다.</p>
                    </div>
                </fieldset>

                <fieldset>
                    <legend>예약자 정보</legend>

                    <label htmlFor="userName">예약자</label>
                    <input type="text" id="userName" name="userName" required />

                    <label htmlFor="userTel">연락처</label>
                    <input type="tel" id="userTel" name="userTel" required />

                    <label htmlFor="userMemo">요청사항</label>
                    <textarea id="userMemo" name="userMemo" placeholder="추가 요청사항을 적어주세요."></textarea>
                </fieldset>

                <fieldset>
                    <legend>서비스 약관</legend>

                    <div>
                        <input type="checkbox" id="service01" required />
                        <label htmlFor="service01">
                            예약 서비스 이용을 위한 약관, 개인정보 수집 및 제3자 제공 규정을 확인하였으며 이에 동의합니다.
                        </label>
                    </div>

                    <div>
                        <input type="checkbox" id="service02"  required />
                        <label htmlFor="service02">
                            예약 후 영업일 기준 2일 이내로 예약 내용과 관련하여 사전 연락을 드립니다.<br />
                            사전 연락 이후에는 예약을 취소 및 변경할 수 없음을 확인합니다.
                        </label>
                    </div>
                </fieldset>

                <input type="submit"></input>
            </form>
        </section>
    );
}