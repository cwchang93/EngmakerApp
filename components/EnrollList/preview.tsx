import React from 'react';
import EnrollList from './components/Module'; // functionSample為範例，請改成您的模組名稱
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
//import { CategoryName } from '../index';

storiesOf('EnrollList', module)
    .addDecorator(withKnobs)
    .add('EnrollList', () => {
        const props: any = { Title: text('Title', '請輸入預設值') };

        return (
            <React.Fragment>
                <EnrollList {...props} />
            </React.Fragment>
        );
    });
