import Menu from "../menu/Menu";
import Navbar from "../navbar/Navbar";
import Post from "../post/post";
import "./app.css";
import { v4 as uuidv4 } from 'uuid';
import { useEffect, useState } from 'react';


function App() {

  const items = [
    { number: 0, title: "Aralash osh", price: "80 000", path: "images/aralash-osh.png", order: false, id: uuidv4() },
    { number: 0, title: "Bayram oshi", price: "90 000", path: "images/bayram-oshi.png", order: false, id: uuidv4() },
    { number: 0, title: "Bir kishilik oshi", price: "17 000", path: "images/birKishilik-osh.png", order: false, id: uuidv4() },
    { number: 0, title: "Chesnogli osh", price: "75 000", path: "images/chesnogli-osh.png", order: false, id: uuidv4() },
    { number: 0, title: "Farg'ona oshi", price: "70 000", path: "images/farg'ona-osh.png", order: false, id: uuidv4() },
    { number: 0, title: "Hind oshi", price: "80 000", path: "images/hind-osh.png", order: false, id: uuidv4() },
    { number: 0, title: "Qalampirli osh", price: "70 000", path: "images/qalampirli-osh.png", order: false, id: uuidv4() },
    { number: 0, title: "Q'ozi go'shtidan osh", price: "70 000", path: "images/qo'ziGoshtidan-osh.png", order: false, id: uuidv4() },
    { number: 0, title: "Rus oshi", price: "80 000", path: "images/rus-osh.png", order: false, id: uuidv4() },
    { number: 0, title: "Samarqand oshi", price: "75 000", path: "images/samarqand-osh.png", order: false, id: uuidv4() },
    { number: 0, title: "To'rt kishilig osh", price: "65 000", path: "images/to'rtKishilik-osh.png", order: false, id: uuidv4() },
  ]

  const [data, setData] = useState(items)
  const [term, setTerm] = useState('')

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

  const visibleData = searchHandler(data, term)

  return (
    <div className="App">
      <Navbar updateTermHandler={updateTermHandler} searchHandler={searchHandler} />
      <Menu />
      <div className="other-items">
        <Post items={visibleData} incr={incr} decr={decr} onDelete={onDelete} />
      </div>
    </div>
  );
}
export default App;