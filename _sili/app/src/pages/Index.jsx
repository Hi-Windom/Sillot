import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Button } from 'react-vant';

const Index = () => {
  const [dinos, setDinos] = useState([]);
  const [error, setError] = useState(null); // 添加错误状态

  useEffect(() => {
    const fetchDinos = async () => {
      try {
        const response = await fetch(`http://localhost:8000/api`);
        if (response.ok) { // 检查响应状态码
          const json = await response.json();
          setDinos(json);
        } else {
          const text = await response.text();
          console.warn("Failed to fetch dinosaurs:", text);
          setError(text); // 设置错误信息
        }
      } catch (e) {
        console.error("Fetch error:", e);
        setError(e.message); // 设置错误信息
      }
    };

    fetchDinos();
  }, []);

  if (error) {
    return <div>服务器错误: {error}</div>; // 如果有错误，显示错误信息
  }

  return (
    <div>
      <h1>欢迎来到恐龙应用</h1>
      <p>
        单击下面的恐龙以了解更多信息。
      </p>
      <div className='demo-button'>
        <Button type='primary'>Primary</Button>
        <Button type='info'>Info</Button>
        <Button type='default'>Default</Button>
        <Button type='warning'>Warning</Button>
        <Button type='danger'>Danger</Button>
      </div>
      <div>
        {dinos.map((dino) => {
          return (
            <div key={dino.name}>
              <Link to={`/${dino.name.toLowerCase()}`}>{dino.name}</Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Index;
