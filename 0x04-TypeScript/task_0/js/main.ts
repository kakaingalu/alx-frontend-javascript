interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: 'George',
    lastName: 'Wambani',
    age: 27,
    location: 'Nairobi'
};

const student2: Student = {
    firstName: 'Eric',
    lastName: 'Barasa',
    age: 27,
    location: 'Nairobi'
};

const studentsList: Student[] = [student1, student2];

function renderTable(): void {
    const table = document.createElement("table");
    
    // Create table header
    const thead = document.createElement("thead");
    const headerRow = document.createElement("tr");
    const firstNameHeader = document.createElement("th");
    firstNameHeader.textContent = "First Name";
    const locationHeader = document.createElement("th");
    locationHeader.textContent = "Location";
    headerRow.appendChild(firstNameHeader);
    headerRow.appendChild(locationHeader);
    thead.appendChild(headerRow);
    table.appendChild(thead);
  
    // Create table body
    const tbody = document.createElement("tbody");
    studentsList.forEach(student => {
      const row = document.createElement("tr");
      const firstNameCell = document.createElement("td");
      firstNameCell.textContent = student.firstName;
      const locationCell = document.createElement("td");
      locationCell.textContent = student.location;
      row.appendChild(firstNameCell);
      row.appendChild(locationCell);
      tbody.appendChild(row);
    });
    table.appendChild(tbody);
  
    // Append the table to the document body
    document.body.appendChild(table);
  }
  
  renderTable();