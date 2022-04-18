import React from 'react';

const CheckOut = () => {
    return (
        <div className='container'>

            <div className="row mt-5 mb-5">
                <h2 className='display-4 text-center '>Booking Form</h2>
                <div className="col-md-6 offset-md-3">
                    <form>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Full Name</label>
                            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required/>

                        </div>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Email address</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required/>

                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">Password</label>
                            <input type="password" class="form-control" id="exampleInputPassword1" required />
                        </div>

                        <button type="submit" class="btn btn-info w-100">Book</button>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default CheckOut;