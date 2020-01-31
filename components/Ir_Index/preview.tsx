import React from 'react';
// import IrIndex from './components/Module'; // functionSample為範例，請改成您的模組名稱
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
//import { CategoryName } from '../index';

storiesOf('IrIndex', module)
    .addDecorator(withKnobs)
    .add('IrIndex', () => {
        return (
            <React.Fragment>
                {/* <IrIndex /> */}
                <h1>123</h1>
            </React.Fragment>
        );
    });
