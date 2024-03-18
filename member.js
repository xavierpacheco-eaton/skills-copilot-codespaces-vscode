function skillsMember() {
  return {
    skills: ['JavaScript', 'React', 'Node', 'MongoDB'],
    addSkill: function(skill) {
      this.skills.push(skill);
    }
  };
} 