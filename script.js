let projectData = []
let currentPage = 1
const itemsPerPage = 5
let isLoading = false

const tableBody = document.getElementById("table-body")
const prevPageButton = document.getElementById("prev-page")
const nextPageButton = document.getElementById("next-page")
const pageNumbersContainer = document.getElementById("page-numbers")
const startRecordElement = document.getElementById("start-record")
const endRecordElement = document.getElementById("end-record")
const totalRecordsElement = document.getElementById("total-records")

async function fetchProjectData() {
    try {
        isLoading = true
        renderLoadingState()

        fetch("https://raw.githubusercontent.com/saaslabsco/frontend-assignment/refs/heads/master/frontend-assignment.json")
            .then(response => response.json())
            .then(data => {
                if (Array.isArray(data)) {
                    console.log("Valid Array:", data);
                    projectData = data;  // Store fetched data
                    renderPage(currentPage);
                    renderPagination()

                } else {
                    console.error("Unexpected response format:", data);
                }
            })
            .catch(error => console.error("Error fetching data:", error));
    } catch (error) {
        console.error("Error fetching data:", error)
        renderEmptyState()
    } finally {
        isLoading = false
    }
}

function getCurrentPageData(page) {
    const startIndex = (page - 1) * itemsPerPage
    const endIndex = startIndex + itemsPerPage
    return projectData.slice(startIndex, endIndex)
}

function renderPage(page) {
    tableBody.innerHTML = ""

    if (isLoading) {
        renderLoadingState()
        return
    }

    const currentData = getCurrentPageData(page)
    if (currentData.length === 0) {
        renderEmptyState()
        return
    }

    currentData.forEach((project) => {
        const row = document.createElement("tr")

        const snoCell = document.createElement("td")
        snoCell.textContent = project["s.no"]
        row.appendChild(snoCell)

        const percentageCell = document.createElement("td")
        const progressContainer = document.createElement("div")
        progressContainer.className = "progress-container"

        const progressBar = document.createElement("div")
        progressBar.className = "progress-bar"

        const progressValue = document.createElement("div")
        progressValue.className = "progress-value"
        progressValue.style.width = `${Math.min(project["percentage.funded"], 100)}%`
        progressValue.setAttribute("aria-label", `${project["percentage.funded"]}% funded`)

        progressBar.appendChild(progressValue)
        progressContainer.appendChild(progressBar)

        const percentageText = document.createElement("span")
        percentageText.textContent = `${project["percentage.funded"]}%`
        progressContainer.appendChild(percentageText)

        percentageCell.appendChild(progressContainer)
        row.appendChild(percentageCell)

        const amountCell = document.createElement("td")
        amountCell.textContent = `$${project["amt.pledged"].toLocaleString()}`
        row.appendChild(amountCell)

        tableBody.appendChild(row)
    })

    updatePaginationInfo(page)
}

function renderLoadingState() {
    tableBody.innerHTML = ""
    for (let i = 0; i < itemsPerPage; i++) {
        const row = document.createElement("tr")
        for (let j = 0; j < 3; j++) {
            const cell = document.createElement("td")
            const skeleton = document.createElement("div")
            skeleton.className = "skeleton"
            cell.appendChild(skeleton)
            row.appendChild(cell)
        }
        tableBody.appendChild(row)
    }
}

function renderEmptyState() {
    tableBody.innerHTML = ""
    const row = document.createElement("tr")
    const cell = document.createElement("td")
    cell.colSpan = 3
    cell.className = "empty-state"
    cell.textContent = "No projects found"
    row.appendChild(cell)
    tableBody.appendChild(row)
}

function updatePaginationInfo(page) {
    const startRecord = (page - 1) * itemsPerPage + 1
    const endRecord = Math.min(page * itemsPerPage, projectData.length)

    startRecordElement.textContent = startRecord
    endRecordElement.textContent = endRecord
}

function renderPagination() {
    pageNumbersContainer.innerHTML = ""

    const totalPages = Math.ceil(projectData.length / itemsPerPage)
    prevPageButton.disabled = currentPage === 1 || isLoading
    nextPageButton.disabled = currentPage === totalPages || isLoading

    for (let i = 1; i <= totalPages; i++) {
        if (i === 1 || i === totalPages || (i >= currentPage - 1 && i <= currentPage + 1)) {
            const pageButton = document.createElement("button")
            pageButton.className = `page-number ${i === currentPage ? "active" : ""}`
            pageButton.textContent = i
            pageButton.setAttribute("aria-label", `Page ${i}`)

            if (i === currentPage) {
                pageButton.setAttribute("aria-current", "page")
            }

            pageButton.addEventListener("click", () => {
                if (i !== currentPage && !isLoading) {
                    handlePageChange(i)
                }
            })

            pageNumbersContainer.appendChild(pageButton)
        } else if ((i === currentPage - 2 && i > 1) || (i === currentPage + 2 && i < totalPages)) {
            const ellipsis = document.createElement("span")
            ellipsis.className = "ellipsis"
            ellipsis.textContent = "…"
            pageNumbersContainer.appendChild(ellipsis)
        }
    }
}

function handlePageChange(pageNumber) {
    isLoading = true
    renderPage(currentPage)
    renderPagination()

    setTimeout(() => {
        currentPage = pageNumber
        isLoading = false
        renderPage(currentPage)
        renderPagination()
    }, 300)
}

function goToPreviousPage() {
    if (currentPage > 1 && !isLoading) {
        handlePageChange(currentPage - 1)
    }
}

function goToNextPage() {
    const totalPages = Math.ceil(projectData.length / itemsPerPage)
    if (currentPage < totalPages && !isLoading) {
        handlePageChange(currentPage + 1)
    }
}

document.addEventListener("DOMContentLoaded", fetchProjectData)
