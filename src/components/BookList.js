export default function BookList(props) {
    // 외 n명
    function numWithout() {
        if(props.data.bookNum > 1) {
            return (` 외 ${props.data.bookNum - 1}명`);
        }
    }
    

    // bookOption을 text로 바꾸기
    function optionText() {
        let option = props.data.bookOption;
        /* let text = props.optionData[value = option].title; */
        /*   */
        /* switch(option) {
            case "order_01": {
                let optionText = option.replace('order_01','주문 제작 컵케이크');
                return(optionText);
            };
                break;
            case "order_02": {
                let optionText = option.replace('order_01','주문 제작 3단 케이크');
                return(optionText);
            };
                break;
            case "order_03": {
                let optionText = option.replace('order_01','주문 제작 과일 쿠키');
                return(optionText);
            };
                break;
            case "order_04": {
                let optionText = option.replace('order_01','주문 제작 컵케이크');
                return(optionText);
            };
                break;
            
            case "class_03": {
                let optionText = option.replace('class_03','qpeijtpaoidjf');
                return(optionText);
            } break;
        } */
    }

    return (
        <li>
                <dl>
                    <dt>{props.data.userName}{numWithout()}</dt>

                    <dd>{props.data.bookDate}</dd>
                    <dd>{props.data.bookTime}</dd>
                    <dd>{optionText()}</dd>
                    <dd>{props.data.userTel}</dd>
                    <dd>{props.data.userMemo}</dd>
                </dl>

                <p>
                    <button type="button">예약 취소</button>
                </p>
        </li>
    );
}