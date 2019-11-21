import React from 'react';
import EnrollList from './components/Module'; // functionSample為範例，請改成您的模組名稱
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
//import { CategoryName } from '../index';
import ProviderWrapper from '../../.storybook/provider';

storiesOf('EnrollList', module)
    .addDecorator(withKnobs)
    .add('EnrollList', () => {
        const props: any = { Title: text('Title', '請輸入預設值') };

        const store = { props };
        console.log('props', props);
        return (
            <React.Fragment>
                <ProviderWrapper store={store}>
                    <EnrollList {...props} />
                </ProviderWrapper>
            </React.Fragment>
        );
    });
