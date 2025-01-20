const API_BASE_URL = "https://api.github.com/orgs/facebook/repos";
const PAGE_SIZE = 10;
let PAGE = 1;

let canFetch = true;
const reposContainer = document.getElementById('repos-container')

reposContainer.addEventListener('scroll', handleScroll)

function createUrl() {
    const url = new URL(API_BASE_URL)
    url.searchParams.set("per_page", PAGE_SIZE)
    url.searchParams.set("page", PAGE)
    return url
}

async function createReposContainer() {
    const url = createUrl()
    canFetch = false
    try {
        const response = await fetch(url)
        const repos = await response.json()
        const parent = document.createDocumentFragment()
        for (let repo of repos){
            const p = document.createElement('p')
            p.textContent = repo.name
            p.className = "repository"
            parent.appendChild(p)
            canFetch=true
        }
        PAGE += 1
        reposContainer.appendChild(parent)
    } catch (e) {
        console.error ("Error: ", e)
    }
}

function handleScroll() {
    if (!canFetch) {
        return
    }
    const bottomSpaceLeftToScroll = this.scrollHeight - this.scrollTop - this.scrollClientHeight
    if (bottomSpaceLeftToScroll > 0) return
    createReposContainer()
}

createReposContainer()
