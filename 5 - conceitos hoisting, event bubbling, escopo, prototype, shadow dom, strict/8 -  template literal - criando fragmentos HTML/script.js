const article = {
    title: 'aprenendendo template string',
    intro: 'uma breve explicacao de como se utilizar template strings do ES6 em seu codigo',
    body: 'bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla',
    tags: ['es6', 'js', 'template-literal'],
    author: 'Diogo Varaschin'
}

function renderAuthor(name) {
    return (name) ? name: 'unknown'
}

const markup = `
    <article>
        <header>
            <h1>${article.title}</h1>
        </header>
        <section>
            <p>${article.intro}</p>
        </section>
        <footer>
            <ul>
                ${article.tags.map((tag) => `<li>${tag}</li>`).join('')}
            </ul>
            <p>author: ${renderAuthor(article.author)}</p>
        </footer>
    </article>
`

document.body.innerHTML = markup