const divEl = document.createElement("div")
divEl.classList.add("container")
document.body.appendChild(divEl)

function random_rgba() {
    var o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
}

class Box {
    constructor(name, isBlack) {
      this.name = name
      this.isBlack = isBlack;
      this.color = random_rgba()
      this.boxEl = document.createElement("div")
      this.boxEl.classList.add("box")
      if(isBlack) {
        this.boxEl.style.backgroundColor = "rgba(0,0,0,1.0)"
      } else {
        this.boxEl.style.backgroundColor = this.color
      }
      
      divEl.append(this.boxEl)

      this.pEl = document.createElement("p")
      this.pEl.innerText = this.name
      this.boxEl.appendChild(this.pEl)

      this.buttonEl = document.createElement("button")
      this.buttonEl.innerText = "Press"
      this.boxEl.appendChild(this.buttonEl)

      this.buttonEl.addEventListener('click', () => {
        this.toggleColor()
      })
    }

    toggleColor() {
        if(this.isBlack) {
            this.boxEl.style.backgroundColor = this.color
        } else {
            this.boxEl.style.backgroundColor = "rgba(0,0,0,1.0)"
        }
        this.isBlack = !this.isBlack;        
    }
}
  
// Usage:
for(let i = 0; i < 300; i++) {
    let box = new Box(`Box ${i}`, false);
}
