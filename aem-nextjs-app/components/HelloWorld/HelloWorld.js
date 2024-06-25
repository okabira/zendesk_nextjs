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
import { Hero, Relationframe, Button, Heading } from '@zendesk/greenhouse';

export const CustomEditConfig = {
  emptyLabel: "Custom",

  isEmpty: function (props) {
    return !props || !props.text || props.text.trim().length < 1;
  },
};

const Custom = (props) => {
  console.log("Custome Props", props)
  if (CustomEditConfig.isEmpty(props)) {
    return null;
  }

  return (
    <div className="CustomComponent">
      {/* <Button isNeutral>
        <Anchor href="/demo">
          {props.text}
        </Anchor>
      </Button> */}

      <Hero
            bgColor="baby_yoda_light"
            contentSide={
            <Relationframe shape="circle-quarter">
                <img alt="flowers" src="https://web-assets.zendesk.com/images/p-greenhouse/flowery.jpg"/>
            </Relationframe>}
            contentUnderText={<Button href="#">Button CTA</Button>}
            hasReverseMobileColumns
            heading={<Heading override="h2" variant="h1">Build smarter, reach farther</Heading>}
            supertitle={props.model.text}
            text="Your small and mighty team works hard. 
            Give them the gift of efficiency with Zendesk. 
            It’s powerful yet easy-to-use, and it’s designed to help your team work better together."
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

export default MapTo("wknd/components/helloworld")(
  EditableCustom
);