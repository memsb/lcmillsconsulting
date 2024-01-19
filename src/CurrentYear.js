import React from "react";

export default function CurrentYear() {
    return (
        <>
            {new Date().getFullYear()}
        </>
    );
}