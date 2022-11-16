import React from "react";
import { NavHeader } from "../components/NavHeader/NavHeader.jsx"
import { ThreeColumns } from "../components/ThreeColumns/ThreeColumns.jsx"
import { WhatsItAbout } from "../components/WhatsItAbout/WhatsItAbout";

export function Home() {
    return (
        <>
            <NavHeader />
            <ThreeColumns />
            <WhatsItAbout />
        </>
    )
}