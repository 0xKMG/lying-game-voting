import React, { useState } from 'react';
import './App.css';
import Name from "./Name";
import Box from "./Box"

export default function App() {


  const [boxes, setBoxes] = useState(

    [
      {
        id: 1,
        isTrue: false,
        description: "長笛課之大姐姐的秘密"
      },
      {
        id: 2,
        isTrue: false,
        description: "烈火雄心之虛驚一場"
      },
      {
        id: 3,
        isTrue: false,
        description: "街頭足球之進擊的曼聯"
      },
      {
        id: 4,
        isTrue: false,
        description: "慌不擇路之迷失白沙道"
      },
      {
        id: 5,
        isTrue: false,
        description: "人體實驗之無法獨個兒看不速之客"
      },
      {
        id: 6,
        isTrue: false,
        description: "立陶宛詩人之雞同鴨講"
      }
    ]

  )

  // const [noFaithInHuman, setNoFaithInHuman] = useState(false)

  // React.useEffect(() => {
  //   const allFalse = boxes.every(box => !box.isTrue)
  //   if (allFalse) {
  //     setNoFaithInHuman(true)
  //   }
  // }, [boxes])


  function toggleBox(id) {
    setBoxes(oldBox => oldBox.map(box => {
      return box.id === id ?
        { ...box, isTrue: !box.isTrue } : box
    }))
  }


  const boxesElements = boxes.map(box => (
    <Box
      id={box.id}
      isTrue={box.isTrue}
      description={box.description}
      toggleBox={() => toggleBox(box.id)}

    />
  ))

  return (
    <main>
      <Name />
      <div className="container">
        {boxesElements}
      </div>
    </main>
  )
}