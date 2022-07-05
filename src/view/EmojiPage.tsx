import React, { ChangeEvent, ChangeEventHandler, FormEvent, SyntheticEvent, useState } from "react";
import SearchEmoji from "../components/emojis/searchEmojis/SearchEmoji";
import ShowEmojis from "../components/emojis/showEmojis/ShowEmojis";

const state = {
    value:''
}

const EmojiPage = () => {

    const [value , setValue] = useState(state.value); 

    const handleChange :ChangeEventHandler<HTMLInputElement> = (e:FormEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value);
    }

  return (
    <>
      <SearchEmoji isDisable={false} value={value} HandlerChange={handleChange}></SearchEmoji>
      <hr />
      <ShowEmojis value={value}></ShowEmojis>
    </>
  );
};

export default EmojiPage;
