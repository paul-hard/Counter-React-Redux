import { useSelector } from "react-redux";

export default function Decrement({ state, onClick, value }) {



    return (
        <div className="decrement-input">
            <input type="text" value={value} onChange={(e) => state(e.target.value)} placeholder="Substruct own number" />
            <button onClick={onClick} disabled={!value}>Substract</button>
        </div>
    )
}