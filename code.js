class Book {
    constructor(title, author, pages, isRead) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.isRead = isRead;
    }

    toggleReadStatus() {
        this.isRead = !this.isRead;
    }
}

class Library {
    #bookList;

    constructor() {
        this.#bookList = [];
    }

    addBook(book) {
        if (book instanceof Book) {
            this.#bookList.push(book);
        } else { 
            console.error('Please add a valid book');
        }
    }

    removeBook(book) {
        const bookIndex = this.#bookList.indexOf(book);
        if (bookIndex !== -1) {
            this.#bookList.splice(bookIndex, 1);
        } else {
            console.error('Book not found');
        }
    }

    getBookList() {
        return this.#bookList;
    }
}

// Example books:
// const book1 = new Book('The Hobbit', 'J.R.R. Tolkien', 295, 'not read');
// const book2 = new Book('The Fellowship of the Ring', 'J.R.R. Tolkien', 398, 'read');
// const book3 = new Book('The Two Towers', 'J.R.R. Tolkien', 327, 'read');

// addBookToLibrary(book1);
// addBookToLibrary(book2);
// addBookToLibrary(book3);


// Display books in books container

// Define books container
const booksContainer = document.querySelector('.books-container');

function addLibraryToPage () {
    // Clear books container
    booksContainer.innerHTML = '';

    for (let book of library){

        //Book card
        const bookDiv = document.createElement('div');
        const bookTitle = document.createElement('h4');
        const bookAuthor = document.createElement('p');
        const bookPages = document.createElement('p');
        const readStatus = document.createElement('p');
        const removeButton = document.createElement('button');
        const changeReadStatus = document.createElement('button');
    
        //Add classes to each book element
        bookDiv.classList.add('book');
        bookTitle.classList.add('book-title');
        bookAuthor.classList.add('book-author');
        bookPages.classList.add('book-pages');
        readStatus.classList.add('book-read');
        removeButton.classList.add('remove-book');
        changeReadStatus.classList.add('change-read-status');
    
        //Add content for each book element
        bookTitle.textContent = book.title;
        bookAuthor.textContent = `- Author: ${book.author}`;
        bookPages.textContent = `- ${book.pages} pages`;
        readStatus.textContent = book.read;
        removeButton.textContent = 'Remove';
        changeReadStatus.textContent = `${book.read === 'read' ? 'Mark as not read' : 'Mark as read'}`;


        // Add event listener to remove button
        removeButton.addEventListener('click', () => {
            book.remove();
            booksContainer.removeChild(bookDiv);
        });

        //Set initial read status color
        readStatus.style.color = book.read === 'read' ? '#38A169' : '#E53E3E';

        // Add event listener to change read status button
        changeReadStatus.addEventListener('click', () => {
            book.read = book.read === 'read' ? 'not read' : 'read';
            readStatus.textContent = book.read;
            changeReadStatus.textContent = `${book.read === 'read' ? 'Mark as not read' : 'Mark as read'}`;

            //Change read status color
            readStatus.style.color = book.read === 'read' ? '#38A169' : '#E53E3E';
        });

        // Append each book element to the book card
        bookDiv.appendChild(bookTitle);
        bookDiv.appendChild(bookAuthor);
        bookDiv.appendChild(bookPages);
        bookDiv.appendChild(readStatus);
        bookDiv.appendChild(changeReadStatus);
        bookDiv.appendChild(removeButton);

        //Data attribute for each book card
        bookDiv.setAttribute('data-title', library.indexOf(book));
    
        //Append the book card to the books container
        booksContainer.appendChild(bookDiv);
    }
}

// Add book section
const addBookBtn = document.querySelector('.add-book')
const addBookModal = document.querySelector('.add-book-modal');
const submitBook = document.querySelector('.submit-book');

addBookBtn.addEventListener('click', () => {
    addBookModal.showModal();
})

submitBook.addEventListener('click', (e) => {
    e.preventDefault();

    const form = document.querySelector('.add-book-form');
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const pages = document.querySelector('#pages').value;
    const read = document.querySelector('#read-status').checked === true ? 'read' : 'not read';

    const newBook = new Book(title, author, pages, read);
    addBookToLibrary(newBook);
    addLibraryToPage();
    addBookModal.close();

    // Clear input fields
    form.reset()
    title.value = '';
    author.value = '';
    pages.value = '';
    read.checked = false;
})