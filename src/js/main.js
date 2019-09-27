"use strict";

const projectsList = document.querySelector('.projects__containter');

fetch ('https://api.github.com/users/kamilbaczynski/repos?sort=updated')
  .then (response => response.json())
  .then (response => {
    const repos = response;
    for (const repo of repos) {
      // console.log(repo)
      // console.log(`${repo.name} ${repo.html_url}`);

      projectsList.innerHTML += `<article class="project-card">
      <img class="project-card__image" src="../assets/img/github42.svg" alt="#">
      <h3 class="project-card__name">${repo.name}</h3>
      <p class="project-card__description">${repo.description}</p>
      <span class="project-card__footer">
        <a class="project-card__footer--link project-card__footer--link-demo" href="${repo.homepage}">demo</a>
        <a class="project-card__footer--link project-card__footer--link-github" href="${repo.html_url}">github</a>
      </span>
      </article>    
      `
    }
  });
  


  // <article class="project-card">
  // <img class="project-card__image" src="../assets/img/github42.svg" alt="#">
  // <h3 class="project-card__name">title</h3>
  // <p class="project-card__description">opis</p>
  // <span class="project-card__footer">
  //   <a class="project-card__footer--link project-card__footer--link-demo" href="#">demo</a>
  //   <a class="project-card__footer--link project-card__footer--link-github" href="#">github</a>
  // </span>
  // </article>