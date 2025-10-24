import { useState } from "react";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

export default function App() {
  return (
    <div className="app">
      <div className="sidebar">
        <FriendList />
      </div>
    </div>
  );
}

function FriendList() {
  const friends = initialFriends;
  const [isClicked, setIsClicked] = useState(false);
  return (
    <>
      <ul>
        {friends.map((friend) => (
          <Friend friend={friend} key={friend.id} />
        ))}
      </ul>
      {!isClicked ? (
        <button className="button" onClick={() => setIsClicked(true)}>
          Add Friend
        </button>
      ) : (
        <AddFriend />
      )}
    </>
  );
}

function Friend({ friend }) {
  return (
    <li>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>
      {friend.balance < 0 && (
        <p className="red">
          You owe {friend.name} ${Math.abs(friend.balance)}
        </p>
      )}
      {friend.balance > 0 && (
        <p className="green">
          {friend.name} owes you ${friend.balance}
        </p>
      )}
      {friend.balance === 0 && <p>You and {friend.name} are even</p>}
      <button className="button">Select</button>
    </li>
  );
}

function AddFriend() {
  return (
    <div className="sidebar">
      <form name="add-friend" className="form-add-friend">
        <label>Friend name</label>
        <input type="text" />

        <label>Image URL</label>
        <input type="text" />
        <button className="button">Add</button>
      </form>
      <button className="button">Close</button>
    </div>
  );
}
