import React, { Component } from 'react';

class Checkbox extends Component {
    constructor(props) {
        super(props);
        this.state = {
          isComplete: false
        };
      }

    handleCheckClass = (base) => {
        if (this.state.isComplete) return `${base}-on`;
        else return `${base}-off`;
    }

    toggleIsComplete = () => {
        this.setState({ isComplete: !this.state.isComplete });
    }
    
    render() {
        return (
            <div className='checkbox-container' onClick={() => this.toggleIsComplete()}>
            
            <svg
                viewBox="0 0 33.421566 33.421566"
                height="100%"
                width="100%"
                >
                <g transform="translate(-45.749777,-76.701799)">
                    <circle
                    className="circle"
                    r="14.726408"
                    cy="93.412582"
                    cx="62.46056"
                    style={{
                        opacity: 1,
                        fill: "none",
                        fillOpacity: 1,
                        strokeWidth: "3.96875",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeMiterlimit: 4,
                        strokeDasharray: "none",
                        strokeDashoffset: 0,
                        strokeOpacity: 1
                    }}
                    />
                    <path
                    className={this.handleCheckClass('check-back')}
                    d="M61.07 103.642c-.26-.055-.684-.27-.922-.467a2.589 2.589 0 0 1-.348-.366c-.162-.215-.192-.28-.892-1.87-1.785-4.054-3.6-7.813-4.831-10.002-.404-.717-.465-.859-.528-1.224a2.227 2.227 0 0 1 .697-2.014 2.225 2.225 0 0 1 1.954-.542c.657.135 1.168.514 1.538 1.142.647 1.097 2.195 4.133 3.19 6.255l.652 1.39.157.336.324-.574c3.161-5.612 7.727-12.492 11.474-16.539.541-.585 1.81-1.857 1.964-1.97 1.106-.813 2.72-.41 3.322.828.171.353.218.564.22.979.002.398-.042.608-.197.944-.142.307-.215.396-1.02 1.225a51.234 51.234 0 0 0-2.697 2.962c-3.674 4.34-8.337 11.888-11.155 17.547-.258.519-.5.986-.535 1.038-.23.328-.548.602-.884.758a2.486 2.486 0 0 1-1.483.164z"
                    style={{
                        strokeMiterlimit: 4
                    }}
                    />
                    <path
                    className={this.handleCheckClass('check')}
                    d="M61.07 103.642c-.26-.055-.684-.27-.922-.467a2.589 2.589 0 0 1-.348-.366c-.162-.215-.192-.28-.892-1.87-1.785-4.054-3.6-7.813-4.831-10.002-.404-.717-.465-.859-.528-1.224a2.227 2.227 0 0 1 .697-2.014 2.225 2.225 0 0 1 1.954-.542c.657.135 1.168.514 1.538 1.142.647 1.097 2.195 4.133 3.19 6.255l.652 1.39.157.336.324-.574c3.161-5.612 7.727-12.492 11.474-16.539.541-.585 1.81-1.857 1.964-1.97 1.106-.813 2.72-.41 3.322.828.171.353.218.564.22.979.002.398-.042.608-.197.944-.142.307-.215.396-1.02 1.225a51.234 51.234 0 0 0-2.697 2.962c-3.674 4.34-8.337 11.888-11.155 17.547-.258.519-.5.986-.535 1.038-.23.328-.548.602-.884.758a2.486 2.486 0 0 1-1.483.164z"
                    style={{
                        strokeMiterlimit: 4
                    }}
                    />
                </g>
            </svg>
            
            </div>
        );
    }
}
 
export default Checkbox;