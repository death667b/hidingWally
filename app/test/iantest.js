import ParseName from '../lib/types/ParseName'; 

console.log(ParseName.filters()['Generate Random Last Name']('daniel, ian'));
console.log(ParseName.filters()['Generate Random Last Name']('ian daniel'));