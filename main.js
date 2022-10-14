'use strict';

const toggleEl = document.getElementById('toggle');
const navEl = document.getElementById('nav');

toggleEl.addEventListener('click', () => navEl.classList.toggle('active'));