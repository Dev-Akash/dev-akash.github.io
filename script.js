var home = document.getElementById('homeSection');
var about = document.getElementById('aboutSection');
var skills = document.getElementById('skillSection');
var portfolio = document.getElementById('portfolioSection');
var blogs = document.getElementById('blogsSection');
var blogPost = document.getElementById('blogPost');

window.addEventListener('load', () => {
    var val = window.location.href.substring(window.location.href.indexOf('#')+1);
    switch(val){
        case 'home': showHome(); break;
        case 'about': showAbout(); break;
        case 'skills': showSkills(); break;
        case 'portfolio': showPortfolio(); break;
        case 'blogs': showBlogs(); break;
        default: checkHomeOrPost(); break;
    }
});
window.addEventListener('hashchange', function (event) {
    var val = event.newURL.substring(event.newURL.indexOf('#')+1);
    switch(val){
        case 'home': showHome(); break;
        case 'about': showAbout(); break;
        case 'skills': showSkills(); break;
        case 'portfolio': showPortfolio(); break;
        case 'blogs': showBlogs(); break;
        default: checkHomeOrPost(); break;
    }
});

function checkHomeOrPost(){
    var val = window.location.href;
    let index = val.indexOf('posts');
    if(index !== -1){
        showBlogPost();
    };
}

var android = [{
    name: 'UniQR',
    description: 'No description provided',
    url: 'https://play.google.com/store/apps/details?id=srivastava995.akash.bbc',
}];
var games = [{
    name: 'Slippingo',
    description: 'No description provided',
    url: 'https://play.google.com/store/apps/details?id=com.sriakash.dev.Slippingo',
},
{
    name: 'Hover Ball',
    description: 'No description provided',
    url: 'https://dev-akash.github.io/HoverBall/',
}];
var ai = [{
    name: 'Classroom Attendance Marking System',
    description: 'No description provided',
    url: null,
},
{
    name: 'Face Detection Using Supervised Machine Learning',
    description: 'No description provided',
    url: null,
},
{
    name: 'MNIST Digit Recognition',
    description: 'No description provided',
    url: null,
},
{
    name: 'Skin Cancer MNIST Recognition: HAM10000',
    description: 'No description provided',
    url: null,
},
{
    name: 'Chest X-Ray Images (Pneumonia Detection)',
    description: 'No description provided',
    url: null,
}];
var web = [{
    name: 'Tasker',
    description: 'No description provided',
    url: 'https://github.com/Dev-Akash/Tasker',
},
{
    name: 'Neon Portfolio',
    description: 'No description provided',
    url: 'https://dev-akash.github.io/NeonPortfolio',
},
{
    name: 'Jambread UI',
    description: 'No description provided',
    url: 'https://dev-akash.github.io/JamBreadUI',
}];
var robotics = [{
    name: 'Replication of the human hand motion in Real time',
    description: 'No description provided',
    url: null,
}];
var software = [{
    name: 'Bulkren',
    description: 'No description provided',
    url: 'https://pypi.org/project/Bulkren/',
},
{
    name: 'Chromatica',
    description: 'No description provided',
    url: 'https://github.com/Dev-Akash/Chromatica',
}];
function showAbout() {
    home.style.opacity = '0';
    about.style.opacity = '1';
    about.style.top = '150px';
    skills.style.opacity = '0';
    skills.style.top = '800px';
    portfolio.style.opacity = '0';
    portfolio.style.top = '800px';
    blogs.style.opacity = '0';
    blogs.style.top = '800px';
}

function showHome() {
    home.style.opacity = '1';
    about.style.top = '800px';
    about.style.opacity = '0';
    skills.style.top = '800px';
    skills.style.opacity = '0';
    portfolio.style.opacity = '0';
    portfolio.style.top = '800px';
    blogs.style.opacity = '0';
    blogs.style.top = '800px';
}

function showSkills() {
    home.style.opacity = '0';
    about.style.opacity = '0';
    about.style.top = '800px';
    portfolio.style.opacity = '0';
    portfolio.style.top = '800px';
    blogs.style.opacity = '0';
    blogs.style.top = '800px';
    skills.style.opacity = '1';
    skills.style.top = '150px';
}

function showPortfolio() {
    home.style.opacity = '0';
    about.style.opacity = '0';
    about.style.top = '800px';
    skills.style.opacity = '0';
    skills.style.top = '800px';
    blogs.style.opacity = '0';
    blogs.style.top = '800px';
    portfolio.style.opacity = '1';
    portfolio.style.top = '150px';
}

function showBlogs() {
    home.style.opacity = '0';
    about.style.opacity = '0';
    about.style.top = '800px';
    skills.style.opacity = '0';
    skills.style.top = '800px';
    portfolio.style.opacity = '0';
    portfolio.style.top = '800px';
    blogs.style.opacity = '1';
    blogs.style.top = '150px';
}

function showBlogPost(){
    blogPost.style.opacity = 1;
    blogPost.style.top = '150px'
}