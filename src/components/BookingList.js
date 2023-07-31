export default function BookingList() {
    return (
        <section>
            <h3>예약 내역</h3>

            <div>
                <dl>
                    <dt>예약자명 외 (예약인원 - 1)명</dt>

                    <dd>예약 항목</dd>
                    <dd>연락처</dd>
                    <dd>날짜</dd>
                    <dd>시간</dd>
                </dl>

                <p>
                    <button type="button">예약 취소</button>
                </p>
            </div>
                
        </section>
    );
}