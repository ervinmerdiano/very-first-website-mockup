const carouselImages = document.querySelectorAll('.carousel-item img');
const banner = document.querySelector('.banner');
const contentActive = document.querySelector('.content.active');

const descriptions = [
  {
    title: 'FLEZZ JUST TIMED ANOTHER RECORD IN RAINING SPRINT - 2 min(s)',
    text: 'May 22, 2024 - Flezz has once again set a new record in the Raining Sprint event on the challenging "Storm Valley" racetrack, clocking an impressive time of 1:42.35. This achievement marks Flezz\'s third record-breaking performance this season, solidifying their reputation as one of the top competitors in the sport. The event, held on the notoriously difficult Storm Valley track, saw Flezz navigate the treacherous wet conditions with unmatched precision and control. Fans and fellow racers alike were left in awe as Flezz crossed the finish line, beating the previous record by a significant margin. "The conditions were tough, its an incredible feeling to break the record again," Flezz commented.'
  },
  {
    title: 'BROXING AND HASSLEY IS BACK AT IT AGAIN - 2 mins(s)' ,
    text: 'May 10, 2024 - In a thrilling showdown, Broxing and Hassley have once again captivated fans with their incredible drifting skills in the "Twilight Canyon" event, setting the stage for an unforgettable competition. The intense rivalry between Broxing and Hassley has been a highlight of the season, with both players pushing the limits of their abilities. "Its always a rush competing against Hassley," Broxing said. "The Twilight Canyon is a tough map, but, yknow, its always the challenge and the support from the fans that make things spicy,” Broxing added.'
  
},
  {
    title: 'NEW MAP! FOLLOW THE AURORA AND BE THE FASTEST RACER - 2 mins(s)',
    text: 'May 3, 2024 - In an exciting update for Asphatl Rejends, a new map has been introduced that promises to challenge even the most skilled racers. The "Aurora Chase" map, set in the breathtaking "Northern Lights Valley," requires players to follow the mesmerizing aurora borealis to navigate the track, with no minimap available . The map, with its stunning visuals and innovative design, pushes racers to rely on their instincts and quick reactions. The aurora serves as a dynamic guide, creating an immersive experience that is both visually spectacular and intensely competitive.'
  },
  {
    title: 'NEW AND RETURNING PLAYERS CAN GET MCLAREN P1 FREE! - 1 mins(s)',
    text: 'May 1, 2024 - In an exciting move to welcome new and returning players, Asphalt Rejends is offering a free McLaren P1 for the first three days of login. This special event aims to celebrate the community and provide players with a top-tier car to enhance their racing experience. New players joining the game will receive the McLaren P1 upon their first login, giving them a powerful start. Similarly, returning players who log in after a hiatus will also be rewarded with the McLaren P1, ensuring they can jump back into the action with a competitive edge.'
  }
];

carouselImages.forEach((image, index) => {
  image.addEventListener('click', () => {
    banner.style.backgroundImage = `url(${image.src})`;
    contentActive.querySelector('h4').textContent = descriptions[index].title;
    contentActive.querySelector('p').textContent = descriptions[index].text;
  });
});