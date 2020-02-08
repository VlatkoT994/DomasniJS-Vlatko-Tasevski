let user = localStorage.getItem('user')
user = JSON.parse(user)
if(!user){
 user = {
    headers: ['#', 'Name', 'Author', 'Genre', 'Comments'],
    books: [],
    authors: [],
    genres: []
}
}
 const printHeaders = function (user)
    {
        let tr = document.querySelector('thead>tr')
        user.headers.map(value =>
        {
            let th = document.createElement('th')
            th.innerText = value;
            tr.appendChild(th)
        })
    }
let Book = function (title, author, genres)
{
    this.id = user.books.length + 1;
    this.title = title;
    this.author = author;
    this.genres = genres;

}
// let defaultBook = Object.freeze({
//     id: 0,
//     name: 'default book name',
//     author: 0,
//     genres: [],
//     comments: []
// })
const printGenres = (genres) =>
{
    let container = document.querySelector('.add-checkbox')
    for (let genre in genres)
    {
        let div = document.createElement('div')
        div.innerHTML = `<input type="checkbox" name="${genres[genre]}" id="${genres[genre]}" value ="${genres[genre]}" />
        <label for="${genres[genre]}">${genres[genre]}</label>`
        container.appendChild(div)
    }
}
let defaultGenres = Object.freeze({
    SCI_FI: 'Sci-fi',
    DRAMA: 'Drama',
    HORROR: 'Horror',
    COMEDY: 'Comedy',
    SPANSKA_S: 'Spanska seria',
    TURSKA_S: 'Turska seria',
    DOCUMENTARY: 'Documentary',
    THRILLER: 'Thriller',
    OTHERS: 'Others'
})
const printBooks = (listOfBooks) =>
{
    let tbody = document.querySelector('tbody')
    tbody.innerHTML = ''
    listOfBooks.map(book =>
    {
        let tr = document.createElement('tr')
        tr.innerHTML = `<td>${book.id}</td><td>${book.title}</td><td>${user.authors[book.author]}</td><td>${book.genres}</td>`
        tbody.appendChild(tr)
    })
}
let addBookForm = document.querySelector('.add-book-form')
addBookForm.addEventListener('submit', (e) =>
{
    e.preventDefault()
    let [author, title, ...listOfGenres] = e.target.elements
    listOfGenres.pop();
    let genres = listOfGenres.filter(element => element.checked).map(element => element.value)
    let ind = user.authors.indexOf(author.value)
    if (ind === -1)
        {
            ind = user.authors.length
            user.authors.push(author.value)
        }
    let newBook = new Book(title.value, ind, genres)
    user.books.push(newBook)
    localStorage.setItem('user',JSON.stringify(user))
    printBooks(user.books)

}, false)
let searchBookForm = document.querySelector('.search-book-form')
searchBookForm.addEventListener('submit', (e) => {
    e.preventDefault()
    let [searchBy,searchInput] = e.target.elements
    if (searchBy.value === 'Author')
        {
            let authorInd = []
            user.authors.map((value,index) => {if(value.includes(searchInput.value))
            authorInd.push(index)})
            let searchResult = user.books.filter(value => (authorInd.indexOf(value.author)!== -1))
            console.log(authorInd)
            console.log(searchResult)
            printBooks(searchResult)     
        }
    else
        {
            let searchResult = user.books.filter(value => value.title.includes(searchInput.value))
            printBooks(searchResult)
        }

})

printGenres(defaultGenres);
printHeaders(user)

