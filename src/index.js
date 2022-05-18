import React from "react";
import ReactDOM from "react-dom";
import {IntlProvider} from 'react-intl';

import JobsList from "./components/jobslist";
import localeEsMessages from "./locales/es";
import localeEnMessages from "./locales/en";

function lan(){
	return window.navigator.language;
}

ReactDOM.render(
	<IntlProvider 
		locale={lan()} 
		messages= {lan() === 'en'?localeEnMessages:localeEsMessages}>
		<JobsList theme={lan() ==='en'?"light":"dark"}/>
	</IntlProvider>, document.getElementById("root")
);