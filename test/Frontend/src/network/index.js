export async function getArticle() {
    return (await fetch("http://localhost:8000/article")).json()
}
