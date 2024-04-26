@ -0,0 +1,35 @@
//1
    let tagsList = [
    { name: "tag1", count: 10 },
    { name: "tag2", count: 5 },
    { name: "tag3", count: 8 }
];
tagsList.sort((a, b) => b.count - a.count)
console.log(tagsList)

//2
function shortName(lastName, firstName, middleName) {
    return lastName + " " + firstName.charAt(0) + "." + middleName.charAt(0) + "."
}
console.log(shortName("Бекова", "Айдана", "Бековна"))
//3
function filterBooks(books) {
    let booksWithU = books.filter(book => book.toLowerCase().includes('у'))
    let otherBooks = books.filter(book => !book.toLowerCase().includes('у'))
    console.log("Книги с буквой 'у':", booksWithU)
    console.log("Остальные книги:", otherBooks)
}
let bookList = ["Мастер и Маргарита", "Унесенные ветром", "Преступление и наказание", "1984"]
filterBooks(bookList)
//4
let users = [
    { name: "Иван", birthDate: "1990-05-15" },
    { name: "Мария", birthDate: "1985-10-20" },
    { name: "Петр", birthDate: "1992-03-08" },
    { name: "Анна", birthDate: "1988-12-25" },
    { name: "Елена", birthDate: "1995-07-03" }
];

users.forEach(user => {
    console.log(`Пользователь ${user.name} родился ${user.birthDate}`)
});