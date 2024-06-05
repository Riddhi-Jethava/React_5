import React, { useContext } from "react";
import ThemeContext from "./ThemeContext";

function ThemeComponent() {
    const { theme } = useContext(ThemeContext)

    return (
        <div className="container-fluid pt-5" style={{
            background: theme === "light" ? "white" : "Black",
            color: theme === "light" ? "black" : "white",
            height: "100vh"
        }}>
            <div className="row justify-content-center p-5">
                <div className="col-lg-3 border rounded rounded-3 shadow-lg ps-5 pt-5">
                    <div id="avtar">
                        <h5>Hiieee_
                            <br /> everyone!
                        </h5>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ThemeComponent