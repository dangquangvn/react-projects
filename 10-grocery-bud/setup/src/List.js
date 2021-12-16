import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
const List = ({ item, handleDelete, handleEdit }) => {
  return (
    <article className='grocery-item'>
      <p className='title'>{item.todo}</p>
      <p className='title'>{item.id}</p>
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
          onClick={() => handleDelete(item.id)}
          // onClick={() => console.log(item.id)}
        >
          <FaTrash />
        </button>
      </div>
    </article>
  );
};

export default List;
