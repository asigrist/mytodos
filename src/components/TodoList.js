import React from 'react';
import Header from './Header';
import TodoItem from './TodoItem';
import InputBox from './InputBox';
import Footer from './Footer';

function TodoList(props) {
    const {title, items, addNew, filter, changeFilter, changeStatus} = props;
    const count = countActive(items).length;

    const filteredList = applyFilter(items, filter);
    return (
      <div>
        <Header title={title} />
        <InputBox addNew={addNew}/>
        <ul className="list-unstyled">
            {filteredList.map(item => <TodoItem key={item.id} data={item} changeStatus={changeStatus} />)}
        </ul>
        <Footer {...{count, filter, changeFilter}}/>
      </div>
    );


  }

  function applyFilter(list, filter) {
      switch (filter) {
          case 'completed':
              return list.filter(item => item.completed === true);

          case 'active':
              return list.filter(item => item.completed !== true);

          default:
              return list;
      }
  }

  function countActive(list) {
    return list.filter(item => item.completed !== true);
  }

export default TodoList;
