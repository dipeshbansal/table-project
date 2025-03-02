const projectData = [
    {
      "s.no": 0,
      "amt.pledged": 15823,
      blurb:
        "'Catalysts, Explorers & Secret Keepers: Women of Science Fiction' is a take-home exhibit & anthology by the Museum of Science Fiction.",
      by: "Museum of Science Fiction",
      country: "US",
      currency: "usd",
      "end.time": "2016-11-01T23:59:00-04:00",
      location: "Washington, DC",
      "percentage.funded": 186,
      "num.backers": "219382",
      state: "DC",
      title: "Catalysts, Explorers & Secret Keepers: Women of SF",
      type: "Town",
      url: "/projects/1608905146/catalysts-explorers-and-secret-keepers-women-of-sf?ref=discovery",
    },
    {
      "s.no": 1,
      "amt.pledged": 6859,
      blurb:
        "A unique handmade picture book for kids & art lovers about a nervous monster who finds his courage with the help of a brave little girl",
      by: "Tyrone Wells & Broken Eagle, LLC",
      country: "US",
      currency: "usd",
      "end.time": "2016-11-25T01:13:33-05:00",
      location: "Portland, OR",
      "percentage.funded": 8,
      "num.backers": "154926",
      state: "OR",
      title: "The Whatamagump (a hand-crafted story picture book)",
      type: "Town",
      url: "/projects/thewhatamagump/the-whatamagump-a-hand-crafted-story-picture-book?ref=discovery",
    },
    {
      "s.no": 2,
      "amt.pledged": 12573,
      blurb: "A card game for people who are into kittens and explosions and laser beams and sometimes goats.",
      by: "Elan Lee",
      country: "US",
      currency: "usd",
      "end.time": "2016-11-15T23:59:00-05:00",
      location: "Los Angeles, CA",
      "percentage.funded": 125,
      "num.backers": "187654",
      state: "CA",
      title: "Exploding Kittens",
      type: "City",
      url: "/projects/elanlee/exploding-kittens?ref=discovery",
    },
    {
      "s.no": 3,
      "amt.pledged": 9823,
      blurb: "A revolutionary smart desk that learns your preferences and helps you work smarter.",
      by: "Smart Desk Co.",
      country: "US",
      currency: "usd",
      "end.time": "2016-12-01T23:59:00-05:00",
      location: "San Francisco, CA",
      "percentage.funded": 142,
      "num.backers": "98765",
      state: "CA",
      title: "SmartDesk Pro",
      type: "City",
      url: "/projects/smartdesk/smartdesk-pro?ref=discovery",
    },
    {
      "s.no": 4,
      "amt.pledged": 7654,
      blurb: "An eco-friendly water bottle that tracks your hydration and reminds you to drink water.",
      by: "Hydro Health",
      country: "US",
      currency: "usd",
      "end.time": "2016-11-20T23:59:00-05:00",
      location: "Seattle, WA",
      "percentage.funded": 95,
      "num.backers": "76543",
      state: "WA",
      title: "HydroTracker Bottle",
      type: "City",
      url: "/projects/hydrohealth/hydrotracker-bottle?ref=discovery",
    },
    {
      "s.no": 5,
      "amt.pledged": 21345,
      blurb: "A sustainable backpack made from recycled ocean plastic with solar charging capabilities.",
      by: "EcoGear",
      country: "US",
      currency: "usd",
      "end.time": "2016-12-10T23:59:00-05:00",
      location: "Austin, TX",
      "percentage.funded": 213,
      "num.backers": "123456",
      state: "TX",
      title: "SolarPack Eco",
      type: "City",
      url: "/projects/ecogear/solarpack-eco?ref=discovery",
    },
    {
      "s.no": 6,
      "amt.pledged": 5432,
      blurb: "A modular keyboard that adapts to your typing style and preferences.",
      by: "KeyTech",
      country: "US",
      currency: "usd",
      "end.time": "2016-11-30T23:59:00-05:00",
      location: "Chicago, IL",
      "percentage.funded": 72,
      "num.backers": "54321",
      state: "IL",
      title: "ModKey Adaptive",
      type: "City",
      url: "/projects/keytech/modkey-adaptive?ref=discovery",
    },
    {
      "s.no": 7,
      "amt.pledged": 18765,
      blurb: "A smart home security system that uses AI to distinguish between residents and intruders.",
      by: "SecureHome",
      country: "US",
      currency: "usd",
      "end.time": "2016-12-15T23:59:00-05:00",
      location: "Boston, MA",
      "percentage.funded": 156,
      "num.backers": "87654",
      state: "MA",
      title: "AI Guardian Home Security",
      type: "City",
      url: "/projects/securehome/ai-guardian-home-security?ref=discovery",
    },
    {
      "s.no": 8,
      "amt.pledged": 4321,
      blurb: "A portable air purifier that monitors air quality and adjusts filtration accordingly.",
      by: "CleanAir Tech",
      country: "US",
      currency: "usd",
      "end.time": "2016-11-28T23:59:00-05:00",
      location: "Denver, CO",
      "percentage.funded": 54,
      "num.backers": "43210",
      state: "CO",
      title: "PureBreath Mini",
      type: "City",
      url: "/projects/cleanairtech/purebreath-mini?ref=discovery",
    },
    {
      "s.no": 9,
      "amt.pledged": 14532,
      blurb: "A digital notebook that converts handwritten notes to digital text in real-time.",
      by: "NoteSync",
      country: "US",
      currency: "usd",
      "end.time": "2016-12-05T23:59:00-05:00",
      location: "New York, NY",
      "percentage.funded": 178,
      "num.backers": "65432",
      state: "NY",
      title: "SyncNote Pro",
      type: "City",
      url: "/projects/notesync/syncnote-pro?ref=discovery",
    },
    {
      "s.no": 10,
      "amt.pledged": 8765,
      blurb: "A plant pot that monitors soil conditions and waters your plants automatically.",
      by: "GreenThumb",
      country: "US",
      currency: "usd",
      "end.time": "2016-11-22T23:59:00-05:00",
      location: "Portland, OR",
      "percentage.funded": 109,
      "num.backers": "34567",
      state: "OR",
      title: "SmartGrow Pot",
      type: "City",
      url: "/projects/greenthumb/smartgrow-pot?ref=discovery",
    },
    {
      "s.no": 11,
      "amt.pledged": 23456,
      blurb: "A virtual reality headset designed specifically for educational content.",
      by: "EduTech VR",
      country: "US",
      currency: "usd",
      "end.time": "2016-12-20T23:59:00-05:00",
      location: "San Diego, CA",
      "percentage.funded": 234,
      "num.backers": "76543",
      state: "CA",
      title: "LearnVR Headset",
      type: "City",
      url: "/projects/edutechvr/learnvr-headset?ref=discovery",
    },
]
  
  let currentPage = 1
  const itemsPerPage = 5
  const totalPages = Math.ceil(projectData.length / itemsPerPage)
  let isLoading = false
  
  const tableBody = document.getElementById("table-body")
  const prevPageButton = document.getElementById("prev-page")
  const nextPageButton = document.getElementById("next-page")
  const pageNumbersContainer = document.getElementById("page-numbers")
  const startRecordElement = document.getElementById("start-record")
  const endRecordElement = document.getElementById("end-record")
  const totalRecordsElement = document.getElementById("total-records")

  function initTable() {
    totalRecordsElement.textContent = projectData.length
  

    renderPage(currentPage)
  
    renderPagination()
  
    prevPageButton.addEventListener("click", goToPreviousPage)
    nextPageButton.addEventListener("click", goToNextPage)
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
      }
      else if ((i === currentPage - 2 && i > 1) || (i === currentPage + 2 && i < totalPages)) {
        const ellipsis = document.createElement("span")
        ellipsis.className = "ellipsis"
        ellipsis.textContent = "…"
        pageNumbersContainer.appendChild(ellipsis)
      }
    }
  }
  
  function handlePageChange(pageNumber) {
    // Set loading state
    isLoading = true
    renderPage(currentPage)
    renderPagination()
  
    // Simulate loading delay
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
    if (currentPage < totalPages && !isLoading) {
      handlePageChange(currentPage + 1)
    }
  }
  
  document.addEventListener("DOMContentLoaded", initTable)
  
  