- It is created by the browser when a web page is loaded
- It is a tree of elements which represent relationship between the elements 
- It allows us to interact with the tree using js
    - By interact meaning what?
    - i can change or remove HTML elements
    - change the attributes of the elements like 'src', 'alt'
    - create new HTML elements 
    - attach event listeners like onclick, onchange 


### get element by id
- if we want to update an HTML element, we would first need to access it
- id are attribute which allows us to uniquely identify an HTML element 
    - id ek hi element ko assign kar sakte and should be unique 
- this method returns an element 
- document.getElementById('name of the id')

### get element by class name
- document.getElementByClassName('name of the class')
- it returns all the elements who have the class name 
- jo vo return karta hai, it is an HTML collection

- HTML collection is similar to array but not exactly an array  
    - meaning ki i can traverse it like an array and access the content like array
    - element nodes are HTML elements like <p>, <a>, <div>

    - HTMLcollection and NodeList are different even though they look like array
        - HTML collection me it return only element nodes
        - NodeList me they return more than just element nodes
        - e.g <div>
                abcd
                <p>p1</p>
                <p>p2</p>
            </div>
            - if i access the div element node and get the HTML collection it will return only p1 and p2 wale contents
            - but if i get the NodeList then wo saare elements dikhaega, like the 'abcd' text as well as p1 p2 wale node elements
        
        - HTML collection are always live
            const paragraphs = document.getElementsByTagName('p')
            console.log("BEFORE UPDATE: ", paragraphs)

            const newParagraph = document.createElement('p')
            document.body.appendChild(newParagraph)

            console.log("AFTER UPDATE: ", paragraphs)

            BEFORE me [p,p,p] and after me [p,p,p,p]
        - NodeList are static
            const paragraphs = document.getElementsByTagName('p')
            console.log("BEFORE UPDATE: ", paragraphs)

            const newParagraph = document.createElement('p')
            document.body.appendChild(newParagraph)
            console.log("AFTER UPDATE: ", paragraphs)

            BEFORE [p,p,p] and AFTER [p,p,p] me same hoga in NodeList

### get elements by tag name
- document.getElementByTagName('')
- retrieves all elements with the tag name
- returns HTML collection

- to traverse through the list of HTML collection, you can use loop
- or u can use arr.forEach(()=>{

}) 
- One of the difference between array and HTML collection is that ki
    - you cant use array methods like foreach in HTML collection

- so we can convert HTML collection into array using Array.from(<Name of the array>)


### Difference .map and .forEach
- .map returns a new array
- .forEach does not return a new array
- .forEach me we cannot apply chaining methods because it doesn't return array, which we can do it in .map

### document. querySelector
- It is one of the easiest ways to query a element
- document.querySelector('name of the class or id')
- it return an element HTML element
- for nested query
    - document.querySelector('#booklist li:nth-child(2) .name')

- document.querySelectorAll('') 
    - it returns Nodelist
        - when returned nodelist you dont need to convert into array, you can perform .forEach method
    - is gonna return list of elements instead of one
    - even if single element hoga, usko vo as a list hi return karega 

### how to change content of element 
- var a =  document.querySelector('#booklist li:nth-child(2) .name')
    a.textContent = 'test'

- const bookList = document.querySelector('#book-list')
- console.log(bookList.innerHTML)
    - this will print all the html elements inside the element with the id
- also we can update the contents within the element
- bookList.innerHTML = '<h1> hello world</h1>'
- if you append, rather than update then just do this
    - bookList.innerHTML += '<h1> hello world</h1>'


### Node
- every single element in DOM is a node, i.e <body>, <p> 
- when we grab an element, it is just a type of node 
- jaise comment in a DOM is also a type of node 
- HTML collection also contains nodes, but specifically element nodes
- NodeList me contains all the types of nodes 

- To get the type of node
    - const banner = document.querySelector('#page-banner')
    - console.log(banner.nodeType)
        - so the value jo print hoga will be numeric, e.g 1
        - you have to look up ki what does 1 as nodeType mean     
    
    - console.log(banner.hasChildNodes())
        - returns true if it has child nodes, else false 
    
    - To clone a node
        - const clonedBanner = banner.cloneNode(true)
        - true pass kiya then, it will clone the child nodes also, 
            - else it will contain only the parent node  

### get parent node
- const bookList = document.querySelector('#book-list')
- bookList.parentNode
    - it returns parent node of the selected node 
- bookList.parentElement
    - 99% it will give same result as above wala 

- we can do nesting also
- bookList.parentElement.parentElement

- bookList.childNodes
- it will contain all the nodes like,
    - if i have 2 <p> tags in <div> tag
    - then it might print [text, <p>, text,<p>]
    - text waha pe will represent the new line 

