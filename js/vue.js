
var data = {
	items: [{text: 'Apples', checked: 'true'},
	        {text: 'Oranges', checked: 'false'}],
	title: 'Vue ToDo App',
	newItem: ''
};

var app = new Vue({
  el: '#app',
  data: data,
  methods: {
  	addItem() {
  		var text;
  		text = this.newItem.trim();
  		if(text) {
          this.items.push({
           text: text,
           checked: false
          });
  		this.newItem = '';
  	 }
  	}
  }
});
