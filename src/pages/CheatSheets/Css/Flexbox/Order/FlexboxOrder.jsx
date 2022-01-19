import { useState } from "react";

import ValueSliderButton from "../../../../../components/ValueSliderButton/ValueSliderButton";
import FlexboxGraphOrder from "./FlexboxGraphOrder";

function FlexboxOrder({ itemCat, propertiesCat, visible }) {
  const [orderItem1, setOrderItem1] = useState(0);
  const [orderItem2, setOrderItem2] = useState(0);
  const [orderItem3, setOrderItem3] = useState(0);

  function onChangeOrderItem1(event) {
    setOrderItem1(event.target.value);
  }
  function onChangeOrderItem2(event) {
    setOrderItem2(event.target.value);
  }
  function onChangeOrderItem3(event) {
    setOrderItem3(event.target.value);
  }
  function setOrderCategory() {
    if (itemCat === true && visible === true && propertiesCat === true) {
      return (
        <>
          <div>
            <ValueSliderButton
              id="grow"
              label={`item 1\norder`}
              marginTop="small"
              placeholder="0"
              min={-5}
              max={5}
              value={orderItem1}
              unit=""
              color="green"
              onChange={onChangeOrderItem1}
            />
            <ValueSliderButton
              id="grow"
              label={`item 2\norder`}
              marginTop="small"
              placeholder="0"
              min={-5}
              max={5}
              value={orderItem2}
              unit=""
              color="yellow"
              onChange={onChangeOrderItem2}
            />
            <ValueSliderButton
              id="grow"
              label={`item 3\norder`}
              marginTop="small"
              placeholder="0"
              min={-5}
              max={5}
              value={orderItem3}
              unit=""
              color="red"
              onChange={onChangeOrderItem3}
            />
          </div>
          <FlexboxGraphOrder
            orderItems={[
              { item: orderItem1, color: "green" },
              { item: orderItem2, color: "yellow" },
              { item: orderItem3, color: "redish" },
            ]}
          />
        </>
      );
    } else return null;
  }
  return setOrderCategory();
}

export default FlexboxOrder;
