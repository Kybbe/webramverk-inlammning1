import { Link } from "react-router-dom"

export default function Top(props) {
  return (
    <header>
      { props.link ? <Link to='/'>⬅Home</Link> : ""}
      <h1>{props.headline}</h1>
    </header>
  )
}