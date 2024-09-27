Filter(): 
const randomNumbers = [4, 11, 42, 14, 39]; 
const filteredArray = randomNumbers.filter(n => {   
return n > 15; 
}); 
console.log(filteredArray) 
Reduce: 
const array1 = [1, 2, 3, 4]; 
// 0 + 1 + 2 + 3 + 4 
const initialValue = 0; 
const sumWithInitial = array1.reduce((accumulator, currentValue) => accumulator + currentValue, 
initialValue); 
console.log(sumWithInitial); 
// Expected output: 10 
Map(): 
const finalParticipants = ['Taylor', 'Donald', 'Don', 'Natasha', 'Bobby']; 
// add string after each final participant 
const announcements = finalParticipants.map(member => { 
return member + ' joined the contest.'; 
}) 
console.log(announcements);