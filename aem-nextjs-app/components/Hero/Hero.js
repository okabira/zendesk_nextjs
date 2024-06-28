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
 import React from "react";
 import { EditableComponent, MapTo } from "@adobe/aem-react-editable-components";
 //import { Anchor, Button } from '@zendeskgarden/react-buttons';
 import { Hero, Relationframe, Base, Heading, LinkGroup, Button, Text } from '@zendesk/greenhouse';
 
 export const CustomEditConfig = {
   emptyLabel: "Custom",
 
   isEmpty: function (props) {
     return !props;
   },
 };
 
 const Custom = (props) => {
   console.log("Custome Props", props)
   if (CustomEditConfig.isEmpty(props)) {
     return null;
   }
 
   return (
    <div className="CustomComponent">
        <Base
                columnWeight="contentSide"
                contentSide={<Relationframe shape="square">
                    <img alt="flowers" src={`http://localhost:4502/${props.image.src}`}/></Relationframe>}
                    contentUnderText={<LinkGroup><Button>{props.button.text}</Button></LinkGroup>}
                hasReverseMobileColumns
                heading={<Heading variant={props.title.type}>{props.title.text}</Heading>}
                text={<Text>{props.text.text}</Text>}
            />
    </div>
   );
 };
 
 const EditableCustom = (props) => {
   return (
     <EditableComponent config={CustomEditConfig} {...props}>
       <Custom {...props} />
     </EditableComponent>
   );
 };
 
 export default MapTo("wknd/components/hero")(
   EditableCustom
 );