'use strict'
var AbstractPager = require('./AbstractPager');
class AddPager extends AbstractPager{
    
   constructor(errors){
       super();
       this.errors = errors || {};     
   }
   
   _render(){   
       
       let titleError = this.errors.title || '';
       let bodyError = this.errors.body || ''; 
              
       return `
        <form>
            <div class="form-group">
                <label for="title">Title</label>                
                <input type="text" class="form-control" id="title" placeholder="title">
                <p>${titleError}</p>
            </div>
            <div class="form-group">
                <label for="body">Article</label>
                <textarea class="form-control" id="body" placeholder="Article">
                </textarea>
                <p>${bodyError}</p>
            </div>            
            <button type="submit" class="btn btn-default">Submit</button>
        </form>
       `
        
   }
};

module.exports = AddPager;