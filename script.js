const dishes = [
  { name: 'Poulet DG', category: 'Plats', price: '4 500 FCFA', description: 'Poulet tendre, plantain mûr et légumes sautés.', image: 'poulet-dg.jpg' },
  { name: 'Ndolé', category: 'Plats', price: '5 000 FCFA', description: 'Feuilles de ndolé et pâte d’arachide, avec viande.', image: 'ndole.jpg' },
  { name: 'Thieboudienne', category: 'Plats', price: '5 500 FCFA', description: 'Riz parfumé, poisson et légumes mijotés.', image: 'thieboudienne.jpg' },
  { name: 'Mafé', category: 'Plats', price: '4 500 FCFA', description: 'Viande mijotée dans une sauce onctueuse aux arachides.', image: 'mafe.jpg' },
  { name: 'Beignets au poisson', category: 'Entrées', price: '2 000 FCFA', description: 'Bouchées dorées au poisson, servies avec une sauce relevée.', image: 'pastels.jpg' },
  { name: 'Alloco', category: 'Accompagnements', price: '1 500 FCFA', description: 'Plantain mûr frit, doré à l’extérieur et tendre au cœur.', image: 'alloco.jpg' },
  { name: 'Bissap maison', category: 'Boissons', price: '1 000 FCFA', description: 'Infusion d’hibiscus servie bien fraîche.', image: 'bissap.jpg' },
  { name: 'Puff-puff', category: 'Desserts', price: '2 000 FCFA', description: 'Petites boules de pâte levée, dorées et moelleuses.', image: 'puff-puff.jpg' },
];

const grid = document.querySelector('#dish-grid');
function showDishes(category = 'Tous') {
  const visible = dishes.filter((dish) => category === 'Tous' || dish.category === category);
  grid.innerHTML = visible.map((dish) => `
    <article class="dish-card">
      <img src="images/${dish.image}" alt="${dish.name}" loading="lazy">
      <div class="dish-copy">
        <div class="dish-top"><h3>${dish.name}</h3><span class="dish-price">${dish.price}</span></div>
        <p>${dish.description}</p>
      </div>
    </article>`).join('');
}
showDishes();

document.querySelectorAll('.filter').forEach((button) => {
  button.addEventListener('click', () => {
    document.querySelector('.filter.active')?.classList.remove('active');
    button.classList.add('active');
    showDishes(button.dataset.filter);
  });
});

const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
menuToggle.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(open));
  menuToggle.setAttribute('aria-label', open ? 'Fermer le menu' : 'Ouvrir le menu');
  menuToggle.textContent = open ? '×' : '☰';
});
nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuToggle.setAttribute('aria-expanded', 'false');
  menuToggle.setAttribute('aria-label', 'Ouvrir le menu');
  menuToggle.textContent = '☰';
}));
