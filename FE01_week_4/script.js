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

let = pricingList = [
    {
        "title": "Starter",
        "price": "$12",
        "description": ["Up to 5 projects", "Basic analytics", "Email support", "1 GB storage"]
    },
    {
        "title": "Professional",
        "price": "$29",
        "description": ["Unlimited projects", "Advanced analytics", "Priority support", "50 GB storage"]
    },
    {
        "title": "Enterprise",
        "price": "$69",
        "description": ["Everything in Pro", "Custom integrations", "24/7 phone support", "Unlimited storage"]
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
let pricingNodes = document.querySelector('.pricing-cards')

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

const loadPricingList = () => {
    pricingList.map((val) => {
        const pricingCard = document.createElement('div')
        pricingCard.setAttribute('class', 'pricing-card')

        const pricingTitle = document.createElement('h3')
        pricingTitle.setAttribute('class', 'pricing-title')

        const pricingCost = document.createElement('div')
        pricingCost.setAttribute('class', 'pricing-cost')
        const pricingCostNumber = document.createElement('h1')
        const pricingCostFrequency = document.createElement('p')
        pricingCostNumber.textContent = val.price
        pricingCostFrequency.textContent = '/month'
        pricingCost.appendChild(pricingCostNumber)
        pricingCost.appendChild(pricingCostFrequency)

        const pricingDescriptions = document.createElement('div')
        pricingDescriptions.setAttribute('class', 'pricing-descriptions')

        val.description.map((description => {
            const pricingDescriptionContainer = document.createElement('div')
            pricingDescriptionContainer.setAttribute('class', 'pricing-description')

            const pricingDescriptionIcon = document.createElement('img')
            pricingDescriptionIcon.setAttribute('src', './assets/circle-check.svg')

            const pricingDescriptionText = document.createElement('p')
            pricingDescriptionText.textContent = description

            pricingDescriptionContainer.appendChild(pricingDescriptionIcon)
            pricingDescriptionContainer.appendChild(pricingDescriptionText)

            pricingDescriptions.appendChild(pricingDescriptionContainer)
        }))

        const pricingButton = document.createElement('button')
        pricingButton.setAttribute('class', 'pricing-cta')
        pricingButton.textContent = "get started"

        pricingCard.appendChild(pricingTitle)
        pricingCard.appendChild(pricingCost)
        pricingCard.appendChild(pricingDescriptions)
        pricingCard.appendChild(pricingButton)

        pricingNodes.appendChild(pricingCard)
    })
}
loadFeaturesList()
loadPricingList()
