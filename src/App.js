import React, { Fragment, useState } from "react";
import { List, Card } from "antd";
import "antd/dist/antd.css";

const data = [
  {
    title: "Title 1"
  },
  {
    title: "Title 2"
  },
  {
    title: "Title 3"
  },
  {
    title: "Title 4"
  }
];
export default function() {
  // const [showButton, setShowButton] = useState(false);

  // const usePriest = evt => {
  //   setShowButton(true);
  // };

  return (
    <List
      grid={{ gutter: 16, column: 4 }}
      dataSource={data}
      renderItem={item => (
        <List.Item>
          <Card title={item.title}>Card content</Card>
        </List.Item>
      )}
    />
  );

  // return (
  //   <Fragment>
  //     <div>
  //       {showButton && (
  //         <div>
  //           <button className="button_player1">heyo</button>
  //           <button className="button_player2">heyo</button>
  //           <button className="button_player3">heyo</button>
  //           <button className="button_player4">heyo</button>
  //         </div>
  //       )}
  //       <button className="button_card1_use" onClick={evt => usePriest(evt)}>
  //         Use
  //       </button>
  //       <button className="button_card1_discard">Discard</button>
  //       <div className="about1">
  //         <p>Priest</p>
  //         Player is allowed to see another player's hand.
  //       </div>
  //     </div>
  //     {/* <h1
  //       style={{
  //         color: "red",
  //         "&:hover": {
  //           color: "#d9d9d9"
  //         }
  //       }}
  //     >
  //       Hi this is my name
  //     </h1> */}
  //   </Fragment>
  // );
}

// export function A(param1, param2) {
//   console.log("I am executed");
//   return param1 + param2;
// }

// export function CallMe(timeInterval, param1, param2, callBackFunction) {
//   setTimeout(() => {
//     callBackFunction(param1, param2);
//   }, timeInterval);
// }
