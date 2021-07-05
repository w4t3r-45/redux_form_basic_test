import React, { Component } from 'react';
import {Field , reduxForm} from 'redux-form';
 

class MainForm extends Component {
  // error builder 
  renderError({error , touched}){
    if(touched && error){
      return(
        <div>
          <div>{error}</div>
        </div>
      );
    } 
  }
  // formProps are passed from our Field to our component (it's in redyx theory)
   buildInputs = ({input , label , meta}) => {
    return (
      <>
      {/* {console.log(formProps)} */}
      {console.log(meta)}
      {/* <input onChange={formProps.input.onChange} value={formProps.input.value}/> */}
      <label>{label}</label>
      <input {...input} />
      <div>{this.renderError(meta)}</div>
      </>
    )
  }

  // prevent default form submit (to fit it with our redux-form rules (it will take care of it))
  submit_handler(formValues){
    // here we can for example dispatch and action with formValues as a payload
    console.log(formValues);
  };
  
  render() {
    return (
      <>
        <form onSubmit={this.props.handleSubmit(this.submit_handler)}>
          <Field name="name" component={this.buildInputs} label="Enter your Name"/>
          <Field name="email"  component={this.buildInputs} label="Enter your Email"/>
          <Field name="password"  component={this.buildInputs} label="Enter your Password"/>
          <button>Submit</button>
        </form>
      </>
    );
  }
}


// when we return empry object mean that no errors , ic case of errors 
// we return object called errors with field names and their error message 
// ( redux form will automatically detect it and send it to meta.error prop )

const validate = (formValues)=>{
  const errors = {};
  if(!formValues.name){
    errors.name = "You must Enter a Name"
  }
  if(!formValues.email){
    errors.email = "You must Enter a email"
  }
  if(!formValues.password){
    errors.password = "You must Enter a password"
  }
  return errors;

}

// this function currying (composition) will let redux-form to pass many props to our component
// it's an alternative to connect (this is redux-form way)
export default reduxForm({
  form: 'mainForm',
  validate: validate
})(MainForm);

