"use strict";

const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'];

function sortStudentsByGroups(students) {
    let extra = 'Оставшиеся студенты:', group = [], groups = [];

    students.sort();
    for (let i = 0; i < students.length; ++i) {
        if (i + 1 <= 9) {
            group.push(students[i]);
        } else {
            extra += ` ${students[i]}`;
            if (i + 1 !== students.length) {
                extra += ',';
            }
        }
        if ((i + 1) % 3 === 0) {
            groups.push(group);
            group = [];
        }
    }
    
    if (students.length <= 9) {
        extra += ' -';
    }

    groups.push(extra);

    return groups;
}

console.log(sortStudentsByGroups(students));

// console.log(students);
