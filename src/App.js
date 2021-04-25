import React from "react";
import Products from "./components/Products";
import data from './data.json'


class App extends React.Component {
  constructor(){
    super()
    this.state={
      products:data.products,
      size:'',
      sort:''
    }
  }

  render(){
      return (
   <div className='grid-container'>
     <header>
       <a href='/'>React Shopping Cart</a>
     </header>
     <main>
       <data className='content'>
         <div className='main'>
         <Products products={this.state.products}/>

         </div>
         <div className='sidebar'>
           Cart Items

         </div>

       </data>
   
     </main>
     <footer>
        All right reserved
     </footer>

   </div>
  );

  }

}

export default App;
