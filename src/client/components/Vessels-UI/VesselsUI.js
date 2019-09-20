import React from 'react';

class VesselsUI extends React.Component {
    state = {
      loading:true
    }

    /*componentDidMount() {
        const url = "https://localhost:5000/api/vessels/";
        const response = async fetch(url);
        const data = await response.json();
        console.log("inside ComponentDidMount",data);
    }*/
    componentDidMount(){
        console.log("Inside component did mount");
        fetch("http://localhost:3000/api/voyages/", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicm9sZSI6InN1cGVydXNlciIsImlhdCI6MTU2OTAwODUwMSwiZXhwIjoxNTY5MDQ0NTAxfQ.LsEK8pOTjTwSn1w_AuqkUPfYGDlXJuLFd83D7tvX4Vg '
                }
            })
        .then(res => res.json())
        .then(data => console.log(data))
    }
        
    
    

    render() {
        return (
        <div>
        {
            this.state.loading ? <div>Loading....</div> : <div>Welocme to React</div>
        }
        </div>
        );
    }
}
export default VesselsUI;