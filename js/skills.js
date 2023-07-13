function animateProgressBars() {
    const skills = [
      { id: 'html-progress', percent: 90 }, // HTML skill with 90% progress
      { id: 'css-progress', percent: 90 }, // CSS skill with 80% progress
      { id: 'bootstrap-progress', percent: 80 }, // bootstrap skill with 80% progress
      { id: 'JavaScript-progress', percent: 60 }, // bootstrap skill with 80% progress
 
      // Add more skills here
    ];
  
    skills.forEach((skill) => {
      const progressBar = document.getElementById(skill.id);
      progressBar.style.width = skill.percent + '%';
    });
  }
  
  animateProgressBars();
  