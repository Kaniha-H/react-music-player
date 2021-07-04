import { v4 as uuidv4 } from 'uuid';

function childHop() {
    return [
        {
            name: "Dreamstate",
            artist: "Toonorth",
            cover: "https://chillhop.com/wp-content/uploads/2021/05/8ef1fa972003495d1ecfba6292116174e9c5d940-1024x1024.jpg",
            id: uuidv4(),
            active: true,
            color: ['#283F52', '#949EF3'],
            audio: 'https://mp3.chillhop.com/serve.php/?mp3=17947'
        },
        {
            name: "Travelbag",
            artist: "mommy, Sleepy Fish",
            cover: "https://chillhop.com/wp-content/uploads/2021/05/1245c0271290a3196328c0cf4aaa910cd873dfe7-1024x1024.jpg",
            id: uuidv4(),
            active: false,
            color: ['#5D93D4', '#F2E2D3'],
            audio: 'https://mp3.chillhop.com/serve.php/?mp3=19058'
        },
        {
            name: "Higher",
            artist: "Misha, Jussi Halme",
            cover: "https://chillhop.com/wp-content/uploads/2021/05/2473c60e471fe9b40e246bf7711c87d3d6ea69a7-1024x1024.jpg",
            id: uuidv4(),
            active: false,
            color: ['#523C4B', '#FF4F6F'],
            audio: 'https://mp3.chillhop.com/serve.php/?mp3=15088'
        },
        {
            name: "Cruising",
            artist: "Evil Needle",
            cover: "https://chillhop.com/wp-content/uploads/2021/04/cb0cc6270d7f2e1bb13e44e8832bd5c9b2a61080-1024x1024.jpg",
            id: uuidv4(),
            active: false,
            color: ['#ECCA82', '#E99856'],
            audio: 'https://mp3.chillhop.com/serve.php/?mp3=17087'
        },
        {
            name: "Samething",
            artist: "SwuM",
            cover: "https://chillhop.com/wp-content/uploads/2021/03/74d62bc9370a68e440c1b98eaf650344f0a7faea-1024x1024.jpg",
            id: uuidv4(),
            active: false,
            color: ['#2F3C3A', '#494C38'],
            audio: 'https://mp3.chillhop.com/serve.php/?mp3=15236'
        },
        {
            name: "Cascade",
            artist: "Knowmadic",
            cover: "https://chillhop.com/wp-content/uploads/2021/02/70a56749b8b89815fa75446030c6ba57d2c34de7-1024x1024.jpg",
            id: uuidv4(),
            active: false,
            color: ['#FF9555', '#70C29C'],
            audio: 'https://mp3.chillhop.com/serve.php/?mp3=13092'
        },
        {
            name: "Harbor",
            artist: "Stan Forebee, The Field Tapes, azula, Francis",
            cover: "https://chillhop.com/wp-content/uploads/2020/11/8a0c857ddad531279d0757f5362380a6837b1b69-1024x1024.jpg",
            id: uuidv4(),
            active: false,
            color: ['#DAE8DE', '#E0C595'],
            audio: 'https://mp3.chillhop.com/serve.php/?mp3=11245'
        },
        {
            name: "Departure",
            artist: "Makzo",
            cover: "https://chillhop.com/wp-content/uploads/2020/11/f78c39b4bb6313ddd0354bef896c591bfb490ff8-1024x1024.jpg",
            id: uuidv4(),
            active: false,
            color: ['#F96E06', '#CB8183'],
            audio: 'https://mp3.chillhop.com/serve.php/?mp3=11771'
        },
    ];
}

export default childHop;