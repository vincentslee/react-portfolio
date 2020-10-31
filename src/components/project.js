import "./style.css";
import React from 'react';

function Project(){
    return (
        <div class="mainContent"> 
        <h1>Vincent Lee</h1>

            <div class="div1">
                <h2 class="divTitle">Contact</h2>

                <div class="div1Content">
                <p><span>Email :</span> 911vincentlee@gmail.com</p>
                <p><span>GitHub :</span> <a href="https://github.com/vincentslee">github.com/vincentslee</a></p>
                <p><span>LinkedIn :</span> <a href="https://linkedin.com/in/vincent-lee-4aabb01b0">linkedin.com/in/vincent-lee</a></p>
                <p><span>Phone :</span> (555)-555-5555</p>
                </div>
            </div>

            <div class="div2">
                <h2 class="divTitle">Projects</h2>


                <article class="div2Content">
                <h2 class="divContentTitle">Weather App</h2>
                <h3 class="divContentSubTitle"><a href="https://vincentslee.github.io/weatherapp/">[Link]</a>
                <a href="https://github.com/vincentslee/weatherapp">[GitHub] </a></h3>
                <p class="divContent">A demostration of Ajax with a weather API.</p>
                </article>

                <article class="div2Content">
                <h2 class="divContentTitle">Spotifinder</h2>
                <h3 class="divContentSubTitle"><a href="https://vincentslee.github.io/spotifinder/">[Link]</a><a href="https://github.com/vincentslee/spotifinder">[GitHub]</a></h3>
                <p class="divContent">Spotifinder is a group project which uses YouTube and Emotive APIs to present YouTube videos based on the displayed emotions of an entered phrase. (Requires API keys to use)</p>
                </article>

                <article class="div2Content">
                <h2 class="divContentTitle">Happiness Map</h2>
                <h3 class="divContentSubTitle"><a href="https://github.com/vincentslee/project2">[GitHub]</a></h3>
                <p class="divContent">This application displays a map of users' happiness based on their data.</p>
                </article>
            
            </div>

            <aside class="externalResourcesNav">
                <div class="externalResources"> <a href="https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-is-valid.md" title="Download CV Link">DOWNLOAD CV</a> </div>
                <span class="stretch"></span>
                <div class="externalResources"><a href="https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-is-valid.md" title="Behance Link">BEHANCE</a> </div>
                <span class="stretch"></span>
                <div class="externalResources"><a href="https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-is-valid.md" title="Github Link">GITHUB</a> </div>
            </aside>
        </div>

    );
}

export default Project;