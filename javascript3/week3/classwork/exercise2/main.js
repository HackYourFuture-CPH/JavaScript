class Job {
  constructor(id, title, description, startDate, endDate) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.startDate = startDate;
    this.endDate = endDate;
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
  constructor(jobs, educations, email) {
    this.jobs = jobs;
    this.educations = educations;
    this.email = email;
  }

  addJob(job) {
    this.jobs.push(job);
  }

  removeJob(job) {
    const matchedIndex = this.jobs.indexOf(job);

    if (matchedIndex > -1) {
      this.jobs.splice(matchedIndex, 1);
    }
  }

  addEducation(education) {
    this.educations.push(education);
  }

  removeEducation(education) {
    const matchedIndex = this.educations.indexOf(education);

    if (matchedIndex > -1) {
      this.educations.splice(matchedIndex, 1);
    }
  }

  renderCV() {
    const outputDiv = document.querySelector('#output');
    outputDiv.innerHTML = '';

    const emailHeading = document.createElement('h1');
    emailHeading.innerHTML = `${this.email}`;
    outputDiv.appendChild(emailHeading);

    outputDiv.appendChild(this.renderJobs());
    outputDiv.appendChild(this.renderEducations());
  }

  renderJobs() {
    const outputDiv = document.createElement('div');
    const heading = document.createElement('h2');
    outputDiv.appendChild(heading);
    heading.innerHTML = 'Jobs';

    const table = document.createElement('table');
    outputDiv.appendChild(table);

    const tHead = document.createElement('thead');
    tHead.innerHTML = `<tr>
    <th>ID</th>
    <th>Title</th>
    </tr>`;
    table.appendChild(tHead);

    const tBody = document.createElement('tbody');

    this.jobs.forEach(job => {
      const tr = document.createElement('tr');
      tr.innerHTML = `<td>${job.id}</td><td>${job.title}</td>`;
      tBody.appendChild(tr);
    });
    table.appendChild(tBody);

    return outputDiv;
  }

  renderEducations() {
    const outputDiv = document.createElement('div');
    const heading = document.createElement('h2');
    outputDiv.appendChild(heading);
    heading.innerHTML = 'Educations';

    const table = document.createElement('table');
    outputDiv.appendChild(table);

    const tHead = document.createElement('thead');
    tHead.innerHTML = `<tr>
    <th>ID</th>
    <th>Title</th>
    </tr>`;
    table.appendChild(tHead);

    const tBody = document.createElement('tbody');

    this.educations.forEach(education => {
      const tr = document.createElement('tr');
      tr.innerHTML = `<td>${education.id}</td><td>${education.title}</td>`;
      tBody.appendChild(tr);
    });
    table.appendChild(tBody);

    return outputDiv;
  }
}

const job1 = new Job('1', 'HYF Mentor', 'Help with homework', '2017-10-01', null);
const job2 = new Job(
  '2',
  'Sales Assistant',
  'Eiusmod quis exercitation qui enim eiusmod culpa eu ut dolore non magna pariatur officia elit.',
  '2015-10-01',
  '2016-09-30'
);
const job3 = new Job(
  '3',
  'App Developer',
  'Eiusmod quis exercitation qui enim eiusmod culpa eu ut dolore non magna pariatur officia elit.',
  '2016-10-01',
  '2017-09-30'
);
const jobsList = [job1, job2];

const education1 = new Education(
  '1',
  'High School',
  'ABC International School',
  'Anim aute occaecat ipsum aute anim reprehenderit irure id adipisicing minim laboris anim in.',
  'July 2007',
  'May 2011'
);
const education2 = new Education(
  '2',
  'Bachelor of Arts',
  'University of Copenhagen',
  'Laborum incididunt ut enim cupidatat amet veniam occaecat velit labore eu aliqua.',
  'July 2011',
  'June 2015'
);
const educationList = [education1];

const myCV = new CV(jobsList, educationList, 'admin@foo.com');
console.log(myCV.jobs);
myCV.renderCV();

myCV.addJob(job3);
console.log(myCV.jobs);

myCV.removeJob(job1);
console.log(myCV.jobs);

