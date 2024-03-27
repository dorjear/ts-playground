interface Person {
    name: string;
    age: number;
}

// Define an interface for a PersonDetails object
interface PersonDetails {
    fullName: string;
    yearOfBirth: number;
}

// Sample data
const people: Person[] = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 32 },
    { name: "Charlie", age: 18 },
];

// Function to map Person to PersonDetails
const mapPersonToPersonDetails = (person: Person, currentYear: number): PersonDetails => {
    return {
        fullName: `${person.name} Smith`, // Assuming a static last name
        yearOfBirth: currentYear - person.age,
    };
};

// Map the Person[] to PersonDetails[]
const peopleDetails: PersonDetails[] = people.map((person) =>
    mapPersonToPersonDetails(person, 2024)
);

console.log(peopleDetails);
