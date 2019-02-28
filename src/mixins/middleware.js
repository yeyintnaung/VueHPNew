//this is local mixin


import axios from 'axios';

var middleware={
    mounted(){
        axios({
            method: 'post',
            url: 'http://localhost/userHpbk/api/dashboard',
            data: {
                token: localStorage.getItem('token'),
            }, headers: {
                'Content-type': 'application/json'
            }
        }).then(function (response) {
            if(response.data.status === 'error'){
                window.location='/login';
                console.log('error')
            }else {
                self.forcheck = response.data[0];
                self.forcheck='true';
            }
            console.log(response.data.status);

        });

    }
};
export default middleware
