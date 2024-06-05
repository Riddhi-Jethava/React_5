import './App.css';
import ListsKey from './ListsKey';


function App() {

  const products = [
    {
      id: "1",
      Image : "https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dwe93d9a16/images/Titan/Catalog/90147SL01_1.jpg?sw=360&sh=360",
      Title : "Titan Avant Garde Quartz Multifunction Silver Dial Leather Strap watch for Men",
      Price : "₹ 9,345.00",
      Color : "Silver"
    },
    {
      id: "2",
      Image : "https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw1888ad40/images/Titan/Catalog/1805QM01_1.jpg?sw=360&sh=360",
      Title : "Titan Neo Splash Blue Dial Quartz Multifunction Stainless Steel Strap Watch",
      Price : "₹ 6,995",
      Color : "Blue"
    },
    {
      id: "3",
      Image : "https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dwc07c110a/images/Titan/Catalog/90086KM05_1.jpg?sw=360&sh=360",
      Title : "Titan Octane Black Dial Chronograph Watch For Men",
      Price : "₹ 10,845",
      Color : "Black"
    },
    {
      id: "4",
      Image : "https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dwe1a94e04/images/Titan/Catalog/1849YM01_1.jpg?sw=360&sh=360",
      Title : "Titan Black and Gold Quartz Analog with Date Silver Dial Stainless Steel Strap Watch",
      Price : "₹ 7,045",
      Color : "Silver"
    },
    {
      id: "5",
      Image : "https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw7c3968a9/images/Titan/Catalog/1843QM02_1.jpg?sw=360&sh=360",
      Title : "Titan Edge Baseline Grey Dial Analog Stainless Steel Strap watch",
      Price : "₹ 17,995",
      Color : "Light Brown"
    },
    {
      id: "6",
      Image : "https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw0814ec34/images/Titan/Catalog/1805QM04_1.jpg?sw=360&sh=360",
      Title : "Titan Neo Splash Quartz Multifunction Black Dial Stainless Steel Strap Watch",
      Price : "MRP ₹ 6,345",
      Color : "Black"
    }

]

  return (
    <>
      <ListsKey products = {products}/>
    </>
  );
}

export default App;
