import React from 'react';
// import { Alert} from 'react-alert';
import Dialog from "@material-ui/core/Dialog";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import Button from "@material-ui/core/Button";
import './template.css';
import './walkinApplication.css';
import './App.css';
  
const Walkin = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickToOpen = () => {
    setOpen(true);
};
  
const handleToClose = () => {
    setOpen(false);
};

const handleToApply = () => {
    alert(
      "Congratulations!",
      "You have successfully applied for MSIT Walk-in Exam.",
      "Your application number is: 1234567"
    );
};
  return (
    <div class="split right">
      <div><p id="tem" align="left">Admissions <b>2021</b></p></div>
        <p id="im"></p>
        <div id="main">
            <p class="top left">
                <div align="center" id="bt">
                    <p id="details">
                    <h1>Name of the user &nbsp;  &nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
                        <Button variant="outlined" id="bt1" onClick={handleClickToOpen}>Edit</Button>
                    </h1> 
                    <br/> <h3>msitprogram.net <br/> +91-9876543210</h3>
                    </p>
                    <div id="hr">
                        <p>Walk-in Details</p>
                    </div>
                    <Button  variant="outlined" id="bt2" onClick={handleClickToOpen}>Click here to Apply for Walk-in</Button>
                    <Dialog open={open} onClose={handleToClose}>
                        <DialogTitle style={{color:'#CC3314'}}>{"Apply for Walk-in"}</DialogTitle>
                        <div style={{ borderTop: "2px solid black ", marginLeft: 20, marginRight: 20 }}></div>
                        <DialogContent style={{width:'600px',height:'200px'}}>
                        <DialogContentText color="black">
                            <label>Test Center : &nbsp; &nbsp;</label>
                            <div id="rd">
                                <input type="radio" name="center"   id="center1" value="center1" class="ace" checked/>
                                <span> Online,<br/>&nbsp; &nbsp;&nbsp;&nbsp;Contact:7799834586<br/></span><br/>
                                <input type="radio" name="center"   id="center1" value="center1" class="ace"/>
                                <span>Eduquity Career Technologies, Hyderabad,<br/>&nbsp; &nbsp;&nbsp;&nbsp;Contact:7799834586<br/></span><br/>
                                <input type="radio" name="center"   id="center1" value="center1" class="ace"/>
                                <span> University College of Engineering(Autonomous), Kakinada, <br/>
                                &nbsp; &nbsp;&nbsp;&nbsp;Contact:7799834586<br/></span><br/>
                                <input type="radio" name="center"   id="center1" value="center1" class="ace"/>
                                <span> Jawaharlal Nehru Technological University, Hyderabad,<br/>
                                &nbsp; &nbsp;&nbsp;&nbsp;Contact:7799834586<br/></span>
                            </div>
                        </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                        <Button onClick={handleToClose} color="primary" autoFocus>Close</Button>
                        <Button onClick={handleToApply} color="primary" autoFocus>Apply</Button>
                        </DialogActions>
                    </Dialog>
                    <div id="pr">
                        <p>walk-in entrance test can be taken <b>only one time</b>, but you can take<b> GAT Regular one time</b></p>
                        <p>**Please Book your slot after you pay the fee. <strong>(if you pay the fee, link will be visible under Date&Slot column in the below table) </strong></p>
                    </div>
                    
                </div>
            </p> 
        </div>
      </div>
  );
};
  
  
export default Walkin;