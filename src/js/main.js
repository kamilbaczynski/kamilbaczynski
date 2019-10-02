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

      projectsList.innerHTML +=`
      <article class="project-card">
        <img class="project-card__image" src="../assets/img/github42.svg" alt="#">
        <h3 class="project-card__name">${name}</h3>
        ${
          description 
          ? `<p class="project-card__description">${description}</p>` 
          : `<p class="project-card__description">No description 😫</p>`
        }
        <div class="project-card__footer">

          ${
            homepage 
            ? `<a class="project-card__footer--link project-card__footer--link-demo" href="${homepage}" target="_blank" rel="nofollow noreferrer"  title="Demo: ${name}">demo</a>` 
            : ''
          }
        
          <a class="project-card__footer--link project-card__footer--link-github" href="${html_url}" target="_blank" rel="nofollow noreferrer"  title="Source code: ${name}">github</a> 
          
      
        </div>
        
      </article>    
      `
    }
  });
