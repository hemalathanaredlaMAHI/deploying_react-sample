import React, {Component} from 'react';
import './template.css';
import Button from "@material-ui/core/Button";
import Myprofile from './Myprofile';
// import axios from 'axios';
import FileUploader from './imageupload';
  
class Template extends Component{
  constructor(props) {
    super(props);
    this.state = {
      showForm: false, 
      showEdit: false,
      image: ''
    };
    // this.onImageChange = this.onImageChange.bind(this);
  }
  

  // onImageChange = event => {
  //   if (event.target.files && event.target.files[0]) {
  //     let img = event.target.files[0];
  //     window.imageName = img.name
  //     var path = (window.URL || window.webkitURL).createObjectURL(img);
  //     console.log('path', path);
  //     console.log(path)
  //     console.log(window.imageName)
  //     this.setState({
  //       image: URL.createObjectURL(img)
  //     });
  //   }
    
  // };

  // handleUpload = () => {
    
  //   // Create an object of formData
  //   const formData = new FormData();
  
  //   // Update the formData object
  //   formData.append(
  //     "myFile",
  //     this.state.image.name,
  //     // this.state.image.name
  //   );
  
  //   // Details of the uploaded file
  //   console.log(this.state.image);
  
  //   // Request made to the backend api
  //   // Send formData object
  //   axios.post('upload_file', formData, {
  //     headers: {
  //       'Content-Type': 'multipart/form-data'
  //     }
  // })
  // };
  
  
  // showForm = () => {
  //   return (
  //     <div> 
  //       <Myprofile/>
  //       </div>
  //     );
  // }
 render(){
  const divStyle = {
    backgroundImage: 'url(' + this.path + ')'

  };

  return (
    <div className="col-md-6">
      
      <p>Hello world</p>
    </div>
  );
// } buttonEdit = () => {
//   alert("Image Upload");
 
};

}


export default Template;