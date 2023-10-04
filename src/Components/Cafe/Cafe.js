import React from "react";
import CafeStyle from "./Cafe.module.css";
import { Button, Image } from "react-bootstrap";
import Logo from "../../images/mobile-cafe/gods-gospel-cafe.png";
import BibleImg from "../../images/mobile-cafe/bible-and-cross-icon.png";

const Cafe = () => {
    const logoStyle = CafeStyle.logoStyle;
    const bibleImg = CafeStyle.bibleImg;
    const h1Style = CafeStyle.h1Style;
    const btn = CafeStyle.btn;
    const divWrapper = CafeStyle.divWrapper;
    const listWrapper = CafeStyle.listWrapper;

    return (
        <>
            <div className={divWrapper}>
                <Image src={Logo} className={logoStyle}/>
                <h1 className={h1Style}>Services From </h1>
                <h1>The Heart of God </h1>
                <div className={listWrapper}>
                    {" "}
                    <p style={{ margin: "0" }}>Volunteer Network</p>
                    <p style={{ margin: "0" }}>Spiritual Guidance</p>
                    <p style={{ margin: "0" }}>Emotional Assistance</p>
                    <p style={{ margin: "0" }}>Physical Needs</p>
                </div>
                <Image src={BibleImg} className={bibleImg}/>
                <Button className={btn}>LEARN MORE</Button>
            </div>

        </>
    )
}
export default Cafe;