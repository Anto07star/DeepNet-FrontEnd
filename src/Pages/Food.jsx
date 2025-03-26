import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../assets/Css/Drinks.css';

function Drinks() {
  const [drinks, setDrinks] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/foods')
      .then(response => setDrinks(response.data))
      .catch(error => console.error('Error fetching drinks:', error));
  }, []);

  return (
    <>
      <div className="list">
        <img className='dri' src="https://s3-alpha-sig.figma.com/img/53f3/e533/f37f4a258b3eea846bf145fb95b71dfd?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=XAHlPjIBXbN5RngFWAbl9Yq6VkZ~4X72f6TH7wl5uhSAUkrqsZ5QxzlOJ1PtBM5bxJI8Em9lRfm1Zf-yQTb9~UjHdYjYQQQHAPhcTVXERgmpJZ81qHARVmkYS9PCDwWb6PedgWHAn0-aWTQInsILEwpSQPcBROXgnWHed5ITcKhXU-fg7wUa391qo5V0gVsOucRn-xG3LdCtdeRqabYmtcJpne5s4vwI5UirTBd9~Y7RD7rpFakl0G-dvDMezrzyHIr2Scncyt-LTRgfUG~ubpAiJjLJposqQ2jQliIpxcKrfX5ewjjFXtmoJeRKAWkVk6RUEf7Bh5070sc6Owpz8w__" alt="Drinks" />
      </div>
      <img className='glass' src="https://s3-alpha-sig.figma.com/img/08f1/ba92/09e436820849a421ec0b1fe5126bf9b5?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=nHH5ikf0w~1AI9tETSX3FOP3fDLT24aUtN3k8EXaDXf1Iwnw8zr2yi8TMTSZl9xhOzV9a8DXNBKFwWynwpVctPEILgS4bU2fJKouUBuVRYA8n8N0wbJM7uHuST5LYmhQj99iGQZV~eKdfZ7OC0I-Nvw8MNNQ83LEJgaL-J-UFhhMmlGbB4-6TmCqLxKP6ohzKcaLc8X3jxW6VwXQNPFnu9Rv83FEuBHI3w5kBL2fH5CpSgM0MDprGT0opt6BH~1I3cAc3GycUi827evLBcWJ0sNUtmxTuuQJ2X4KKLGTMdxGRTxpHvqNpcP-9d-766OyGB6knoF4LT6QyZomDANPsA__" alt="" />
      <div className="items">
        <div className="head">food</div>
        <div className="mli">
          {drinks.map((drink, index) => (
            <div key={index} className="li">
              <div className="he"> 
                <p>{drink.name}</p>
                <p className='text-primary'>${drink.price}</p>
              </div>
              <div className="desc">{drink.description}</div>
            </div>
          ))}
        </div>
      </div>
      
      <img className='wine' src="https://s3-alpha-sig.figma.com/img/6b91/b238/f07a69022d4c64e313237eadaceb997f?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=ZK22g00Fpmpy8pZ~GIXeqlTB7e3sppQKLvxTKhCKG9Z4cMmX1hXDts91EcZ0ZQCDSH~68-Sqv9fYl5AwJDOaQVYttDiHv9C06L~T7AredBQZkAxEgvzc6DUeDVkP0jW-dzVEpnHipZt~r~wljYohq7SgSF61E-NUQjDfwzNgtAsLcRKZeCHAn0lDTxTs-N1UxA6LTdETE4gtmzm6aACXt4sBOAbShcOF2vHR2mAMvdJpzB1JXEfPDTBFyxGSW53hnA2qiuue9eeccj-KP2zhDn16B~578gd~cBsYLO1Qx~VXxzcheoSh4AE7MkNVQrc3IsDq43qw1ye8VfRZJuTuyA__" alt="Wine" />
    </>
  );
}

export default Drinks;
