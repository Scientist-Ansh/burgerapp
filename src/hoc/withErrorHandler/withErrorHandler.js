import React, {Component} from 'react';
import Modal from '../../components/ui/modal/modal'
const withErrorHandler = (WrappedComponent,axios) =>{
  return class extends Component {
    state={
      error:null,
      show :null
    }

    componentWillMount(){
    this.reqInterceptor = axios.interceptors.request.use(req =>{
        this.setState({error:null});
        return req;
      });

      this.resInterceptor = axios.interceptors.response.use(res => res,error =>{
        this.setState({error:error});
        console.log(this.state.error);
      });
    }
    componentWillUnmount(){
      axios.interceptors.request.eject(this.reqInterceptor);
      axios.interceptors.response.eject(this.resInterceptor);
    }

    render(){
      let modal = null;
      if (this.state.error){
        modal = <Modal
        close = {()=>this.setState({error:null})}>
          {this.state.error? this.state.error.message :null}
        </Modal>
      }
      return(
        <React.Fragment>
          {modal}

          <WrappedComponent {...this.props}/>
        </React.Fragment>
      );
    }
  }
}

export default withErrorHandler;
