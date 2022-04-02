function newImage (element, imgSource, left, bottom) {
    let name = document.createElement(element)
    name.src = imgSource
    name.style.position = 'fixed'
    name.style.left = left
    name.style.bottom = bottom
    document.body.append(name)
}

newImage ('img', 'assets/green-character.gif', '100px', '100px')

newImage ('img', 'assets/pine-tree.png', '450px', '200px')

newImage ('img', 'assets/tree.png', '200px', '300px')

newImage ('img', 'assets/pillar.png', '350px', '100px')

newImage ('img', 'assets/crate.png', '150px', '200px')

newImage ('img', 'assets/well.png', '500px', '425px')

function newItem (element, imgSource, left, bottom) {
    let item = document.createElement(element)
    item.src = imgSource
    item.style.position = 'fixed'
    item.style.left = left
    item.style.bottom = bottom
    document.body.append(item)
    
    item.addEventListener('dblclick', function () {
        item.remove()
    })
}

newItem ('img', 'assets/sword.png', '500px', '405px')

newItem ('img', 'assets/sheild.png', '165px', '185px')

newItem ('img', 'assets/staff.png', '600px', '100px')

for (let i = 0; i < window.innerWidth; i++) {
    document.body.style.backgroundImage('assets/grass.png')
}