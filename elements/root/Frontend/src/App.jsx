import React, { useEffect, useState } from 'react';

function App() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8890/users")
            .then((res) => res.json())
            .then((data) => setData(data))
            .catch((err) => console.log(err));
    }, []);

    return (
        <div style={{ margin: "15px" }}>
            {data.map((d, i) => (
  
                <p key={i}>
                    Потребителско име: {d.username}, парола: {d.password}, ID: {d.id}.
                </p>
    
            ))}
        </div>
    );
}

export default App;