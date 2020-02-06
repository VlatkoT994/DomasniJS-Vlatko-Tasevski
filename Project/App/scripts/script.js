let user = {
    headers: ['#', 'Name', 'Author', 'Genre', 'Comments'],
    books: [],
    authors: [],
    genres: [],
    printHeaders: function ()
    {
        let tr = document.querySelector('thead>tr')
        this.headers.map(value =>
        {
            let th = document.createElement('th')
            th.innerText = value;
            tr.appendChild(th)
        })
    }
}
let Book = function (name, author, genres)
{
    this.id = id || user.books.length + 1;
    this.name = name;
    this.author = author;
    this.genres = genres;

}
let defaultBook = Object.freeze({
    id: 0,
    name: 'default book name',
    author: 0,
    genres: [],
    comments: []
})
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
    SPANSKA_S: 'spanska seria',
    TURSKA_S: 'turska seria',
    DOCUMENTARY: 'Documentary',
    THRILLER: 'Thriller',
    OTHERS: 'Others'
})
user.printHeaders();
printGenres(defaultGenres);
const refreshBooks = () =>
{
    let tbody = document.querySelector('tbody')
    tbody.innerHTML = ''
    user.books.map(book =>
    {
        let tr = document.createElement('tr')
        for (let keys in book)
        {
            let td = document.createElement('td')
            td.innerText = book[keys]
            tr.appendChild(td)
        }
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
    let newBook = new Book(author.value, title.value, genres)
    user.books.push(newBook)
    refreshBooks()

}, false)