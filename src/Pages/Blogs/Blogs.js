import React from 'react';

const Blogs = () => {
    return (
        <div className='container'>
            <div className="row">
                <div className="col-md-8 offset-md-2">
                    <h2 className='display-5 fw-bold lh-1 mb-5 mt-5 text-info text-center'>My Blogs</h2>
                    <h2 className='display-4 text-center'>Question With Answer</h2>
                    <div className='question'>
                        <h4>Q:1 What is th difference between authorization and authentication ?</h4>
                        <p><h5>Ans:</h5>

                            <div>
                                <b>Authorization:</b>
                                <br></br>
                                1. Authorization gives the user permission to access specific resources.<br></br>
                                2. Authorization checks the person's privileges or permissions to access the resources.<br></br>
                                3. Authorization Validating the user permissions.<br></br>
                                4. Authorization is also popularly known as AuthZ.<br></br>
                                5. Authorization is usually performed after authentication.<br></br>
                                6. Authorization is a multi-user system, the administrator decides what privileges or access rights user.Example like as Passports,ID Cards.
                            </div>
                            <div className='mt-3'>
                                <b>Authentication:</b>
                                <br></br>
                                1. Authentication is a process for verifying identity.<br></br>
                                2. Authentication checks the person's identity to grant access to the system.<br></br>
                                3. Authentication the Verifying user credentials.<br></br>
                                4. Authentication also popularly known as AuthN.<br></br>
                                5. Authentication is performed at the very first step.<br></br>
                                6. Authentication the online banking applications, the identity of the person is first determined with the help of the user ID and password. example as Website LogIn,Mobile Phone LogIn
                            </div>

                        </p>
                    </div>
                    <div className='question'>
                        <h4>Q:2 Why are you using firebase? What other options do you have to implement authentication?</h4>
                        <p><h5>Ans:</h5>

                            <div>
                                Actually Firebase is a backend provided by Google for both application development,App development and web development, which is the free and requires Internet.Firebase is a general purpose very easy to use api,authentication and others and so are use the features. Very easy to use but not too rich of functionality like as authentication. Other option implement authentication is that react hooks firebase authentication.I like this authentication easy to use it.
                            </div>
                        </p>
                    </div>

                    <div className='question'>
                        <h4>Q:3 What other services does firebase provide other than authentication?</h4>
                        <p><h5>Ans:</h5>

                            <div>
                                Firebase Authentication provides web backend services with others.Easy to use this firebase authentication services.Firebase Authentication integrates tightly with other Firebase services.There are many services which Firebase provides other than authentication like as Cloud Firestore,Cloud Functions,Hosting,Cloud Storage,Google Analytics,Predictions,Cloud Messaging,Security Rules,Firestore,Cloud Functions,Emulator Suite,Realtime Database,Dynamic Links etc
                            </div>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;