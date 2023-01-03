import Menu from "../menu/Menu";
import Navbar from "../navbar/Navbar";
import Post from "../post/post";
import Card from '../card/card'
import "./app.css";
import { nanoid } from 'nanoid'
import { useState } from 'react';


function App() {
  const items = [
    { card: false, number: 1, price: 21.000, id: nanoid(), title: "Aralash osh", path: "images/aralash-osh.png" },
    { card: false, number: 1, price: 25.000, id: nanoid(), title: "Bayram oshi", path: "images/bayram-oshi.png" },
    { card: false, number: 1, price: 17.000, id: nanoid(), title: "Bir kishilik oshi", path: "images/birKishilik-osh.png" },
    { card: false, number: 1, price: 19.000, id: nanoid(), title: "Chesnogli osh", path: "images/chesnogli-osh.png" },
    { card: false, number: 1, price: 18.000, id: nanoid(), title: "Farg'ona oshi", path: "images/farg'ona-osh.png" },
    { card: false, number: 1, price: 25.000, id: nanoid(), title: "Hind oshi", path: "images/hind-osh.png" },
    { card: false, number: 1, price: 19.000, id: nanoid(), title: "Qalampirli osh", path: "images/qalampirli-osh.png" },
    { card: false, number: 1, price: 20.000, id: nanoid(), title: "Q'ozi go'shtidan osh", path: "images/qo'ziGoshtidan-osh.png" },
    { card: false, number: 1, price: 23.000, id: nanoid(), title: "Rus oshi", path: "images/rus-osh.png" },
    { card: false, number: 1, price: 22.000, id: nanoid(), title: "Samarqand oshi", path: "images/samarqand-osh.png" },
    { card: false, number: 1, price: 20.000, id: nanoid(), title: "To'y oshi", path: "images/to'rtKishilik-osh.png" },
  ]

  const [data, setData] = useState(items)
  const [term, setTerm] = useState('')
  const [cond, setCond] = useState(false)
  // const [price, setPrice] = useState()

  const priceLook = (arr) => {
    const newArr = arr.filter(item => item.card == true)
    const sum = newArr.reduce((a, v) => a = a + v.price * v.number , 0)
    return sum
  }
  const cardToggle = () => {
    if (cond) {
      setCond(false)
    } else {
      setCond(true)
    }
  }
  const addCard = (id) => {
    setData(data.map(item => {
      if (item.id == id) {
        if (!item.card) {
          return { ...item, card: true }
        }
        return { ...item, card: false }
      }
      return item
    }))
  }
  const filter = (arr, fil) => {
    switch (fil) {
      case true:
        return arr.filter(item => item.card == true)
      default:
        return arr
    }
  }
  const searchHandler = (arr, term) => {
    if (term === 0) {
      return arr
    }
    return arr.filter(item => item.title.toLowerCase().indexOf(term) > -1)
  }
  const updateTermHandler = e => setTerm(e)
  const onDelete = (id) => {
    const newArray = data.filter(c => c.id !== id)
    setData(newArray)
  };
  const incr = (id) => {
    const newArray = data.map(c => {
      if (c.number < 30) {
        if (c.id == id) {
          return { ...c, number: +c.number + 1 }
        }
      }
      return c;
    })
    setData(newArray)
  }
  const decr = (id) => {
    const newArray = data.map(c => {
      if (c.number > 0) {
        if (c.id == id) {
          return { ...c, number: +c.number - 1 }
        }
      }
      return c;
    })
    setData(newArray)
    console.log(newArray);
  }
  const visibleData = filter(searchHandler(data, term), cond)

  return (
    <div className="App">
      <Navbar priceLook={priceLook} items={visibleData} cardToggle={cardToggle} updateTermHandler={updateTermHandler} searchHandler={searchHandler} />
      <Menu />
      <div className="other-items">
        <Post addCard={addCard} items={visibleData} incr={incr} decr={decr} onDelete={onDelete} />
      </div>
    </div>
  );
}
export default App;