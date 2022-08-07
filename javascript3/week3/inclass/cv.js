class Job {
    constructor(id, title, description, startDate, endDate) {
        this.id = id
        this.title = title
        this.description = description
        this.startDate = startDate
        this.endDate = endDate
    }
 }
 
 class Education {
    constructor(id, title, school, address, startDate, endDate) {
        this.id = id;
        this.title = title;
        this.school = school;
        this.address = address;
        this.startDate = startDate;
        this.endDate = endDate;
    }
 }

 class CV {
    constructor(email) {
      this.jobs = [];
      this.educations = [];
      this.email = email
    }
  
    addJob(job) {
      this.jobs.push(job)
    }
  
    removeJob(job) {
        // this.jobs = this.jobs.filter(currentJob => currentJob.id !== job.id)
        // const index = this.jobs.findIndex(currentJob => currentJob.id === job.id)
        if(job instanceof Job) {
            const index = this.jobs.indexOf(job)
            this.jobs.splice(index, 1)
        } else {
            console.log("Not a job!")
        }        
    }
  
    addEducation(education) {
      this.educations.push(education)
    }
  
    removeEducation(education) {
        if(education instanceof Education) {
            const index = this.educations.indexOf(education)
        this.educations.splice(index, 1)
        } else {
            console.log("Not an education!")
        }
    }

    renderArray(arr) {
        const firstElement = arr[0]
        const h1El = document.createElement("h1");

        let isJob;
        if(firstElement instanceof Job){
            h1El.innerText = "Jobs"
            isJob = true;
        } else {
            h1El.innerText = "Educations"
            isJob = false;
        }
        
        document.body.append(h1El)
        arr.forEach(item => {
            const divEl = document.createElement("div");
            const h2El = document.createElement("h2");
            h2El.innerText = item.title
            divEl.appendChild(h2El)

            const ulEl = document.createElement("ul");
            if(isJob) {
                const liEl1 = document.createElement("li")
                liEl1.innerText = item.description
                ulEl.appendChild(liEl1)

            } else {
                const liEl1_1 = document.createElement("li")
                liEl1_1.innerText = item.school

                const liEl1_2 = document.createElement("li")
                liEl1_2.innerText = item.address

                ulEl.append(liEl1_1, liEl1_2)
            }
            
            const liEl2 = document.createElement("li")
            liEl2.innerText = item.startDate
            const liEl3 = document.createElement("li")
            liEl3.innerText = item.endDate

            ulEl.append(liEl2, liEl3)
            divEl.append(ulEl)
            document.body.append(divEl)
        })
    }

    renderCV() {
        this.renderArray(this.jobs)
        this.renderArray(this.educations)
    }
  }

const job = new Job(1, "HYF mentor", "Confusing students", "last year", "resent")
const education = new Education(1, "IT", "HYF", "Talent Garden", "some time", "another time")

const myCv = new CV("rasmus@rasmus.com")
// console.log(job)
// console.log(education)
myCv.addJob(job)
myCv.addEducation(education)

myCv.renderCV()

console.log(myCv)
// myCv.removeJob(education)
console.log(myCv)

console.log(myCv.constructor.name)