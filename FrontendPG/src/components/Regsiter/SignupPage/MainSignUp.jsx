// import React from 'react';
// import { Typography } from 'antd';
// import { Link } from 'react-router-dom';
// import Lottie from 'lottie-react';
// import HeadAnim from '../../../assests/HeadAnimation.json';

// import './MainSignUp.css';

// const { Title } = Typography;

// const MainSignUp = () => {
//   return (
//     <>
//   <div className="form-main">

//     <div className="form-left">
//       <div className="anim-div">
//       <Lottie animationData={HeadAnim}/>
//     </div>
  
//   </div>

//   <div className="form-right">
//   <Title level={2}>Welcome to [Website Name]</Title>
//        <Link to="/signup/student">
//         <button className="signup-button">Sign Up as Student</button>
//       </Link>
//        <Link to="/signup/guide">
//          <button className="signup-button">Sign Up as Guide</button>
//        </Link>
  
//   </div>
// </div>
    
//     </>
    
//   );
// };

// export default MainSignUp;
import React, { useState } from 'react';
import { Typography, Input, Button, Radio } from 'antd';
import { Link } from 'react-router-dom';
import Lottie from 'lottie-react';
import HeadAnim from '../../../assests/HeadAnimation.json';

import './MainSignUp.css';

const { Title } = Typography;

const MainSignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [role, setRole] = useState('student'); // Default role is student

  const handleSignUp = () => {
    // Add your sign up logic here
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Confirm Password:', confirmPassword);
    console.log('Role:', role);
    // You can add your sign up API call or any other logic here
  };

  return (
    <>
      <div className="form-main">
        <div className="form-left">
          <div className="anim-div">
            <Lottie animationData={HeadAnim} />
          </div>
        </div>

        <div className="form-right">
          <Title level={2}>Welcome to [Website Name]</Title>
          <Input
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="signup-input"
          />
          <Input.Password
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="signup-input"
          />
          <Input.Password
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="signup-input"
          />
          <div className="role-label">Role:</div>
          <div className="role-radio-group">
            <Radio.Group onChange={(e) => setRole(e.target.value)} value={role}>
              <Radio className="radio-item" value="student">Student</Radio>
              <Radio className="radio-item" value="guide">Guide</Radio>
            </Radio.Group>
          </div>
          <Button className="signup-button" onClick={handleSignUp}>
            Sign Up
          </Button>
          <div>
            Already have an account? <Link to="/login">Login</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainSignUp;
