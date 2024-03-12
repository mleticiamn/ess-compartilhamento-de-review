import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "../../style/MyLists.css";

const API_BASE = "http://localhost:3001";

const MyLists = () => {
    const [lists, setLists] = useState([]);

    // useEffect(() => {
        
        
    //     fetch(`${API_BASE}/lists`)
    //         .then(response => response.json())
    //         .then(data => setLists(data))
    //         .catch(error => console.log(error));
    // }, []);

    return (
        <div>

            <div className="minhas-listas">Minhas Listas</div>

            <div id="all-lists">
                {lists.length === 0 ? (
                    <p>Você ainda não criou nenhuma lista</p>
                ) : (
                    lists.map((list, index) => (
                        <div key={index} className="list-item">
                            <h3>{list.name}</h3>
                            <p className="gray">{list.restaurantCount} restaurantes</p>
                            <p>{list.description}</p>
                        </div>
                    ))
                )}
            </div>

            <Link to="/lists/create" className="create-list-button">Criar Lista</Link>
        </div>
    );
};

export default MyLists;
