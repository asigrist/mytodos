import React from 'react';
import Checkbox from './Checkbox';

 function TodoItem(props) {
   const {data, changeStatus} = props;
   const handleChange = (checked) => changeStatus(data.id, checked);

   return (
     <li>
       <label>
         <Checkbox checked={data.completed} onChange={handleChange}/> {data.text}
       </label>
     </li>
   )
 }
export default TodoItem;
