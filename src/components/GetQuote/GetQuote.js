import React from 'react';

class GetQuote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     
    }
  }

  

  onSubmitSignIn = () => {
    
          this.props.onRouteChange('ClientProfile');
        
      
  }

  render() {
    return (
      <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
       
            <div className="">
             <h1>GET A NEW QUOTE</h1>
          </div>
      </article>
    );
  }
}

export default GetQuote;