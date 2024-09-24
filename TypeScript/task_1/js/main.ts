// create interface Teacher

interface Teacher {
    firstName: string;
    lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience: number;
    location: string;
    [key: string]: any;
}
interface Directors extends Teacher {
    numberOfReports: number;
}

// Example usage
const director1: Directors = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    yearsOfExperience: 10,
    numberOfReports: 17,
  };
console.log(director1);
