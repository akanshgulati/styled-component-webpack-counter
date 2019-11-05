import React, {useState} from "react"
import Button from "./button"
import styled from "styled-components"

const CounterEl = styled.div`
    text-align: center;
    padding: 20px;
`;
const Count = styled.div``;

const Counter = () => {
    const [count, setCount] = useState(0);
    return (
        <CounterEl>
            <Count>{count}</Count>
            <div>
                <Button onClick={() => {
                    setCount(count + 1)
                }}>+1</Button>
                <Button onClick={() => {
                    setCount(count - 1)
                }}>-1</Button>
            </div>
        </CounterEl>
    )
};
export default Counter;
