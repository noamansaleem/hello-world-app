import React from 'react';
import ReactDom from 'react-dom';
import Gate from './Gate';
import './index.css';


const MediaCard = ({ title, body, imageUrl }) => {
  return <div>
    <h2>{title}</h2>
    <p>{body}</p>
    <img src={imageUrl} />
    <Gate isOpen={false} />
  </div>
}

ReactDom.render(<MediaCard title="Basic React App Title." body="This is the body of this MediaCard component" imageUrl="https://frontendmasters.com/static-assets/learn/og-learning-path-react.jpg" />, document.getElementById('root'));



//================================================================================================================
// function Hi({name, age}) {
//   return (<div className="main-div">
//     Hello <strong>{name}</strong>
//     <br />
//     Your age is <span className="age">{age}</span>
//     <h1>Hobbies</h1>
//     <ul>
//       <li>Games</li>
//       <li>Cricket</li>
//       <li>Travelling</li>
//     </ul>
//     <h2>Foods </h2>
//     <ol>
//       <li>Chicken Biryani</li>
//       <li>Mutton Palao</li>
//       <li>Saag</li>
//     </ol>
//   </div>);
// }
// ReactDom.render(<Hi name="Fazi" age={39} />, document.getElementById('root'));
//=================================================================================================================















// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
