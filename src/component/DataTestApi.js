import { useState, useEffect } from 'react';
import axios from 'axios';

function DataTestApi() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => setData(response.data))
      .catch(error => console.log(error));
  }, []); // ใส่ dependency array เป็น [] เพื่อให้ useEffect ถูกเรียกเพียงครั้งเดียวเมื่อ Component ถูก mount ลงใน DOM

  return (
    <div>
      {data.map(item => (
        <div key={item.id}>
          <h2>{item.title}</h2>
          <p>{item.body}</p>
        </div>
      ))}
    </div>
  );
}

export default DataTestApi  