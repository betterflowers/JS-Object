var user = { };
user.name = 'John';
console.log(user);
user.surname = 'Mike';
console.log(user);
user.name='Peter';
console.log(user);
delete user.name;
console.log(user);

2. Program and observe the following requirements: calculate how many pieces of fruit there are in the fruit object and the output should be 50. 
var fruit = {
apple: 20,
pear: 20,
peach: 10
};
var sum=0;
var arr;
for(let key in fruit){
	arr=fruit[key];
	sum+=arr;	
}
console.log(sum);//50







