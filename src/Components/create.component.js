import React,{Component} from 'react';

export default class Create extends Component
{

    constructor(props)
    {
        super(props)
        this.onChangePersonName =this.onChangePersonName.bind(this);
        this.onChangeBuisnessName =this.onChangeBuisnessName.bind(this);
        this.onChangeNICNumber =this.onChangeNICNumber.bind(this);
        this.onSubmit = this.onSubmit.bind(this);


        this.state = 
        {
            person_name: '',
            buisness_name : '',
            buisness_nic_Number :'',

        }
    }
    onChangePersonName(e)
    {
        this.setState({
            person_name: e.target.value


        });
    }

    onChangeBuisnessName(e)
    {
        this.setState({
            buisness_name: e.target.value


        });
    
    }

    onChangeNICNumber(e)
    {
        this.setState({
            buisness_nic_Number: e.target.value


        });
    
    }
    onSubmit(e)
    {
        e.preventDefault();
        console.log(`The values are....... ${this.state.person_name},${this.state.buisness_name},`)
        this.setState(
            {
                person_name:'',
                buisness_name:'',
                buisness_nic_Number:'',
            }
        )

    }
    





    render() {

    return (
        <div style = {{marginTop : 10}}>
            <h3>
                Add New Buisness
            </h3>

            <form onSubmit = {this.onSubmit}>
                <div className = "form-group">
                <label for="exampleInputEmail1">Add person Name</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Person Name" value = {this.state.person_name} onChange = {this.onChangePersonName}></input>
                
                </div>

                <div className = "form-group">
                <label for="exampleInputEmail1">Add Buisness Name</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Buisness Name Name" value ={this.state.buisness_name} onRateChange ={this.onChangeBuisnessName}></input>
                
                </div>


                <div className = "form-group">
                <label for="exampleInputPassword1">NIC</label>
                <input type="password" class="form-control" id="exampleInputPassword1" placeholder=" EnterNIC" value ={this.state.onChangeBuisnessName } ></input> 
                
                </div>
                <div className = "form-group form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1"></input>
                <label class="form-check-label" for="exampleCheck1">Check me out</label>
  

                </div>

                

                <button type="submit" class="btn btn-primary">Submit</button>

            </form>

        </div>
        

        
    );
    }
}