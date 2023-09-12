import { useState } from "react";
import "../assets/scss/Unique.scss";
function Unique() {
  const hints = [
    {
      title: "Pay attention to your opponents",
      desc: "Remember that the object of Uno is too lose all your cards and making others gaining cards. Always count the number of cards of your opponents. \r\nCheck carefully what cards the other players have. When a player before you must draw, then reserve it back and so, he/she has to draw again. When a player has a lot of cards and but he still change to a certain color, then you need to change the color quickly back because you don't want he is able to get rid of too many cards too easy.",
    },
    {
      title: "Keep +2 and +4 for emergencies",
      desc: "Save some of these precious cards for later in the game. If you play them too early, you have nothing left in case of an emergency later. \r\nWhen you see players having two or fewer cards, it's for sure time to use these cards.",
    },
    {
      title: "Keep your score low",
      desc: "Always play first the highest number you have when you match on color because the fewer points you have, the fewer points others can score when they win. \r\nAn exception is the 0 card because there are only four 0 cards and it's not so easy to get rid of them. Try to switch to a color that scores the most points in your hand.",
    },
    {
      title: "Change color often",
      desc: "Most players maintain the color as long as possible but try to change earlier. The theory behind is that you normally will get an equal number of cards of every color. (The colors in your hand and the cards you will draw in the future). \r\nWhen you change color often, you will get a multi-colored hand which results in having always a playable card. So, it will minimize the number of draws you will need to make. It's also good to confuse other players. They will have problems to predict the colors in your hand.",
    },
    {
      title: "Use action cards smart",
      desc: "Play your action cards at the right moment. You don't want to play them too early in the game but also not too late. Always count the cards of your opponent's and decide if you have to act. \r\n Never hold too many skip-cards and reverse cards. Stockpiling too many will add up too many points if you lose as they are worth 20 points. Remember that in a two-player game, reverse cards act like skip cards. Throw wild cards (+4) if your opponents have lesser cards, but be careful of it. If it's possible, throw a wild card (color card) LAST so you will not draw a card if you don't have a color the same with your opponent. If you have 3-4 cards left (in different colors, then it's better to draw instead of using the Wild card.",
    },
    {
      title: "Co-operate with other players",
      desc: "Don't be selfish and play with a team spirit to attack the leader. If someone has one card left and must draw, that means that he/she doesn't have the current card color. Continue to play this color as much as possible but do this as a team. If there is, for example, a red 5 on the table and you have no red cards but a blue 5, then better draw and let the other players continue the color. Use the action cards in order to avoid the player of going out.",
    },
    {
      title: "Reducing Cards",
      desc: "Try to maximize playable cards. Try to even out colors, but also numbers cards (numbers are a lot less probable with 25 cards of each color, and only 8 of each number other than 0). Each extra differently numbered card reduces unplayable discards. In most cases, players attempt going out with 2 different colors with their last two cards. Try to get only one single color for your last two cards. With 3 cards, you always try to play the single card first.",
    },
    {
      title: "Avoid someone from going out",
      desc: "If some player is down to one card, you need to do whatever you can to stop him/her. You can also look at every discarded card and the ones in your hand to determine which color has the fewest remaining cards left. Try to change color to this one. If it helps you can play an action card like the skip or reverse card, but even better the +2 or +4 card. Check also if people forget to say Uno when they have one. Make use of this and they will get two more cards. The last option is to draw a card and hope for an action card.",
    },
  ];
  const [randNum, setRandNum] = useState(null);

  const randomNumber = () => {
    const newRandNum = Math.floor(Math.random() * hints.length);
    setRandNum(newRandNum);
  };

  const close = () => {
    setRandNum(null);
  };

  return (
    <>
      <div className="d-flex justify-content-center">
        <button className="magic-btn hint-btn" onClick={randomNumber}>
          Get Hint
        </button>
      </div>
      {randNum != null && (
        <div
          id="magic-wrapper"
          className="magic-wrapper hint-wrapper d-flex justify-content-center align-items-center"
        >
          <div className="magic-box container">
            <div className="row">
              <div className="col-md-4 d-flex align-items-center">
                <img src="/images/uno-back.png" className="w-100" alt="" />
              </div>
              <div className="col-md-8 magic-content d-flex flex-column justify-content-center">
                <span>UNO Hint</span>
                <h2 className="mb-4">{hints[randNum].title}</h2>
                <p>{hints[randNum].desc}</p>
                <button onClick={randomNumber}>
                  More Hint <i className="fa-solid fa-arrow-right"></i>
                </button>
              </div>
            </div>
            <i id="close" onClick={close} className="fa-solid fa-xmark"></i>
          </div>
        </div>
      )}
    </>
  );
}
export default Unique;
