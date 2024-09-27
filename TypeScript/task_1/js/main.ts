// Define the Teacher interface
interface Teacher {
    readonly firstName: string;  // can only be set during initialization
    readonly lastName: string;   // can only be set during initialization
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;  // optional
    location: string;
    [key: string]: any;          // for additional dynamic properties
}

// Example of using the Teacher interface
const teacher3: Teacher = {
    firstName: 'John',
    lastName: 'Doe',
    fullTimeEmployee: false,
    location: 'London',
    contract: false,  // Additional property not defined in the interface
};

console.log(teacher3);

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


// Define the printTeacherFunction interface
interface printTeacherFunction {
    (firstName: string, lastName: string): string;
  }
  
  // Implement the printTeacher function
  const printTeacher: printTeacherFunction = (firstName: string, lastName: string): string => {
    return `${firstName.charAt(0)}. ${lastName}`;
  };
  
  // Test the function
  console.log(printTeacher("John", "Doe")); // Output: J. Doe


  // Define the constructor interface
interface StudentConstructor {
  firstName: string;
  lastName: string;
}

// Define the class interface
interface IStudentClass {
  workOnHomework(): string;
  displayName(): string;
}

// Implement the class
class StudentClass implements IStudentClass {
  firstName: string;
  lastName: string;

  constructor({ firstName, lastName }: StudentConstructor) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}

// Example of using the class
const student = new StudentClass({ firstName: "John", lastName: "Doe" });
console.log(student.displayName());  // Output: John
console.log(student.workOnHomework());  // Output: Currently working
