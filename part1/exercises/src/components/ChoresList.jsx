import React from 'react'
import classes from './ChoresList.module.css'

export default function ChoresList () {
   return (
      <>
         <h3 className={classes.choresHeading}>Chores</h3>
         <ul>
            <li className={classes.choresText}>Laundry</li>
            <li className={classes.choresText}>Code things</li>
            <li className={classes.choresText}>Dishes</li>
            <li className={classes.choresText}>Code things</li>
         </ul>
      </>
   )
}