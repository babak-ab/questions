import Header from "./components/Header.tsx";
import Footer from "./components/Footer.tsx";
import Card from "./components/Card.tsx";
import AddCard from "./components/AddCard.tsx";
import { useState } from "react";
const cardData = [
  {
    title: "Beautiful Sunset",
    selected: false,
    description:
      "Enjoy the serene view of a sunset over the mountains with warm colors.",
  },
  {
    title: "Ocean View",
    selected: false,
    description:
      "Relax with the calming waves and listen to the soothing ocean sounds.",
  },
  {
    title: "Forest Trail",
    selected: false,
    description:
      "Take a peaceful walk through a dense forest trail filled with greenery.",
  },
];
function App() {
  const handleClick = (message: string) => {
    alert(`Message from child: ${message}`);
  };

  const handleAdd = () => {
    setIsModalOpen(true);
    console.log("Clicked");
  };

  const handleDelete = (title: string) => {
    const card_tmp = [...card];

    const index = card_tmp.findIndex((card) => card.title === title);
    if (index !== -1) {
      card_tmp.splice(index, 1);
    }
    const index2 = cardData.findIndex((card) => card.title === title);
    if (index2 !== -1) {
      cardData.splice(index2, 1);
    }

    setCard(card_tmp);
  };

  const handleSummit = (title: string, desc: string) => {
    const newCard = { title: title, description: desc, selected: false };
    setCard([...card, newCard]); // Add new card
    setIsModalOpen(false);
  };

  const handleSelect = (title: string) => {
    const card_tmp = card.map((card) =>
      card.title === title ? { ...card, selected: !card.selected } : card
    );
    setCard(card_tmp);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [card, setCard] = useState(cardData);

  const numSelected = card.reduce(
    (count, item) => count + (item.selected ? 1 : 0),
    0
  );
  return (
    <>
      <Header onButtonClick={handleAdd} numSelected={numSelected}><h6 >THis is My App</h6></Header>
      {isModalOpen && <AddCard onButtonClick={handleSummit} />}
      <main className="min-h-screen flex justify-center  bg-gray-100 p-6 pb-18">
        <ul className="grid gap-6 border border-gray-400 rounded-lg p-6 grid-cols-3 self-start">
          {card.map((card, index) => (
            <Card
              index={index}
              image="https://picsum.photos/200"
              title={card.title}
              selected={card.selected}
              description={card.description}
              onButtonClick={handleClick}
              onDeleteButtonClick={handleDelete}
              onSelectedButtonClick={handleSelect}
            ></Card>
          ))}
          {/* <Card
            image="https://picsum.photos/200"
            title="Beautiful Sunset"
            description="Enjoy the serene view of a sunset over the mountains with warm colors."
            onButtonClick={handleClick}
          />
          <Card
            image="https://picsum.photos/200"
            title="Beautiful Sunset"
            description="Enjoy the serene view of a sunset over the mountains with warm colors."
          />
          <Card
            image="https://picsum.photos/200"
            title="Beautiful Sunset"
            description="Enjoy the serene view of a sunset over the mountains with warm colors."
          /> */}
        </ul>
      </main>
      <Footer />
    </>
  );
}

export default App;
