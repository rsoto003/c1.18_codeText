import React from 'react';

export default ()=>{
    return(
    <div className="col-sm-12 col-md-10 mt-md-4 offset-md-2 pl-md-5" >
        <div class='text-center'>
                <h2>My account</h2>
            </div>
            <div class="dropdown-divider mt-2"></div>
            <div class="row justify-content-center justify-content-md-start mt-3">
                <div class="col-12 col-md-3" >
                    <div class="border rounded-circle profilePic mx-auto mx-md-0" ></div>
                    <p class="text-center" ><a href="#"><small>Change Picture?</small></a></p>
                </div>
                <div class="col-12 col-md-2 align-self-center" >
                    <h3 class="text-center" >John Doe</h3>
                </div>
                <div class="col-md-7 col-12 float-right">
                    <div class="col">
                        <div class="col mt-3 text-center text-md-right"><a href="#">Change Email?</a></div>
                        <div class="col mt-3 text-center text-md-right"><a href="#">Change Password?</a></div>
                        <div class="col mt-3 text-center text-md-right"><a href="#">Preferences</a></div>
                        <div class="col mt-3 text-center text-md-right"><a href="#">Additional options</a></div>
                    </div>
                </div>
            </div>
        </div>
    )
}