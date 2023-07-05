interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    readonly fullTimeEmployee: boolean;
    readonly location: string;
    readonly yearsOfExperience?: number;
    [key: string]: any;
  }
  
  interface Directors extends Teacher {
    numberOfReports: number;
  }
  
  interface PrintTeacherFunction {
    (firstName: string, lastName: string): string;
  }
  
  class TeacherImpl implements Teacher {
    readonly firstName: string;
    readonly lastName: string;
    readonly fullTimeEmployee: boolean;
    readonly location: string;
    readonly yearsOfExperience?: number;
    [key: string]: any;
  
    constructor(
      firstName: string,
      lastName: string,
      fullTimeEmployee: boolean,
      location: string,
      yearsOfExperience?: number
    ) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.fullTimeEmployee = fullTimeEmployee;
      this.location = location;
      this.yearsOfExperience = yearsOfExperience;
    }
  }
  
  const director1: Directors = {
    firstName: 'Ndolo',
    lastName: 'Kiilu',
    fullTimeEmployee: true,
    location: 'Machakos',
    numberOfReports: 5,
  };
  
  console.log(director1);
  
  const printTeacher: PrintTeacherFunction = (firstName, lastName) => {
    return `${firstName.charAt(0)}. ${lastName}`;
  };
  
  console.log(printTeacher('Ndolo', 'Kiilu'));
  