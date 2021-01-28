'use strict';

import mySpotify from './mySpotify.js'

let main = document.querySelector('main')
console.log(main)

let html_music = ""

mySpotify.forEach(function(item){

    console.log(item.id)

    html_music += `<div class="music">
                            <a href="${item.url}">
                                    <img src="./playlist.png" alt="play music">
                            </a>
                            <div class="info">
                                    <h2>${item.title}</h2>
                                    <h2>${item.artist}</h2>
                                    <h2>${item.publish_date}</h2>
                            </div>
                            <div class="play">
                                <audio src=${item.url} controls>
                                        Votre navigateur ne semble pas supporter ce fichier
                                </audio>
                            </div>
                    </div>`
})

main.innerHTML = html_music