/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 ~ Copyright 2020 Adobe Systems Incorporated
 ~
 ~ Licensed under the Apache License, Version 2.0 (the "License");
 ~ you may not use this file except in compliance with the License.
 ~ You may obtain a copy of the License at
 ~
 ~     http://www.apache.org/licenses/LICENSE-2.0
 ~
 ~ Unless required by applicable law or agreed to in writing, software
 ~ distributed under the License is distributed on an "AS IS" BASIS,
 ~ WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 ~ See the License for the specific language governing permissions and
 ~ limitations under the License.
 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

 import {
    Container,
    ResponsiveGrid,
    EditableComponent
} from '@adobe/aem-react-editable-components';

const MyContainerEditConfig = {
    emptyLabel: 'Container',
    isEmpty: function(props){
      return false
    }
  }
  
  const MyContainer = (props) => 
  {

    const MyComponent = (props.layout!=="SIMPLE")?Container : ResponsiveGrid;
    console.log('hero props', props);
    const obj = {":items": {title: props.title}};
    console.log('title', obj);
    //props[":items"] = {title: props.title};
    const copy = {...props};
    copy[":items"] ={title: props.title};
    copy[":itemsOrder"] = ["title"];
    copy["allowedComponents"] = {
      "components": [],
      "applicable": false
      };
    copy["columnCount"]= 12,
  copy["columnClassNames"] = {
      "title": "aem-GridColumn aem-GridColumn--default--12"
  },
  copy[":type"] = "wknd/components/hero";
copy["gridClassNames"]= "aem-Grid aem-Grid--12 aem-Grid--default--12";
    console.log('copy', copy);
    return <MyComponent { ...copy} />;
  }

  
  export const HeroContainer = (props) => (<EditableComponent config={MyContainerEditConfig} {...props}><MyContainer customClassName='aemContainer hero'/></EditableComponent>);