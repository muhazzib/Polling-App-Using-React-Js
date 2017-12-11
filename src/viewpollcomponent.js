import React, { Component } from 'react';
import fire from './fire'
let database = fire.database().ref("/");

class ViewPollComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            renderarray: []
        }

    }


    deletefunc = (obj) => {
        if (obj.option1vote == 0 && obj.option2vote == 0 && obj.option3vote == 0 && obj.option4vote == 0) {

            database.child('Polls').child(obj.key).remove()
        }
        else if (obj.option1vote == 0 && obj.option2vote == 0 && obj.option3vote == 0) {
            database.child('Polls').child(obj.key).remove()


        }
        else if (obj.option1vote === 0 && obj.option2vote === 0) {
            database.child('Polls').child(obj.key).remove()
        }
        else {
            database.child('Polls').child(obj.key).remove()
            console.log(obj)
        }
        console.log(obj)
    }


    editfunc = (obj) => {
        if (obj.option4) {
            if (obj.option1.option1vote == 0 && obj.option2.option2vote == 0 && obj.option3.option3vote == 0 && obj.option4.option4vote == 0) {
                let editedvalue = prompt("Enter Question")
                let option1editedvalue = prompt("Enter option 1")
                let option2editedvalue = prompt("Enter option 2")
                let option3editedvalue = prompt("Enter option 3")
                let option4editedvalue = prompt("Enter option 4")

                if (editedvalue && option1editedvalue && option2editedvalue && option3editedvalue && option4editedvalue) {
                    let question = {
                        question: editedvalue,
                        option1: {
                            option1: option1editedvalue,
                            option1vote: 0

                        },
                        option2: {
                            option2: option2editedvalue,
                            option2vote: 0
                        },
                        option3: {
                            option3: option3editedvalue,
                            option3vote: 0

                        },
                        option4: {
                            option4: option4editedvalue,
                            option4vote: 0
                        }
                    }
                    database.child('Polls').child(obj.key).update(question)
                }
                else {
                    alert("Enter proper data")
                }
            }
            else(alert("The Poll has been started, you are not allowed to edit this Poll"))
        }
        else if (obj.option3 && !obj.option4) {
            if (obj.option1.option1vote == 0 && obj.option2.option2vote == 0 && obj.option3.option3vote == 0) {
                let editedvalue = prompt("Enter Question")
                let option1editedvalue = prompt("Enter option 1")
                let option2editedvalue = prompt("Enter option 2")
                let option3editedvalue = prompt("Enter option 3")

                if (editedvalue && option1editedvalue && option2editedvalue && option3editedvalue) {
                    let question = {
                        question: editedvalue,
                        option1: {
                            option1: option1editedvalue,
                            option1vote: 0

                        },
                        option2: {
                            option2: option2editedvalue,
                            option2vote: 0
                        },
                        option3: {
                            option3: option3editedvalue,
                            option3vote: 0

                        }
                    }
                    database.child('Polls').child(obj.key).update(question)
                }
                else {
                    alert("Enter proper data")
                }
            }
            else(alert("The Poll has been started, you are not allowed to edit this Poll"))
            
        }
        else if (obj.option2 && !obj.option3 && !obj.option4) {
            if (obj.option1.option1vote == 0 && obj.option2.option2vote == 0) {
                let editedvalue = prompt("Enter Question")
                let option1editedvalue = prompt("Enter option 1")
                let option2editedvalue = prompt("Enter option 2")

                if (editedvalue && option1editedvalue && option2editedvalue) {
                    let question = {
                        question: editedvalue,
                        option1: {
                            option1: option1editedvalue,
                            option1vote: 0

                        },
                        option2: {
                            option2: option2editedvalue,
                            option2vote: 0
                        }
                    }
                    database.child('Polls').child(obj.key).update(question)
                }
                else {
                    alert("Enter proper data")
                }
            }
                        else(alert("The Poll has been started, you are not allowed to edit this Poll"))

        }
       

    }



    votefunc1 = (obj) => {

        database.child('Polls').child(obj.key).child('option1').update({ option1vote: obj.option1.option1vote + 1 })
    }


    votefunc2 = (obj) => {
        database.child('Polls').child(obj.key).child('option2').update({ option2vote: obj.option2.option2vote + 1 })
    }

    votefunc3 = (obj) => {
        database.child('Polls').child(obj.key).child('option3').update({ option3vote: obj.option3.option3vote + 1 })
    }

    votefunc4 = (obj) => {
        database.child('Polls').child(obj.key).child('option4').update({ option4vote: obj.option4.option4vote + 1 })
    }


    render() {
        setTimeout(() => {
            const localarray = []
            database.child("Polls").orderByKey().on("child_added", function (snap) {
                let obj = snap.val()
                obj.key = snap.key
                localarray.push(obj)
            })
            this.setState({ renderarray: localarray });
        }, 1)
        return (
            <div className='class="panel-Body scroll"'>

                {
                    this.state.renderarray.reverse().map((value, index) => {
                        if (value.option2 && !value.option3) {
                            return (
                                <div className="container">
                                    <div className='container'>
                                        <div className='row'>
                                            <div className='col-12' style={{ textAlign: 'right' }}>

                                                <button onClick={() => this.editfunc(value)} style={{ position: 'relative', top: '50%' }} className="btn btn-dark">Edit</button>
                                                <button onClick={() => this.deletefunc(value)} style={{ position: 'relative', top: '50%' }} className="btn btn-danger">Delete</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="container">

                                        <div className="row" style={{ backgroundColor: "white", padding: '4%' , borderBottom: "2px solid white" }}>
                                            <div className="col-12">  <h2>{value.question}</h2></div>


                                        </div>

                                        <div className="row" style={{ backgroundColor: "orange", padding: '4%' }}>
                                            <div className="col-12" style={{ textAlign: 'center' }}>  <h2>Over all result</h2></div>
                                        </div>
                                        <div className="row" style={{ backgroundColor: "orange", padding: '4%', borderBottom: "2px solid white" }}>
                                            <div className="col-12" style={{ textAlign: 'center' }}>

                                                <div className='row' style={{border:'1px solid black',margin:'1% 0%',backgroundColor:'white',padding:'1% 0%'}}>
                                                    <div className='col-6'>
                                                        <h4>{value.option2.option2}</h4>
                                                    </div>
                                                    <div className='col-6'>

                                                        <h4>{(value.option2.option2vote / (value.option1.option1vote + value.option2.option2vote) * 100).toFixed(2)
                                                        } %</h4>


                                                    </div>


                                                </div>
                                                <div className='row' style={{border:'1px solid black',margin:'1% 0%',backgroundColor:'white',padding:'1% 0%'}}>
                                                    <div className='col-6'>
                                                        <h4>{value.option1.option1}</h4>
                                                    </div>
                                                    <div className='col-6'>
                                                        <h4>{(value.option1.option1vote / (value.option1.option1vote + value.option2.option2vote) * 100).toFixed(2)
                                                        } %</h4>

                                                    </div>


                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="container">
                                        <div className='row' style={{ backgroundColor: 'red', padding: '1%', margin: '1%' }}>
                                            <div className='col-10'>

                                                <h4>{value.option2.option2}</h4>
                                            </div>
                                            <div className='col-2'>
                                                <button onClick={() => this.votefunc2(value)} className='btn btn-outline-light'>Vote</button>

                                            </div>
                                        </div>

                                        <div className='row' style={{ backgroundColor: 'red', padding: '1%', margin: '1%' }}>
                                            <div className='col-10'>
                                                <h4>{value.option1.option1}</h4>

                                            </div>
                                            <div className='col-2'>
                                                <button onClick={() => this.votefunc1(value)} className='btn btn-outline-light'>Vote</button>

                                            </div>
                                        </div>



                                    </div>




                                </div>
                            )
                        }
                        else if (value.option3 && !value.option4) {
                            return (
                                <div className="container">
                                    <div className='row'>
                                        <div className='col-12' style={{ textAlign: 'right' }}>
                                            <button onClick={() => this.editfunc(value)} style={{ position: 'relative', top: '50%' }} className="btn btn-dark">Edit</button>
                                            <button onClick={() => this.deletefunc(value)} style={{ position: 'relative', top: '50%' }} className="btn btn-danger">Delete</button>
                                        </div>
                                    </div>
                                    <div className="row" style={{ backgroundColor: "white", padding: '4%', borderBottom: "2px solid white" }}>
                                        <div className="col-12">  <h2>{value.question}</h2></div>


                                    </div>
                                    <div className="row" style={{ backgroundColor: "orange", padding: '4%' }}>
                                            <div className="col-12" style={{ textAlign: 'center' }}>  <h2>Over all result</h2></div>
                                        </div>
                                        <div className="row" style={{ backgroundColor: "orange", padding: '4%', borderBottom: "2px solid white" }}>
                                            <div className="col-12" style={{ textAlign: 'center' }}>
                                            <div className='row'  style={{border:'1px solid black',margin:'1% 0%',backgroundColor:'white',padding:'1% 0%'}}>
                                                    <div className='col-6'>
                                                        <h4>{value.option1.option1}</h4>
                                                    </div>
                                                    <div className='col-6'>
                                                        <h4>{(value.option1.option1vote / (value.option1.option1vote + value.option2.option2vote + value.option3.option3vote) * 100).toFixed(2)
                                                        } %</h4>

                                                    </div>


                                                </div>
                                                <div className='row'  style={{border:'1px solid black',margin:'1% 0%',backgroundColor:'white',padding:'1% 0%'}}>
                                                    <div className='col-6'>
                                                        <h4>{value.option2.option2}</h4>
                                                    </div>
                                                    <div className='col-6'>

                                                        <h4>
                                                            {
                                                            (value.option2.option2vote / (value.option1.option1vote + value.option2.option2vote + value.option3.option3vote) * 100).toFixed(2)
                                                        } %</h4>


                                                    </div>


                                                </div>


                                                <div className='row'  style={{border:'1px solid black',margin:'1% 0%',backgroundColor:'white',padding:'1% 0%'}}>
                                                    <div className='col-6'>
                                                        <h4>{value.option3.option3}</h4>
                                                    </div>
                                                    <div className='col-6'>
                                                        <h4>{(value.option3.option3vote / (value.option1.option1vote + value.option2.option2vote + value.option3.option3vote) * 100).toFixed(2)
                                                        } %</h4>

                                                    </div>


                                                </div>
                                               

                                            </div>
                                        </div>
                                    
                                    <div className="container">
                                        <div className="row" style={{ backgroundColor: 'red', padding: '1%', margin: '1%' }}>
                                            <div className='col-10'>
                                                <h4>{value.option1.option1}</h4>

                                            </div>
                                            <div className='col-2'>
                                                <button onClick={() => this.votefunc1(value)} className='btn btn-outline-light'>Vote</button>
                                            </div>
                                        </div>

                                        <div className="row" style={{ backgroundColor: 'red', padding: '1%', margin: '1%' }}>
                                            <div className='col-10'>
                                                <h4>{value.option2.option2}</h4>

                                            </div>
                                            <div className='col-2'>
                                                <button onClick={() => this.votefunc2(value)} className='btn btn-outline-light'>Vote</button>

                                            </div>
                                        </div>

                                        <div className="row" style={{ backgroundColor: 'red', padding: '1%', margin: '1%' }}>
                                            <div className='col-10'>
                                                <h4>{value.option3.option3}</h4>

                                            </div>
                                            <div className='col-2'>
                                                <button onClick={() => this.votefunc3(value)} className='btn btn-outline-light'>Vote</button>

                                            </div>
                                        </div>



                                    </div>
                                </div>
                            )
                        }
                        else if (value.option4) {
                            return (
                                <div className="container">
                                    <div className='row'>
                                        <div className='col-12' style={{ textAlign: 'right' }}>
                                            <button onClick={() => this.editfunc(value)} style={{ position: 'relative', top: '50%' }} className="btn btn-dark">Edit</button>
                                            <button onClick={() => this.deletefunc(value)} style={{ position: 'relative', top: '50%' }} className="btn btn-danger">Delete</button>
                                        </div>
                                    </div>
                                    <div className="row" style={{ backgroundColor: "white", padding: '4%', borderBottom: "2px solid white" }}>
                                        <div className="col-12">  <h2>{value.question}</h2></div>

                                    </div>
                                    <div className="row" style={{ backgroundColor: "orange", padding: '4%' }}>
                                            <div className="col-12" style={{ textAlign: 'center' }}>  <h2>Over all result</h2></div>
                                        </div>
                                        <div className="row" style={{ backgroundColor: "orange", padding: '4%', borderBottom: "2px solid white" }}>
                                            <div className="col-12" style={{ textAlign: 'center' }}>
                                            <div className='row'  style={{border:'1px solid black',margin:'1% 0%',backgroundColor:'white',padding:'1% 0%'}}>
                                                    <div className='col-6'>
                                                        <h4>{value.option1.option1}</h4>
                                                    </div>
                                                    <div className='col-6'>
                                                        <h4>{((value.option1.option1vote / (value.option1.option1vote + value.option2.option2vote + value.option3.option3vote+ value.option4.option4vote) * 100).toFixed(2))
                                                        
                                                        } %</h4>

                                                    </div>

                                                </div>
                                                <div className='row'  style={{border:'1px solid black',margin:'1% 0%',backgroundColor:'white',padding:'1% 0%'}}>
                                                    <div className='col-6'>
                                                        <h4>{value.option2.option2}</h4>
                                                    </div>
                                                    <div className='col-6'>

                                                        <h4>
                                                            {
                                                            (value.option2.option2vote / (value.option1.option1vote + value.option2.option2vote + value.option3.option3vote+ value.option4.option4vote) * 100).toFixed(2)
                                                        } %</h4>


                                                    </div>


                                                </div>


                                                <div className='row'  style={{border:'1px solid black',margin:'1% 0%',backgroundColor:'white',padding:'1% 0%'}}>
                                                    <div className='col-6'>
                                                        <h4>{value.option3.option3}</h4>
                            
                                                    </div>
                                                    <div className='col-6'>
                                                       
                                                        <h4>{(value.option3.option3vote / (value.option1.option1vote + value.option2.option2vote + value.option3.option3vote+ value.option4.option4vote) * 100).toFixed(2)
                                                        } %</h4>

                                                    </div>


                                                </div>

                                                <div className='row'  style={{border:'1px solid black',margin:'1% 0%',backgroundColor:'white',padding:'1% 0%'}}>
                                                    <div className='col-6'>
                                                        <h4>{value.option4.option4}</h4>
                                                    </div>
                                                    <div className='col-6'>
                                                        <h4>{(value.option4.option4vote / (value.option1.option1vote + value.option2.option2vote + value.option3.option3vote+ value.option4.option4vote) * 100).toFixed(2)
                                                        } %</h4>

                                                    </div>


                                                </div>
                                               

                                            </div>
                                            </div>
                                            
                                    
                                    <div className="container">







                                        <div className="row" style={{ backgroundColor: 'red', padding: '1%', margin: '1%' }}>
                                            <div className='col-10'>
                                                <h4>{value.option1.option1}</h4>

                                            </div>
                                            <div className='col-2'>
                                                <button onClick={() => this.votefunc1(value)} className='btn btn-outline-light'>Vote</button>
                                            </div>
                                        </div>




                                        <div className="row" style={{ backgroundColor: 'red', padding: '1%', margin: '1%' }}>
                                            <div className='col-10'>
                                                <h4>{value.option2.option2}</h4>

                                            </div>
                                            <div className='col-2'>
                                                <button onClick={() => this.votefunc2(value)} className='btn btn-outline-light'>Vote</button>

                                            </div>
                                        </div>






                                        <div className="row" style={{ backgroundColor: 'red', padding: '1%', margin: '1%' }}>
                                            <div className='col-10'>
                                                <h4>{value.option3.option3}</h4>

                                            </div>
                                            <div className='col-2'>
                                                <button onClick={() => this.votefunc3(value)} className='btn btn-outline-light'>Vote</button>

                                            </div>
                                        </div>

                                        <div className="row" style={{ backgroundColor: 'red', padding: '1%', margin: '1%' }}>
                                            <div className='col-10'>
                                                <h4>{value.option4.option4}</h4>

                                            </div>
                                            <div className='col-2'>
                                                <button onClick={() => this.votefunc4(value)} className='btn btn-outline-light'>Vote</button>

                                            </div>
                                        </div>













                                    </div>
                                </div>
                            )
                        }

                        // return (
                        //     <div className="container">
                        //         <div className='row'>
                        //             <h1>{value.question}</h1>
                        //         </div>

                        //         <div className="row">
                        //             {
                        //             this.state.renderarray.map((value,index)=>{
                        //                 if(value.option1.option1!=""){
                        //                     return(
                        //                         <h4 style={{ float: "left" }}>
                        //                         {value.option1.option1}

                        //                     </h4>
                        //                     )
                        //                 }
                        //             })
                        //             }


                        //         </div>

                        //     </div>
                        // )
                    })
                }
            </div>
        )
    }

}

export default ViewPollComponent