import { useState } from "react"

const Section = ({ title, description, isVisible, setIsVisible }) => {

    return <div className="border border-black p-2 m-2">
        <h3 >{title}</h3>
        {
            isVisible ?
                <button onClick={() => setIsVisible()} className="cursor-pointer">Hide</button>
                :
                <button onClick={() => setIsVisible()} className="cursor-pointer">Show</button>
        }
        {isVisible && <p>
            {description}
        </p>}


    </div>
}

const Instamart = () => {

    const [sectionConfig, setSectionConfig] = useState({
        showAbout: true,
        showTeam: false,
        showCareers: true,
        showProduct: false,
        showDetail: false
    })

    return (<div>
        <h1 className="text-3xl p-2 m-2 font-bold">Instamart</h1>

        <Section title="About instamart" description={"Our mission is to elevate the quality of life for the urban consumer with unparalleled convenience. Convenience is what makes us tick. It's what makes us get out of bed and say, Let's do this."} isVisible={sectionConfig.showAbout} setIsVisible={() => setSectionConfig({
            showAbout: true,
            showTeam: false,
            showCareers: false,
            showProduct: false,
            showDetail: false
        })} />
        <Section title="Team instamart" description={"We build innovative products & solutions that deliver unparalleled convenience to urban consumers. The best part? Every bit of your work at Swiggy will help elevate the lives of our users across India."} isVisible={sectionConfig.showTeam} setIsVisible={() => setSectionConfig({
            showAbout: false,
            showTeam: true,
            showCareers: false,
            showProduct: false,
            showDetail: false
        })} />
        <Section title="Product" description={"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero, magni hic! Facere nesciunt aliquid iusto vel, dicta delectus architecto molestiae saepe modi facilis assumenda provident totam error a pariatur inventore. Recusandae eveniet quis harum, odit cumque quidem rem nisi saepe quibusdam iusto quas porro maiores accusamus placeat, aut dolores autem distinctio natus consequatur? Sint, quae magnam accusamus deserunt quam quo?"} isVisible={sectionConfig.showTeam} setIsVisible={() => setSectionConfig({
            showAbout: false,
            showTeam: false,
            showCareers: false,
            showProduct: true,
            showDetail: false
        })} />
        <Section title="Details" description={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga laudantium dolorum assumenda quod non error numquam illo sit. Odit velit placeat dolorem asperiores porro assumenda modi quae consequuntur rerum veritatis! Rerum recusandae sequi adipisci laborum aliquid ad ab possimus non nesciunt magni rem voluptatibus id saepe perspiciatis natus mollitia, tempora molestiae vel voluptas ullam? Voluptates exercitationem numquam vero explicabo eum. Esse impedit animi voluptate numquam modi atque veritatis sed doloribus inventore dignissimos officiis nihil fuga quam cum quidem, natus nostrum fugiat dolore nesciunt autem obcaecati saepe aliquid quisquam. Ipsum, nam"} isVisible={sectionConfig.showTeam} setIsVisible={() => setSectionConfig({
            showAbout: false,
            showTeam: false,
            showCareers: false,
            showProduct: false,
            showDetail: true
        })} />
    </div>)
}

export default Instamart