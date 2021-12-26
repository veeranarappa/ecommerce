import React,{useState} from 'react'
import {Row, Col, Button, Container} from 'react-bootstrap'
import './allcategories.css'
import {useLocation } from 'react-router-dom';
import Productsgrid from './Productsgrid';
const Allcategories =()=>{

 const location = useLocation();
 console.log('data ---->', location)

  let data = [{
    "_id": {
      "$oid": "61505fcc7fcf379ce644b83c"
    },
    "category": "Vegetables",
    "imageUrl": "https://live.staticflickr.com/3160/2962762666_93a2027078_b.jpg",
    "price": 30,
    "title": "Tomato"
  },{
    "_id": {
      "$oid": "61505fcc7fcf379ce644b83d"
    },
    "category": "Vegetables",
    "imageUrl": "https://i.ndtvimg.com/mt/cooks/2014-11/carrots.jpg",
    "price": 55,
    "title": "Carrot"
  },{
    "_id": {
      "$oid": "61505fcc7fcf379ce644b83e"
    },
    "category": "Vegetables",
    "imageUrl": "https://images-na.ssl-images-amazon.com/images/I/51lGvUSZstL._SX466_.jpg",
    "price": 40,
    "title": "Brinjal"
  },{
    "_id": {
      "$oid": "61505fcc7fcf379ce644b83f"
    },
    "category": "Vegetables",
    "imageUrl": "https://m.telegraphindia.com/unsafe/620x350/smart/static.telegraphindia.com/derivative/THE_TELEGRAPH/1725117/16X9/image81e17e0b-916d-4f46-9544-eb3a19387098.jpg",
    "price": 60,
    "title": "Onion"
  },{
    "_id": {
      "$oid": "61505fcc7fcf379ce644b840"
    },
    "category": "Vegetables",
    "imageUrl": "https://cdn.britannica.com/s:900x675/89/170689-131-D20F8F0A/Potatoes.jpg",
    "price": 45,
    "title": "Potato"
  },{
    "_id": {
      "$oid": "61505fcc7fcf379ce644b841"
    },
    "category": "Vegetables",
    "imageUrl": "https://i.ndtvimg.com/mt/cooks/2014-11/carrots.jpg",
    "price": 55,
    "title": "Carrot"
  },{
    "_id": {
      "$oid": "615060fb7fcf379ce644b843"
    },
    "category": "Fruits",
    "imageUrl": "https://www.pngkey.com/png/detail/932-9328480_apples-png-image-red-apple-fruit.png",
    "price": 200,
    "title": "Apple"
  },{
    "_id": {
      "$oid": "615060fb7fcf379ce644b844"
    },
    "category": "Fruits",
    "imageUrl": "https://www.lgssales.com/wp-content/uploads/2017/07/darling-oranges-1.png",
    "price": 60,
    "title": "Orange"
  },{
    "_id": {
      "$oid": "615060fb7fcf379ce644b845"
    },
    "category": "Fruits",
    "imageUrl": "https://w0.pngwave.com/png/940/835/india-mango-alphonso-fruit-mangifera-indica-mango-png-clip-art.png",
    "price": 113,
    "title": "Mango"
  },{
    "_id": {
      "$oid": "615060fb7fcf379ce644b846"
    },
    "category": "Fruits",
    "imageUrl": "https://pngimg.com/uploads/banana/banana_PNG825.png",
    "price": 50,
    "title": "Banana"
  },{
    "_id": {
      "$oid": "615060fb7fcf379ce644b847"
    },
    "category": "Fruits",
    "imageUrl": "https://purepng.com/public/uploads/medium/purepng.com-dragon-fruitfruitsdragon-fruitpitayapitahaya-981524762841lvmer.png",
    "price": 250,
    "title": "Dragon Fruit"
  },{
    "_id": {
      "$oid": "615060fb7fcf379ce644b848"
    },
    "category": "Bread",
    "imageUrl": "https://www.bordbia.ie/globalassets/bordbia.ie/lifestyle/recipes/bord-bia-recipe-images/blt2.png",
    "price": 200,
    "title": "Eggy Bread BLT"
  },{
    "_id": {
      "$oid": "615060fb7fcf379ce644b849"
    },
    "category": "Dairy",
    "imageUrl": "https://i.pinimg.com/originals/c0/f3/be/c0f3be2da164b24e79c477c77ac75465.jpg",
    "price": 50,
    "title": " Bread Dahi Vada"
  },{
    "_id": {
      "$oid": "615060fb7fcf379ce644b84a"
    },
    "category": "Bread",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQlMeTbUIzjTKZUXPyB1JqXseBdGS2dIQQ3sQ&usqp=CAU",
    "price": 120,
    "title": "Stuffed Vegetable Bread"
  },{
    "_id": {
      "$oid": "615060fb7fcf379ce644b84b"
    },
    "category": "Dairy",
    "imageUrl": "https://images-na.ssl-images-amazon.com/images/I/51RH6rJkOQL._SX342_.jpg",
    "price": 10,
    "title": "ButterMilk"
  },{
    "_id": {
      "$oid": "615060fb7fcf379ce644b84c"
    },
    "category": "Seasonings and Spices",
    "imageUrl": "https://static.toiimg.com/photo/63530651.cms",
    "price": 60,
    "title": "RedChilli Powder"
  }]
const [products, setProducts] = useState(data);

  return(
    <div>
    <Row>
    { products.filter(x => location.pathname  !== '/Allcategories' ?   (`/${x.category}` === location.pathname) : true).map((products) =>{
    return( 

      <Productsgrid imgurl={products.imageUrl} price={products.price}  title={products.title} ></Productsgrid>
       
      ) 
})

}</Row> 
       
    
</div>
  )
}


 export default Allcategories;
