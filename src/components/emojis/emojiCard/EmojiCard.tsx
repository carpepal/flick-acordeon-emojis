import React from 'react'
import { Emoji } from '../../../Utils/interfaces';
import "./EmojiCard.css"

type Props = {
    emoji:Emoji;
}

const EmojiCard = ({emoji}: Props) => {
  return (
    <div>
        <div key={emoji.title} className="emoji_card">
              <h5>{emoji.title}</h5>
              <p className="emoji_image">{emoji.symbol}</p>
            </div>
    </div>
  )
}

export default EmojiCard