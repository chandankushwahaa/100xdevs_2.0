var users = {
    '1': { age: 23, name: 'Chandan' },
    '2': { age: 34, name: 'Chandan Kumar' },
    '3': { age: 45, name: 'Chandan Kumar Singh' }
};
console.log(users['1']);
var user4 = new Map();
user4.set('1', { age: 23, name: 'Sunny' });
user4.set('2', { age: 34, name: 'Shyam Kumar' });
user4.set('3', { age: 45, name: 'Ram Kumar Singh' });
var ans = user4.get('1');
console.log(ans);
