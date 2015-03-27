(function(){
	document.querySelector(".toggle-btn").addEventListener("click", function(){
		if(this.classList.contains('toggle-btn--active')){
			this.classList.remove("toggle-btn--active")
		}else{
			this.classList.add("toggle-btn--active")
		}
	});
})();

