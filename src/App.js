import "./App.css";

import { useState, useEffect } from "react";
import axios from "axios";
import Header from "./Header";
import Category from "./Category";
import { useMediaQuery } from "react-responsive";

function App() {
    const [datas, setDatas] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const isMediumScreenOrLess = useMediaQuery({ maxWidth: 1250 });
    const isSmallScreen = useMediaQuery({ maxWidth: 870 });

    const fetchDatas = async () => {
        const response = await axios.get(
            "https://le-reacteur-deliveroo.herokuapp.com/"
        );
        console.log(response.data);
        setDatas(response.data);
        setIsLoading(false);
    };

    useEffect(() => {
        fetchDatas();
    }, []);

    return isLoading ? (
        <span>En cours de chargement...</span>
    ) : (
        <>
            <Header datas={datas} />
            <div className="app-div-main">
                <div
                    className={
                        isSmallScreen
                            ? "app-div-main-margin app-div-main-margin-small-screen"
                            : isMediumScreenOrLess
                            ? "app-div-main-margin app-div-main-margin-medium-screen"
                            : "app-div-main-margin"
                    }
                >
                    {datas.categories.map((category, index) => {
                        return (
                            <div key={index}>
                                {category.meals.length > 0 && (
                                    <Category category={category}></Category>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
}

export default App;
