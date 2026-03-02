import { useState } from "react"

const Section = ({ title, description }) => {
    const [isVisible, setIsVisible] = useState(false)


    return <div className="border border-black p-2 m-2">
        <h3 >{title}</h3>
        {
            isVisible ?
                <button onClick={() => setIsVisible(false)} className="cursor-pointer">Hide</button>
                :
                <button onClick={() => setIsVisible(true)} className="cursor-pointer">Show</button>
        }
        {isVisible && <p>
            {description}
        </p>}

    </div>
}

const Instamart = () => {

    return (<div>
        <h1 className="text-3xl p-2 m-2 font-bold">Instamart</h1>
        <Section title="About instamart" description={"Our mission is to elevate the quality of life for the urban consumer with unparalleled convenience. Convenience is what makes us tick. It's what makes us get out of bed and say, Let's do this."} />
        <Section title="Team instamart" description={"We build innovative products & solutions that deliver unparalleled convenience to urban consumers. The best part? Every bit of your work at Swiggy will help elevate the lives of our users across India."} />
    </div>)
}

export default Instamart