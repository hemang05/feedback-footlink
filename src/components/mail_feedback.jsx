import React from "react";
import * as emailjs from "emailjs-com";

import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

class Feedback extends React.Component{
    constructor(props){
        super(props);
        this.state={
            hj_beh:"",
            hj_tl:"",
            hj_tw:"",
            bl_beh:"",
            bl_tl:"",
            bl_tw:"",
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange = (e) =>{
        this.setState({[e.target.name]:e.target.value});
    }


    handleSubmit =(e) =>{
        e.preventDefault();
        emailjs.sendForm(
            "service_dvxyps8",
            "template_83ltkcp",
             "ContactForm",
            "user_L1nsgJ5rcDaUyYK4OPMWl"
        )
        .then()
        .catch();
        this.setState({
            hj_beh:"",
            hj_tl:"",
            hj_tw:"",
            bl_beh:"",
            bl_tl:"",
            bl_tw:"",
        })
    };

 render(){
     return(
    <div style={{backgroundSize:'cover',backgroundImage:'url("https://image.freepik.com/free-photo/interior-meeting-room-space-3d-rendering-white-background_42090-789.jpg")'}}>
    <form onSubmit={this.handleSubmit.bind(this)} id="ContactForm" >
    <Container maxWidth="sm"  component="main" >
            <Typography component="h1" variant="h4" align="center" color="textPrimary" gutterBottom>
               Technical Team Feedback Form
            </Typography>

            <br/>
            <table border='1'>
                <thead>
                    <tr>
                        <th>S.No.</th>
                        <th>Name</th>
                        <th>Behaviour</th>
                        <th>Team Leading</th>
                        <th>Work Ethics</th>
                    </tr>
                </thead>
                    <tbody>
                        <tr>
                            <td>1
                            </td>
                            <td>
                                Hemang Joshi
                            </td>
                            <td>
                                <select id="hj_beh" style={{width: '200px',height:'50px'}} name="hj_beh" value={this.state.hj_beh}
                                onChange={this.handleChange.bind(this)} >
                                    <option value='1'> 1 </option>
                                    <option value='2'> 2 </option>
                                    <option value='3'> 3 </option>
                                    <option value='4'> 4 </option>
                                    <option value='5'> 5 </option>
                                    <option value='6'> 6 </option>
                                    <option value='7'> 7 </option>
                                    <option value='8'> 8 </option>
                                    <option value='9'> 9 </option>
                                    <option value='10'> 10 </option>
                                </select>
                            </td>
                            <td>
                                <input type="text"  id="hj_tl"  name="hj_tl" placeholder='(1-10)'
                                     value={this.state.hj_tl}
                                    onChange={this.handleChange.bind(this)}>    
                               </input>
                            </td>
                            <td>
                                <input type="text"  id="hj_tw"  name="hj_tw" placeholder='(1-10)'
                                     value={this.state.hj_tw}
                                    onChange={this.handleChange.bind(this)}>    
                               </input>
                            </td>
                        </tr>


                        <tr>
                            <td>2
                            </td>
                            <td>
                                BL Anjana
                            </td>
                            <td>
                                <select id="bl_beh" style={{width: '200px',height:'50px'}} name="bl_beh" value={this.state.bl_beh}
                                onChange={this.handleChange.bind(this)} >
                                    <option value='1'> 1 </option>
                                    <option value='2'> 2 </option>
                                    <option value='3'> 3 </option>
                                    <option value='4'> 4 </option>
                                    <option value='5'> 5 </option>
                                    <option value='6'> 6 </option>
                                    <option value='7'> 7 </option>
                                    <option value='8'> 8 </option>
                                    <option value='9'> 9 </option>
                                    <option value='10'> 10 </option>
                                </select>
                            </td>
                            <td>
                                <input type="text"  id="bl_tl"  name="bl_tl" placeholder='(1-10)'
                                     value={this.state.bl_tl}
                                    onChange={this.handleChange.bind(this)}>    
                               </input>
                            </td>
                            <td>
                                <input type="text"  id="bl_tw"  name="bl_tw" placeholder='(1-10)'
                                     value={this.state.bl_tw}
                                    onChange={this.handleChange.bind(this)}>    
                               </input>
                            </td>
                        </tr>
                    </tbody>  
            </table>   
                    <center><input type="submit"></input></center>
    </Container>
    </form>
    </div>
     );
    }
}

export default Feedback;