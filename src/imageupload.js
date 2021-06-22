// import React from 'react';
// import ImageUploader from 'react-images-upload';
 
// class App extends React.Component {
 
//     constructor(props) {
//         super(props);
//          this.state = { pictures: [] };
//          this.onDrop = this.onDrop.bind(this);
//     }
 
//     onDrop(picture) {
//         this.setState({
//             pictures: this.state.pictures.concat(picture),
//         });
//     }
 
//     render() {
//         return (
//             <ImageUploader
//                 withIcon={true}
//                 buttonText='Choose images'
//                 onChange={this.onDrop}
//                 imgExtension={['.jpg', '.gif', '.png', '.gif']}
//                 maxFileSize={5242880}
//             />
//         );
//     }
// }
// export default App;
import React from 'react';
import styled from 'styled-components';
const Button = styled.button

const FileUploader = props => {
  const hiddenFileInput = React.useRef(null);
  
  const handleClick = event => {
    hiddenFileInput.current.click();
  };
  const handleChange = event => {
    const fileUploaded = event.target.files[0];
    props.handleFile(fileUploaded);
  };
  return (
    <>
      <Button onClick={handleClick}>
        Upload a file
      </Button>
      <input type="file"
             ref={hiddenFileInput}
             onChange={handleChange}
             style={{display:'none'}} 
      /> 
    </>
  );
};
export default FileUploader;