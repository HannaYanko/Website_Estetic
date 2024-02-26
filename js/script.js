const choosePhoto = document.querySelector('.photo');
choosePhoto.addEventListener('click', function(event) {
    event.preventDefault();
    const photoCard = document.querySelector('.photo__picture');
    photoCard.scrollIntoView({ behavior: 'smooth' });

});
const chooseExhibitions = document.querySelector('.exhibitions');
chooseExhibitions.addEventListener('click', function(event) {
    event.preventDefault();
    const exhibitionsCard = document.querySelector('.art_exhibitions');
    exhibitionsCard.scrollIntoView({ behavior: 'smooth' });

});
const chooseEvents = document.querySelector('.events');
chooseEvents.addEventListener('click', function(event) {
    event.preventDefault();
    const eventsCard = document.querySelector('.art_events');
    eventsCard.scrollIntoView({ behavior: 'smooth' });

});
const chooseTurism = document.querySelector('.turism');
chooseTurism.addEventListener('click', function(event) {
    event.preventDefault();
    const turismCard = document.querySelector('.art_turism');
    turismCard.scrollIntoView({ behavior: 'smooth' });

});