import React, { useState } from 'react';
import './App.css';
import Name from "./Name";
import Box from "./Box"

export default function App() {


  //if a particular box is being toggled (just once), flip the value to true or false


  const [boxes, setBoxes] = useState(

    [
      {
        id: 1,
        isTrue: false,
        description: "長笛課之大姐姐的秘密",
        initial: true
      },
      {
        id: 2,
        isTrue: false,
        description: "烈火雄心之虛驚一場",
        initial: true
      },
      {
        id: 3,
        isTrue: false,
        description: "街頭足球之進擊的曼聯",
        initial: true
      },
      {
        id: 4,
        isTrue: false,
        description: "慌不擇路之迷失白沙道",
        initial: true
      },
      {
        id: 5,
        isTrue: false,
        description: "人體實驗之無法獨個兒看不速之客",
        initial: true
      },
      {
        id: 6,
        isTrue: false,
        description: "立陶宛詩人之雞同鴨講",
        initial: true
      }
    ]

  )


  function toggleBox(id) {
    setBoxes(oldBox => oldBox.map(box => {
      return box.id === id ?
        { ...box, isTrue: !box.isTrue, initial: false } : box
    }))
  }



  const boxesElements = boxes.map(box => (
    <Box
      id={box.id}
      isTrue={box.isTrue}
      description={box.description}
      initial={box.initial}
      toggleBox={() => toggleBox(box.id)}

    />
  ))

  return (
    <div className="hugeContainer">
      <main>
        <Name />
        <div className="container">
          {boxesElements}
        </div>
      </main>
    </div>
  )
}