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
      return !props.cqItemsOrder || !props.cqItemsOrder.length ===0
    }
  }
  
  const MyContainer = (props) => 
  {
    const MyComponent = (props.layout!=="SIMPLE")?ResponsiveGrid:Container;
    return <MyComponent {...props} />;
  }

  
  export const AEMContainer = (props) => (<EditableComponent config={MyContainerEditConfig} {...props}><MyContainer customClassName='aemContainer'/></EditableComponent>);