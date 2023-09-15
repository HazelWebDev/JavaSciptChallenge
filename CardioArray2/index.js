const people = [
    { name: 'Wes', year: 1988 },
    { name: 'Kait', year: 1986 },
    { name: 'Irv', year: 1970 },
    { name: 'Lux', year: 2015 }
  ];

  const comments = [
    { text: 'Love this!', id: 523423 },
    { text: 'Super good', id: 823423 },
    { text: 'You are the best', id: 2039842 },
    { text: 'Ramen is my fav food ever', id: 123523 },
    { text: 'Nice Nice Nice!', id: 542328 }
  ];
 //array.some 
  const isAdult = people.some(person => {
    const currentYear = (new Date()).getFullYear();
    return currentYear - person.year >= 19;
    });

    console.log(isAdult);

//array.prototype.every
const allAdults = people.every(person => ((new Date()).getFullYear()) - person.year >= 19);

    console.log(allAdults);

//array.prototype.find
//find the comment with the ID of 823423

// const comment = comments.find(function(comment) {
//     if(comment.id === 823423) {
//         return true;
//     }
// })
//the same thing as 31-33, but more precise and efficient. 
const comment = comments.find(comment => comment.id === 823423 );

//array.prototype.findIndex()
//find the comment with this id, then delete it
const index = comments.findIndex(comment => comment.id === 823423);
console.log(index);

//comments.splice(index, 1)

const newComments = [
    comments.slice(0, index),
    comments.slice(index + 1)
]
