export function Contact() {
    const handleClick = () => {
        console.log('click contact')
    };

    const handleChange = (e) => {
        console.log(e.target.value);
    }

    return (
        <div>
            <div onClick={() => console.log("change contact")}>contact change</div>
            <input placeholder="I'm input!!!" onChange={handleChange} />
        </div>
    )
}