- bookList.children will provide all the element nodes

### traverse between sibling elements in DOM
- const bookList = document.querySelector('#book-list')
- if bookList node ke baad 'form' node hai, then
- bookList.nextSibling karenge toh uska next node ayega which is new line wala node 'text'
- if you want next element 
- bookList.nextElementSibling

- same for previous ones
- bookList.previousElementSibling
- bookList.previousSibling

- complex one
- bookList.previousElementSibling.querySelector('p').innerHTML += 'yoyo'
- here we can use it to get element sibling and from that element we can use to get p tag within that tag and get contents

### Add event listener
- h2 = document.querySelector('p')
- h2.addEventListener('click',function(e){
    console.log('clicked')
})
- print the event obj

- add eventListener to a list of buttons
- var btns = document.querySelectorAll('#book-list .delete')
- Array.from(btns).forEach(function(btn){
    btn.addEventListener('click',function(e){
        const li = e.target.parentElement;

        li.parentNode.removeChild(li) 
    })
})
- here what we doin is taking list of buttons, from the button, we add feature to add event listener, and get the parent of the button, which is the list row, and uska parent ko liya which is the list, and then we removed the child

- e.preventDefault() prevents the default behaviour of the event
- jaise anchor tag me when we click the text with link, browser goes to that link, if we add eventlistner and add e.preventDefault to the anchor tag ko, it wont redirect to the page

### Event bubbling
- if we have event in li tag, and it gets executed by click lets say
- then after its executed, uske parents node ke event listeners also get executed later as the event gets bubbled up and goes on
- it starts from target element jaha execute hua
- attaching a event listener to every button, and if there's lots of buttons, is a expensive task 

BETTER WAY TO DELETE

- const list = document.querySelector('#book-list ul')
- list.addEventListener('click',function(e){
    if(e.target.className == 'delete'){
        const li = e.target.parent
        li.parentNode.removeChild(li)
        or list.removeChild(li)
    }
})

- here we took a ul and usme event listener add kiya onclick, if delete button clicked then delete
- the reason it works because of event bubbling
- means ki jo target node element, vo execute hota hai toh uska parent node uska event listener gets executed and it get executed till it reaches the main parent node

### interacting with forms
- for form e.preventDefault
- const addForm = document.forms["add-book]
- addForm.addEventListener("submit",function(e){
    e.preventDefault()
    
    const typedValue = addForm.querySelector( "input[type="text"]" ).value
    console.log(typedValue)

})
- here we are adding form

### adding the element in DOM
- create the element with text content
- then jaake append the element
- updating the above fn
- const addForm = document.forms["add-book]
- addForm.addEventListener("submit",function(e){
    e.preventDefault()
    
    const typedValue = addForm.querySelector( "input[type="text"]" ).value
    console.log(typedValue)

    const li = document.createElement('li')
    const bookName = document.createElement('span')
    bookName.textContent = typedValue

    const deleteButton = document.createElement('span')
    deleteButton.textContent = 'delete'
    
    <!-- add the span tags to li first, then add li to the list -->
    li.appendChild(bookName)
    li.appendChild(deleteButton)

    list.appendChild(li)
})

### adding classes to the element in JS DOM
- li.style.color = "red"
- li.style.<jo bhi style attribute>
- li.style.marginTop = "60px"
- li.className = "test 2" 
    - to get the list of class name of the node
-  to add more classes
- li.className += " test3"
- This is not best way to add styles

- - addForm.addEventListener("submit",function(e){
    e.preventDefault()
    
    const typedValue = addForm.querySelector( "input[type="text"]" ).value
    console.log(typedValue)

    const li = document.createElement('li')
    const bookName = document.createElement('span')
    bookName.textContent = typedValue

    const deleteButton = document.createElement('span')
    deleteButton.textContent = 'delete'

    <!-- adding classes  -->
    <!-- to get list of classes -->
    bookName.classList
    bookName.classList.add("name")
    deleteButton.classList.add("delete")

    <!-- add the span tags to li first, then add li to the list -->
    li.appendChild(bookName)
    li.appendChild(deleteButton)


    list.appendChild(li)
})

### How to access the attributes 
- var book = document.querySelector('li:first-child .name')
- book.getAttribute('class')
- it allows to access attributes

- to set attribute
- book.setAttribute('class', 'name-2')
- another way of changing classes

- to check if node has attribute or not
- book.hasAttribute('class')

- to remove attribute
- book.removeAttribute('class')

### Checkbox events
- const hideBox = document.querySelector('#hide')
- hideBox.addEventListener('change',function(e){
    if(hideBox.checked){
        list.style.display = "none"
    }else{
        list.style.display = "initial"
    }
})
- adding event listener to hide list when checkbox true