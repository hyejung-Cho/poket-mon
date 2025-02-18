import { useNavigate, Link } from "react-router-dom";

export function Home() {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/about", { state: { name: "poket-mon" } });
    }

    return <div>
        <Link to="/about">home</Link>;
    </div>
}