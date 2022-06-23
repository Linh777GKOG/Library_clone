class Modal {
  #modal
  #closeBtn
  #title
  #body
  #backBtn
  #nextBtn

  constructor(onBack, onNext, onClose) {
    this.#modal = document.createElement("div")
    this.#modal.classList.add("modal")

    this.#closeBtn = document.createElement("button")
    this.#closeBtn.innerHTML = "&times;"
    this.#closeBtn.classList.add("close-btn")
    this.#closeBtn.addEventListener("click", onClose)
    this.#modal.append(this.#closeBtn)

    this.#title = document.createElement("header")
    this.#title.classList.add("title")
    this.#modal.append(this.#title)

    this.#body = document.createElement("div")
    this.#body.classList.add("body")
    this.#modal.append(this.#body)

    const footer = document.createElement("footer")
    footer.classList.add("footer")
    this.#modal.append(footer)

    this.#backBtn = document.createElement("button")
    this.#backBtn.textContent = "Back"
    this.#backBtn.addEventListener("click", onBack)
    footer.append(this.#backBtn)

    this.#nextBtn = document.createElement("button")
    this.#nextBtn.textContent = "Next"
    this.#nextBtn.addEventListener("click", onNext)
    footer.append(this.#nextBtn)

    document.body.append(this.#modal)
  }

  
  set title(value) {
    this.#title.innerText = value
  }

  set body(value) {
    this.#body.innerText = value
  }

  show(value = true) {
    this.#modal.classList.toggle("show", value)
  }

  center(value = true) {
    this.#modal.classList.toggle("center", value)
  }
