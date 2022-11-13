import React from 'react'
import style from './broadcast.module.css'

export default function Index() {
  return (
      <div className={style.container}>
          <div className={style.messagebox}>
              <form>
                  <input placeholder='Message Title' type='text' className={style.messageinput} />
                  <textarea id="w3review" name="w3review" rows="10" cols="100"></textarea>
                  <button>Send</button>
              </form>
          </div>
          <div className={style.messagedetails}>
              <h3>Inbox</h3>
              <h3>Sent Items</h3>
          </div>
    </div>
  )
}
