let page=document.querySelector('.page');
page.classList.add('dark-theme');

let themeButton = document.querySelector('.dark-theme');
themeButton.onclick = function()
{
	page.classList.toggle('dark-theme');
}
