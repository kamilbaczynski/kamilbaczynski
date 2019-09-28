"use strict";

const projectsList = document.querySelector('.projects__containter');

fetch ('https://api.github.com/users/kamilbaczynski/repos?sort=created')
  .then (response => response.json())
  .then (response => {
    const repos = response;
    for (const repo of repos) {
      // console.log(repo)
      // console.log(`${repo.name} ${repo.html_url}`);
      const {description, homepage, html_url, name} = repo;

      projectsList.innerHTML += `<article class="project-card">
      <img class="project-card__image" src="../assets/img/github42.svg" alt="#">
      <h3 class="project-card__name">${name}</h3>
      ${
        description 
        ? `<p class="project-card__description">${description}</p>` 
        : `<p class="project-card__description">No description 😫</p>`
      }
      <span class="project-card__footer">

        ${
          homepage 
          ? `<a class="project-card__footer--link project-card__footer--link-demo" href="${homepage}">demo</a>` 
          : `<p class="project-card__footer--link project-card__footer--link-disactive">demo</p>`
        }

        ${
          html_url 
          ? `<a class="project-card__footer--link project-card__footer--link-github" href="${html_url}">github</a>` 
          : `<a class="project-card__footer--link project-card__footer--link-github" href="">github</a>`
        }
        
      </article>    
      `
    }
  });
