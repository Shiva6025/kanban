import React, { useState } from 'react';
import { useDrop, useDrag } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy, faEdit, faFilter, faCalendar, faPlus } from '@fortawesome/free-solid-svg-icons';
import './KanbanBoard.css';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';


const Kanban = () => {
  const [cards, setCards] = useState([
    { id: 1, text: 'Card 1', status: 'To Do' },
    { id: 2, text: 'Card 2', status: 'To Do' },
    { id: 3, text: 'Card 3', status: 'In Progress' },
    { id: 4, text: 'Card 4', status: 'In Progress' },
    { id: 5, text: 'Card 5', status: 'Done' },
    { id: 6, text: 'Card 6', status: 'Done' },
  ]);

  const moveCard = (id, status) => {
    const updatedCards = cards.map((card) => {
      if (card.id === id) {
        return { ...card, status };
      }
      return card;
    });
    setCards(updatedCards);
  };


const Card = ({ card }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'CARD',
    item: { id: card.id, status: card.status },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(card.text);
  const [description, setDescription] = useState(card.description);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    const updatedCard = { ...card, text: title, description };
    
    const updatedCards = cards.map((c) => (c.id === card.id ? updatedCard : c));
    setCards(updatedCards);
    setIsEditing(false);
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  return (
    <div ref={drag} className={`card${isDragging ? ' is-dragging' : ''}`}>
      {isEditing ? (
        <div className="card-edit">
          <input
            type="text"
            value={title}
            onChange={handleTitleChange}
            placeholder="Title"
          />
          <textarea
            value={description}
            onChange={handleDescriptionChange}
            placeholder="Description"
          />
          <button onClick={handleSaveClick}>Save</button>
        </div>
      ) : (
        <div className='card-div'>
          <div>
            <h4>{card.text}</h4>
            <p>{card.description}</p>
          </div>
          <div className="card-options">
            <FontAwesomeIcon icon={faEllipsisV} onClick={handleEditClick} />
          </div>
        </div>
      )}
    </div>
  );
};

  

const Column = ({ status }) => {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'CARD',
    drop: (item) => moveCard(item.id, status),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  }));

  const columnCards = cards.filter((card) => card.status === status);

  const addCard = () => {
    const newCard = {
      id: Date.now(),
      text: `Card ${cards.length + 1}`,
      status: 'To Do',
    };
    setCards([...cards, newCard]);
  };

  const getColorClass = () => {
    if (status === 'To Do') {
      return 'blue';
    } else if (status === 'In Progress') {
      return 'orange';
    } else if (status === 'Done') {
      return 'green';
    }
    return '';
  };

  const kanbanHorizontalClassName = `kanban-horizontal ${getColorClass()}`;

  return (
    <div ref={drop} className={`kanban-column${isOver ? ' column-over' : ''}`}>
      <h3 className="column-title">
        {status}
        {status === 'To Do' && (
          <FontAwesomeIcon icon={faPlus} className="add" onClick={addCard} />
        )}
      </h3>
      <div className={kanbanHorizontalClassName}></div>
      {columnCards.map((card) => (
        <Card key={card.id} card={card} />
      ))}
    </div>
  );
};

  

  const Heading = () => {
    const [heading, setHeading] = useState('Mobile App');
  
    const handleCopy = () => {
      navigator.clipboard.writeText(heading);
    };
  
    const handleEdit = () => {
      const newHeading = prompt('Enter a new heading:', heading);
      if (newHeading !== null) {
        setHeading(newHeading);
      }
    };

    return (
      <div className="kanban-header">
        <div className="kanban-header-title-container">
          <h1 className="kanban-header-title">{heading}</h1>
          <div className="kanban-header-icons">
            <FontAwesomeIcon icon={faCopy} onClick={handleCopy} className='copy'/>
            <FontAwesomeIcon icon={faEdit} onClick={handleEdit} className='edit'/>
          </div>
        </div>
        <div className="kanban-header-buttons">
          <button className="filter-button">
            <FontAwesomeIcon icon={faFilter} className="filter-icon" />
            Filter
          </button>
          <button className="today-button">
            <FontAwesomeIcon icon={faCalendar} className="today-icon" />
            Today
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="app-container">
      <Heading />
      <div className="kanban-board">
        <Column status="To Do" />
        <Column status="In Progress" />
        <Column status="Done" />
      </div>
    </div>
  );
};

const App = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <Kanban />
    </DndProvider>
  );
};

export default App;