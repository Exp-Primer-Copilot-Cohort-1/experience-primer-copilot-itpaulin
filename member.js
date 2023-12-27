function skillsMember() {
      var member = {
    name: 'John',
    age: 30,
    skills: ['JavaScript', 'CSS', 'HTML'],
    address: {
      street: '123 Main St',
      city: 'Boston',
      state: 'MA'
    },
    getBirthYear: function() {
      return 2017 - this.age;
    }
  }
  return member;
}