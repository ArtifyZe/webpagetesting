function MinecraftButton() {
  document.getElementById("MinecraftButton").classList.toggle("show");
  }
  
  window.onclick = function(event) {
    if (!event.target.matches('.button')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

function TutorialButton() {
  document.getElementById("TutorialButton").classList.toggle("show");
  }
  
  window.onclick = function(event) {
    if (!event.target.matches('.button')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

  function QuantumhostButton() {
    document.getElementById("QuantumhostButton").classList.toggle("show");
    }
    
    window.onclick = function(event) {
      if (!event.target.matches('.button')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
          }
        }
      }
    }

    function SocialneSieteButton() {
      document.getElementById("SocialneSieteButton").classList.toggle("show");
      }
      
      window.onclick = function(event) {
        if (!event.target.matches('.button')) {
          var dropdowns = document.getElementsByClassName("dropdown-content");
          var i;
          for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
              openDropdown.classList.remove('show');
            }
          }
        }
      }
