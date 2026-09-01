
import { Link } from "react-router-dom"

function Home(){
    return(
        <>

        <h1>Home</h1>
        <Link to="/atividade1">
        <h1>Atividade 1</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae ipsa harum officia praesentium iste facilis cumque dolores at reprehenderit culpa saepe corporis non minima eum omnis blanditiis nesciunt, architecto eius.</p>
        </Link>
        <Link to="/atividade2">
            <h1>Atividade 2</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam iure aspernatur praesentium dolor tempore, quidem error laborum neque necessitatibus iusto facere molestias omnis commodi laudantium provident quisquam quam voluptatibus dolorem.</p>
        </Link>
               
        </>


    )
}

export default Home