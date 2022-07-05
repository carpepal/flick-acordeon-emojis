import React, { ReactFragment, ReactNode, useEffect, useState } from "react";
import { JsonObjectExpression, JsxElement } from "typescript";
import { Emoji } from '../../../Utils/interfaces';
import EmojiCard from '../emojiCard/EmojiCard';

type Props = {
  value: string;
};



type State = {
  emojis: Emoji[] | null;
};

const state = {
  emojis: [],
};
let count: number = 0;
const ShowEmojis = ({ value = "", ...props }: Props) => {
  const [emojis, setEmojis] = useState<Emoji[]>(state.emojis);

  useEffect(() => {
    const emojis = fetch("emoji.json")
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((data: Emoji[]) => {
        data = data.filter((emoji: Emoji): any => emoji.title.toLowerCase().includes(value.toLocaleLowerCase()));
        console.log(data);

        setEmojis(data);
      })
      .catch((err) => console.log(err));
    console.log(emojis);

    console.log(count);
    count++;
  }, [value]);


  return (
    <>
      <div>
        <div>
          {emojis.map((emoji: Emoji) => {
            return <EmojiCard emoji={emoji} key={emoji.title}/>
          })}
        </div>
      </div>
    </>
  );
};

export default ShowEmojis;
