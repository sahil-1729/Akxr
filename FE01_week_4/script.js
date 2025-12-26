let = featuresList = [
    {
        "icon": "./assets/zap.svg",
        "title": "Lightning Fast",
        "content": "Built for speed and optimized for performance."
    },
    {
        "icon": "./assets/shield.svg",
        "title": "Secure & Reliable",
        "content": "Enterprise-grade security you can trust."
    },
    {
        "icon": "./assets/clock.svg",
        "title": "Save Time",
        "content": "Automate workflows and focus on what matters."
    }
]

// use JSON to map and display features using js
// const features = await getFeatures()

// async function getFeatures() {
//     const a = await fetch('./features.json')
//     const data = await a.json()
//     console.log(data.features)

//     return data.features
// }

let featuresNodes = document.querySelector('.feature-cards')

const loadFeaturesList = () => {
    featuresList.map((val) => {
        const featureCard = document.createElement('div')
        featureCard.setAttribute('class', 'feature-card')

        const featureIconDiv = document.createElement('div')
        featureIconDiv.setAttribute('class', 'feature-icon-div')

        const featureImg = document.createElement('img')
        featureImg.setAttribute('class', 'feature-icon')
        featureImg.setAttribute('src', val.icon)
        featureImg.setAttribute('width', 32)
        featureImg.setAttribute('height', 32)

        featureIconDiv.appendChild(featureImg)

        const featureTitle = document.createElement('h5')
        featureTitle.setAttribute('class', 'feature-title')
        featureTitle.textContent = val.title

        const featureDescription = document.createElement('p')
        featureDescription.setAttribute('class', 'feature-description')
        featureDescription.textContent = val.content

        featureCard.appendChild(featureIconDiv)
        featureCard.appendChild(featureTitle)
        featureCard.appendChild(featureDescription)

        featuresNodes.appendChild(featureCard)
    })
}

loadFeaturesList()
