const tabs = document.querySelectorAll('.tab');
const panels = document.querySelectorAll('.panel');

tabs.forEach((tab) => {

  tab.addEventListener('click', (e) => {
    
    e.preventDefault();

    
    tabs.forEach((tab) => tab.classList.remove('active'));
    panels.forEach((panel) => panel.classList.remove('active'));

    
    e.target.parentNode.classList.add('active');

    const targetPanelId = e.target.getAttribute('href').replace('#', '');
    const targetPanel = document.getElementById(targetPanelId);

    targetPanel.classList.add('active');
  });
});

tabs[0].click();