import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
const List = ({ items, handleDelete, handleEdit }) => {
  return (
    <div className='grocery-list'>
      {items.map((item, index) => {
        const { id, title } = item;
        return (
          <article className='grocery-item' key={index}>
            <p className='title'>{title}</p>
            <p className='title'>{id}</p>
            <div className='btn-container'>
              <button
                type='button'
                className='edit-btn'
                onClick={() => handleEdit(item)}
              >
                <FaEdit />
              </button>
              <button
                type='button'
                className='delete-btn'
                onClick={() => handleDelete(id)}
                // onClick={() => console.log(item.id)}
              >
                <FaTrash />
              </button>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default List;
