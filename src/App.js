import "./App.css";

import { useState, useEffect } from "react";
import axios from "axios";
import Header from "./Header";
import Category from "./Category";

function App() {
    const [datas, setDatas] = useState({});
    const [isLoading, setIsLoading] = useState(true);

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
        <span>En cous de chargement...</span>
    ) : (
        <>
            <Header datas={datas} />
            {datas.categories.map((category, index) => {
                return (
                    <div key={index}>
                        {category.meals.length > 0 && (
                            <Category category={category}></Category>
                        )}
                    </div>
                );
            })}
        </>
    );
}

export default App;
