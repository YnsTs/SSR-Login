import React, { Component, Fragment } from 'react';
import {Helmet} from "react-helmet";

class Contact extends Component {	
	constructor(props) {
        super(props);
    }
    render() {
		
		return (
			
			<Fragment>
				<Helmet
					title={'Yunus Taşbaşı || Contact Page'}
					meta={[
						{ name: 'description', content: 'This is Massively, a text-heavy, article-oriented design built around a I have been wanting to try out. Enjoy it :)' },
						{ name: 'keywords', content: 'html5, css3, responsive, site template, website template Contact' }
					]}
				>	
				</Helmet>
				
				<div className="container">
				
					<div className="content">
				
						<h3>Contact Page</h3>
						
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eget libero ut libero sagittis pharetra. 
							Nullam dolor mauris, vulputate in lacus ac, convallis placerat metus. Curabitur at posuere sem, sed facilisis elit. 
							Morbi sed turpis turpis. Fusce non sem et augue egestas finibus in sed lectus. Lorem ipsum dolor sit amet, 
							consectetur adipiscing elit.
						</p>
						
					</div>
					
				</div>
				
			</Fragment>
		);
	}
}

export default Contact;