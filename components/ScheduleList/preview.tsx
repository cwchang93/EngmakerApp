import React from "react";
import ScheduleList from "./components/Module"; // functionSample為範例，請改成您的模組名稱
import { storiesOf } from "@storybook/react";
import { withKnobs, text } from "@storybook/addon-knobs";
//import { CategoryName } from '../index';

storiesOf("ScheduleList", module)
  .addDecorator(withKnobs)
  .add("ScheduleList", () => {
    const props: any = {
      mode: "listMode"
    };

    return (
      <React.Fragment>
        {/* B項目 */}
        <ScheduleList {...props} />
      </React.Fragment>
    );
  });
