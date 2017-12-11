import React, { Component } from 'react';
import fire from './fire'
let database = fire.database().ref("/");
class CreatePollComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            question: undefined,
            options: 0,
            array: [],
            option1: "",
            option2: "",
            option3: "",
            option4: "",
            btn:'block'
        }
    }

    optionfunc = () => {
        const options = this.state.options;
        if (options > 4 || options < 2) {
            alert("Please Select No options less than 4 and greater than 2")
        }
        else if (options == 2) {
            console.log("start")
            let clonearray = []
            for (let i = 1; i <= 2; i++) {
                clonearray.push(i)
            }
            this.setState({ array: clonearray })
            console.log(this.state.array)
        }
        else if (options == 3) {
            console.log("start")
            let clonearray = []
            for (let i = 1; i <= 3; i++) {
                clonearray.push(i)
            }
            this.setState({ array: clonearray })
            console.log(this.state.array)
        }
        else if (options == 4) {
            console.log("start")
            let clonearray = []
            for (let i = 1; i <= 4; i++) {
                clonearray.push(i)
            }
            this.setState({ array: clonearray })
            console.log(this.state.array)
        }

    }
    finaloption = (event, index) => {
            if (index === 0) {
                this.setState({
                    option1: event.target.value
                })
            }
            else if (index === 1) {
                this.setState({
                    option2: event.target.value
                })
            }
            else if (index === 2) {
                this.setState({
                    option3: event.target.value
                })
            }
            else if (index === 3) {
                this.setState({
                    option4: event.target.value
                })
            
        }
    }


    submitpoll = () => {
        let flag=true;
        let question = {
            question: this.state.question
        }
        if(this.state.options!=0){
        if(this.state.options==2){
            if(this.state.option1 !="" && this.state.option2!="" && this.state.question!=undefined){

                question.option1={
                    option1vote: 0,
                    option1: this.state.option1
                }
                question.option2={
                    option2vote: 0,
                    option2: this.state.option2
                }
            }
            else{
                flag=false
            }
           
        }
        else if(this.state.options==3){
            if(this.state.option1 !="" && this.state.option2!="" &&this.state.option3 !="" &&this.state.question!=undefined){
                
            question.option1={
                option1vote: 0,
                option1: this.state.option1
            }
            question.option2={
                option2vote: 0,
                option2: this.state.option2
            }
            question.option3={
                option3vote: 0,
                option3: this.state.option3
            }
        }
        else{
            flag=false
        }
        }
        else if(this.state.options==4){
            if(this.state.option1 !="" && this.state.option2!="" &&this.state.option3 !="" && this.state.option4!="" && this.state.question!=undefined){
            question.option1={
                option1vote: 0,
                option1: this.state.option1
            }
            question.option2={
                option2vote: 0,
                option2: this.state.option2
            }
            question.option3={
                option3vote: 0,
                option3: this.state.option3
            }
            question.option4={
                option4vote: 0,
                option4: this.state.option4
            }
        }
        else{
            flag=false
        }
    }
}
else{
    flag=false
}

        if(flag==true){

            database.child("Polls").push(question).then(()=>{
               this.setState({
                   btn:'none'
               })
                window.location.href="/viewpoll"
            })
        }
        else{
            alert("Enter all fields")
        }
    }
    render() {
        return (
            <div className="container" style={{color:'white',marginTop:'1%'}}>
                <div className="form-group">
                    <label for="exampleInputEmail1">Enter Question</label>
                    <textarea className="form-control" id="exampleInputEmail1" rows="3" onChange={(event) => this.setState({ question: event.target.value })}></textarea>
                </div>
                <div className="form-group">
                    <label for="exampleInputEmail2">Enter Number of Input fields to create</label>
                    <input type="number" className="form-control" id="exampleInputEmail2" aria-describedby="emailHelp" placeholder="No of Input fields should be less than 4 and greater than 2" onChange={(event) => this.setState({ options: event.target.value })} />
                    <br />
                    <button type="submit" className="btn btn-primary" onClick={() => this.optionfunc()}>Create Fields</button>

                </div>

                {
                    this.state.array.map((value, i) => {
                        return (
                            <div>
                                <label>Option {value}</label>
                                <br />
                                <input name="text" className="form-control" onChange={(event) => this.finaloption(event, i)} />
                                <br />
                            </div>
                        )
                    })
                }
                <button type="submit" className="btn btn-primary" onClick={() => this.submitpoll()} style={{display:this.state.btn}}>Submit</button>
            </div>
        )
    }
}
export default CreatePollComponent