document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('.dropdown-link');
    const alerts = document.querySelectorAll('.alert');
    const tabs = document.querySelectorAll('.tab');
    const dropdowns = document.querySelectorAll('.dropdown');

    tabs.forEach((tab)=>{
      
      tab.addEventListener('click',function(){
        tabs.forEach((tabItem)=>{
          tabItem.classList.remove('active');
        })
        dropdowns.forEach((dropdown)=>{
          dropdown.classList.remove('active');
        })
        tab.classList.add('active');

        const activeAttribute = tab.dataset.active;
        const activeDropdown = document.querySelector(`.dropdown[data-active=${activeAttribute}]`);
        activeDropdown.classList.add('active');
        console.log('activeAttribute',activeDropdown)
        
      })
    })

    links.forEach(function(link, index) {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        const linkAttribute = link.getAttribute('data-drop');
        alerts.forEach(function(alert) {
          if (alert.getAttribute('data-drop') === linkAttribute) {
            alert.classList.toggle('active');
          }
        });
      });
    });
  });