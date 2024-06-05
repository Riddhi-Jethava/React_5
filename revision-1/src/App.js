import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import './App.css';
import LouisVuitton from './LouisVuitton';
import Creations from "./Creations";
import PreFall from "./PreFall";
import Services from "./Services";
import Footer from "./Footer";

function App() {

  const products = [
    {
      Id: "1",
      image: "https://in.louisvuitton.com/images/is/image//content/dam/lv/editorial-content/New-Homepage/2024/central/category/women_bags/Women_LG_WW_HP_Category_Push_20240425_DII.jpg?wid=490",
      title: "Women's Bags"
    },
    {
      Id: "2",
      image: "https://in.louisvuitton.com/images/is/image//content/dam/lv/editorial-content/New-Homepage/2024/central/category/women_slg/Women_SLG_WW_HP_Category_Push_20240425_DII.jpg?wid=490",
      title:"Women's Small Leather Goods"
    },
    {
      Id: "3",
      image: "https://in.louisvuitton.com/images/is/image//content/dam/lv/editorial-content/New-Homepage/2024/central/category/women_fashionjewelry/Women_FashionJewelry_Category_Push_20240425_DII.jpg?wid=490",
      title:"Women's Fashion Jewellery"
    },
    {
      Id: "4",
      image: "https://in.louisvuitton.com/images/is/image//content/dam/lv/editorial-content/New-Homepage/2024/central/category/men_bags/Men_LG_WW_HP_Category_Push_20240425_DII.jpg?wid=490",
      title:"Men's Bags"
    },
    {
      Id: "5",
      image: "https://in.louisvuitton.com/images/is/image//content/dam/lv/editorial-content/New-Homepage/2024/central/category/women_shoes/Women_Shoes_Sandal_WW_HP_Category_Push_20240425_DII.jpg?wid=490",
      title:"Women's Shoes"
    },
    {
      Id: "6",
      image: "https://in.louisvuitton.com/images/is/image//content/dam/lv/editorial-content/New-Homepage/2024/central/category/men_shoes/Men_Shoes_Sneakers_WW_HP_Category_Push_20240425_DII.jpg?wid=490",
      title:"Men's Shoes"
    },
    {
      Id: "7",
      image: "https://in.louisvuitton.com/images/is/image//content/dam/lv/editorial-content/New-Homepage/2024/central/category/perfumes/Perfumes_WW_HP_Category_Push_20240225_DII.jpg?wid=490",
      title:"Perfumes"
    },
    {
      Id: "8",
      image: "https://in.louisvuitton.com/images/is/image//content/dam/lv/editorial-content/New-Homepage/2024/central/category/men_sunglasses/Men_SG_WW_HP_Category_Push_20240425_DII.jpg?wid=490",
      title:"Men's Accessories"
    },
  ]

  const services = [
    {
      id: "1",
      image: "https://in.louisvuitton.com/images/is/image//content/dam/lv/editorial-content/New-Homepage/2024/central/services/LV_ContactUs_WW_HP_Services_Push_20240425_DII.jpg?wid=600",
      title: "Services",
      discription: "Discover"   
    },
    {
      id: "2",
      image: "https://in.louisvuitton.com/images/is/image//content/dam/lv/editorial-content/New-Homepage/2024/central/services/LV_Gifting_WW_HP_Services_Push_20240425_DII.jpg?wid=600",
      title: "Art of Gifting",
      discription: "Gifts for Women", 
      discription: "Gift for Men"   
    },
    {
      id: "3",
      image: "https://in.louisvuitton.com/images/is/image//content/dam/lv/editorial-content/New-Homepage/2024/central/services/LV_Personalization_WW_HP_Services_Push_20240425_DII.jpg?wid=600",
      title: "Personalisaion",
      discription: "Explore"   
    }
  ]

  const prefall = [
   {
    id: "",
    image: "",
    title: "",
    discription: ""
   },
   {
    id: "",
    image: "",
    title: "",
    discription: ""
   },
   {
    id: "",
    image: "",
    title: "",
    discription: ""
   },
   {
    id: "",
    image: "",
    title: "",
    discription: "sdfghbjn"
   }
  ]

  return (
    <div className="App">
      <LouisVuitton/>
      <Creations products = {products}/>
      <PreFall prefall = {prefall}/>
      <Services services = {services}/>
      <Footer/>
    </div>
  );
}

export default App;
