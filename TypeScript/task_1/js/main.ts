// create interface Teacher

interface Teacher {
    firstName: string;
    lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience: number;
    location: string;
    [key: string]: any;
}

const teacher3: Teacher = {
    firstName: 'John',
    lastName: 'Doe',
    fullTimeEmployee: false,
    yearsOfExperience: 10,
    location: 'London',
    contract: false, // additional property
};

const heading = document.createElement('h1');
heading.innerText = 'Bonjour, monde !';
document.body.appendChild(heading);

console.log('teatcher3');
