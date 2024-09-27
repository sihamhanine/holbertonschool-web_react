// DirectorInterface definition
interface DirectorInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string;
  }
  
  // TeacherInterface definition
  interface TeacherInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workTeacherTasks(): string;
  }
  
  // Director class implementation
  class Director implements DirectorInterface {
    workFromHome(): string {
      return "Working from home";
    }
  
    getCoffeeBreak(): string {
      return "Getting a coffee break";
    }
  
    workDirectorTasks(): string {
      return "Getting to director tasks";
    }
  }
  
  // Teacher class implementation
  class Teacher implements TeacherInterface {
    workFromHome(): string {
      return "Cannot work from home";
    }
  
    getCoffeeBreak(): string {
      return "Cannot have a break";
    }
  
    workTeacherTasks(): string {
      return "Getting to work";
    }
  }
  
  // createEmployee function
  function createEmployee(salary: number | string): Director | Teacher {
    if (typeof salary === 'number' && salary < 500) {
      return new Teacher();
    } else {
      return new Director();
    }
  }
  
  // Test cases
  console.log(createEmployee(200));  // Teacher
  console.log(createEmployee(1000)); // Director
  console.log(createEmployee('$500')); // Director

  const teacher = new Teacher();
console.log(teacher.workFromHome());       // Affiche : Cannot work from home
console.log(teacher.getCoffeeBreak());     // Affiche : Cannot have a break
console.log(teacher.workTeacherTasks());   // Affiche : Getting to work
  