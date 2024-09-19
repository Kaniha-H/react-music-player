import { v4 as uuidv4 } from "uuid";

function childHop() {
  return [
    {
      name: "Dreamstate",
      artist: "Toonorth",
      cover: "https://picsum.photos/1024/1024",
      id: uuidv4(),
      active: true,
      color: ["#283F52", "#949EF3"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=17947",
    },
    {
      name: "Travelbag",
      artist: "mommy, Sleepy Fish",
      cover: "https://picsum.photos/1024/1023",
      id: uuidv4(),
      active: false,
      color: ["#5D93D4", "#F2E2D3"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=19058",
    },
    {
      name: "Higher",
      artist: "Misha, Jussi Halme",
      cover: "https://picsum.photos/1024/1022",
      id: uuidv4(),
      active: false,
      color: ["#523C4B", "#FF4F6F"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=15088",
    },
    {
      name: "Cruising",
      artist: "Evil Needle",
      cover: "https://picsum.photos/1024/1021",
      id: uuidv4(),
      active: false,
      color: ["#ECCA82", "#E99856"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=17087",
    },
    {
      name: "Samething",
      artist: "SwuM",
      cover: "https://picsum.photos/1024/1020",
      id: uuidv4(),
      active: false,
      color: ["#2F3C3A", "#494C38"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=15236",
    },
    {
      name: "Cascade",
      artist: "Knowmadic",
      cover: "https://picsum.photos/1024/1019",
      id: uuidv4(),
      active: false,
      color: ["#FF9555", "#70C29C"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=13092",
    },
    {
      name: "Harbor",
      artist: "Stan Forebee, The Field Tapes, azula, Francis",
      cover: "https://picsum.photos/1024/1018",
      id: uuidv4(),
      active: false,
      color: ["#DAE8DE", "#E0C595"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=11245",
    },
    {
      name: "Departure",
      artist: "Makzo",
      cover: "https://picsum.photos/1024/1017",
      id: uuidv4(),
      active: false,
      color: ["#F96E06", "#CB8183"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=11771",
    },
  ];
}

export default childHop;
