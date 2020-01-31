import React from 'react';
import Calendar from './components/Module'; // functionSample為範例，請改成您的模組名稱
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
//import { CategoryName } from '../index';

storiesOf('Calendar', module)
    .addDecorator(withKnobs)
    .add('Calendar', () => {
        const props: any = {
            initYearMonth: text('initYearMonth', '2019-1'),
        };

        return (
            <React.Fragment>
                {/* B項目 */}
                <Calendar {...props} />
            </React.Fragment>
        );
    });
