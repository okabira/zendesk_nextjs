/*
 * Copyright 2022 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 *
 */

import '../styles/index.scss';
import { ModelManager } from '@adobe/aem-spa-page-model-manager';
import { ThemeProvider } from '@zendeskgarden/react-theming';
import CustomModelClient from '../lib/CustomModelClient';
import '../components/import-components';
import React from "react";
import ReactDOM from 'react-dom';
import {
  greenhouse,
  greenhouse2,
} from "@zendesk/greenhouse";




const ver = 1;
const modelClient = new CustomModelClient(process.env.NEXT_PUBLIC_AEM_HOST);
ModelManager.initializeAsync({
  modelClient,
});
const primaryThemes = {
  greenhouse: [greenhouse, greenhouse2],
};
//ThemeProvider
export default function App({ Component, pageProps }) {
console.log("Pageprops", pageProps);
  return <ThemeProvider theme={primaryThemes.greenhouse[ver]}>
<Component {...pageProps} /> 
  </ThemeProvider>
  
}


// import { ModelManager, Constants } from '@adobe/aem-spa-page-model-manager';
// import { ThemeProvider } from '@zendeskgarden/react-theming';
// import {
//     greenhouse,
//     greenhouse2,
// } from "@zendesk/greenhouse";

// import App from '../components/App.js';
// import React from "react";
// import ReactDOM from 'react-dom';



// ModelManager.initialize().then((pageModel) => {
//     const rootNode = document.getElementById('react-title');
//     ReactDOM.render(
       
            
//                 <App
//                     cqChildren={pageModel[Constants.CHILDREN_PROP]}
//                     cqItems={pageModel[Constants.ITEMS_PROP]}
//                     cqItemsOrder={pageModel[Constants.ITEMS_ORDER_PROP]}
//                     cqPath={pageModel[Constants.PATH_PROP]}
//                 />
//             </React.StrictMode>
//         </ThemeProvider>,
//         rootNode
        
//     );
// });