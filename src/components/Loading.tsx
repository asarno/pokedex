import * as React from "react";
import ReactLoading from "react-loading";

const Loading = (props: any) => {

    if (props.type === "pokemon") {

    }

    return (
    <div
        style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyItems: "center",
            alignContent: "center",
            justifyContent: "center",
        }}
    >
        {props.type === "pokemon" ?
        
        <img
            src={require("../res/pokeball.png")}
            className="animated infinite bounce"
            style={{
                width: 200,
                height: 200,
            }}
            alt=""
        />
        : <>

        <img
            src={require("../res/loading.png")}
            style={{
                width: 300,
                height: 188,
            }}
            alt=""
        />

        <ReactLoading
            type="bubbles"
            color="#011734"
        />
        </>
        }
    </div>
);
        }

export default Loading;
