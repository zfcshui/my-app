import { Button } from "antd";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../../actions/count";

export default function Home() {
  const dispatch = useDispatch();
  const count = useSelector(state => state.count);
  const [count1, setCount1] = useState(0);

  return (
    <div>
      Home
      <Button
        onClick={e => {
          dispatch(add(2));
        }}
        type="primary"
      >
        {count}
      </Button>
      <Button
        onClick={e => {
          setCount1(count1 + 2);
        }}
      >
        {count1}
      </Button>
    </div>
  );
}
