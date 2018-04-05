import React from 'react';
import ReactDOM from 'react-dom';
require ('../sass/main.scss');


class HeaderSection extends React.Component {
    render() {
        return (
            <section className = "headerSection">
                <div className="headerSection__inner">
                    <h1>Munchies</h1>
                    <h2>There's always something to eat.</h2>
                </div>
                {/* <section className="scrollButton">
                    <a><span></span></a>
                </section> */}
            </section>
        )
    }
}

class Site extends React.Component {
    render() {
        return (
            <div>
               <HeaderSection/>
            </div>
            
        );
    }
}

ReactDOM.render(
    <Site />,
    document.getElementById('root')
);
