document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll("a"); 
  
    links.forEach(link => {
      link.addEventListener("click", function(event) {
        event.preventDefault(); 
  
        const href = this.getAttribute("href"); 
        
        
        document.body.classList.add("fade-out");
        
        
        setTimeout(() => {
          window.location.href = href; 
        }, 500); 
      });
    });
  });