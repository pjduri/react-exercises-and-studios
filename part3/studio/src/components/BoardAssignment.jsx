import { useState } from 'react'

export default function BoardAssignment() {
   const boards = [
      // { label: '--', value: 'no boards yet!' },
      { label: 'Desserts', value: 'Desserts' },
      { label: 'Filipino', value: 'Filipino' },
      { label: 'Baked Tasties', value: 'Baked Tasties' }
   ]
   const [boardName, setName] = useState('no boards yet!')

   const handleChange = (event) => {
      setName(event.target.value)
   }

   return (
      <div style={{ paddingTop: "50px" }}>
         <label>Save to Board: </label>
         <select value={boardName} onChange={handleChange}>
            {boards.map((board, idx) => <option key={idx} value={board.value}>
               {board.label}
            </option>)}
         </select>

         <p>Saved to {boardName}!</p>
      </div>
   )
}
